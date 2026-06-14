#!/usr/bin/env python3
"""
Backend-light per "Il Cruscotto del Viaggiatore".

Fa una chiamata giornaliera a Open-Meteo per Montefiascone, calcola finestre
approssimative di golden/blue hour basate su sunrise/sunset, produce un payload
leggibile e lo:
1. invia a un webhook CMS, oppure
2. salva in SQLite, oppure
3. stampa su stdout in dry-run.

Nessuna dipendenza esterna: solo standard library.
"""

from __future__ import annotations

import argparse
import json
import sqlite3
import sys
import urllib.error
import urllib.request
from dataclasses import dataclass
from datetime import datetime, timedelta
from pathlib import Path
from typing import Any
from zoneinfo import ZoneInfo


LATITUDE = 42.53
LONGITUDE = 12.03
TIMEZONE = "Europe/Rome"
OPEN_METEO_URL = (
    "https://api.open-meteo.com/v1/forecast"
    "?latitude=42.53"
    "&longitude=12.03"
    "&timezone=Europe%2FRome"
    "&forecast_days=1"
    "&current=temperature_2m,precipitation,weather_code,wind_speed_10m,cloud_cover,is_day"
    "&daily=sunrise,sunset,weather_code,precipitation_probability_max,wind_speed_10m_max,"
    "temperature_2m_max,temperature_2m_min"
)

WEATHER_LABELS = {
    0: "cielo sereno",
    1: "quasi sereno",
    2: "parzialmente nuvoloso",
    3: "coperto",
    45: "nebbia",
    48: "brina con nebbia",
    51: "pioviggine leggera",
    53: "pioviggine moderata",
    55: "pioviggine intensa",
    61: "pioggia debole",
    63: "pioggia moderata",
    65: "pioggia intensa",
    71: "neve debole",
    73: "neve moderata",
    75: "neve intensa",
    80: "rovesci leggeri",
    81: "rovesci moderati",
    82: "rovesci forti",
    95: "temporale",
    96: "temporale con grandine",
    99: "temporale forte con grandine",
}


@dataclass
class ConditionResult:
    score: int
    level: str
    headline: str
    summary: str


def fetch_json(url: str) -> dict[str, Any]:
    request = urllib.request.Request(
        url,
        headers={
            "Accept": "application/json",
            "User-Agent": "MontefiasconeTravelerDashboard/1.0",
        },
    )

    with urllib.request.urlopen(request, timeout=20) as response:
        return json.loads(response.read().decode("utf-8"))


def clamp(value: int, low: int, high: int) -> int:
    return max(low, min(high, value))


def parse_iso(value: str) -> datetime:
    return datetime.fromisoformat(value)


def fmt_time(value: datetime) -> str:
    return value.strftime("%H:%M")


def fmt_range(start: datetime, end: datetime) -> str:
    return f"{fmt_time(start)}-{fmt_time(end)}"


def evaluate_conditions(snapshot: dict[str, Any]) -> ConditionResult:
    current = snapshot["current"]
    daily = snapshot["daily"]

    weather_code = int(current["weather_code"])
    cloud_cover = int(round(current["cloud_cover"]))
    wind_speed = int(round(current["wind_speed_10m"]))
    rain_probability = int(round(daily["precipitation_probability_max"][0]))

    score = 100

    if weather_code in {45, 48}:
        score -= 18
    if weather_code in {51, 53, 55, 61, 63, 65, 80, 81, 82}:
        score -= 38
    if weather_code in {71, 73, 75}:
        score -= 30
    if weather_code in {95, 96, 99}:
        score -= 60

    if wind_speed > 32:
        score -= 24
    elif wind_speed > 22:
        score -= 12

    if rain_probability > 65:
        score -= 20
    elif rain_probability > 35:
        score -= 10

    if 25 <= cloud_cover <= 70:
        score += 8
    if cloud_cover > 90:
        score -= 14

    score = clamp(score, 10, 100)

    if score >= 72:
        level = "good"
        headline = "Ottime condizioni"
    elif score >= 45:
        level = "warn"
        headline = "Condizioni variabili"
    else:
        level = "bad"
        headline = "Condizioni difficili"

    notes: list[str] = []

    if weather_code in {0, 1}:
        notes.append("luce pulita")
    elif 25 <= cloud_cover <= 70:
        notes.append("nuvolosita interessante")
    elif weather_code == 3 or cloud_cover > 85:
        notes.append("cielo molto chiuso")

    if wind_speed > 32:
        notes.append("vento sostenuto sulle quote alte")
    elif wind_speed > 22:
        notes.append("vento percepibile alla Rocca e sul lago")
    else:
        notes.append("vento gestibile per passeggiata e scatti")

    if rain_probability > 65:
        notes.append("alta probabilita di pioggia")
    elif rain_probability > 35:
        notes.append("possibili passaggi instabili")

    return ConditionResult(
        score=score,
        level=level,
        headline=headline,
        summary=", ".join(notes) + ".",
    )


def build_payload(snapshot: dict[str, Any]) -> dict[str, Any]:
    current = snapshot["current"]
    daily = snapshot["daily"]

    sunrise = parse_iso(daily["sunrise"][0]).astimezone(ZoneInfo(TIMEZONE))
    sunset = parse_iso(daily["sunset"][0]).astimezone(ZoneInfo(TIMEZONE))

    # Backend mode: finestre approssimate senza dipendenze esterne astronomiche.
    blue_morning_start = sunrise - timedelta(minutes=35)
    blue_morning_end = sunrise
    golden_morning_start = sunrise
    golden_morning_end = sunrise + timedelta(minutes=60)
    golden_evening_start = sunset - timedelta(minutes=60)
    golden_evening_end = sunset
    blue_evening_start = sunset
    blue_evening_end = sunset + timedelta(minutes=35)

    conditions = evaluate_conditions(snapshot)
    weather_code = int(current["weather_code"])
    weather_label = WEATHER_LABELS.get(weather_code, "condizioni miste")

    if conditions.level == "good":
        lead = f"Oggi tramonto spettacolare alle {fmt_time(sunset)} sul lago."
    elif conditions.level == "warn":
        lead = f"Oggi luce interessante ma variabile: tramonto alle {fmt_time(sunset)}."
    else:
        lead = (
            f"Oggi meglio puntare su scorci urbani e finestre brevi: "
            f"tramonto alle {fmt_time(sunset)}."
        )

    copy = (
        f"{lead} Golden hour serale {fmt_range(golden_evening_start, golden_evening_end)}, "
        f"blue hour serale {fmt_range(blue_evening_start, blue_evening_end)}. "
        f"{conditions.headline}: {conditions.summary}"
    )

    return {
        "widget": "il-cruscotto-del-viaggiatore",
        "location": {
            "name": "Montefiascone",
            "region": "Lazio",
            "country": "IT",
            "latitude": LATITUDE,
            "longitude": LONGITUDE,
            "timezone": TIMEZONE,
        },
        "date": sunrise.strftime("%Y-%m-%d"),
        "summary_text": copy,
        "solar": {
            "sunrise": fmt_time(sunrise),
            "sunset": fmt_time(sunset),
            "blue_hour_morning": fmt_range(blue_morning_start, blue_morning_end),
            "golden_hour_morning": fmt_range(golden_morning_start, golden_morning_end),
            "golden_hour_evening": fmt_range(golden_evening_start, golden_evening_end),
            "blue_hour_evening": fmt_range(blue_evening_start, blue_evening_end),
        },
        "conditions": {
            "score": conditions.score,
            "level": conditions.level,
            "headline": conditions.headline,
            "summary": conditions.summary,
        },
        "weather": {
            "label": weather_label,
            "weather_code": weather_code,
            "temperature_now_c": round(float(current["temperature_2m"])),
            "temperature_min_c": round(float(daily["temperature_2m_min"][0])),
            "temperature_max_c": round(float(daily["temperature_2m_max"][0])),
            "wind_now_kmh": round(float(current["wind_speed_10m"])),
            "wind_max_kmh": round(float(daily["wind_speed_10m_max"][0])),
            "cloud_cover_pct": round(float(current["cloud_cover"])),
            "precipitation_probability_max_pct": round(
                float(daily["precipitation_probability_max"][0])
            ),
        },
        "source": {
            "weather": "Open-Meteo Forecast API",
            "mode": "daily automation",
        },
        "updated_at": datetime.now(ZoneInfo(TIMEZONE)).isoformat(),
    }


def post_webhook(url: str, payload: dict[str, Any]) -> None:
    request = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Content-Type": "application/json",
            "User-Agent": "MontefiasconeTravelerDashboard/1.0",
        },
        method="POST",
    )

    with urllib.request.urlopen(request, timeout=20) as response:
        if response.status >= 300:
            raise RuntimeError(f"Webhook error: HTTP {response.status}")


def save_sqlite(db_path: Path, payload: dict[str, Any]) -> None:
    db_path.parent.mkdir(parents=True, exist_ok=True)

    with sqlite3.connect(db_path) as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS traveler_dashboard_updates (
                widget TEXT NOT NULL,
                date TEXT NOT NULL,
                payload_json TEXT NOT NULL,
                updated_at TEXT NOT NULL,
                PRIMARY KEY (widget, date)
            )
            """
        )
        conn.execute(
            """
            INSERT INTO traveler_dashboard_updates (widget, date, payload_json, updated_at)
            VALUES (?, ?, ?, ?)
            ON CONFLICT(widget, date) DO UPDATE SET
                payload_json = excluded.payload_json,
                updated_at = excluded.updated_at
            """,
            (
                payload["widget"],
                payload["date"],
                json.dumps(payload, ensure_ascii=False),
                payload["updated_at"],
            ),
        )
        conn.commit()


def build_arg_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Aggiorna il payload giornaliero del Cruscotto del Viaggiatore."
    )
    parser.add_argument(
        "--webhook",
        help="URL del webhook CMS a cui inviare il payload JSON.",
    )
    parser.add_argument(
        "--sqlite",
        help="Percorso di un file SQLite in cui salvare il payload giornaliero.",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Stampa il payload senza inviarlo o salvarlo.",
    )
    return parser


def main() -> int:
    parser = build_arg_parser()
    args = parser.parse_args()

    if not any([args.webhook, args.sqlite, args.dry_run]):
        parser.error("Specifica almeno una destinazione: --webhook, --sqlite oppure --dry-run")

    try:
        snapshot = fetch_json(OPEN_METEO_URL)
        payload = build_payload(snapshot)

        if args.dry_run:
            print(json.dumps(payload, ensure_ascii=False, indent=2))

        if args.webhook:
            post_webhook(args.webhook, payload)
            print(f"Webhook inviato a {args.webhook}")

        if args.sqlite:
            save_sqlite(Path(args.sqlite), payload)
            print(f"Payload salvato in {args.sqlite}")

        return 0
    except urllib.error.URLError as exc:
        print(f"Errore rete/Open-Meteo: {exc}", file=sys.stderr)
    except Exception as exc:  # noqa: BLE001
        print(f"Errore: {exc}", file=sys.stderr)

    return 1


if __name__ == "__main__":
    raise SystemExit(main())
