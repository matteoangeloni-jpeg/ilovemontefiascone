#!/usr/bin/env python3
"""
Custom development web server for ilovemontefiascone.com.
Serves static files and provides an anonymous SQLite backend for the quiz.
Only uses standard library modules.
"""

import http.server
import socketserver
import json
import sqlite3
import sys
from pathlib import Path
from datetime import datetime

PORT = 8000
DB_PATH = Path("data/quiz_responses.db")

def init_db():
    """Initializes the SQLite database and creates the schema if it doesn't exist."""
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS quiz_responses (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                profile TEXT NOT NULL,
                answers_json TEXT NOT NULL,
                submitted_at TEXT NOT NULL
            )
        """)
        conn.commit()
    print(f"[*] Database initialized at {DB_PATH.resolve()}")

class QuizWebServerHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        """Intercepts POST requests to /api/quiz-response."""
        if self.path == "/api/quiz-response":
            content_length = int(self.headers.get("Content-Length", 0))
            post_data = self.rfile.read(content_length)
            
            try:
                data = json.loads(post_data.decode("utf-8"))
                profile = data.get("profile")
                answers = data.get("answers")
                submitted_at = data.get("submittedAt") or datetime.utcnow().isoformat()

                if not profile or answers is None:
                    self.send_response(400)
                    self.send_header("Content-Type", "application/json")
                    self.send_header("Access-Control-Allow-Origin", "*")
                    self.end_headers()
                    self.wfile.write(json.dumps({"error": "Missing profile or answers"}).encode("utf-8"))
                    return

                # Convert answers to JSON string for DB storage
                answers_json = json.dumps(answers, ensure_ascii=False)

                # Write to SQLite
                with sqlite3.connect(DB_PATH) as conn:
                    conn.execute(
                        "INSERT INTO quiz_responses (profile, answers_json, submitted_at) VALUES (?, ?, ?)",
                        (profile, answers_json, submitted_at)
                    )
                    conn.commit()

                print(f"[SUCCESS] Registered anonymous response for profile: '{profile}' at {submitted_at}")

                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({"status": "success", "message": "Response registered successfully"}).encode("utf-8"))

            except Exception as e:
                print(f"[ERROR] Failed to save response: {e}", file=sys.stderr)
                self.send_response(500)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))
        else:
            self.send_response(404)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"error": "Not Found"}).encode("utf-8"))

    def do_OPTIONS(self):
        """Allows CORS preflight requests for API testing."""
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

def main():
    # Make sure we run in the directory of this script so we serve correct files
    script_dir = Path(__file__).parent.resolve()
    import os
    os.chdir(script_dir)

    init_db()

    # Allow port re-use to prevent "Address already in use" errors during quick restarts
    socketserver.TCPServer.allow_reuse_address = True
    
    with socketserver.TCPServer(("", PORT), QuizWebServerHandler) as httpd:
        print(f"[*] Server running at http://localhost:{PORT}/")
        print("[*] Press Ctrl+C to stop")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n[*] Server stopping...")

if __name__ == "__main__":
    main()
