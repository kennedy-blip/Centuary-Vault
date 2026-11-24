# Days 071 to 085: Systems and Data Foundations

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
[Polyglot Vercel Systems](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems).

## Day-by-day reference

## Day 071: PolicyLint

- **Stack:** Python, SQLite, Policy
- **Arc:** Systems & Data Foundations
- **Slug:** `policylint`

**Problem solved.** Access policies drifted between environments with no automated check.

**Key mechanism.** Parsed policy files into a normalised rule set and stored violations in SQLite with severity levels.

**Vault note.** Policy checks became a build step instead of a meeting.

## Day 072: AccessMap

- **Stack:** Python, SQLite, SQL
- **Arc:** Systems & Data Foundations
- **Slug:** `accessmap`

**Problem solved.** Nobody could answer who could reach a given resource.

**Key mechanism.** Flattened roles, groups and grants into a queryable SQLite graph with path explanation.

**Vault note.** An explainable access query replaced a week of manual spreadsheet review.

## Day 073: AuditTrail

- **Stack:** Python, SQLite, Security
- **Arc:** Systems & Data Foundations
- **Slug:** `audittrail`

**Problem solved.** Administrative actions were logged incompletely and out of order.

**Key mechanism.** Wrote append-only events with monotonic sequence numbers and hash chaining for tamper evidence.

**Vault note.** Append-only records made the history trustworthy.

## Day 074: SecretsVault

- **Stack:** Python, SQLite, Security
- **Arc:** Systems & Data Foundations
- **Slug:** `secretsvault`

**Problem solved.** Secrets were copied between environments in plain text.

**Key mechanism.** Stored encrypted values with per-environment keys, short-lived unlocks and full redaction in logs.

**Vault note.** Convenience and secrecy were balanced by explicit unlock windows.

## Day 075: ConsentLedger

- **Stack:** Python, SQLite, Governance
- **Arc:** Systems & Data Foundations
- **Slug:** `consentledger`

**Problem solved.** Consent changes could not be reproduced for a specific point in time.

**Key mechanism.** Recorded versioned consent events and reconstructed state with an as-of query.

**Vault note.** Event sourcing made historical consent auditable.

## Day 076: RetentionClock

- **Stack:** Python, SQLite, Governance
- **Arc:** Systems & Data Foundations
- **Slug:** `retentionclock`

**Problem solved.** Data retention rules were applied manually and unevenly.

**Key mechanism.** Attached retention classes to records and scheduled dry-run deletion with impact previews.

**Vault note.** Showing what would be deleted before doing it built trust in automation.

## Day 077: OutboxRelay

- **Stack:** Python, SQLite, Queues
- **Arc:** Systems & Data Foundations
- **Slug:** `outboxrelay`

**Problem solved.** Database writes succeeded while follow-up messages were lost.

**Key mechanism.** Wrote events to an outbox table in the same transaction and relayed them with retry state.

**Vault note.** Transactional outbox removed dual-write failures.

## Day 078: RetryBudget

- **Stack:** Python, Queues, Reliability
- **Arc:** Systems & Data Foundations
- **Slug:** `retrybudget`

**Problem solved.** Retry storms amplified a brief outage into a sustained one.

**Key mechanism.** Tracked per-key retry budgets with jittered exponential backoff and a hard circuit ceiling.

**Vault note.** Retries need a budget, not just a policy.

## Day 079: DeadLetterDesk

- **Stack:** Python, SQLite, Queues
- **Arc:** Systems & Data Foundations
- **Slug:** `deadletterdesk`

**Problem solved.** Failed jobs vanished or were replayed without diagnosis.

**Key mechanism.** Moved exhausted messages to a dead-letter table with reason codes and one-command replay.

**Vault note.** Making failure visible made recovery routine.

## Day 080: PriorityQueue

- **Stack:** Python, SQLite, Scheduling
- **Arc:** Systems & Data Foundations
- **Slug:** `priorityqueue`

**Problem solved.** Urgent work waited behind a FIFO backlog.

**Key mechanism.** Added priority lanes with fair aging so low-priority jobs could not starve.

**Vault note.** Fairness was an explicit property, not a side effect.

## Day 081: ThrottleLab

- **Stack:** Python, Concurrency, Reliability
- **Arc:** Systems & Data Foundations
- **Slug:** `throttlelab`

**Problem solved.** Different throttle algorithms behaved differently under bursts.

**Key mechanism.** Simulated fixed window, sliding window and token bucket policies against the same traffic traces.

**Vault note.** Simulation made an invisible policy choice measurable.

## Day 082: QuotaLedger

- **Stack:** Python, SQLite, API
- **Arc:** Systems & Data Foundations
- **Slug:** `quotaledger`

**Problem solved.** Quota counters reset inconsistently across restarts.

**Key mechanism.** Persisted atomic counters and window boundaries in SQLite with idempotent charge keys.

**Vault note.** Durable counters made quotas enforceable.

## Day 083: MetricsBeacon

- **Stack:** Python, HTTP, Observability
- **Arc:** Systems & Data Foundations
- **Slug:** `metricsbeacon`

**Problem solved.** Service health was checked by reading logs by hand.

**Key mechanism.** Exposed a tiny stdlib metrics endpoint for counters, gauges and uptime with no dependencies.

**Vault note.** A small, boring endpoint became the foundation for later dashboards.

## Day 084: HealthProbe

- **Stack:** Python, SQLite, Observability
- **Arc:** Systems & Data Foundations
- **Slug:** `healthprobe`

**Problem solved.** Readiness and liveness were treated as the same signal.

**Key mechanism.** Separated shallow liveness from dependency-aware readiness with time-bounded checks.

**Vault note.** Restarting a service that cannot reach its database solves nothing.

## Day 085: TraceContext

- **Stack:** Python, Logging, Observability
- **Arc:** Systems & Data Foundations
- **Slug:** `tracecontext`

**Problem solved.** Requests crossing components lost their correlation identifiers.

**Key mechanism.** Propagated a trace ID through logs, queue messages and HTTP headers with a shared helper.

**Vault note.** One identifier tied the whole request story together.

---

*Part of [CenturyVault](https://github.com/kennedy-blip/Centuary-Vault/wiki/Home) — 100 projects, one archive, zero TypeScript.*
