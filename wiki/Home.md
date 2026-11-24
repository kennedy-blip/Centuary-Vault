# CenturyVault: 100 Projects, One Archive

CenturyVault is the public archive of a 100-project engineering challenge. Each day turns a recurring
development problem into a small, complete, reviewable system. The live site at the repository root is
a deliberately light index — the deep architecture breakdowns and publishing instructions live here
in the GitHub Wiki.

- **Repository:** https://github.com/kennedy-blip/Centuary-Vault
- **Preview:** 100 compact cards, arc/stack filters, live search and a documentation drawer
- **Backend:** Python 3.12 serverless functions using only the standard library
- **Frontend:** semantic HTML, CSS and Vanilla ES6+ JavaScript — zero TypeScript, zero bundler
- **Deployment:** one Vercel project, static `public/` output plus `/api/*.py` functions

## Architecture philosophy

1. **Small surfaces first.** `http.server.BaseHTTPRequestHandler`, `json`, `math`, `re` and SQLite solve
   most of what a small platform needs. Third-party dependencies are a cost, not a default.
2. **Bounded concurrency.** Go goroutines, worker pools and channels are used where parallel scanning
   or simulation helps — always with explicit limits and timeouts.
3. **Deterministic engines.** Versioned schemas, replayable decisions, hash-chained events, idempotent
   writes and stable ordering make output auditable.
4. **Documentation as an artifact.** Every project has a problem statement, a mechanism and a durable
   lesson. The Wiki is versioned Markdown, written alongside the code.
5. **The frontend should stay boring.** Tailwind from a CDN, CSS variables, Vanilla `fetch('/api/...')`
   and a complete offline fallback catalog. It loads instantly and cannot fail to compile.

## Arc map

| Phase | Days | Focus | Deep dive |
| --- | --- | --- | --- |
| Foundations & Apps | 001-070 | Language fundamentals, data structures, Python tooling, web, APIs, ML, applied prototypes | [Days 001-070](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps) |
| Systems & Data Foundations | 071-085 | Governance, access, retention, outboxes, retries, quotas, metrics, health, trace context | [Days 071-085](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-071-to-085-Systems-and-Data-Foundations) |
| Polyglot Vercel Systems | 086-100 | Go concurrency, Python/SQLite engines, zero-TypeScript reporting, one Vercel unit | [Days 086-100](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems) |

### Nine arcs

| Days | Arc | Theme |
| --- | --- | --- |
| 001-010 | Core Programming | Language fundamentals and disciplined Python |
| 011-020 | Data & Structures | Collections, algorithms and complexity in practice |
| 021-030 | Python Tooling | CLI, configuration, tests and repeatable automation |
| 031-040 | Web Foundations | Semantic HTML, CSS systems and browser APIs |
| 041-050 | APIs & Integrations | HTTP contracts, reliability and third-party integrations |
| 051-060 | Data & ML Explorations | Data cleaning, modelling and honest evaluation |
| 061-070 | Mobile & Applied Prototypes | PWAs, device APIs and real-world interaction patterns |
| 071-085 | Systems & Data Foundations | Governance, queuing, rate limiting and observability |
| 086-100 | Polyglot Vercel Systems | Go + Python + SQLite + Vanilla JS systems and data tools |

## Final capstone stretch

The last fifteen projects compose a production-grade toolchain rather than isolated demos:
`DriftCheck`, `QueryLens`, `CertWatch`, `TokenMeter`, `PortGuard`, `SchemaDiff`, `RateLimitSim`,
`LedgerRecon`, `EnvGuard`, `IndexAudit`, `QueueLag`, `TraceWaterfall`, `CircuitBreakerSim`, `LogPulse`
and `ReleaseGate`. Together they cover configuration drift, query plans, certificate expiry, token
claims, port collisions, schema divergence, rate-limit simulation, reconciliation, secret scanning,
index cost, queue lag, latency critical paths, circuit breaking, log spikes and the final release
decision. See the [full capstone breakdown](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems).

## Live API

| Endpoint | Purpose |
| --- | --- |
| `GET /api/projects` | All 100 entries; optional `?arc=<arc>&q=<text>` filtering |
| `GET /api/summary` | Totals, phase/arc counts, stack distribution, architecture notes, capstone highlights |

Both endpoints return JSON, use `BaseHTTPRequestHandler`, and ship with the standard library only.
The frontend degrades to an embedded 100-entry catalog if either endpoint is unavailable.

## Documentation index

- [Days 001-070: Foundations and Apps](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps)
- [Days 071-085: Systems and Data Foundations](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-071-to-085-Systems-and-Data-Foundations)
- [Days 086-100: Polyglot Vercel Systems](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems)
- [GitHub Wiki Sync Guide](https://github.com/kennedy-blip/Centuary-Vault/wiki/GitHub-Wiki-Sync-Guide)

## Editing this archive

The canonical data lives in `tools/catalog_data.py`. After changing a project, run
`python3 tools/sync_catalog.py` to regenerate `api/catalog.json`, the offline catalog in
`public/app.js` and every day-by-day Wiki section. `python3 tools/verify.py` asserts that all
100 days and all five Wiki files are present and complete.

*100 projects. One vault. Zero TypeScript.*
