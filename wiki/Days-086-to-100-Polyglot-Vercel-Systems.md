# Days 086 to 100: Polyglot Vercel Systems

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

## Day 086: DriftCheck

- **Stack:** Go, Python, SQLite, Vanilla JS
- **Arc:** Polyglot Vercel Systems
- **Slug:** `driftcheck`

**Problem solved.** Configuration drift between staging and production was discovered only during incidents.

**Key mechanism.** Go workers hash manifests concurrently behind a bounded semaphore; Python stores signed snapshots in SQLite and emits a zero-TypeScript diff dashboard.

### Engineering breakdown

Go workers hash manifests concurrently behind a bounded semaphore; Python stores signed snapshots in SQLite and emits a zero-TypeScript diff dashboard. The work runs on a deliberately small surface: `Go`, `Python`, `SQLite`, `Vanilla JS`, with no TypeScript and no bundler in the delivery path.

### Production lesson

Concurrent scanning keeps checks fast while SQLite snapshots make every drift finding reproducible.

[Back to arc map](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems)

## Day 087: QueryLens

- **Stack:** Python, SQLite, Go, Vanilla JS
- **Arc:** Polyglot Vercel Systems
- **Slug:** `querylens`

**Problem solved.** Slow SQLite queries were optimized by guesswork rather than evidence.

**Key mechanism.** Python parses EXPLAIN QUERY PLAN output, Go runs timed replays in parallel, and a static HTML report ranks suspected missing indexes.

### Engineering breakdown

Python parses EXPLAIN QUERY PLAN output, Go runs timed replays in parallel, and a static HTML report ranks suspected missing indexes. The work runs on a deliberately small surface: `Python`, `SQLite`, `Go`, `Vanilla JS`, with no TypeScript and no bundler in the delivery path.

### Production lesson

Plans, not opinions, drive index decisions in the capstone data tools.

[Back to arc map](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems)

## Day 088: CertWatch

- **Stack:** Go, Python, SQLite, Vanilla JS
- **Arc:** Polyglot Vercel Systems
- **Slug:** `certwatch`

**Problem solved.** Expired TLS certificates caused avoidable outages.

**Key mechanism.** A Go worker pool performs bounded TLS dials with timeouts, while Python records expiry and renewal state in SQLite for a Vanilla JS status board.

### Engineering breakdown

A Go worker pool performs bounded TLS dials with timeouts, while Python records expiry and renewal state in SQLite for a Vanilla JS status board. The work runs on a deliberately small surface: `Go`, `Python`, `SQLite`, `Vanilla JS`, with no TypeScript and no bundler in the delivery path.

### Production lesson

Certificate health became a continuously checked invariant instead of a calendar reminder.

[Back to arc map](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems)

## Day 089: TokenMeter

- **Stack:** Python, Go, SQLite, Security
- **Arc:** Polyglot Vercel Systems
- **Slug:** `tokenmeter`

**Problem solved.** Token expiry and claim misuse were discovered only after rejected requests.

**Key mechanism.** Python validates standard JWT claims with the standard library, Go verifies batches concurrently, and SQLite keeps an auditable usage ledger.

### Engineering breakdown

Python validates standard JWT claims with the standard library, Go verifies batches concurrently, and SQLite keeps an auditable usage ledger. The work runs on a deliberately small surface: `Python`, `Go`, `SQLite`, `Security`, with no TypeScript and no bundler in the delivery path.

### Production lesson

Batch verification stays fast without dropping claim-level audit detail.

[Back to arc map](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems)

## Day 090: PortGuard

- **Stack:** Go, Python, SQLite, CLI
- **Arc:** Polyglot Vercel Systems
- **Slug:** `portguard`

**Problem solved.** Local development failed with confusing port collisions.

**Key mechanism.** Go probes candidate TCP ports with concurrent dials and strict timeouts, Python claims reservations in SQLite, and a small HTML view shows the map.

### Engineering breakdown

Go probes candidate TCP ports with concurrent dials and strict timeouts, Python claims reservations in SQLite, and a small HTML view shows the map. The work runs on a deliberately small surface: `Go`, `Python`, `SQLite`, `CLI`, with no TypeScript and no bundler in the delivery path.

### Production lesson

Bounded concurrency turns a slow sequential port scan into an instant check.

[Back to arc map](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems)

## Day 091: SchemaDiff

- **Stack:** Python, SQLite, Go, CLI
- **Arc:** Polyglot Vercel Systems
- **Slug:** `schemadiff`

**Problem solved.** Migrations diverged from the schema they claimed to produce.

**Key mechanism.** Python introspects SQLite via PRAGMA and computes a deterministic diff; a Go CI binary fails the build when unexpected changes appear.

### Engineering breakdown

Python introspects SQLite via PRAGMA and computes a deterministic diff; a Go CI binary fails the build when unexpected changes appear. The work runs on a deliberately small surface: `Python`, `SQLite`, `Go`, `CLI`, with no TypeScript and no bundler in the delivery path.

### Production lesson

A deterministic schema diff is the cheapest guardrail in a small data platform.

[Back to arc map](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems)

## Day 092: RateLimitSim

- **Stack:** Go, Python, SQLite, Canvas
- **Arc:** Polyglot Vercel Systems
- **Slug:** `ratelimitsim`

**Problem solved.** Rate limit policies behaved differently under real burst patterns than on paper.

**Key mechanism.** Go simulates token buckets with goroutines and atomic counters, Python stores scenarios in SQLite, and a no-library canvas view plots rejections.

### Engineering breakdown

Go simulates token buckets with goroutines and atomic counters, Python stores scenarios in SQLite, and a no-library canvas view plots rejections. The work runs on a deliberately small surface: `Go`, `Python`, `SQLite`, `Canvas`, with no TypeScript and no bundler in the delivery path.

### Production lesson

Concurrency and visualization together expose bursts that averages hide.

[Back to arc map](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems)

## Day 093: LedgerRecon

- **Stack:** Python, SQLite, Go, Data
- **Arc:** Polyglot Vercel Systems
- **Slug:** `ledgerrecon`

**Problem solved.** Balances disagreed across imported ledgers with no obvious source.

**Key mechanism.** Python performs double-entry reconciliation inside SQLite transactions while Go parses large input files in parallel with checksum verification.

### Engineering breakdown

Python performs double-entry reconciliation inside SQLite transactions while Go parses large input files in parallel with checksum verification. The work runs on a deliberately small surface: `Python`, `SQLite`, `Go`, `Data`, with no TypeScript and no bundler in the delivery path.

### Production lesson

Transactional reconciliation plus parallel parsing scales without sacrificing correctness.

[Back to arc map](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems)

## Day 094: EnvGuard

- **Stack:** Go, Python, SQLite, Security
- **Arc:** Polyglot Vercel Systems
- **Slug:** `envguard`

**Problem solved.** Secrets and environment mistakes could leak into built frontend assets.

**Key mechanism.** Go scans files with compiled regex rules in parallel, Python classifies and stores findings in SQLite, and a plain HTML report guides remediation.

### Engineering breakdown

Go scans files with compiled regex rules in parallel, Python classifies and stores findings in SQLite, and a plain HTML report guides remediation. The work runs on a deliberately small surface: `Go`, `Python`, `SQLite`, `Security`, with no TypeScript and no bundler in the delivery path.

### Production lesson

Fast scanning plus a persisted finding list makes security checks repeatable.

[Back to arc map](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems)

## Day 095: IndexAudit

- **Stack:** Python, SQLite, Go, CLI
- **Arc:** Polyglot Vercel Systems
- **Slug:** `indexaudit`

**Problem solved.** Unused indexes slowed writes while providing no read benefit.

**Key mechanism.** Python analyses query plans and SQLite statistics, Go orchestrates parallel workload samples, and the static report ranks index candidates.

### Engineering breakdown

Python analyses query plans and SQLite statistics, Go orchestrates parallel workload samples, and the static report ranks index candidates. The work runs on a deliberately small surface: `Python`, `SQLite`, `Go`, `CLI`, with no TypeScript and no bundler in the delivery path.

### Production lesson

Indexes are treated as a cost that must earn its keep.

[Back to arc map](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems)

## Day 096: QueueLag

- **Stack:** Go, Python, SQLite, Vanilla JS
- **Arc:** Polyglot Vercel Systems
- **Slug:** `queuelag`

**Problem solved.** Queue depth looked healthy while individual jobs waited for hours.

**Key mechanism.** Go workers sample oldest-message timestamps concurrently, Python persists lag history in SQLite, and a Vanilla JS dashboard draws inline sparklines.

### Engineering breakdown

Go workers sample oldest-message timestamps concurrently, Python persists lag history in SQLite, and a Vanilla JS dashboard draws inline sparklines. The work runs on a deliberately small surface: `Go`, `Python`, `SQLite`, `Vanilla JS`, with no TypeScript and no bundler in the delivery path.

### Production lesson

Age distributions reveal backlog pain that a single depth number conceals.

[Back to arc map](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems)

## Day 097: TraceWaterfall

- **Stack:** Go, Python, SQLite, Vanilla JS
- **Arc:** Polyglot Vercel Systems
- **Slug:** `tracewaterfall`

**Problem solved.** Latency spikes were visible but their critical path was not.

**Key mechanism.** A Go collector buffers spans through channels, Python reconstructs the critical path, and a dependency-free waterfall renderer shows the result.

### Engineering breakdown

A Go collector buffers spans through channels, Python reconstructs the critical path, and a dependency-free waterfall renderer shows the result. The work runs on a deliberately small surface: `Go`, `Python`, `SQLite`, `Vanilla JS`, with no TypeScript and no bundler in the delivery path.

### Production lesson

Buffered channels absorb bursts while deterministic span ordering keeps the waterfall honest.

[Back to arc map](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems)

## Day 098: CircuitBreakerSim

- **Stack:** Go, Python, SQLite, Vanilla JS
- **Arc:** Polyglot Vercel Systems
- **Slug:** `circuitbreakersim`

**Problem solved.** One slow dependency cascaded into a full-service outage.

**Key mechanism.** Go implements a closed/open/half-open state machine with atomic counters, Python drives failure scenarios from SQLite fixtures, and a zero-TypeScript UI visualises state changes.

### Engineering breakdown

Go implements a closed/open/half-open state machine with atomic counters, Python drives failure scenarios from SQLite fixtures, and a zero-TypeScript UI visualises state changes. The work runs on a deliberately small surface: `Go`, `Python`, `SQLite`, `Vanilla JS`, with no TypeScript and no bundler in the delivery path.

### Production lesson

The breaker protects the caller, and the simulator teaches where its thresholds should sit.

[Back to arc map](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems)

## Day 099: LogPulse

- **Stack:** Python, Go, SQLite, Vanilla JS
- **Arc:** Polyglot Vercel Systems
- **Slug:** `logpulse`

**Problem solved.** Log spikes were noticed long after users reported problems.

**Key mechanism.** Go tails files with goroutines, Python aggregates patterns with compiled regexes into SQLite rollups, and a polling Vanilla JS chart shows live movement.

### Engineering breakdown

Go tails files with goroutines, Python aggregates patterns with compiled regexes into SQLite rollups, and a polling Vanilla JS chart shows live movement. The work runs on a deliberately small surface: `Python`, `Go`, `SQLite`, `Vanilla JS`, with no TypeScript and no bundler in the delivery path.

### Production lesson

Streaming aggregation turns logs into an early-warning signal.

[Back to arc map](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems)

## Day 100: ReleaseGate

- **Stack:** Go, Python, SQLite, Vercel
- **Arc:** Polyglot Vercel Systems
- **Slug:** `releasegate`

**Problem solved.** Release decisions depended on scattered checks and tribal knowledge.

**Key mechanism.** Go runs the capstone checks in parallel, Python records a signed go/no-go decision in SQLite, and the zero-TypeScript Vercel dashboard presents one release verdict.

### Engineering breakdown

Go runs the capstone checks in parallel, Python records a signed go/no-go decision in SQLite, and the zero-TypeScript Vercel dashboard presents one release verdict. The work runs on a deliberately small surface: `Go`, `Python`, `SQLite`, `Vercel`, with no TypeScript and no bundler in the delivery path.

### Production lesson

The capstone composes DriftCheck through LogPulse into a single, explainable release decision.

[Back to arc map](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems)

---

*Part of [CenturyVault](https://github.com/kennedy-blip/Centuary-Vault/wiki/Home) — 100 projects, one archive, zero TypeScript.*
