#!/usr/bin/env python3
"""Regenerate the API catalog, offline JS fallback and Wiki day references.

Run from anywhere:  python3 tools/sync_catalog.py

The canonical source of truth is tools/catalog_data.py. Everything else that
mentions a day is generated from it so the 100 entries can never drift apart.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from catalog_data import ARCS, PHASES, REPO_WIKI, ROWS  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
API_DIR = ROOT / "api"
PUBLIC_DIR = ROOT / "public"
WIKI_DIR = ROOT / "wiki"

WIKI_FILES = {p["id"]: p["wikiPage"] for p in PHASES}
PHASE_BY_DAY = {}
for phase in PHASES:
    for day in range(phase["start"], phase["end"] + 1):
        PHASE_BY_DAY[day] = phase
ARC_BY_ID = {arc["id"]: arc for arc in ARCS}


def slugify(value: str) -> str:
    value = value.lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-")


def build_entries() -> list[dict]:
    entries = []
    for day, title, arc_id, stacks, problem, mechanism, lesson in ROWS:
        phase = PHASE_BY_DAY.get(day)
        if phase is None:
            raise ValueError(f"Day {day} is outside every phase")
        arc = ARC_BY_ID[arc_id]
        if not (arc["start"] <= day <= arc["end"]):
            raise ValueError(f"Day {day} does not belong to arc {arc_id}")
        slug = slugify(title)
        wiki_file = WIKI_FILES[phase["id"]]
        entries.append(
            {
                "day": f"Day {day:03d}",
                "dayNumber": day,
                "title": title,
                "slug": slug,
                "arc": arc["name"],
                "arcId": arc_id,
                "phase": phase["label"],
                "phaseId": phase["id"],
                "stack": list(stacks),
                "problemSolved": problem,
                "keyMechanism": mechanism,
                "lesson": lesson,
                "wikiPage": f"{REPO_WIKI}/{wiki_file}#day-{day:03d}-{slug}",
            }
        )
    days = [entry["dayNumber"] for entry in entries]
    if days != list(range(1, 101)):
        raise ValueError("Catalog must contain exactly Day 001 through Day 100 in order")
    slugs = [entry["slug"] for entry in entries]
    if len(set(slugs)) != 100:
        raise ValueError("Every project slug must be unique")
    return entries


def write_catalog(entries: list[dict]) -> None:
    API_DIR.mkdir(parents=True, exist_ok=True)
    payload = {
        "name": "CenturyVault",
        "version": 1,
        "total": len(entries),
        "projects": entries,
    }
    (API_DIR / "catalog.json").write_text(
        json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8"
    )


def sync_app_js(entries: list[dict]) -> None:
    template_path = ROOT / "tools" / "app.template.js"
    source = template_path.read_text(encoding="utf-8")
    begin = "/* BEGIN GENERATED CATALOG */"
    end = "/* END GENERATED CATALOG */"
    if begin not in source or end not in source:
        raise ValueError("tools/app.template.js is missing the generated catalog markers")
    head, rest = source.split(begin, 1)
    _, tail = rest.split(end, 1)
    compact = json.dumps(entries, ensure_ascii=False, separators=(",", ":"))
    replacement = begin + "\nconst FALLBACK_CATALOG = " + compact + ";\n" + end
    (PUBLIC_DIR / "app.js").write_text(head + replacement + tail, encoding="utf-8")


def section(entry: dict, detailed: bool) -> str:
    lines = [
        f"## Day {entry['dayNumber']:03d}: {entry['title']}",
        "",
        f"- **Stack:** {', '.join(entry['stack'])}",
        f"- **Arc:** {entry['arc']}",
        f"- **Slug:** `{entry['slug']}`",
        "",
        f"**Problem solved.** {entry['problemSolved']}",
        "",
        f"**Key mechanism.** {entry['keyMechanism']}",
        "",
    ]
    if detailed:
        lines += [
            "### Engineering breakdown",
            "",
            f"{entry['keyMechanism']} The work runs on a deliberately small surface: "
            + ", ".join(f"`{token}`" for token in entry["stack"])
            + ", with no TypeScript and no bundler in the delivery path.",
            "",
            "### Production lesson",
            "",
            entry["lesson"],
            "",
            f"[Back to arc map]({REPO_WIKI}/Days-086-to-100-Polyglot-Vercel-Systems)",
            "",
        ]
    else:
        lines += [
            f"**Vault note.** {entry['lesson']}",
            "",
        ]
    return "\n".join(lines)


FOUNDATIONS_INTRO = """# Days 001 to 070: Foundations and Apps

This page is the structured reference for the first 70 days of the challenge. It covers
language fundamentals, data structures, Python tooling, web foundations, API
integration, data and machine-learning experiments, and applied mobile/PWA prototypes.
Each day is a compact, reviewable entry: the problem that motivated it, the mechanism
that solved it, and the durable lesson carried forward.

## Arc map

| Days | Arc | Theme |
| --- | --- | --- |
| 001-010 | Core Programming | Language fundamentals and disciplined Python |
| 011-020 | Data & Structures | Collections, algorithms and complexity in practice |
| 021-030 | Python Tooling | CLI, configuration, tests and repeatable automation |
| 031-040 | Web Foundations | Semantic HTML, CSS systems and browser APIs |
| 041-050 | APIs & Integrations | HTTP contracts, reliability and third-party integrations |
| 051-060 | Data & ML Explorations | Data cleaning, modelling and honest evaluation |
| 061-070 | Mobile & Applied Prototypes | PWAs, device APIs and real-world interaction patterns |

## Reading guide

- Start with Day 001 if you want the coding conventions that everything else assumes.
- Days 021-030 introduce the CLI, configuration and testing habits reused in every
  later backend project.
- Days 031-040 define the semantic HTML and CSS token approach used by CenturyVault.
- Days 041-050 establish HTTP and failure-handling contracts used by the API layer.
- Days 071-085 continue with governance, queues and observability in
  [Systems and Data Foundations]({wiki}/Days-071-to-085-Systems-and-Data-Foundations).

## Day-by-day reference

""".format(wiki=REPO_WIKI)

SYSTEMS_INTRO = """# Days 071 to 085: Systems and Data Foundations

The middle stretch turns the earlier application habits into infrastructure habits. These
fifteen projects cover policy checks, access mapping, audit trails, secret handling,
consent and retention, transactional outboxes, retry budgets, dead-letter handling,
priority queues, throttling, quota accounting, metrics, health probes and trace
propagation.

## Arc map

| Days | Theme |
| --- | --- |
| 071-076 | Governance, identity and retention |
| 077-080 | Queues, retries and scheduling |
| 081-082 | Throttling and quota control |
| 083-085 | Metrics, health and trace context |

## Design principles

1. **Make side effects durable.** Outbox events, quota counters and audit events are
   written to SQLite before any downstream work begins.
2. **Make retries finite.** Every retry has a budget, jitter and a dead-letter destination.
3. **Make health specific.** Liveness, readiness and business metrics answer different
   questions and are exposed separately.
4. **Make context portable.** A trace ID follows a request through logs, queues and HTTP.

These principles are carried directly into Days 086-100, documented in
[Polyglot Vercel Systems]({wiki}/Days-086-to-100-Polyglot-Vercel-Systems).

## Day-by-day reference

""".format(wiki=REPO_WIKI)

POLYGLOT_INTRO = """# Days 086 to 100: Polyglot Vercel Systems

The final fifteen days are where the archive becomes a platform. Each project solves a
real production problem with a deliberately small dependency surface: Go for concurrent
scanners, collectors and simulators; Python with the standard library and SQLite for
deterministic engines and decision logic; and zero-TypeScript Vanilla HTML/CSS/JavaScript
for the reporting layer. Everything ships from one Vercel project as Python serverless
functions plus static files.

## Capstone map

| Day | Project | Production problem |
| --- | --- | --- |
| 086 | DriftCheck | Configuration drift between environments |
| 087 | QueryLens | Slow SQLite queries chosen by guesswork |
| 088 | CertWatch | Expired TLS certificates |
| 089 | TokenMeter | Token expiry and claim misuse |
| 090 | PortGuard | Port collisions in local development |
| 091 | SchemaDiff | Migration and schema divergence |
| 092 | RateLimitSim | Burst behaviour of throttle policies |
| 093 | LedgerRecon | Mismatched financial ledgers |
| 094 | EnvGuard | Secrets leaking into built assets |
| 095 | IndexAudit | Costly, unused indexes |
| 096 | QueueLag | Invisible per-job backlog age |
| 097 | TraceWaterfall | Unknown latency critical paths |
| 098 | CircuitBreakerSim | Cascading dependency failures |
| 099 | LogPulse | Late detection of log spikes |
| 100 | ReleaseGate | Fragmented, subjective release decisions |

## Architecture pattern

Every capstone tool follows the same shape:

1. **Go edge worker.** Bounded goroutines, explicit timeouts and channels turn a slow
   sequential check into a fast, predictable scan. Semaphores and worker pools keep
   concurrency bounded rather than unbounded.
2. **Python/SQLite engine.** Standard-library `http.server` handlers, `json`, `math`
   and `re` parse results, compute decisions and persist state in SQLite with
   transactional writes. No ORM and no framework is required.
3. **Zero-TypeScript reporting.** Semantic HTML, CSS variables and Vanilla ES6+
   `fetch('/api/...')` render the result. The dashboard degrades to a local fallback
   catalog when the API is unavailable.
4. **One Vercel unit.** `/api/*.py` functions and `public/` static assets deploy
   together; Tailwind is loaded from a CDN and there is no bundler step.

## Cross-cutting lessons

- Bounded concurrency beats unbounded parallelism: every worker pool has a limit.
- SQLite is a production-grade decision log when writes are transactional and schemas
  are versioned (see Day 091 SchemaDiff).
- Deterministic output makes audit and replay possible, which is what turns a script
  into a tool.
- A zero-TypeScript frontend is not a limitation here; it is how the preview stays
  instant to load and trivial to deploy.

## Day-by-day engineering reference

""".format(wiki=REPO_WIKI)


def write_day_docs(entries: list[dict]) -> None:
    WIKI_DIR.mkdir(parents=True, exist_ok=True)
    groups = [
        (
            "Days-001-to-070-Foundations-and-Apps.md",
            FOUNDATIONS_INTRO,
            [e for e in entries if e["dayNumber"] <= 70],
            False,
        ),
        (
            "Days-071-to-085-Systems-and-Data-Foundations.md",
            SYSTEMS_INTRO,
            [e for e in entries if 71 <= e["dayNumber"] <= 85],
            False,
        ),
        (
            "Days-086-to-100-Polyglot-Vercel-Systems.md",
            POLYGLOT_INTRO,
            [e for e in entries if e["dayNumber"] >= 86],
            True,
        ),
    ]
    for filename, intro, items, detailed in groups:
        body = intro + "\n".join(section(entry, detailed) for entry in items)
        body += (
            "\n---\n\n"
            f"*Part of [CenturyVault]({REPO_WIKI}/Home) — 100 projects, "
            "one archive, zero TypeScript.*\n"
        )
        (WIKI_DIR / filename).write_text(body, encoding="utf-8")


def main() -> None:
    entries = build_entries()
    write_catalog(entries)
    sync_app_js(entries)
    write_day_docs(entries)
    print(f"Synced {len(entries)} projects into api/catalog.json, public/app.js and wiki/")


if __name__ == "__main__":
    main()
