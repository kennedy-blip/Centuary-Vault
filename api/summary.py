"""GET /api/summary — aggregate statistics for all 100 CenturyVault projects.

Python 3.12 Vercel serverless function. Standard library only.
"""

from __future__ import annotations

import json
import math
import os
import re
from collections import Counter
from http.server import BaseHTTPRequestHandler
from pathlib import Path

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

PHASE_META = (
    ("foundations", "Foundations & Apps", "Days 001-070", 1, 70),
    ("systems", "Systems & Data Foundations", "Days 071-085", 71, 85),
    ("polyglot", "Polyglot Vercel Systems", "Days 086-100", 86, 100),
)

RUNTIME_GROUPS = (
    ("Python", ("python",)),
    ("Go", ("go", "golang")),
    ("SQLite", ("sqlite", "sql")),
    ("Web / Vanilla JS", ("vanilla js", "html/css", "css variables", "canvas", "pwa", "tailwind", "browser apis")),
    ("Data / ML", ("pandas", "numpy", "matplotlib", "scikit-learn", "data", "evaluation", "visualisation", "nlp", "time series", "jupyter")),
)


def _percent(count: int, total: int) -> int:
    return math.ceil((count / total) * 100) if total else 0


def _slug(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def get_summary() -> dict:
    total = len(PROJECTS)
    by_day = {int(item["dayNumber"]): item for item in PROJECTS}

    phases = []
    for phase_id, label, day_range, start, end in PHASE_META:
        count = sum(1 for day in range(start, end + 1) if day in by_day)
        phases.append(
            {
                "id": phase_id,
                "label": label,
                "range": day_range,
                "count": count,
                "percentage": _percent(count, total),
            }
        )

    arc_counter = Counter(item.get("arc", "Unassigned") for item in PROJECTS)
    arcs = []
    for arc_name, count in sorted(arc_counter.items(), key=lambda pair: -pair[1]):
        days = [int(item["dayNumber"]) for item in PROJECTS if item.get("arc") == arc_name]
        arcs.append(
            {
                "arc": arc_name,
                "slug": _slug(arc_name),
                "count": count,
                "percentage": _percent(count, total),
                "startDay": f"Day {min(days):03d}",
                "endDay": f"Day {max(days):03d}",
            }
        )

    stack_counter: Counter[str] = Counter()
    for item in PROJECTS:
        for token in item.get("stack", []):
            stack_counter[str(token)] += 1
    stack_distribution = [
        {
            "stack": name,
            "slug": _slug(name),
            "count": count,
            "percentage": _percent(count, total),
        }
        for name, count in sorted(stack_counter.items(), key=lambda pair: (-pair[1], pair[0].lower()))
    ]

    language_mix = []
    for label, aliases in RUNTIME_GROUPS:
        aliases_norm = tuple(_normalise(alias) for alias in aliases)
        count = sum(
            1
            for item in PROJECTS
            if any(
                alias in _normalise(token)
                for token in item.get("stack", [])
                for alias in aliases_norm
            )
        )
        language_mix.append(
            {"label": label, "count": count, "percentage": _percent(count, total)}
        )

    capstone = [by_day[day] for day in range(86, 101) if day in by_day]
    return {
        "ok": True,
        "source": "centuryvault-python-api",
        "totalProjects": total,
        "dayRange": {
            "start": by_day[min(by_day)]["day"] if by_day else None,
            "end": by_day[max(by_day)]["day"] if by_day else None,
        },
        "phases": phases,
        "arcs": arcs,
        "stackDistribution": stack_distribution,
        "languageMix": language_mix,
        "architecture": {
            "runtime": "Python 3.12 serverless functions + static HTML/CSS/JS",
            "typeScriptFiles": 0,
            "buildStep": "none",
            "backend": "http.server.BaseHTTPRequestHandler with json, math and re only",
            "frontend": "Vanilla ES6+ fetch('/api/...') with a 100-entry offline fallback",
            "deployment": "one Vercel project: /api/*.py functions and public/ static output",
            "notes": [
                "No TypeScript, no Node bundler and no runtime package dependencies.",
                "SQLite is used as a durable decision log in the systems and polyglot arcs.",
                "Go supplies bounded concurrency for scanners, collectors and simulators.",
                "The static frontend keeps working from its fallback catalog if the API is offline.",
            ],
        },
        "capstone": {
            "range": "Days 086-100",
            "count": len(capstone),
            "projects": [
                {
                    "day": item["day"],
                    "title": item["title"],
                    "slug": item["slug"],
                    "wikiPage": item["wikiPage"],
                }
                for item in capstone
            ],
            "highlights": [
                {
                    "day": item["day"],
                    "title": item["title"],
                    "reason": item["lesson"],
                    "wikiPage": item["wikiPage"],
                }
                for item in capstone[-5:]
            ],
        },
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

    def do_GET(self) -> None:  # noqa: N802
        _send(self, 200, get_summary())

    def do_OPTIONS(self) -> None:  # noqa: N802
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def log_message(self, fmt: str, *args) -> None:
        return
