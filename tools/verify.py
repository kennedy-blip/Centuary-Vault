#!/usr/bin/env python3
"""Strict verification for the CenturyVault repository content."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FINAL_TITLES = [
    "DriftCheck", "QueryLens", "CertWatch", "TokenMeter", "PortGuard",
    "SchemaDiff", "RateLimitSim", "LedgerRecon", "EnvGuard", "IndexAudit",
    "QueueLag", "TraceWaterfall", "CircuitBreakerSim", "LogPulse", "ReleaseGate",
]
WIKI_FILES = [
    "Home.md",
    "Days-001-to-070-Foundations-and-Apps.md",
    "Days-071-to-085-Systems-and-Data-Foundations.md",
    "Days-086-to-100-Polyglot-Vercel-Systems.md",
    "GitHub-Wiki-Sync-Guide.md",
]
REQUIRED_FIELDS = {
    "day", "dayNumber", "title", "slug", "arc", "stack",
    "problemSolved", "keyMechanism", "wikiPage",
}


def check() -> None:
    errors: list[str] = []

    catalog_path = ROOT / "api" / "catalog.json"
    data = json.loads(catalog_path.read_text(encoding="utf-8"))
    projects = data["projects"]
    if len(projects) != 100:
        errors.append(f"catalog has {len(projects)} projects, expected 100")

    days = [item["dayNumber"] for item in projects]
    if days != list(range(1, 101)):
        errors.append("catalog days are not exactly 001..100 in order")
    for item in projects:
        missing = REQUIRED_FIELDS - set(item)
        if missing:
            errors.append(f"Day {item.get('dayNumber')} missing fields: {sorted(missing)}")
        if item["day"] != f"Day {item['dayNumber']:03d}":
            errors.append(f"Day {item['dayNumber']} has an inconsistent day label")
        if not item["stack"] or not item["problemSolved"] or not item["keyMechanism"]:
            errors.append(f"Day {item['dayNumber']} has empty content fields")

    slugs = [item["slug"] for item in projects]
    if len(set(slugs)) != 100:
        errors.append("project slugs are not unique")
    arcs = {item["arc"] for item in projects}
    if len(arcs) != 9:
        errors.append(f"expected 9 arcs, found {len(arcs)}")

    final = [item for item in projects if item["dayNumber"] >= 86]
    if [item["title"] for item in final] != FINAL_TITLES:
        errors.append("Days 086-100 titles do not match the required capstone list")

    for filename in WIKI_FILES:
        path = ROOT / "wiki" / filename
        if not path.exists() or len(path.read_text(encoding="utf-8").strip()) < 500:
            errors.append(f"wiki/{filename} is missing or too short")
    for prefix, expected_days in (("Days-001", 70), ("Days-071", 15), ("Days-086", 15)):
        filename = next(name for name in WIKI_FILES if name.startswith(prefix))
        text = (ROOT / "wiki" / filename).read_text(encoding="utf-8")
        headings = re.findall(r"^## Day \d{3}:", text, flags=re.MULTILINE)
        if len(headings) != expected_days:
            errors.append(f"wiki/{filename} has {len(headings)} day sections, expected {expected_days}")
    for item in projects:
        anchor_file = item["wikiPage"].split("/wiki/", 1)[-1].split("#", 1)[0] + ".md"
        if anchor_file not in WIKI_FILES:
            errors.append(f"Day {item['dayNumber']} wikiPage points to an unknown file")

    app_js = (ROOT / "public" / "app.js").read_text(encoding="utf-8")
    match = re.search(r"const FALLBACK_CATALOG = (\[.*?\]);\n", app_js, flags=re.DOTALL)
    if not match:
        errors.append("public/app.js has no generated FALLBACK_CATALOG")
    else:
        fallback = json.loads(match.group(1))
        if len(fallback) != 100 or [item["dayNumber"] for item in fallback] != list(range(1, 101)):
            errors.append("offline fallback catalog is incomplete")
        if fallback != projects:
            errors.append("offline fallback catalog differs from the API catalog")

    config = json.loads((ROOT / "vercel.json").read_text(encoding="utf-8"))
    if config.get("outputDirectory") != "public":
        errors.append("vercel.json outputDirectory must be public")
    if not any(rule.get("source") == "/api/(.*)" for rule in config.get("rewrites", [])):
        errors.append("vercel.json is missing the /api/(.*) rewrite")

    if errors:
        print("FAILED:")
        for error in errors:
            print(f" - {error}")
        sys.exit(1)
    print("OK: 100/100 projects, 9 arcs, 15 capstone tools, 5 Wiki files, fallback catalog and Vercel config verified")


if __name__ == "__main__":
    check()
