# CenturyVault

A 100-project archive preview and GitHub Wiki documentation hub, shipped as **one Vercel project**: a zero-TypeScript Vanilla frontend, Python 3.12 serverless functions, and Wiki-ready Markdown.

Live catalog: all `Day 001` → `Day 100` entries in a compact, searchable grid.
Deep architecture notes: five structured Markdown files in [`wiki/`](wiki/), ready to publish to the repository's GitHub Wiki.

## Architecture

```
CenturyVault/
├── api/
│   ├── catalog.json          # canonical 100-project dataset (generated)
│   ├── projects.py           # GET /api/projects?arc=...&q=...
│   └── summary.py            # GET /api/summary
├── public/
│   ├── index.html            # semantic HTML5 + Tailwind CDN + Google Fonts
│   ├── styles.css            # dark glassmorphic theme, badges, responsive grid
│   └── app.js                # Vanilla ES6+ app with offline fallback catalog
├── tools/
│   ├── catalog_data.py       # single source of truth for all 100 projects
│   ├── app.template.js       # frontend template with generated-catalog markers
│   └── sync_catalog.py       # regenerates JSON, JS fallback and Wiki day docs
├── wiki/
│   ├── Home.md
│   ├── Days-001-to-070-Foundations-and-Apps.md
│   ├── Days-071-to-085-Systems-and-Data-Foundations.md
│   ├── Days-086-to-100-Polyglot-Vercel-Systems.md
│   └── GitHub-Wiki-Sync-Guide.md
├── requirements.txt          # standard library only — no dependencies
├── vercel.json               # static output + Python functions + rewrites
└── README.md
```

### Frontend

- `public/index.html` loads Tailwind CSS from `https://cdn.tailwindcss.com`, JetBrains Mono and Inter from Google Fonts, plus local `styles.css` and `app.js`.
- `public/styles.css` owns the visual system: deep obsidian `#070a12`, slate glass panels `#0f172a`, `#1e293b` borders, cyan/emerald/violet/amber/rose accents.
- `public/app.js` uses `fetch('/api/...')` with `AbortController` timeouts. If the API is unreachable (for example, when `index.html` is opened from disk), it switches to a complete, embedded `Day 001`–`Day 100` fallback catalog and recomputes all summary statistics locally.
- Interactions: arc pills, stack pills, debounced live search, phase cards, project detail drawer, Wiki Markdown previews, and copyable `git clone <repo>.wiki.git` commands.
- No TypeScript, no bundler, no npm install, no build step.

### Backend

Both endpoints are standard-library Python 3.12 serverless functions built on `http.server.BaseHTTPRequestHandler`:

| Endpoint | Description |
| --- | --- |
| `GET /api/projects` | All 100 entries with `day`, `dayNumber`, `title`, `slug`, `arc`, `stack`, `problemSolved`, `keyMechanism`, `wikiPage`, plus arc totals and `groupedByArc`. Optional `?arc=` and `?q=` filtering. |
| `GET /api/summary` | Totals, phase and arc counts, stack distribution, language mix, architecture notes, and Days 086–100 capstone highlights. |

`vercel.json` serves `public/` as the static output directory and rewrites `/api/(.*)` to `/api/$1.py`. Functions declare `@vercel/python`, and `api/catalog.json` is explicitly included in the function bundles.

### Content pipeline

`tools/catalog_data.py` is the only place where project data is authored. Run:

```bash
python3 tools/sync_catalog.py
```

It regenerates:

1. `api/catalog.json` — the API dataset (100 entries, no truncation),
2. the embedded `FALLBACK_CATALOG` block inside `public/app.js`,
3. the day-by-day sections of the three Wiki reference files.

The generator asserts that days 1–100 are present exactly once and that every slug is unique.

## Local preview

```bash
python3 tools/dev_server.py            # http://localhost:8000
# or, for static-only offline mode:
python3 -m http.server 8000 --directory public
```

In offline static mode the browser uses the embedded catalog and shows the `OFFLINE FALLBACK` badge.

## Verify

```bash
python3 -m py_compile api/*.py tools/*.py
python3 -m json.tool vercel.json > /dev/null
python3 tools/verify.py
```

`tools/verify.py` checks all 100 days, required fields, Wiki files, arc totals and the frontend fallback catalog.

## Deploy on Vercel

1. Import `kennedy-blip/Centuary-Vault` into Vercel (Framework preset: **Other**).
2. Keep the root directory as the repository root — `vercel.json` already sets `outputDirectory` to `public` and discovers `/api/*.py`.
3. Deploy. No environment variables, packages or build commands are needed.

## Publish the documentation

The `wiki/` directory is a staging area, not the Wiki itself. Follow [`wiki/GitHub-Wiki-Sync-Guide.md`](wiki/GitHub-Wiki-Sync-Guide.md) after creating the first Wiki page in GitHub, then:

```bash
git clone https://github.com/kennedy-blip/Centuary-Vault.wiki.git
cp wiki/*.md Centuary-Vault.wiki/
cd Centuary-Vault.wiki && git add . && git commit -m "docs: sync CenturyVault wiki" && git push
```

## The 100 days

- **Days 001–070 — Foundations & Apps:** core Python, data structures, tooling, web foundations, APIs, data/ML and applied prototypes.
- **Days 071–085 — Systems & Data Foundations:** governance, queuing, retries, quotas and observability.
- **Days 086–100 — Polyglot Vercel Systems:** `DriftCheck`, `QueryLens`, `CertWatch`, `TokenMeter`, `PortGuard`, `SchemaDiff`, `RateLimitSim`, `LedgerRecon`, `EnvGuard`, `IndexAudit`, `QueueLag`, `TraceWaterfall`, `CircuitBreakerSim`, `LogPulse`, `ReleaseGate` — Go concurrency, Python/SQLite engines and zero-TypeScript Vanilla frontends solving real production problems.
