#!/usr/bin/env python3
"""Dependency-free local preview server for CenturyVault.

Serves public/ statically and mounts the real Python API functions at
/api/projects and /api/summary, mirroring the Vercel rewrites.

    python3 tools/dev_server.py [port]
"""

from __future__ import annotations

import json
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
API_DIR = ROOT / "api"
sys.path.insert(0, str(API_DIR))

import projects as projects_api  # noqa: E402
import summary as summary_api  # noqa: E402


class DevHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs) -> None:
        super().__init__(*args, directory=str(PUBLIC), **kwargs)

    def do_GET(self) -> None:  # noqa: N802
        parsed = urlparse(self.path)
        if parsed.path == "/api/projects":
            self._json(projects_api.get_projects(parse_qs(parsed.query)))
        elif parsed.path == "/api/summary":
            self._json(summary_api.get_summary())
        elif parsed.path.startswith("/api/"):
            self._json({"ok": False, "error": "Unknown endpoint"}, status=404)
        else:
            super().do_GET()

    def do_OPTIONS(self) -> None:  # noqa: N802
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
        self.end_headers()

    def _json(self, payload: dict, status: int = 200) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, fmt: str, *args) -> None:
        sys.stderr.write("%s - %s\n" % (self.address_string(), fmt % args))


def main() -> None:
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    server = ThreadingHTTPServer(("0.0.0.0", port), DevHandler)
    print(f"CenturyVault preview on http://0.0.0.0:{port}", flush=True)
    server.serve_forever()


if __name__ == "__main__":
    main()
