"""GET /api/projects — the complete CenturyVault catalog with optional filters.

Python 3.12 Vercel serverless function. Standard library only.
Query parameters: ?arc=<arc name or id>&q=<free text search>
"""

from __future__ import annotations

import json
import math
import os
import re
from http.server import BaseHTTPRequestHandler
from pathlib import Path
from urllib.parse import parse_qs, urlparse

_HERE = Path(os.path.dirname(os.path.abspath(__file__)))
_CANDIDATES = (
    _HERE / "catalog.json",
    _HERE.parent / "catalog.json",
    _HERE.parent / "api" / "catalog.json",
)


def _load_catalog() -> list[dict]:
    for candidate in _CANDIDATES:
        try:
            with candidate.open("r", encoding="utf-8") as handle:
                payload = json.load(handle)
            return payload.get("projects", [])
        except (OSError, ValueError):
            continue
    return []


PROJECTS = _load_catalog()


def _normalise(text: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"[^a-z0-9]+", " ", str(text).lower())).strip()


def _tokens(text: str) -> list[str]:
    return [token for token in _normalise(text).split() if len(token) > 1]


def get_projects(params: dict[str, list[str]]) -> dict:
    """Filter the catalog without mutating the shared in-memory dataset."""
    arc_filter = _normalise(params.get("arc", [""])[0]) if params.get("arc") else ""
    query = _normalise(params.get("q", [""])[0]) if params.get("q") else ""
    query_tokens = _tokens(query)

    matches = []
    for project in PROJECTS:
        if arc_filter:
            haystack = _normalise(
                " ".join(
                    (
                        str(project.get("arc", "")),
                        str(project.get("arcId", "")),
                        str(project.get("phase", "")),
                    )
                )
            )
            if arc_filter not in haystack and arc_filter not in _normalise(project.get("phaseId", "")):
                continue
        if query_tokens:
            haystack = _normalise(
                " ".join(
                    (
                        str(project.get("day", "")),
                        str(project.get("title", "")),
                        str(project.get("slug", "")),
                        str(project.get("problemSolved", "")),
                        str(project.get("keyMechanism", "")),
                        " ".join(project.get("stack", [])),
                    )
                )
            )
            if not all(token in haystack for token in query_tokens):
                continue
        matches.append(project)

    matches.sort(key=lambda item: int(item.get("dayNumber", 0)))
    arc_counts: dict[str, int] = {}
    for project in matches:
        arc_counts[project["arc"]] = arc_counts.get(project["arc"], 0) + 1

    grouped: dict[str, list[str]] = {}
    for project in matches:
        grouped.setdefault(project["arc"], []).append(project["day"])

    total = len(PROJECTS)
    return {
        "ok": True,
        "source": "centuryvault-python-api",
        "total": total,
        "count": len(matches),
        "coveragePercent": math.ceil((len(matches) / total) * 100) if total else 0,
        "filters": {"arc": arc_filter or None, "q": query or None},
        "arcs": [
            {"arc": name, "count": count}
            for name, count in sorted(arc_counts.items(), key=lambda pair: (-pair[1], pair[0]))
        ],
        "groupedByArc": [
            {"arc": name, "count": len(days), "days": days}
            for name, days in sorted(grouped.items(), key=lambda pair: (-len(pair[1]), pair[0]))
        ],
        "projects": matches,
    }


def _send(handler: BaseHTTPRequestHandler, status: int, payload: dict) -> None:
    body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json; charset=utf-8")
    handler.send_header("Content-Length", str(len(body)))
    handler.send_header("Access-Control-Allow-Origin", "*")
    handler.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
    handler.send_header("Access-Control-Allow-Headers", "Content-Type")
    handler.end_headers()
    handler.wfile.write(body)


class handler(BaseHTTPRequestHandler):
    """Vercel entry point: the function export must be named `handler`."""

    def do_GET(self) -> None:  # noqa: N802 (BaseHTTPRequestHandler API)
        parsed = urlparse(self.path)
        params = parse_qs(parsed.query)
        _send(self, 200, get_projects(params))

    def do_OPTIONS(self) -> None:  # noqa: N802
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def log_message(self, fmt: str, *args) -> None:
        return
