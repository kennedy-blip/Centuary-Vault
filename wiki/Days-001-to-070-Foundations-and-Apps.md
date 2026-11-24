# Days 001 to 070: Foundations and Apps

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
  [Systems and Data Foundations](https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-071-to-085-Systems-and-Data-Foundations).

## Day-by-day reference

## Day 001: LoopLedger

- **Stack:** Python, CLI, Standard Library
- **Arc:** Core Programming
- **Slug:** `loopledger`

**Problem solved.** Loop-heavy scripts hid off-by-one errors and silent double processing.

**Key mechanism.** Instrumented every loop with counters and explicit invariants, then compared while/for variants against edge-case fixtures.

**Vault note.** The habit of writing the loop invariant before the loop became the default for every later data pipeline.

## Day 002: TypeTape

- **Stack:** Python, Testing, CLI
- **Arc:** Core Programming
- **Slug:** `typetape`

**Problem solved.** Dynamic types let bad values travel deep into a program before failing.

**Key mechanism.** Added typed boundaries with typing hints plus cheap runtime assertions at input edges, covered by table-driven tests.

**Vault note.** Type hints were treated as documentation with teeth rather than decorative annotations.

## Day 003: StringFoundry

- **Stack:** Python, Standard Library, Benchmarking
- **Arc:** Core Programming
- **Slug:** `stringfoundry`

**Problem solved.** Text assembly grew quadratic as reports got larger.

**Key mechanism.** Benchmarked concatenation against ''.join and f-strings with timeit across small and large corpora.

**Vault note.** A one-line benchmark settled a debate that had produced weeks of guesswork.

## Day 004: ConditionMaze

- **Stack:** Python, Testing, CLI
- **Arc:** Core Programming
- **Slug:** `conditionmaze`

**Problem solved.** Nested conditionals made business rules impossible to review.

**Key mechanism.** Flattened the decision tree into guard clauses and a truth table that doubled as test cases.

**Vault note.** Guard clauses turned implicit branching into an auditable rule sheet.

## Day 005: FunctionForge

- **Stack:** Python, Testing, CLI
- **Arc:** Core Programming
- **Slug:** `functionforge`

**Problem solved.** Helpers mutated shared state, so results depended on call order.

**Key mechanism.** Split each helper into a pure core plus a thin I/O shell with explicit inputs and outputs.

**Vault note.** Pure cores made unit tests fast and made later concurrency work safe.

## Day 006: RecursionRuler

- **Stack:** Python, Algorithms, Testing
- **Arc:** Core Programming
- **Slug:** `recursionruler`

**Problem solved.** Recursive solutions failed with opaque stack traces on deep inputs.

**Key mechanism.** Added depth guards, memoization and an iterative counterpart to compare stack behaviour.

**Vault note.** Recursion became a deliberate choice with a documented depth budget.

## Day 007: ExceptionAtlas

- **Stack:** Python, Logging, CLI
- **Arc:** Core Programming
- **Slug:** `exceptionatlas`

**Problem solved.** Broad except blocks swallowed the exact information needed to debug failures.

**Key mechanism.** Built a small exception taxonomy with structured traceback capture and re-raise boundaries.

**Vault note.** Every failure now arrives with context, not just a stack trace.

## Day 008: FileCabinet

- **Stack:** Python, CLI, Standard Library
- **Arc:** Core Programming
- **Slug:** `filecabinet`

**Problem solved.** Encoding assumptions and partial writes corrupted generated files.

**Key mechanism.** Used pathlib, explicit UTF-8 and atomic temp-file replacement with cleanup on failure.

**Vault note.** Atomic writes eliminated half-written artifacts after interrupted runs.

## Day 009: RegexRanger

- **Stack:** Python, Regex, Testing
- **Arc:** Core Programming
- **Slug:** `regexranger`

**Problem solved.** Ad-hoc regular expressions matched far more than intended.

**Key mechanism.** Compiled named patterns once, annotated them with verbose mode and pinned behaviour with property-style tests.

**Vault note.** Named groups made extracted fields self-documenting in downstream code.

## Day 010: TestBench

- **Stack:** Python, Testing, CLI
- **Arc:** Core Programming
- **Slug:** `testbench`

**Problem solved.** Manual verification could not keep pace with small refactors.

**Key mechanism.** Created a table-driven unittest suite with reusable fixtures and a one-command runner.

**Vault note.** A fast test suite made the rest of the 100 projects safe to build on.

## Day 011: ArrayAligner

- **Stack:** Python, Algorithms, Testing
- **Arc:** Data & Structures
- **Slug:** `arrayaligner`

**Problem solved.** Index maths produced subtle off-by-one bugs at both ends of a list.

**Key mechanism.** Documented slice invariants and drove tests from boundary pairs instead of happy paths.

**Vault note.** Boundary-first tests caught defects that random examples consistently missed.

## Day 012: StackSentry

- **Stack:** Python, Data Structures, Testing
- **Arc:** Data & Structures
- **Slug:** `stacksentry`

**Problem solved.** Push/pop stacks leaked items and overflowed without warning.

**Key mechanism.** Implemented a capped stack with explicit capacity, invariant checks and deterministic drain tests.

**Vault note.** Capacity became a design parameter instead of an accident.

## Day 013: QueueTrack

- **Stack:** Python, Data Structures, CLI
- **Arc:** Data & Structures
- **Slug:** `queuetrack`

**Problem solved.** FIFO consumers processed work out of order under load.

**Key mechanism.** Replaced list-based queues with collections.deque and asserted ordering plus drain semantics.

**Vault note.** The same deque pattern reappeared in later queue and lag projects.

## Day 014: HashHarbor

- **Stack:** Python, Data Structures, Benchmarking
- **Arc:** Data & Structures
- **Slug:** `hashharbor`

**Problem solved.** Key design choices caused collisions and unpredictable lookup costs.

**Key mechanism.** Probed dict behaviour with collision-heavy keys and visualised distribution before choosing a key scheme.

**Vault note.** Good key design proved cheaper than any clever lookup optimisation.

## Day 015: TreeTracer

- **Stack:** Python, Algorithms, Data Structures
- **Arc:** Data & Structures
- **Slug:** `treetracer`

**Problem solved.** Traversal order bugs corrupted assembled nested documents.

**Key mechanism.** Implemented recursive and iterative DFS/BFS side by side and compared emitted paths.

**Vault note.** Having two traversals act as cross-checks exposed ordering assumptions quickly.

## Day 016: GraphGuide

- **Stack:** Python, Algorithms, Data Structures
- **Arc:** Data & Structures
- **Slug:** `graphguide`

**Problem solved.** Cyclic dependencies hung a naive walker.

**Key mechanism.** Added visited sets, cycle reporting and a topological sort for dependency graphs.

**Vault note.** Cycle detection became a prerequisite for every later graph-shaped tool.

## Day 017: SortSpectrum

- **Stack:** Python, Algorithms, Benchmarking
- **Arc:** Data & Structures
- **Slug:** `sortspectrum`

**Problem solved.** Teams reached for the same sort regardless of input shape.

**Key mechanism.** Measured built-in and reference sorts over random, reversed and nearly sorted data.

**Vault note.** The benchmark showed that stability and input shape matter more than folklore.

## Day 018: SearchScope

- **Stack:** Python, Algorithms, Testing
- **Arc:** Data & Structures
- **Slug:** `searchscope`

**Problem solved.** Binary search failed on empty, single and duplicate-heavy inputs.

**Key mechanism.** Used lower/upper bound invariants with loop termination proofs and exhaustive small-array tests.

**Vault note.** Invariant-driven searching removed a whole class of boundary bugs.

## Day 019: HeapHelper

- **Stack:** Python, Data Structures, CLI
- **Arc:** Data & Structures
- **Slug:** `heaphelper`

**Problem solved.** Priority queues produced unstable ordering for equal keys.

**Key mechanism.** Wrapped heapq entries with monotonic tie-break counters and verified deterministic pop order.

**Vault note.** Deterministic heaps made replay and debugging possible.

## Day 020: CacheCanvas

- **Stack:** Python, Data Structures, CLI
- **Arc:** Data & Structures
- **Slug:** `cachecanvas`

**Problem solved.** A hand-rolled cache served stale values without a visible expiry rule.

**Key mechanism.** Built a small TTL plus LRU cache with explicit eviction reasons and hit/miss counters.

**Vault note.** Cache observability was introduced long before the later systems projects needed it.

## Day 021: CLIPilot

- **Stack:** Python, CLI, Automation
- **Arc:** Python Tooling
- **Slug:** `clipilot`

**Problem solved.** One-off scripts accumulated dozens of incompatible flags.

**Key mechanism.** Designed argparse subcommands with shared parents, typed values and friendly validation errors.

**Vault note.** A consistent CLI grammar made every later tool self-describing.

## Day 022: ConfigCompass

- **Stack:** Python, CLI, Automation
- **Arc:** Python Tooling
- **Slug:** `configcompass`

**Problem solved.** Configuration lived in code, files and environment variables with no precedence rule.

**Key mechanism.** Layered environment over file defaults, parsed values into typed objects and printed a redacted resolution trace.

**Vault note.** Explaining where a value came from ended most configuration incidents.

## Day 023: LogLoom

- **Stack:** Python, Logging, CLI
- **Arc:** Python Tooling
- **Slug:** `logloom`

**Problem solved.** Print statements made production logs impossible to filter or correlate.

**Key mechanism.** Introduced structured logging with levels, correlation IDs and JSON output for machines.

**Vault note.** Structured logs became the raw material for the observability arc.

## Day 024: EnvEcho

- **Stack:** Python, CLI, Security
- **Arc:** Python Tooling
- **Slug:** `envecho`

**Problem solved.** Environment drift between laptop and deployment caused mysterious failures.

**Key mechanism.** Validated .env files against a declared schema and redacted secrets in all diagnostic output.

**Vault note.** Schema-checked environments turned setup into a repeatable contract.

## Day 025: PackagePath

- **Stack:** Python, Packaging, CLI
- **Arc:** Python Tooling
- **Slug:** `packagepath`

**Problem solved.** Imports broke depending on the directory a script was launched from.

**Key mechanism.** Established a real package layout, explicit relative imports and an editable install workflow.

**Vault note.** Reliable packaging removed path hacks from every subsequent project.

## Day 026: FixtureForge

- **Stack:** Python, Testing, Automation
- **Arc:** Python Tooling
- **Slug:** `fixtureforge`

**Problem solved.** Random fixtures made test failures irreproducible.

**Key mechanism.** Replaced randomness with seeded factories that generate deterministic but varied records.

**Vault note.** A failing test could now be replayed exactly.

## Day 027: BenchMeter

- **Stack:** Python, Benchmarking, CLI
- **Arc:** Python Tooling
- **Slug:** `benchmeter`

**Problem solved.** Performance claims rested on a single lucky run.

**Key mechanism.** Built repeatable micro-benchmarks with warm-up, medians and simple histograms.

**Vault note.** Reporting distributions instead of single numbers changed how trade-offs were discussed.

## Day 028: DocDraft

- **Stack:** Python, Documentation, CLI
- **Arc:** Python Tooling
- **Slug:** `docdraft`

**Problem solved.** README examples drifted away from the code they described.

**Key mechanism.** Generated usage sections from docstrings and ran the examples as part of the test suite.

**Vault note.** Documentation became executable and therefore trustworthy.

## Day 029: TaskScheduler

- **Stack:** Python, Automation, CLI
- **Arc:** Python Tooling
- **Slug:** `taskscheduler`

**Problem solved.** Recurring maintenance depended on someone remembering to run it.

**Key mechanism.** Built a cron-like scheduler with idempotent run keys and persisted last-success timestamps.

**Vault note.** Idempotency keys prevented duplicate side effects during retries.

## Day 030: MigrationMap

- **Stack:** Python, SQLite, SQL
- **Arc:** Python Tooling
- **Slug:** `migrationmap`

**Problem solved.** Schema changes were applied by hand and could not be rolled back.

**Key mechanism.** Wrote versioned up/down SQLite migrations with a dry-run mode and integrity checks.

**Vault note.** Migration discipline later underpinned SchemaDiff and ReleaseGate.

## Day 031: MarkupModel

- **Stack:** HTML/CSS, Vanilla JS, Accessibility
- **Arc:** Web Foundations
- **Slug:** `markupmodel`

**Problem solved.** Pages relied on generic divs and were unusable with assistive technology.

**Key mechanism.** Rebuilt the layout from semantic landmarks, labelled controls and a correct heading order.

**Vault note.** Semantics did more for accessibility than any later styling pass.

## Day 032: StyleStack

- **Stack:** HTML/CSS, CSS Variables, Vanilla JS
- **Arc:** Web Foundations
- **Slug:** `stylestack`

**Problem solved.** Specificity wars made small visual tweaks risky.

**Key mechanism.** Introduced design tokens as CSS variables and a strict layering order for component rules.

**Vault note.** Tokens gave the whole archive a single place to change colour and spacing.

## Day 033: ResponsiveRails

- **Stack:** HTML/CSS, Vanilla JS, Tailwind
- **Arc:** Web Foundations
- **Slug:** `responsiverails`

**Problem solved.** Fixed-width layouts broke on small screens.

**Key mechanism.** Adopted mobile-first media queries, fluid grids and clamp-based typography.

**Vault note.** The responsive rules became the baseline for the final catalog grid.

## Day 034: FormForge

- **Stack:** HTML/CSS, Vanilla JS, Accessibility
- **Arc:** Web Foundations
- **Slug:** `formforge`

**Problem solved.** Forms accepted bad data or announced errors badly.

**Key mechanism.** Combined native constraints with custom accessible error messages tied via aria-describedby.

**Vault note.** Validation was designed as a conversation with the user, not a wall.

## Day 035: TableTuner

- **Stack:** HTML/CSS, Vanilla JS, Accessibility
- **Arc:** Web Foundations
- **Slug:** `tabletuner`

**Problem solved.** Large data tables were impossible to scan or sort reliably.

**Key mechanism.** Added sticky headers, stable client-side sorting and explicit column scope attributes.

**Vault note.** Tables became readable without abandoning plain HTML.

## Day 036: ModalMender

- **Stack:** HTML/CSS, Vanilla JS, Accessibility
- **Arc:** Web Foundations
- **Slug:** `modalmender`

**Problem solved.** Custom dialogs trapped focus and stranded keyboard users.

**Key mechanism.** Migrated to the native dialog element with focus return and predictable Escape handling.

**Vault note.** The drawer pattern used later in CenturyVault inherits these rules.

## Day 037: ThemeToggle

- **Stack:** HTML/CSS, Vanilla JS, Local Storage
- **Arc:** Web Foundations
- **Slug:** `themetoggle`

**Problem solved.** Pages flashed the wrong theme before JavaScript initialised.

**Key mechanism.** Persisted a theme choice and applied it with a tiny inline script before first paint.

**Vault note.** Avoiding the flash mattered more than the theme itself.

## Day 038: KeyboardKit

- **Stack:** Vanilla JS, Accessibility, HTML/CSS
- **Arc:** Web Foundations
- **Slug:** `keyboardkit`

**Problem solved.** Interactive widgets required a mouse.

**Key mechanism.** Added roving tabindex, visible focus rings and a documented shortcut map.

**Vault note.** Keyboard support turned the UI into a faster tool, not just an accessible one.

## Day 039: CanvasClock

- **Stack:** Vanilla JS, Canvas, Browser APIs
- **Arc:** Web Foundations
- **Slug:** `canvasclock`

**Problem solved.** Animation stuttered because frame work grew with elapsed time.

**Key mechanism.** Switched to requestAnimationFrame with delta-time updates and bounded redraw work.

**Vault note.** Delta-time thinking later helped the simulated dashboards stay smooth.

## Day 040: StorageShelf

- **Stack:** Vanilla JS, Local Storage, Browser APIs
- **Arc:** Web Foundations
- **Slug:** `storageshelf`

**Problem solved.** Client state failed after schema changes or quota limits.

**Key mechanism.** Versioned stored payloads, handled quota errors and built a migration path for old shapes.

**Vault note.** Storage was treated as a small database with its own schema contract.

## Day 041: RestRelay

- **Stack:** Python, REST, Flask
- **Arc:** APIs & Integrations
- **Slug:** `restrelay`

**Problem solved.** Endpoints disagreed on status codes and response envelopes.

**Key mechanism.** Defined resource-shaped JSON, consistent error envelopes and a contract test suite.

**Vault note.** A shared contract made client code dramatically simpler.

## Day 042: FetchFiber

- **Stack:** Vanilla JS, REST, Browser APIs
- **Arc:** APIs & Integrations
- **Slug:** `fetchfiber`

**Problem solved.** Network failures left the UI spinning forever.

**Key mechanism.** Used AbortController, bounded retries with backoff and explicit error states in every view.

**Vault note.** Timeouts and fallbacks became first-class UI states in the final hub.

## Day 043: AuthAnchor

- **Stack:** Python, Security, REST
- **Arc:** APIs & Integrations
- **Slug:** `authanchor`

**Problem solved.** Sessions were stored in a way that exposed them to scripts and CSRF.

**Key mechanism.** Set HttpOnly and SameSite cookies, added CSRF tokens and centralised session checks.

**Vault note.** Security defaults were encoded in one place rather than repeated by hand.

## Day 044: WebhookWatch

- **Stack:** Python, REST, Security
- **Arc:** APIs & Integrations
- **Slug:** `webhookwatch`

**Problem solved.** Retried webhooks created duplicate business records.

**Key mechanism.** Verified signatures and enforced idempotency keys before any state change.

**Vault note.** Idempotency became the default answer to unreliable delivery.

## Day 045: JsonJunction

- **Stack:** Python, JSON, Testing
- **Arc:** APIs & Integrations
- **Slug:** `jsonjunction`

**Problem solved.** Malformed payloads produced stack traces instead of useful errors.

**Key mechanism.** Applied schema validation and translated violations into field-level feedback.

**Vault note.** Good validation errors are an API's user interface.

## Day 046: PaginationPilot

- **Stack:** Python, SQLite, REST
- **Arc:** APIs & Integrations
- **Slug:** `paginationpilot`

**Problem solved.** Offset pagination skipped and repeated rows as data changed.

**Key mechanism.** Implemented cursor pagination over a stable composite ordering with a page-size ceiling.

**Vault note.** Cursors kept large lists fast and consistent.

## Day 047: UploadUplift

- **Stack:** Python, REST, Browser APIs
- **Arc:** APIs & Integrations
- **Slug:** `uploaduplift`

**Problem solved.** Large uploads failed late and had to restart from zero.

**Key mechanism.** Split uploads into chunks with checksums and resumable offsets.

**Vault note.** Failure recovery was designed before performance tuning.

## Day 048: MailMerge

- **Stack:** Python, Automation, Templates
- **Arc:** APIs & Integrations
- **Slug:** `mailmerge`

**Problem solved.** Templated emails looked different across clients and escaped content badly.

**Key mechanism.** Built a sandboxed template renderer with a preview mode and automatic escaping.

**Vault note.** Previewing before sending eliminated the most embarrassing class of bug.

## Day 049: CacheGateway

- **Stack:** Python, REST, HTTP
- **Arc:** APIs & Integrations
- **Slug:** `cachegateway`

**Problem solved.** Every request hit the origin service even when nothing had changed.

**Key mechanism.** Added ETags, conditional requests and stale-while-revalidate behaviour.

**Vault note.** The caching lessons fed directly into the later API metrics work.

## Day 050: ApiLedger

- **Stack:** Python, SQLite, REST
- **Arc:** APIs & Integrations
- **Slug:** `apiledger`

**Problem solved.** Third-party usage was invisible until the bill arrived.

**Key mechanism.** Recorded per-client call counts, latency and error rates in a SQLite ledger with daily rollups.

**Vault note.** Metering first, optimisation second.

## Day 051: FrameFinder

- **Stack:** Python, Pandas, Data
- **Arc:** Data & ML Explorations
- **Slug:** `framefinder`

**Problem solved.** Raw tabular data contained duplicates, mixed types and missing values.

**Key mechanism.** Built a cleaning pipeline with assertions on row counts, null rates and dtypes at each stage.

**Vault note.** Assertions made data failures loud instead of silent.

## Day 052: NumberNurse

- **Stack:** Python, NumPy, Data
- **Arc:** Data & ML Explorations
- **Slug:** `numbernurse`

**Problem solved.** Numeric drift and wrong dtypes distorted aggregates.

**Key mechanism.** Vectorised computations with NumPy and made dtype promotion explicit at boundaries.

**Vault note.** Explicit dtypes prevented mysterious precision loss.

## Day 053: PlotPilot

- **Stack:** Python, Matplotlib, Visualisation
- **Arc:** Data & ML Explorations
- **Slug:** `plotpilot`

**Problem solved.** Charts exaggerated small differences through truncated axes.

**Key mechanism.** Standardised baselines, labels and colourblind-safe palettes on every plot.

**Vault note.** Honest defaults did more for trust than a fancier chart library.

## Day 054: SparkScope

- **Stack:** Python, Pandas, Scikit-learn
- **Arc:** Data & ML Explorations
- **Slug:** `sparkscope`

**Problem solved.** Feature scaling leaked information from test folds into training.

**Key mechanism.** Compared StandardScaler and MinMax scaling inside pipelines with leakage checks.

**Vault note.** Pipelines made the correct sequence the easiest one.

## Day 055: ModelMeter

- **Stack:** Python, Scikit-learn, Evaluation
- **Arc:** Data & ML Explorations
- **Slug:** `modelmeter`

**Problem solved.** Overall accuracy hid poor performance on minority classes.

**Key mechanism.** Used stratified splits, confusion matrices and per-class precision/recall reporting.

**Vault note.** The model was only as good as its worst important class.

## Day 056: ClusterCompass

- **Stack:** Python, NumPy, Scikit-learn
- **Arc:** Data & ML Explorations
- **Slug:** `clustercompass`

**Problem solved.** Cluster count was chosen by eyeballing a chart.

**Key mechanism.** Scored candidate k values with elbow and silhouette methods and recorded stability across seeds.

**Vault note.** Unstable clusters were reported as uncertainty rather than insight.

## Day 057: TextTide

- **Stack:** Python, Pandas, NLP
- **Arc:** Data & ML Explorations
- **Slug:** `texttide`

**Problem solved.** Raw text corpora were dominated by noise and stop words.

**Key mechanism.** Built a tokenisation and TF-IDF baseline with reproducible cleaning steps.

**Vault note.** A simple baseline set a bar that complex models had to beat.

## Day 058: ForecastFoil

- **Stack:** Python, Pandas, Time Series
- **Arc:** Data & ML Explorations
- **Slug:** `forecastfoil`

**Problem solved.** Time-series models trained on future information looked unrealistically good.

**Key mechanism.** Used rolling-origin splits plus lagged features with a strict temporal cutoff.

**Vault note.** Chronological discipline mattered more than model choice.

## Day 059: RecoRack

- **Stack:** Python, Pandas, Evaluation
- **Arc:** Data & ML Explorations
- **Slug:** `recorack`

**Problem solved.** Recommendations simply surfaced the most popular items to everyone.

**Key mechanism.** Compared a popularity baseline with a lightweight collaborative filter on per-user metrics.

**Vault note.** A strong baseline exposed where personalisation actually helped.

## Day 060: NotebookNudge

- **Stack:** Python, Jupyter, Automation
- **Arc:** Data & ML Explorations
- **Slug:** `notebooknudge`

**Problem solved.** Notebook results could not be reproduced from a clean checkout.

**Key mechanism.** Parameterised runs, pinned seeds and exported the final pipeline as a script.

**Vault note.** Reproducibility turned experiments into engineering artifacts.

## Day 061: PWAPacket

- **Stack:** Vanilla JS, PWA, Browser APIs
- **Arc:** Mobile & Applied Prototypes
- **Slug:** `pwapacket`

**Problem solved.** The app disappeared completely without a network connection.

**Key mechanism.** Applied a cache-first strategy for the shell and a network-first strategy for data with offline fallbacks.

**Vault note.** Offline behaviour was a design decision, not an accident.

## Day 062: NotifyNode

- **Stack:** Vanilla JS, Browser APIs, PWA
- **Arc:** Mobile & Applied Prototypes
- **Slug:** `notifynode`

**Problem solved.** Notification requests interrupted users and drove opt-outs.

**Key mechanism.** Gated prompts behind a user action, added topic preferences and quiet hours.

**Vault note.** Asking later and explaining why improved opt-in rates.

## Day 063: GeoGuide

- **Stack:** Vanilla JS, Browser APIs, Accessibility
- **Arc:** Mobile & Applied Prototypes
- **Slug:** `geoguide`

**Problem solved.** Location features broke when permission was denied or accuracy was poor.

**Key mechanism.** Added permission fallbacks, accuracy thresholds and manual entry as an equal path.

**Vault note.** Every sensor feature needs a manual alternative.

## Day 064: MediaMixer

- **Stack:** Vanilla JS, Browser APIs, HTML/CSS
- **Arc:** Mobile & Applied Prototypes
- **Slug:** `mediamixer`

**Problem solved.** Playback controls disagreed with the actual media state.

**Key mechanism.** Made a single state object authoritative and derived every control from it.

**Vault note.** One source of truth removed an entire category of UI races.

## Day 065: IndexedInbox

- **Stack:** Vanilla JS, IndexedDB, PWA
- **Arc:** Mobile & Applied Prototypes
- **Slug:** `indexedinbox`

**Problem solved.** Offline writes were lost when the page reloaded.

**Key mechanism.** Queued actions in IndexedDB transactions and replayed them on reconnect with idempotent keys.

**Vault note.** The offline queue reused the same guarantees as server-side queues.

## Day 066: CameraCanvas

- **Stack:** Vanilla JS, Canvas, Browser APIs
- **Arc:** Mobile & Applied Prototypes
- **Slug:** `cameracanvas`

**Problem solved.** Uploaded photos appeared rotated on some devices.

**Key mechanism.** Normalised EXIF orientation into the canvas before export and stored a fixed output format.

**Vault note.** Normalising at ingestion saved every downstream consumer.

## Day 067: BarcodeBridge

- **Stack:** Vanilla JS, Browser APIs, Accessibility
- **Arc:** Mobile & Applied Prototypes
- **Slug:** `barcodebridge`

**Problem solved.** Keyboard-wedge scanners produced partial or duplicated input.

**Key mechanism.** Captured rapid key bursts, validated check digits and deduplicated scans by timestamp.

**Vault note.** Treating hardware as a noisy API made scanning reliable.

## Day 068: MapMarker

- **Stack:** Vanilla JS, Browser APIs, Performance
- **Arc:** Mobile & Applied Prototypes
- **Slug:** `mapmarker`

**Problem solved.** Thousands of markers froze the page.

**Key mechanism.** Culled markers outside the viewport and clustered dense regions before rendering.

**Vault note.** Rendering less data was the best performance optimisation.

## Day 069: CheckoutChrome

- **Stack:** Vanilla JS, HTML/CSS, Accessibility
- **Arc:** Mobile & Applied Prototypes
- **Slug:** `checkoutchrome`

**Problem solved.** Payment forms caused abandonment through unclear errors and rigid inputs.

**Key mechanism.** Added input masking, inline accessible errors and a summary that survives validation failures.

**Vault note.** Friction removed from a form is worth more than pixels polished elsewhere.

## Day 070: SurveyStack

- **Stack:** Vanilla JS, JSON, Accessibility
- **Arc:** Mobile & Applied Prototypes
- **Slug:** `surveystack`

**Problem solved.** Branching survey logic was hard-coded and impossible to reuse.

**Key mechanism.** Modelled questions, conditions and validation as JSON and rendered one generic form engine.

**Vault note.** Schema-driven UI cut the cost of each new survey to a data edit.

---

*Part of [CenturyVault](https://github.com/kennedy-blip/Centuary-Vault/wiki/Home) — 100 projects, one archive, zero TypeScript.*
