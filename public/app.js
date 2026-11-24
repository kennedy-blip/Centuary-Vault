/* CenturyVault — Vanilla ES6+ frontend. No TypeScript, no bundler, no build step. */
/* Global catalog fallback is generated from tools/catalog_data.py. */

/* BEGIN GENERATED CATALOG */
const FALLBACK_CATALOG = [{"day":"Day 001","dayNumber":1,"title":"LoopLedger","slug":"loopledger","arc":"Core Programming","arcId":"core","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","CLI","Standard Library"],"problemSolved":"Loop-heavy scripts hid off-by-one errors and silent double processing.","keyMechanism":"Instrumented every loop with counters and explicit invariants, then compared while/for variants against edge-case fixtures.","lesson":"The habit of writing the loop invariant before the loop became the default for every later data pipeline.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-001-loopledger"},{"day":"Day 002","dayNumber":2,"title":"TypeTape","slug":"typetape","arc":"Core Programming","arcId":"core","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Testing","CLI"],"problemSolved":"Dynamic types let bad values travel deep into a program before failing.","keyMechanism":"Added typed boundaries with typing hints plus cheap runtime assertions at input edges, covered by table-driven tests.","lesson":"Type hints were treated as documentation with teeth rather than decorative annotations.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-002-typetape"},{"day":"Day 003","dayNumber":3,"title":"StringFoundry","slug":"stringfoundry","arc":"Core Programming","arcId":"core","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Standard Library","Benchmarking"],"problemSolved":"Text assembly grew quadratic as reports got larger.","keyMechanism":"Benchmarked concatenation against ''.join and f-strings with timeit across small and large corpora.","lesson":"A one-line benchmark settled a debate that had produced weeks of guesswork.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-003-stringfoundry"},{"day":"Day 004","dayNumber":4,"title":"ConditionMaze","slug":"conditionmaze","arc":"Core Programming","arcId":"core","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Testing","CLI"],"problemSolved":"Nested conditionals made business rules impossible to review.","keyMechanism":"Flattened the decision tree into guard clauses and a truth table that doubled as test cases.","lesson":"Guard clauses turned implicit branching into an auditable rule sheet.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-004-conditionmaze"},{"day":"Day 005","dayNumber":5,"title":"FunctionForge","slug":"functionforge","arc":"Core Programming","arcId":"core","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Testing","CLI"],"problemSolved":"Helpers mutated shared state, so results depended on call order.","keyMechanism":"Split each helper into a pure core plus a thin I/O shell with explicit inputs and outputs.","lesson":"Pure cores made unit tests fast and made later concurrency work safe.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-005-functionforge"},{"day":"Day 006","dayNumber":6,"title":"RecursionRuler","slug":"recursionruler","arc":"Core Programming","arcId":"core","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Algorithms","Testing"],"problemSolved":"Recursive solutions failed with opaque stack traces on deep inputs.","keyMechanism":"Added depth guards, memoization and an iterative counterpart to compare stack behaviour.","lesson":"Recursion became a deliberate choice with a documented depth budget.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-006-recursionruler"},{"day":"Day 007","dayNumber":7,"title":"ExceptionAtlas","slug":"exceptionatlas","arc":"Core Programming","arcId":"core","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Logging","CLI"],"problemSolved":"Broad except blocks swallowed the exact information needed to debug failures.","keyMechanism":"Built a small exception taxonomy with structured traceback capture and re-raise boundaries.","lesson":"Every failure now arrives with context, not just a stack trace.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-007-exceptionatlas"},{"day":"Day 008","dayNumber":8,"title":"FileCabinet","slug":"filecabinet","arc":"Core Programming","arcId":"core","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","CLI","Standard Library"],"problemSolved":"Encoding assumptions and partial writes corrupted generated files.","keyMechanism":"Used pathlib, explicit UTF-8 and atomic temp-file replacement with cleanup on failure.","lesson":"Atomic writes eliminated half-written artifacts after interrupted runs.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-008-filecabinet"},{"day":"Day 009","dayNumber":9,"title":"RegexRanger","slug":"regexranger","arc":"Core Programming","arcId":"core","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Regex","Testing"],"problemSolved":"Ad-hoc regular expressions matched far more than intended.","keyMechanism":"Compiled named patterns once, annotated them with verbose mode and pinned behaviour with property-style tests.","lesson":"Named groups made extracted fields self-documenting in downstream code.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-009-regexranger"},{"day":"Day 010","dayNumber":10,"title":"TestBench","slug":"testbench","arc":"Core Programming","arcId":"core","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Testing","CLI"],"problemSolved":"Manual verification could not keep pace with small refactors.","keyMechanism":"Created a table-driven unittest suite with reusable fixtures and a one-command runner.","lesson":"A fast test suite made the rest of the 100 projects safe to build on.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-010-testbench"},{"day":"Day 011","dayNumber":11,"title":"ArrayAligner","slug":"arrayaligner","arc":"Data & Structures","arcId":"data","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Algorithms","Testing"],"problemSolved":"Index maths produced subtle off-by-one bugs at both ends of a list.","keyMechanism":"Documented slice invariants and drove tests from boundary pairs instead of happy paths.","lesson":"Boundary-first tests caught defects that random examples consistently missed.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-011-arrayaligner"},{"day":"Day 012","dayNumber":12,"title":"StackSentry","slug":"stacksentry","arc":"Data & Structures","arcId":"data","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Data Structures","Testing"],"problemSolved":"Push/pop stacks leaked items and overflowed without warning.","keyMechanism":"Implemented a capped stack with explicit capacity, invariant checks and deterministic drain tests.","lesson":"Capacity became a design parameter instead of an accident.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-012-stacksentry"},{"day":"Day 013","dayNumber":13,"title":"QueueTrack","slug":"queuetrack","arc":"Data & Structures","arcId":"data","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Data Structures","CLI"],"problemSolved":"FIFO consumers processed work out of order under load.","keyMechanism":"Replaced list-based queues with collections.deque and asserted ordering plus drain semantics.","lesson":"The same deque pattern reappeared in later queue and lag projects.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-013-queuetrack"},{"day":"Day 014","dayNumber":14,"title":"HashHarbor","slug":"hashharbor","arc":"Data & Structures","arcId":"data","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Data Structures","Benchmarking"],"problemSolved":"Key design choices caused collisions and unpredictable lookup costs.","keyMechanism":"Probed dict behaviour with collision-heavy keys and visualised distribution before choosing a key scheme.","lesson":"Good key design proved cheaper than any clever lookup optimisation.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-014-hashharbor"},{"day":"Day 015","dayNumber":15,"title":"TreeTracer","slug":"treetracer","arc":"Data & Structures","arcId":"data","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Algorithms","Data Structures"],"problemSolved":"Traversal order bugs corrupted assembled nested documents.","keyMechanism":"Implemented recursive and iterative DFS/BFS side by side and compared emitted paths.","lesson":"Having two traversals act as cross-checks exposed ordering assumptions quickly.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-015-treetracer"},{"day":"Day 016","dayNumber":16,"title":"GraphGuide","slug":"graphguide","arc":"Data & Structures","arcId":"data","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Algorithms","Data Structures"],"problemSolved":"Cyclic dependencies hung a naive walker.","keyMechanism":"Added visited sets, cycle reporting and a topological sort for dependency graphs.","lesson":"Cycle detection became a prerequisite for every later graph-shaped tool.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-016-graphguide"},{"day":"Day 017","dayNumber":17,"title":"SortSpectrum","slug":"sortspectrum","arc":"Data & Structures","arcId":"data","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Algorithms","Benchmarking"],"problemSolved":"Teams reached for the same sort regardless of input shape.","keyMechanism":"Measured built-in and reference sorts over random, reversed and nearly sorted data.","lesson":"The benchmark showed that stability and input shape matter more than folklore.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-017-sortspectrum"},{"day":"Day 018","dayNumber":18,"title":"SearchScope","slug":"searchscope","arc":"Data & Structures","arcId":"data","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Algorithms","Testing"],"problemSolved":"Binary search failed on empty, single and duplicate-heavy inputs.","keyMechanism":"Used lower/upper bound invariants with loop termination proofs and exhaustive small-array tests.","lesson":"Invariant-driven searching removed a whole class of boundary bugs.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-018-searchscope"},{"day":"Day 019","dayNumber":19,"title":"HeapHelper","slug":"heaphelper","arc":"Data & Structures","arcId":"data","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Data Structures","CLI"],"problemSolved":"Priority queues produced unstable ordering for equal keys.","keyMechanism":"Wrapped heapq entries with monotonic tie-break counters and verified deterministic pop order.","lesson":"Deterministic heaps made replay and debugging possible.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-019-heaphelper"},{"day":"Day 020","dayNumber":20,"title":"CacheCanvas","slug":"cachecanvas","arc":"Data & Structures","arcId":"data","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Data Structures","CLI"],"problemSolved":"A hand-rolled cache served stale values without a visible expiry rule.","keyMechanism":"Built a small TTL plus LRU cache with explicit eviction reasons and hit/miss counters.","lesson":"Cache observability was introduced long before the later systems projects needed it.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-020-cachecanvas"},{"day":"Day 021","dayNumber":21,"title":"CLIPilot","slug":"clipilot","arc":"Python Tooling","arcId":"tooling","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","CLI","Automation"],"problemSolved":"One-off scripts accumulated dozens of incompatible flags.","keyMechanism":"Designed argparse subcommands with shared parents, typed values and friendly validation errors.","lesson":"A consistent CLI grammar made every later tool self-describing.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-021-clipilot"},{"day":"Day 022","dayNumber":22,"title":"ConfigCompass","slug":"configcompass","arc":"Python Tooling","arcId":"tooling","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","CLI","Automation"],"problemSolved":"Configuration lived in code, files and environment variables with no precedence rule.","keyMechanism":"Layered environment over file defaults, parsed values into typed objects and printed a redacted resolution trace.","lesson":"Explaining where a value came from ended most configuration incidents.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-022-configcompass"},{"day":"Day 023","dayNumber":23,"title":"LogLoom","slug":"logloom","arc":"Python Tooling","arcId":"tooling","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Logging","CLI"],"problemSolved":"Print statements made production logs impossible to filter or correlate.","keyMechanism":"Introduced structured logging with levels, correlation IDs and JSON output for machines.","lesson":"Structured logs became the raw material for the observability arc.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-023-logloom"},{"day":"Day 024","dayNumber":24,"title":"EnvEcho","slug":"envecho","arc":"Python Tooling","arcId":"tooling","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","CLI","Security"],"problemSolved":"Environment drift between laptop and deployment caused mysterious failures.","keyMechanism":"Validated .env files against a declared schema and redacted secrets in all diagnostic output.","lesson":"Schema-checked environments turned setup into a repeatable contract.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-024-envecho"},{"day":"Day 025","dayNumber":25,"title":"PackagePath","slug":"packagepath","arc":"Python Tooling","arcId":"tooling","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Packaging","CLI"],"problemSolved":"Imports broke depending on the directory a script was launched from.","keyMechanism":"Established a real package layout, explicit relative imports and an editable install workflow.","lesson":"Reliable packaging removed path hacks from every subsequent project.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-025-packagepath"},{"day":"Day 026","dayNumber":26,"title":"FixtureForge","slug":"fixtureforge","arc":"Python Tooling","arcId":"tooling","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Testing","Automation"],"problemSolved":"Random fixtures made test failures irreproducible.","keyMechanism":"Replaced randomness with seeded factories that generate deterministic but varied records.","lesson":"A failing test could now be replayed exactly.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-026-fixtureforge"},{"day":"Day 027","dayNumber":27,"title":"BenchMeter","slug":"benchmeter","arc":"Python Tooling","arcId":"tooling","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Benchmarking","CLI"],"problemSolved":"Performance claims rested on a single lucky run.","keyMechanism":"Built repeatable micro-benchmarks with warm-up, medians and simple histograms.","lesson":"Reporting distributions instead of single numbers changed how trade-offs were discussed.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-027-benchmeter"},{"day":"Day 028","dayNumber":28,"title":"DocDraft","slug":"docdraft","arc":"Python Tooling","arcId":"tooling","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Documentation","CLI"],"problemSolved":"README examples drifted away from the code they described.","keyMechanism":"Generated usage sections from docstrings and ran the examples as part of the test suite.","lesson":"Documentation became executable and therefore trustworthy.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-028-docdraft"},{"day":"Day 029","dayNumber":29,"title":"TaskScheduler","slug":"taskscheduler","arc":"Python Tooling","arcId":"tooling","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Automation","CLI"],"problemSolved":"Recurring maintenance depended on someone remembering to run it.","keyMechanism":"Built a cron-like scheduler with idempotent run keys and persisted last-success timestamps.","lesson":"Idempotency keys prevented duplicate side effects during retries.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-029-taskscheduler"},{"day":"Day 030","dayNumber":30,"title":"MigrationMap","slug":"migrationmap","arc":"Python Tooling","arcId":"tooling","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","SQLite","SQL"],"problemSolved":"Schema changes were applied by hand and could not be rolled back.","keyMechanism":"Wrote versioned up/down SQLite migrations with a dry-run mode and integrity checks.","lesson":"Migration discipline later underpinned SchemaDiff and ReleaseGate.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-030-migrationmap"},{"day":"Day 031","dayNumber":31,"title":"MarkupModel","slug":"markupmodel","arc":"Web Foundations","arcId":"web","phase":"Foundations & Apps","phaseId":"foundations","stack":["HTML/CSS","Vanilla JS","Accessibility"],"problemSolved":"Pages relied on generic divs and were unusable with assistive technology.","keyMechanism":"Rebuilt the layout from semantic landmarks, labelled controls and a correct heading order.","lesson":"Semantics did more for accessibility than any later styling pass.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-031-markupmodel"},{"day":"Day 032","dayNumber":32,"title":"StyleStack","slug":"stylestack","arc":"Web Foundations","arcId":"web","phase":"Foundations & Apps","phaseId":"foundations","stack":["HTML/CSS","CSS Variables","Vanilla JS"],"problemSolved":"Specificity wars made small visual tweaks risky.","keyMechanism":"Introduced design tokens as CSS variables and a strict layering order for component rules.","lesson":"Tokens gave the whole archive a single place to change colour and spacing.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-032-stylestack"},{"day":"Day 033","dayNumber":33,"title":"ResponsiveRails","slug":"responsiverails","arc":"Web Foundations","arcId":"web","phase":"Foundations & Apps","phaseId":"foundations","stack":["HTML/CSS","Vanilla JS","Tailwind"],"problemSolved":"Fixed-width layouts broke on small screens.","keyMechanism":"Adopted mobile-first media queries, fluid grids and clamp-based typography.","lesson":"The responsive rules became the baseline for the final catalog grid.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-033-responsiverails"},{"day":"Day 034","dayNumber":34,"title":"FormForge","slug":"formforge","arc":"Web Foundations","arcId":"web","phase":"Foundations & Apps","phaseId":"foundations","stack":["HTML/CSS","Vanilla JS","Accessibility"],"problemSolved":"Forms accepted bad data or announced errors badly.","keyMechanism":"Combined native constraints with custom accessible error messages tied via aria-describedby.","lesson":"Validation was designed as a conversation with the user, not a wall.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-034-formforge"},{"day":"Day 035","dayNumber":35,"title":"TableTuner","slug":"tabletuner","arc":"Web Foundations","arcId":"web","phase":"Foundations & Apps","phaseId":"foundations","stack":["HTML/CSS","Vanilla JS","Accessibility"],"problemSolved":"Large data tables were impossible to scan or sort reliably.","keyMechanism":"Added sticky headers, stable client-side sorting and explicit column scope attributes.","lesson":"Tables became readable without abandoning plain HTML.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-035-tabletuner"},{"day":"Day 036","dayNumber":36,"title":"ModalMender","slug":"modalmender","arc":"Web Foundations","arcId":"web","phase":"Foundations & Apps","phaseId":"foundations","stack":["HTML/CSS","Vanilla JS","Accessibility"],"problemSolved":"Custom dialogs trapped focus and stranded keyboard users.","keyMechanism":"Migrated to the native dialog element with focus return and predictable Escape handling.","lesson":"The drawer pattern used later in CenturyVault inherits these rules.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-036-modalmender"},{"day":"Day 037","dayNumber":37,"title":"ThemeToggle","slug":"themetoggle","arc":"Web Foundations","arcId":"web","phase":"Foundations & Apps","phaseId":"foundations","stack":["HTML/CSS","Vanilla JS","Local Storage"],"problemSolved":"Pages flashed the wrong theme before JavaScript initialised.","keyMechanism":"Persisted a theme choice and applied it with a tiny inline script before first paint.","lesson":"Avoiding the flash mattered more than the theme itself.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-037-themetoggle"},{"day":"Day 038","dayNumber":38,"title":"KeyboardKit","slug":"keyboardkit","arc":"Web Foundations","arcId":"web","phase":"Foundations & Apps","phaseId":"foundations","stack":["Vanilla JS","Accessibility","HTML/CSS"],"problemSolved":"Interactive widgets required a mouse.","keyMechanism":"Added roving tabindex, visible focus rings and a documented shortcut map.","lesson":"Keyboard support turned the UI into a faster tool, not just an accessible one.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-038-keyboardkit"},{"day":"Day 039","dayNumber":39,"title":"CanvasClock","slug":"canvasclock","arc":"Web Foundations","arcId":"web","phase":"Foundations & Apps","phaseId":"foundations","stack":["Vanilla JS","Canvas","Browser APIs"],"problemSolved":"Animation stuttered because frame work grew with elapsed time.","keyMechanism":"Switched to requestAnimationFrame with delta-time updates and bounded redraw work.","lesson":"Delta-time thinking later helped the simulated dashboards stay smooth.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-039-canvasclock"},{"day":"Day 040","dayNumber":40,"title":"StorageShelf","slug":"storageshelf","arc":"Web Foundations","arcId":"web","phase":"Foundations & Apps","phaseId":"foundations","stack":["Vanilla JS","Local Storage","Browser APIs"],"problemSolved":"Client state failed after schema changes or quota limits.","keyMechanism":"Versioned stored payloads, handled quota errors and built a migration path for old shapes.","lesson":"Storage was treated as a small database with its own schema contract.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-040-storageshelf"},{"day":"Day 041","dayNumber":41,"title":"RestRelay","slug":"restrelay","arc":"APIs & Integrations","arcId":"apis","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","REST","Flask"],"problemSolved":"Endpoints disagreed on status codes and response envelopes.","keyMechanism":"Defined resource-shaped JSON, consistent error envelopes and a contract test suite.","lesson":"A shared contract made client code dramatically simpler.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-041-restrelay"},{"day":"Day 042","dayNumber":42,"title":"FetchFiber","slug":"fetchfiber","arc":"APIs & Integrations","arcId":"apis","phase":"Foundations & Apps","phaseId":"foundations","stack":["Vanilla JS","REST","Browser APIs"],"problemSolved":"Network failures left the UI spinning forever.","keyMechanism":"Used AbortController, bounded retries with backoff and explicit error states in every view.","lesson":"Timeouts and fallbacks became first-class UI states in the final hub.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-042-fetchfiber"},{"day":"Day 043","dayNumber":43,"title":"AuthAnchor","slug":"authanchor","arc":"APIs & Integrations","arcId":"apis","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Security","REST"],"problemSolved":"Sessions were stored in a way that exposed them to scripts and CSRF.","keyMechanism":"Set HttpOnly and SameSite cookies, added CSRF tokens and centralised session checks.","lesson":"Security defaults were encoded in one place rather than repeated by hand.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-043-authanchor"},{"day":"Day 044","dayNumber":44,"title":"WebhookWatch","slug":"webhookwatch","arc":"APIs & Integrations","arcId":"apis","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","REST","Security"],"problemSolved":"Retried webhooks created duplicate business records.","keyMechanism":"Verified signatures and enforced idempotency keys before any state change.","lesson":"Idempotency became the default answer to unreliable delivery.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-044-webhookwatch"},{"day":"Day 045","dayNumber":45,"title":"JsonJunction","slug":"jsonjunction","arc":"APIs & Integrations","arcId":"apis","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","JSON","Testing"],"problemSolved":"Malformed payloads produced stack traces instead of useful errors.","keyMechanism":"Applied schema validation and translated violations into field-level feedback.","lesson":"Good validation errors are an API's user interface.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-045-jsonjunction"},{"day":"Day 046","dayNumber":46,"title":"PaginationPilot","slug":"paginationpilot","arc":"APIs & Integrations","arcId":"apis","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","SQLite","REST"],"problemSolved":"Offset pagination skipped and repeated rows as data changed.","keyMechanism":"Implemented cursor pagination over a stable composite ordering with a page-size ceiling.","lesson":"Cursors kept large lists fast and consistent.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-046-paginationpilot"},{"day":"Day 047","dayNumber":47,"title":"UploadUplift","slug":"uploaduplift","arc":"APIs & Integrations","arcId":"apis","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","REST","Browser APIs"],"problemSolved":"Large uploads failed late and had to restart from zero.","keyMechanism":"Split uploads into chunks with checksums and resumable offsets.","lesson":"Failure recovery was designed before performance tuning.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-047-uploaduplift"},{"day":"Day 048","dayNumber":48,"title":"MailMerge","slug":"mailmerge","arc":"APIs & Integrations","arcId":"apis","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Automation","Templates"],"problemSolved":"Templated emails looked different across clients and escaped content badly.","keyMechanism":"Built a sandboxed template renderer with a preview mode and automatic escaping.","lesson":"Previewing before sending eliminated the most embarrassing class of bug.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-048-mailmerge"},{"day":"Day 049","dayNumber":49,"title":"CacheGateway","slug":"cachegateway","arc":"APIs & Integrations","arcId":"apis","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","REST","HTTP"],"problemSolved":"Every request hit the origin service even when nothing had changed.","keyMechanism":"Added ETags, conditional requests and stale-while-revalidate behaviour.","lesson":"The caching lessons fed directly into the later API metrics work.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-049-cachegateway"},{"day":"Day 050","dayNumber":50,"title":"ApiLedger","slug":"apiledger","arc":"APIs & Integrations","arcId":"apis","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","SQLite","REST"],"problemSolved":"Third-party usage was invisible until the bill arrived.","keyMechanism":"Recorded per-client call counts, latency and error rates in a SQLite ledger with daily rollups.","lesson":"Metering first, optimisation second.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-050-apiledger"},{"day":"Day 051","dayNumber":51,"title":"FrameFinder","slug":"framefinder","arc":"Data & ML Explorations","arcId":"ml","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Pandas","Data"],"problemSolved":"Raw tabular data contained duplicates, mixed types and missing values.","keyMechanism":"Built a cleaning pipeline with assertions on row counts, null rates and dtypes at each stage.","lesson":"Assertions made data failures loud instead of silent.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-051-framefinder"},{"day":"Day 052","dayNumber":52,"title":"NumberNurse","slug":"numbernurse","arc":"Data & ML Explorations","arcId":"ml","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","NumPy","Data"],"problemSolved":"Numeric drift and wrong dtypes distorted aggregates.","keyMechanism":"Vectorised computations with NumPy and made dtype promotion explicit at boundaries.","lesson":"Explicit dtypes prevented mysterious precision loss.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-052-numbernurse"},{"day":"Day 053","dayNumber":53,"title":"PlotPilot","slug":"plotpilot","arc":"Data & ML Explorations","arcId":"ml","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Matplotlib","Visualisation"],"problemSolved":"Charts exaggerated small differences through truncated axes.","keyMechanism":"Standardised baselines, labels and colourblind-safe palettes on every plot.","lesson":"Honest defaults did more for trust than a fancier chart library.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-053-plotpilot"},{"day":"Day 054","dayNumber":54,"title":"SparkScope","slug":"sparkscope","arc":"Data & ML Explorations","arcId":"ml","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Pandas","Scikit-learn"],"problemSolved":"Feature scaling leaked information from test folds into training.","keyMechanism":"Compared StandardScaler and MinMax scaling inside pipelines with leakage checks.","lesson":"Pipelines made the correct sequence the easiest one.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-054-sparkscope"},{"day":"Day 055","dayNumber":55,"title":"ModelMeter","slug":"modelmeter","arc":"Data & ML Explorations","arcId":"ml","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Scikit-learn","Evaluation"],"problemSolved":"Overall accuracy hid poor performance on minority classes.","keyMechanism":"Used stratified splits, confusion matrices and per-class precision/recall reporting.","lesson":"The model was only as good as its worst important class.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-055-modelmeter"},{"day":"Day 056","dayNumber":56,"title":"ClusterCompass","slug":"clustercompass","arc":"Data & ML Explorations","arcId":"ml","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","NumPy","Scikit-learn"],"problemSolved":"Cluster count was chosen by eyeballing a chart.","keyMechanism":"Scored candidate k values with elbow and silhouette methods and recorded stability across seeds.","lesson":"Unstable clusters were reported as uncertainty rather than insight.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-056-clustercompass"},{"day":"Day 057","dayNumber":57,"title":"TextTide","slug":"texttide","arc":"Data & ML Explorations","arcId":"ml","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Pandas","NLP"],"problemSolved":"Raw text corpora were dominated by noise and stop words.","keyMechanism":"Built a tokenisation and TF-IDF baseline with reproducible cleaning steps.","lesson":"A simple baseline set a bar that complex models had to beat.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-057-texttide"},{"day":"Day 058","dayNumber":58,"title":"ForecastFoil","slug":"forecastfoil","arc":"Data & ML Explorations","arcId":"ml","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Pandas","Time Series"],"problemSolved":"Time-series models trained on future information looked unrealistically good.","keyMechanism":"Used rolling-origin splits plus lagged features with a strict temporal cutoff.","lesson":"Chronological discipline mattered more than model choice.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-058-forecastfoil"},{"day":"Day 059","dayNumber":59,"title":"RecoRack","slug":"recorack","arc":"Data & ML Explorations","arcId":"ml","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Pandas","Evaluation"],"problemSolved":"Recommendations simply surfaced the most popular items to everyone.","keyMechanism":"Compared a popularity baseline with a lightweight collaborative filter on per-user metrics.","lesson":"A strong baseline exposed where personalisation actually helped.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-059-recorack"},{"day":"Day 060","dayNumber":60,"title":"NotebookNudge","slug":"notebooknudge","arc":"Data & ML Explorations","arcId":"ml","phase":"Foundations & Apps","phaseId":"foundations","stack":["Python","Jupyter","Automation"],"problemSolved":"Notebook results could not be reproduced from a clean checkout.","keyMechanism":"Parameterised runs, pinned seeds and exported the final pipeline as a script.","lesson":"Reproducibility turned experiments into engineering artifacts.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-060-notebooknudge"},{"day":"Day 061","dayNumber":61,"title":"PWAPacket","slug":"pwapacket","arc":"Mobile & Applied Prototypes","arcId":"applied","phase":"Foundations & Apps","phaseId":"foundations","stack":["Vanilla JS","PWA","Browser APIs"],"problemSolved":"The app disappeared completely without a network connection.","keyMechanism":"Applied a cache-first strategy for the shell and a network-first strategy for data with offline fallbacks.","lesson":"Offline behaviour was a design decision, not an accident.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-061-pwapacket"},{"day":"Day 062","dayNumber":62,"title":"NotifyNode","slug":"notifynode","arc":"Mobile & Applied Prototypes","arcId":"applied","phase":"Foundations & Apps","phaseId":"foundations","stack":["Vanilla JS","Browser APIs","PWA"],"problemSolved":"Notification requests interrupted users and drove opt-outs.","keyMechanism":"Gated prompts behind a user action, added topic preferences and quiet hours.","lesson":"Asking later and explaining why improved opt-in rates.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-062-notifynode"},{"day":"Day 063","dayNumber":63,"title":"GeoGuide","slug":"geoguide","arc":"Mobile & Applied Prototypes","arcId":"applied","phase":"Foundations & Apps","phaseId":"foundations","stack":["Vanilla JS","Browser APIs","Accessibility"],"problemSolved":"Location features broke when permission was denied or accuracy was poor.","keyMechanism":"Added permission fallbacks, accuracy thresholds and manual entry as an equal path.","lesson":"Every sensor feature needs a manual alternative.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-063-geoguide"},{"day":"Day 064","dayNumber":64,"title":"MediaMixer","slug":"mediamixer","arc":"Mobile & Applied Prototypes","arcId":"applied","phase":"Foundations & Apps","phaseId":"foundations","stack":["Vanilla JS","Browser APIs","HTML/CSS"],"problemSolved":"Playback controls disagreed with the actual media state.","keyMechanism":"Made a single state object authoritative and derived every control from it.","lesson":"One source of truth removed an entire category of UI races.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-064-mediamixer"},{"day":"Day 065","dayNumber":65,"title":"IndexedInbox","slug":"indexedinbox","arc":"Mobile & Applied Prototypes","arcId":"applied","phase":"Foundations & Apps","phaseId":"foundations","stack":["Vanilla JS","IndexedDB","PWA"],"problemSolved":"Offline writes were lost when the page reloaded.","keyMechanism":"Queued actions in IndexedDB transactions and replayed them on reconnect with idempotent keys.","lesson":"The offline queue reused the same guarantees as server-side queues.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-065-indexedinbox"},{"day":"Day 066","dayNumber":66,"title":"CameraCanvas","slug":"cameracanvas","arc":"Mobile & Applied Prototypes","arcId":"applied","phase":"Foundations & Apps","phaseId":"foundations","stack":["Vanilla JS","Canvas","Browser APIs"],"problemSolved":"Uploaded photos appeared rotated on some devices.","keyMechanism":"Normalised EXIF orientation into the canvas before export and stored a fixed output format.","lesson":"Normalising at ingestion saved every downstream consumer.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-066-cameracanvas"},{"day":"Day 067","dayNumber":67,"title":"BarcodeBridge","slug":"barcodebridge","arc":"Mobile & Applied Prototypes","arcId":"applied","phase":"Foundations & Apps","phaseId":"foundations","stack":["Vanilla JS","Browser APIs","Accessibility"],"problemSolved":"Keyboard-wedge scanners produced partial or duplicated input.","keyMechanism":"Captured rapid key bursts, validated check digits and deduplicated scans by timestamp.","lesson":"Treating hardware as a noisy API made scanning reliable.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-067-barcodebridge"},{"day":"Day 068","dayNumber":68,"title":"MapMarker","slug":"mapmarker","arc":"Mobile & Applied Prototypes","arcId":"applied","phase":"Foundations & Apps","phaseId":"foundations","stack":["Vanilla JS","Browser APIs","Performance"],"problemSolved":"Thousands of markers froze the page.","keyMechanism":"Culled markers outside the viewport and clustered dense regions before rendering.","lesson":"Rendering less data was the best performance optimisation.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-068-mapmarker"},{"day":"Day 069","dayNumber":69,"title":"CheckoutChrome","slug":"checkoutchrome","arc":"Mobile & Applied Prototypes","arcId":"applied","phase":"Foundations & Apps","phaseId":"foundations","stack":["Vanilla JS","HTML/CSS","Accessibility"],"problemSolved":"Payment forms caused abandonment through unclear errors and rigid inputs.","keyMechanism":"Added input masking, inline accessible errors and a summary that survives validation failures.","lesson":"Friction removed from a form is worth more than pixels polished elsewhere.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-069-checkoutchrome"},{"day":"Day 070","dayNumber":70,"title":"SurveyStack","slug":"surveystack","arc":"Mobile & Applied Prototypes","arcId":"applied","phase":"Foundations & Apps","phaseId":"foundations","stack":["Vanilla JS","JSON","Accessibility"],"problemSolved":"Branching survey logic was hard-coded and impossible to reuse.","keyMechanism":"Modelled questions, conditions and validation as JSON and rendered one generic form engine.","lesson":"Schema-driven UI cut the cost of each new survey to a data edit.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-001-to-070-Foundations-and-Apps#day-070-surveystack"},{"day":"Day 071","dayNumber":71,"title":"PolicyLint","slug":"policylint","arc":"Systems & Data Foundations","arcId":"systems","phase":"Systems & Data Foundations","phaseId":"systems","stack":["Python","SQLite","Policy"],"problemSolved":"Access policies drifted between environments with no automated check.","keyMechanism":"Parsed policy files into a normalised rule set and stored violations in SQLite with severity levels.","lesson":"Policy checks became a build step instead of a meeting.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-071-to-085-Systems-and-Data-Foundations#day-071-policylint"},{"day":"Day 072","dayNumber":72,"title":"AccessMap","slug":"accessmap","arc":"Systems & Data Foundations","arcId":"systems","phase":"Systems & Data Foundations","phaseId":"systems","stack":["Python","SQLite","SQL"],"problemSolved":"Nobody could answer who could reach a given resource.","keyMechanism":"Flattened roles, groups and grants into a queryable SQLite graph with path explanation.","lesson":"An explainable access query replaced a week of manual spreadsheet review.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-071-to-085-Systems-and-Data-Foundations#day-072-accessmap"},{"day":"Day 073","dayNumber":73,"title":"AuditTrail","slug":"audittrail","arc":"Systems & Data Foundations","arcId":"systems","phase":"Systems & Data Foundations","phaseId":"systems","stack":["Python","SQLite","Security"],"problemSolved":"Administrative actions were logged incompletely and out of order.","keyMechanism":"Wrote append-only events with monotonic sequence numbers and hash chaining for tamper evidence.","lesson":"Append-only records made the history trustworthy.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-071-to-085-Systems-and-Data-Foundations#day-073-audittrail"},{"day":"Day 074","dayNumber":74,"title":"SecretsVault","slug":"secretsvault","arc":"Systems & Data Foundations","arcId":"systems","phase":"Systems & Data Foundations","phaseId":"systems","stack":["Python","SQLite","Security"],"problemSolved":"Secrets were copied between environments in plain text.","keyMechanism":"Stored encrypted values with per-environment keys, short-lived unlocks and full redaction in logs.","lesson":"Convenience and secrecy were balanced by explicit unlock windows.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-071-to-085-Systems-and-Data-Foundations#day-074-secretsvault"},{"day":"Day 075","dayNumber":75,"title":"ConsentLedger","slug":"consentledger","arc":"Systems & Data Foundations","arcId":"systems","phase":"Systems & Data Foundations","phaseId":"systems","stack":["Python","SQLite","Governance"],"problemSolved":"Consent changes could not be reproduced for a specific point in time.","keyMechanism":"Recorded versioned consent events and reconstructed state with an as-of query.","lesson":"Event sourcing made historical consent auditable.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-071-to-085-Systems-and-Data-Foundations#day-075-consentledger"},{"day":"Day 076","dayNumber":76,"title":"RetentionClock","slug":"retentionclock","arc":"Systems & Data Foundations","arcId":"systems","phase":"Systems & Data Foundations","phaseId":"systems","stack":["Python","SQLite","Governance"],"problemSolved":"Data retention rules were applied manually and unevenly.","keyMechanism":"Attached retention classes to records and scheduled dry-run deletion with impact previews.","lesson":"Showing what would be deleted before doing it built trust in automation.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-071-to-085-Systems-and-Data-Foundations#day-076-retentionclock"},{"day":"Day 077","dayNumber":77,"title":"OutboxRelay","slug":"outboxrelay","arc":"Systems & Data Foundations","arcId":"systems","phase":"Systems & Data Foundations","phaseId":"systems","stack":["Python","SQLite","Queues"],"problemSolved":"Database writes succeeded while follow-up messages were lost.","keyMechanism":"Wrote events to an outbox table in the same transaction and relayed them with retry state.","lesson":"Transactional outbox removed dual-write failures.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-071-to-085-Systems-and-Data-Foundations#day-077-outboxrelay"},{"day":"Day 078","dayNumber":78,"title":"RetryBudget","slug":"retrybudget","arc":"Systems & Data Foundations","arcId":"systems","phase":"Systems & Data Foundations","phaseId":"systems","stack":["Python","Queues","Reliability"],"problemSolved":"Retry storms amplified a brief outage into a sustained one.","keyMechanism":"Tracked per-key retry budgets with jittered exponential backoff and a hard circuit ceiling.","lesson":"Retries need a budget, not just a policy.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-071-to-085-Systems-and-Data-Foundations#day-078-retrybudget"},{"day":"Day 079","dayNumber":79,"title":"DeadLetterDesk","slug":"deadletterdesk","arc":"Systems & Data Foundations","arcId":"systems","phase":"Systems & Data Foundations","phaseId":"systems","stack":["Python","SQLite","Queues"],"problemSolved":"Failed jobs vanished or were replayed without diagnosis.","keyMechanism":"Moved exhausted messages to a dead-letter table with reason codes and one-command replay.","lesson":"Making failure visible made recovery routine.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-071-to-085-Systems-and-Data-Foundations#day-079-deadletterdesk"},{"day":"Day 080","dayNumber":80,"title":"PriorityQueue","slug":"priorityqueue","arc":"Systems & Data Foundations","arcId":"systems","phase":"Systems & Data Foundations","phaseId":"systems","stack":["Python","SQLite","Scheduling"],"problemSolved":"Urgent work waited behind a FIFO backlog.","keyMechanism":"Added priority lanes with fair aging so low-priority jobs could not starve.","lesson":"Fairness was an explicit property, not a side effect.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-071-to-085-Systems-and-Data-Foundations#day-080-priorityqueue"},{"day":"Day 081","dayNumber":81,"title":"ThrottleLab","slug":"throttlelab","arc":"Systems & Data Foundations","arcId":"systems","phase":"Systems & Data Foundations","phaseId":"systems","stack":["Python","Concurrency","Reliability"],"problemSolved":"Different throttle algorithms behaved differently under bursts.","keyMechanism":"Simulated fixed window, sliding window and token bucket policies against the same traffic traces.","lesson":"Simulation made an invisible policy choice measurable.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-071-to-085-Systems-and-Data-Foundations#day-081-throttlelab"},{"day":"Day 082","dayNumber":82,"title":"QuotaLedger","slug":"quotaledger","arc":"Systems & Data Foundations","arcId":"systems","phase":"Systems & Data Foundations","phaseId":"systems","stack":["Python","SQLite","API"],"problemSolved":"Quota counters reset inconsistently across restarts.","keyMechanism":"Persisted atomic counters and window boundaries in SQLite with idempotent charge keys.","lesson":"Durable counters made quotas enforceable.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-071-to-085-Systems-and-Data-Foundations#day-082-quotaledger"},{"day":"Day 083","dayNumber":83,"title":"MetricsBeacon","slug":"metricsbeacon","arc":"Systems & Data Foundations","arcId":"systems","phase":"Systems & Data Foundations","phaseId":"systems","stack":["Python","HTTP","Observability"],"problemSolved":"Service health was checked by reading logs by hand.","keyMechanism":"Exposed a tiny stdlib metrics endpoint for counters, gauges and uptime with no dependencies.","lesson":"A small, boring endpoint became the foundation for later dashboards.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-071-to-085-Systems-and-Data-Foundations#day-083-metricsbeacon"},{"day":"Day 084","dayNumber":84,"title":"HealthProbe","slug":"healthprobe","arc":"Systems & Data Foundations","arcId":"systems","phase":"Systems & Data Foundations","phaseId":"systems","stack":["Python","SQLite","Observability"],"problemSolved":"Readiness and liveness were treated as the same signal.","keyMechanism":"Separated shallow liveness from dependency-aware readiness with time-bounded checks.","lesson":"Restarting a service that cannot reach its database solves nothing.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-071-to-085-Systems-and-Data-Foundations#day-084-healthprobe"},{"day":"Day 085","dayNumber":85,"title":"TraceContext","slug":"tracecontext","arc":"Systems & Data Foundations","arcId":"systems","phase":"Systems & Data Foundations","phaseId":"systems","stack":["Python","Logging","Observability"],"problemSolved":"Requests crossing components lost their correlation identifiers.","keyMechanism":"Propagated a trace ID through logs, queue messages and HTTP headers with a shared helper.","lesson":"One identifier tied the whole request story together.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-071-to-085-Systems-and-Data-Foundations#day-085-tracecontext"},{"day":"Day 086","dayNumber":86,"title":"DriftCheck","slug":"driftcheck","arc":"Polyglot Vercel Systems","arcId":"polyglot","phase":"Polyglot Vercel Systems","phaseId":"polyglot","stack":["Go","Python","SQLite","Vanilla JS"],"problemSolved":"Configuration drift between staging and production was discovered only during incidents.","keyMechanism":"Go workers hash manifests concurrently behind a bounded semaphore; Python stores signed snapshots in SQLite and emits a zero-TypeScript diff dashboard.","lesson":"Concurrent scanning keeps checks fast while SQLite snapshots make every drift finding reproducible.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems#day-086-driftcheck"},{"day":"Day 087","dayNumber":87,"title":"QueryLens","slug":"querylens","arc":"Polyglot Vercel Systems","arcId":"polyglot","phase":"Polyglot Vercel Systems","phaseId":"polyglot","stack":["Python","SQLite","Go","Vanilla JS"],"problemSolved":"Slow SQLite queries were optimized by guesswork rather than evidence.","keyMechanism":"Python parses EXPLAIN QUERY PLAN output, Go runs timed replays in parallel, and a static HTML report ranks suspected missing indexes.","lesson":"Plans, not opinions, drive index decisions in the capstone data tools.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems#day-087-querylens"},{"day":"Day 088","dayNumber":88,"title":"CertWatch","slug":"certwatch","arc":"Polyglot Vercel Systems","arcId":"polyglot","phase":"Polyglot Vercel Systems","phaseId":"polyglot","stack":["Go","Python","SQLite","Vanilla JS"],"problemSolved":"Expired TLS certificates caused avoidable outages.","keyMechanism":"A Go worker pool performs bounded TLS dials with timeouts, while Python records expiry and renewal state in SQLite for a Vanilla JS status board.","lesson":"Certificate health became a continuously checked invariant instead of a calendar reminder.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems#day-088-certwatch"},{"day":"Day 089","dayNumber":89,"title":"TokenMeter","slug":"tokenmeter","arc":"Polyglot Vercel Systems","arcId":"polyglot","phase":"Polyglot Vercel Systems","phaseId":"polyglot","stack":["Python","Go","SQLite","Security"],"problemSolved":"Token expiry and claim misuse were discovered only after rejected requests.","keyMechanism":"Python validates standard JWT claims with the standard library, Go verifies batches concurrently, and SQLite keeps an auditable usage ledger.","lesson":"Batch verification stays fast without dropping claim-level audit detail.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems#day-089-tokenmeter"},{"day":"Day 090","dayNumber":90,"title":"PortGuard","slug":"portguard","arc":"Polyglot Vercel Systems","arcId":"polyglot","phase":"Polyglot Vercel Systems","phaseId":"polyglot","stack":["Go","Python","SQLite","CLI"],"problemSolved":"Local development failed with confusing port collisions.","keyMechanism":"Go probes candidate TCP ports with concurrent dials and strict timeouts, Python claims reservations in SQLite, and a small HTML view shows the map.","lesson":"Bounded concurrency turns a slow sequential port scan into an instant check.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems#day-090-portguard"},{"day":"Day 091","dayNumber":91,"title":"SchemaDiff","slug":"schemadiff","arc":"Polyglot Vercel Systems","arcId":"polyglot","phase":"Polyglot Vercel Systems","phaseId":"polyglot","stack":["Python","SQLite","Go","CLI"],"problemSolved":"Migrations diverged from the schema they claimed to produce.","keyMechanism":"Python introspects SQLite via PRAGMA and computes a deterministic diff; a Go CI binary fails the build when unexpected changes appear.","lesson":"A deterministic schema diff is the cheapest guardrail in a small data platform.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems#day-091-schemadiff"},{"day":"Day 092","dayNumber":92,"title":"RateLimitSim","slug":"ratelimitsim","arc":"Polyglot Vercel Systems","arcId":"polyglot","phase":"Polyglot Vercel Systems","phaseId":"polyglot","stack":["Go","Python","SQLite","Canvas"],"problemSolved":"Rate limit policies behaved differently under real burst patterns than on paper.","keyMechanism":"Go simulates token buckets with goroutines and atomic counters, Python stores scenarios in SQLite, and a no-library canvas view plots rejections.","lesson":"Concurrency and visualization together expose bursts that averages hide.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems#day-092-ratelimitsim"},{"day":"Day 093","dayNumber":93,"title":"LedgerRecon","slug":"ledgerrecon","arc":"Polyglot Vercel Systems","arcId":"polyglot","phase":"Polyglot Vercel Systems","phaseId":"polyglot","stack":["Python","SQLite","Go","Data"],"problemSolved":"Balances disagreed across imported ledgers with no obvious source.","keyMechanism":"Python performs double-entry reconciliation inside SQLite transactions while Go parses large input files in parallel with checksum verification.","lesson":"Transactional reconciliation plus parallel parsing scales without sacrificing correctness.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems#day-093-ledgerrecon"},{"day":"Day 094","dayNumber":94,"title":"EnvGuard","slug":"envguard","arc":"Polyglot Vercel Systems","arcId":"polyglot","phase":"Polyglot Vercel Systems","phaseId":"polyglot","stack":["Go","Python","SQLite","Security"],"problemSolved":"Secrets and environment mistakes could leak into built frontend assets.","keyMechanism":"Go scans files with compiled regex rules in parallel, Python classifies and stores findings in SQLite, and a plain HTML report guides remediation.","lesson":"Fast scanning plus a persisted finding list makes security checks repeatable.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems#day-094-envguard"},{"day":"Day 095","dayNumber":95,"title":"IndexAudit","slug":"indexaudit","arc":"Polyglot Vercel Systems","arcId":"polyglot","phase":"Polyglot Vercel Systems","phaseId":"polyglot","stack":["Python","SQLite","Go","CLI"],"problemSolved":"Unused indexes slowed writes while providing no read benefit.","keyMechanism":"Python analyses query plans and SQLite statistics, Go orchestrates parallel workload samples, and the static report ranks index candidates.","lesson":"Indexes are treated as a cost that must earn its keep.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems#day-095-indexaudit"},{"day":"Day 096","dayNumber":96,"title":"QueueLag","slug":"queuelag","arc":"Polyglot Vercel Systems","arcId":"polyglot","phase":"Polyglot Vercel Systems","phaseId":"polyglot","stack":["Go","Python","SQLite","Vanilla JS"],"problemSolved":"Queue depth looked healthy while individual jobs waited for hours.","keyMechanism":"Go workers sample oldest-message timestamps concurrently, Python persists lag history in SQLite, and a Vanilla JS dashboard draws inline sparklines.","lesson":"Age distributions reveal backlog pain that a single depth number conceals.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems#day-096-queuelag"},{"day":"Day 097","dayNumber":97,"title":"TraceWaterfall","slug":"tracewaterfall","arc":"Polyglot Vercel Systems","arcId":"polyglot","phase":"Polyglot Vercel Systems","phaseId":"polyglot","stack":["Go","Python","SQLite","Vanilla JS"],"problemSolved":"Latency spikes were visible but their critical path was not.","keyMechanism":"A Go collector buffers spans through channels, Python reconstructs the critical path, and a dependency-free waterfall renderer shows the result.","lesson":"Buffered channels absorb bursts while deterministic span ordering keeps the waterfall honest.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems#day-097-tracewaterfall"},{"day":"Day 098","dayNumber":98,"title":"CircuitBreakerSim","slug":"circuitbreakersim","arc":"Polyglot Vercel Systems","arcId":"polyglot","phase":"Polyglot Vercel Systems","phaseId":"polyglot","stack":["Go","Python","SQLite","Vanilla JS"],"problemSolved":"One slow dependency cascaded into a full-service outage.","keyMechanism":"Go implements a closed/open/half-open state machine with atomic counters, Python drives failure scenarios from SQLite fixtures, and a zero-TypeScript UI visualises state changes.","lesson":"The breaker protects the caller, and the simulator teaches where its thresholds should sit.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems#day-098-circuitbreakersim"},{"day":"Day 099","dayNumber":99,"title":"LogPulse","slug":"logpulse","arc":"Polyglot Vercel Systems","arcId":"polyglot","phase":"Polyglot Vercel Systems","phaseId":"polyglot","stack":["Python","Go","SQLite","Vanilla JS"],"problemSolved":"Log spikes were noticed long after users reported problems.","keyMechanism":"Go tails files with goroutines, Python aggregates patterns with compiled regexes into SQLite rollups, and a polling Vanilla JS chart shows live movement.","lesson":"Streaming aggregation turns logs into an early-warning signal.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems#day-099-logpulse"},{"day":"Day 100","dayNumber":100,"title":"ReleaseGate","slug":"releasegate","arc":"Polyglot Vercel Systems","arcId":"polyglot","phase":"Polyglot Vercel Systems","phaseId":"polyglot","stack":["Go","Python","SQLite","Vercel"],"problemSolved":"Release decisions depended on scattered checks and tribal knowledge.","keyMechanism":"Go runs the capstone checks in parallel, Python records a signed go/no-go decision in SQLite, and the zero-TypeScript Vercel dashboard presents one release verdict.","lesson":"The capstone composes DriftCheck through LogPulse into a single, explainable release decision.","wikiPage":"https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems#day-100-releasegate"}];
/* END GENERATED CATALOG */

const WIKI_BASE = "https://github.com/kennedy-blip/Centuary-Vault/wiki";
const REPO_BASE = "https://github.com/kennedy-blip/Centuary-Vault";

const WIKI_PREVIEWS = {
  home: {
    file: "wiki/Home.md",
    markdown: `# CenturyVault: 100 Projects, One Archive

CenturyVault is a public engineering archive: one hundred small, complete projects
that turn recurring development problems into reusable patterns. The live site is a
high-level index; the GitHub Wiki holds the full architectural breakdowns.

## Architecture philosophy

- **Small surfaces.** Standard-library Python and plain HTML/CSS/JavaScript first.
- **Deterministic engines.** SQLite decision logs, versioned schemas and replayable output.
- **Bounded concurrency.** Go worker pools and channels where parallelism actually helps.
- **Zero TypeScript.** No compiler, no bundler, no framework to maintain.

## Arc map

| Phase | Days | Focus |
| --- | --- | --- |
| Foundations & Apps | 001-070 | Language, data, web, APIs, ML, applied prototypes |
| Systems & Data Foundations | 071-085 | Governance, queuing, quotas, observability |
| Polyglot Vercel Systems | 086-100 | Go + Python + SQLite + Vanilla JS delivery |

## Deep dives

- [Days 001-070](Days-001-to-070-Foundations-and-Apps)
- [Days 071-085](Days-071-to-085-Systems-and-Data-Foundations)
- [Days 086-100](Days-086-to-100-Polyglot-Vercel-Systems)
- [GitHub Wiki Sync Guide](GitHub-Wiki-Sync-Guide)`,
  },
  capstone: {
    file: "wiki/Days-086-to-100-Polyglot-Vercel-Systems.md",
    markdown: `# Days 086 to 100: Polyglot Vercel Systems

The last fifteen days become a platform. Every tool solves a real production problem
with Go concurrency, a Python/SQLite decision engine and a zero-TypeScript report.

## Architecture pattern

1. **Go edge worker.** Bounded goroutines, explicit timeouts, channels.
2. **Python/SQLite engine.** Standard-library handlers, json/math/re, transactional writes.
3. **Zero-TypeScript reporting.** Semantic HTML, CSS variables, Vanilla ES6 fetch.
4. **One Vercel unit.** /api/*.py serverless functions plus public/ static output.

## The fifteen projects

- Day 086 DriftCheck — configuration drift between environments
- Day 087 QueryLens — evidence-based SQLite query plans
- Day 088 CertWatch — TLS certificate expiry checks
- Day 089 TokenMeter — token claim and expiry auditing
- Day 090 PortGuard — deterministic port collision checks
- Day 091 SchemaDiff — migration and schema divergence
- Day 092 RateLimitSim — burst behaviour of throttle policies
- Day 093 LedgerRecon — transactional balance reconciliation
- Day 094 EnvGuard — secret leakage scanning
- Day 095 IndexAudit — index cost and benefit
- Day 096 QueueLag — per-job backlog age
- Day 097 TraceWaterfall — latency critical paths
- Day 098 CircuitBreakerSim — cascading failure protection
- Day 099 LogPulse — early log-spike detection
- Day 100 ReleaseGate — one explainable release verdict

## Cross-cutting lessons

Bounded concurrency beats unbounded parallelism. SQLite is a decision log when writes
are transactional. Deterministic output makes audit and replay possible. A small
frontend is a deployment advantage, not a compromise.`,
  },
};

const SYNC_COMMANDS = [
  {
    label: "1. Clone the Wiki repository",
    command: "git clone https://github.com/kennedy-blip/Centuary-Vault.wiki.git",
  },
  {
    label: "2. Copy the Markdown pages into the Wiki clone",
    command: "cp wiki/*.md Centuary-Vault.wiki/",
  },
  {
    label: "3. Commit and publish",
    command:
      "cd Centuary-Vault.wiki && git add . && git commit -m \"docs: sync CenturyVault wiki\" && git push",
  },
];

const state = {
  projects: [],
  allProjects: [],
  summary: null,
  source: "loading",
  arc: "all",
  stack: "all",
  query: "",
  drawer: null,
  detailDay: null,
  requestId: 0,
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const normalise = (value) =>
  String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const phaseFor = (dayNumber) => {
  if (dayNumber <= 70) return "foundations";
  if (dayNumber <= 85) return "systems";
  return "polyglot";
};

const PHASE_LABEL = {
  foundations: "Foundations & Apps",
  systems: "Systems & Data Foundations",
  polyglot: "Polyglot Vercel Systems",
};

function fetchJSON(url, timeoutMs = 5000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  return fetch(url, { signal: controller.signal, headers: { Accept: "application/json" } })
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .finally(() => clearTimeout(timer));
}

function localProjects({ arc = "all", query = "" } = {}) {
  const tokens = normalise(query).split(/\s+/).filter(Boolean);
  return FALLBACK_CATALOG.filter((project) => {
    if (arc !== "all" && normalise(`${project.arc} ${project.arcId} ${project.phase}`) !== normalise(arc) && !normalise(project.arc).includes(normalise(arc))) {
      return false;
    }
    const haystack = normalise(
      `${project.day} ${project.title} ${project.slug} ${project.problemSolved} ${project.keyMechanism} ${project.stack.join(" ")}`,
    );
    return tokens.every((token) => haystack.includes(token));
  });
}

function computeSummary(projects) {
  const total = projects.length;
  const pct = (count) => (total ? Math.ceil((count / total) * 100) : 0);
  const countWhere = (fn) => projects.filter(fn).length;
  const phaseIds = ["foundations", "systems", "polyglot"];
  const ranges = { foundations: "Days 001-070", systems: "Days 071-085", polyglot: "Days 086-100" };
  const arcs = [...new Set(projects.map((project) => project.arc))]
    .sort()
    .map((arc) => {
      const subset = projects.filter((project) => project.arc === arc);
      return {
        arc,
        slug: normalise(arc).replace(/\s+/g, "-"),
        count: subset.length,
        percentage: pct(subset.length),
        startDay: subset[0]?.day,
        endDay: subset[subset.length - 1]?.day,
      };
    });
  const stackCounts = new Map();
  projects.forEach((project) => project.stack.forEach((token) => stackCounts.set(token, (stackCounts.get(token) || 0) + 1)));
  const stackDistribution = [...stackCounts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([stack, count]) => ({ stack, count, percentage: pct(count) }));
  const groups = {
    Python: ["python"],
    Go: ["go"],
    SQLite: ["sqlite", "sql"],
    "Web / Vanilla JS": ["vanilla js", "html/css", "css variables", "canvas", "pwa", "tailwind", "browser apis"],
    "Data / ML": ["pandas", "numpy", "matplotlib", "scikit-learn", "data", "evaluation", "visualisation", "nlp", "jupyter"],
  };
  const languageMix = Object.entries(groups).map(([label, aliases]) => {
    const count = countWhere((project) =>
      project.stack.some((token) => aliases.some((alias) => normalise(token).includes(alias))),
    );
    return { label, count, percentage: pct(count) };
  });
  const capstone = projects.filter((project) => project.dayNumber >= 86);
  return {
    ok: true,
    source: "offline-fallback",
    totalProjects: total,
    dayRange: { start: projects[0]?.day, end: projects[projects.length - 1]?.day },
    phases: phaseIds.map((id) => {
      const count = countWhere((project) => phaseFor(project.dayNumber) === id);
      return { id, label: PHASE_LABEL[id], range: ranges[id], count, percentage: pct(count) };
    }),
    arcs,
    stackDistribution,
    languageMix,
    architecture: {
      runtime: "Python 3.12 serverless functions + static HTML/CSS/JS",
      typeScriptFiles: 0,
      buildStep: "none",
      notes: ["No TypeScript, no bundler.", "Offline fallback catalog included."],
    },
    capstone: {
      range: "Days 086-100",
      count: capstone.length,
      projects: capstone.map(({ day, title, slug, wikiPage }) => ({ day, title, slug, wikiPage })),
      highlights: capstone.slice(-5).map(({ day, title, lesson, wikiPage }) => ({ day, title, reason: lesson, wikiPage })),
    },
  };
}

function setSource(source, message) {
  state.source = source;
  const badge = $("#source-badge");
  badge.textContent = source === "api" ? "LIVE API" : "OFFLINE FALLBACK";
  badge.dataset.source = source;
  $("#engine-detail").textContent = message;
  document.body.dataset.source = source;
}

async function initialise() {
  renderSkeleton();
  const [projectsResult, summaryResult] = await Promise.allSettled([
    fetchJSON("/api/projects"),
    fetchJSON("/api/summary"),
  ]);

  if (projectsResult.status === "fulfilled" && Array.isArray(projectsResult.value.projects)) {
    state.allProjects = projectsResult.value.projects;
  } else {
    state.allProjects = [...FALLBACK_CATALOG];
  }
  state.summary =
    summaryResult.status === "fulfilled" && summaryResult.value.totalProjects
      ? summaryResult.value
      : computeSummary(state.allProjects);

  const apiLive = projectsResult.status === "fulfilled" && summaryResult.status === "fulfilled";
  setSource(
    apiLive ? "api" : "fallback",
    apiLive
      ? "CenturyVault Engine: Active • 100/100 Projects Indexed"
      : "Engine: Offline mode • 100/100 Projects Indexed from local catalog",
  );
  renderSummary(state.summary);
  renderFilters(state.summary, state.allProjects);
  bindEvents();
  await applyFilters();
}

function renderSkeleton() {
  $("#project-grid").innerHTML = Array.from({ length: 12 }, () => '<div class="card-skeleton"></div>').join("");
}

function renderSummary(summary) {
  const phases = summary.phases || [];
  $("#stat-total").textContent = String(summary.totalProjects ?? summary.total ?? 100);
  $("#stat-arcs").textContent = String((summary.arcs || []).length);
  $("#stat-capstone").textContent = String(summary.capstone?.count ?? 15);
  $("#phase-row").innerHTML = phases
    .map(
      (phase) => `
      <a class="phase-card" href="#catalog" data-phase-filter="${escapeHtml(phase.id)}">
        <span class="phase-card__label">${escapeHtml(phase.label)}</span>
        <span class="phase-card__range">${escapeHtml(phase.range)}</span>
        <span class="phase-card__count">${escapeHtml(phase.count)} <small>projects</small></span>
        <span class="phase-card__bar"><i style="width:${Number(phase.percentage) || 0}%"></i></span>
      </a>`,
    )
    .join("");

  const mix = summary.languageMix || [];
  $("#runtime-mix").innerHTML = mix
    .map(
      (item) => `
      <div class="mix-row">
        <span class="mix-row__label">${escapeHtml(item.label)}</span>
        <span class="mix-row__track"><i style="width:${Number(item.percentage) || 0}%"></i></span>
        <span class="mix-row__value">${escapeHtml(item.count)}</span>
      </div>`,
    )
    .join("");
  $("#architecture-note").textContent = `${summary.architecture?.typeScriptFiles ?? 0} TypeScript files · ${
    summary.architecture?.buildStep ?? "none"
  } build step · ${summary.architecture?.runtime ?? "Python + static frontend"}`;
}

function renderFilters(summary, projects) {
  const arcPills = [{ id: "all", label: "All arcs" }].concat(
    (summary.arcs || []).map((arc) => ({ id: arc.arc, label: arc.arc, count: arc.count })),
  );
  $("#arc-filters").innerHTML = arcPills
    .map(
      (pill) => `<button class="pill" type="button" data-arc="${escapeHtml(pill.id)}" aria-pressed="${
        state.arc === pill.id ? "true" : "false"
      }">${escapeHtml(pill.label)}${pill.count ? `<span class="pill__count">${pill.count}</span>` : ""}</button>`,
    )
    .join("");

  const stackOptions = (summary.languageMix || []).slice(0, 5).map((item) => item.label);
  $("#stack-filters").innerHTML = [{ label: "Any stack" }]
    .concat(stackOptions.map((label) => ({ label })))
    .map(
      (item) => `<button class="pill pill--stack" type="button" data-stack="${escapeHtml(item.label)}" aria-pressed="${
        state.stack === item.label ? "true" : "false"
      }">${escapeHtml(item.label)}</button>`,
    )
    .join("");

  const daySet = new Set(projects.map((project) => project.dayNumber));
  $("#index-integrity").textContent = `${daySet.size}/${summary.totalProjects ?? 100} days indexed`;
}

function matchesStack(project, stack) {
  if (stack === "all" || stack === "Any stack") return true;
  const aliases = {
    Python: ["python"],
    Go: ["go"],
    SQLite: ["sqlite", "sql"],
    "Web / Vanilla JS": ["vanilla js", "html/css", "canvas", "pwa", "tailwind", "browser apis"],
    "Data / ML": ["pandas", "numpy", "matplotlib", "scikit-learn", "data", "ml", "evaluation", "visualisation"],
  }[stack] || [normalise(stack)];
  return project.stack.some((token) => aliases.some((alias) => normalise(token).includes(alias)));
}

async function applyFilters() {
  const requestId = ++state.requestId;
  let projects;
  let usedFallback = false;
  const params = new URLSearchParams();
  if (state.arc !== "all") params.set("arc", state.arc);
  if (state.query) params.set("q", state.query);
  const queryString = params.toString();
  const url = `/api/projects${queryString ? `?${queryString}` : ""}`;

  if (state.source === "api") {
    try {
      const response = await fetchJSON(url, 4000);
      if (!Array.isArray(response.projects)) throw new Error("Malformed API response");
      projects = response.projects;
    } catch (error) {
      usedFallback = true;
      projects = localProjects({ arc: state.arc, query: state.query });
      setSource("fallback", "Engine: Offline mode • filtering against local catalog");
    }
  } else {
    usedFallback = true;
    projects = localProjects({ arc: state.arc, query: state.query });
  }
  if (requestId !== state.requestId) return;
  if (state.stack !== "all" && state.stack !== "Any stack") {
    projects = projects.filter((project) => matchesStack(project, state.stack));
  }
  state.projects = projects;
  renderProjects(projects, usedFallback);
}

function renderProjects(projects, usedFallback) {
  const grid = $("#project-grid");
  $("#result-count").textContent = `${projects.length} ${projects.length === 1 ? "project" : "projects"} shown`;
  $("#filter-note").textContent = `${state.arc === "all" ? "All arcs" : state.arc} · ${
    state.stack === "all" ? "any stack" : state.stack
  }${state.query ? ` · “${state.query}”` : ""}${usedFallback ? " · offline" : ""}`;

  if (!projects.length) {
    grid.innerHTML = `<div class="empty-state"><strong>No projects matched.</strong><span>Try a wider arc, a different stack, or clear the search.</span></div>`;
    return;
  }

  grid.innerHTML = projects
    .map((project) => {
      const phase = phaseFor(project.dayNumber);
      const isFinale = project.dayNumber === 100;
      const badge = project.stack[0] || "Project";
      return `
      <article class="project-card ${isFinale ? "project-card--finale" : ""}" data-day="${project.dayNumber}" tabindex="0" aria-label="Details for ${escapeHtml(project.title)}">
        <div class="project-card__top">
          <span class="day-badge day-badge--${phase}">${escapeHtml(project.day.toUpperCase())}</span>
          <span class="stack-chip">${escapeHtml(badge)}</span>
        </div>
        <h3 class="project-card__title">${escapeHtml(project.title)}</h3>
        <p class="project-card__problem">${escapeHtml(project.problemSolved)}</p>
        <div class="project-card__tags">${project.stack
          .slice(1, 4)
          .map((token) => `<span class="tag tag--${phase}">${escapeHtml(token)}</span>`)
          .join("")}</div>
        <footer class="project-card__footer">
          <a class="wiki-link" href="${escapeHtml(project.wikiPage)}" target="_blank" rel="noopener noreferrer" data-stop>Wiki ↗</a>
          <button class="detail-link" type="button" data-detail="${project.dayNumber}">Mechanism →</button>
        </footer>
      </article>`;
    })
    .join("");
}

function bindEvents() {
  $("#arc-filters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-arc]");
    if (!button) return;
    state.arc = button.dataset.arc;
    state.summary?.phases?.forEach((phase) => {
      const card = document.querySelector(`[data-phase-filter="${phase.id}"]`);
      if (card) card.classList.toggle("is-active", phase.id === state.arc);
    });
    $$("#arc-filters .pill").forEach((pill) =>
      pill.setAttribute("aria-pressed", String(pill.dataset.arc === state.arc)),
    );
    applyFilters();
  });

  $("#stack-filters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-stack]");
    if (!button) return;
    state.stack = button.dataset.stack;
    $$("#stack-filters .pill").forEach((pill) =>
      pill.setAttribute("aria-pressed", String(pill.dataset.stack === state.stack)),
    );
    applyFilters();
  });

  let searchTimer;
  $("#search-input").addEventListener("input", (event) => {
    clearTimeout(searchTimer);
    const value = event.target.value.trim();
    searchTimer = setTimeout(() => {
      state.query = value;
      applyFilters();
    }, 180);
  });

  $("#phase-row").addEventListener("click", (event) => {
    const card = event.target.closest("[data-phase-filter]");
    if (!card) return;
    state.arc = "all";
    state.stack = "all";
    const phase = state.summary?.phases?.find((item) => item.id === card.dataset.phaseFilter);
    const arc = state.summary?.arcs?.find((item) => item.arc === phase?.label);
    state.arc = arc ? arc.arc : "all";
    $$("#arc-filters .pill").forEach((pill) =>
      pill.setAttribute("aria-pressed", String(pill.dataset.arc === state.arc)),
    );
    $$("#stack-filters .pill").forEach((pill) =>
      pill.setAttribute("aria-pressed", String(pill.dataset.stack === "all" || pill.dataset.stack === "Any stack")),
    );
    applyFilters();
    $("#catalog").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  $("#project-grid").addEventListener("click", (event) => {
    if (event.target.closest("[data-stop]")) return;
    const detailButton = event.target.closest("[data-detail]");
    const card = event.target.closest("[data-day]");
    const day = detailButton ? Number(detailButton.dataset.detail) : card ? Number(card.dataset.day) : null;
    if (day) openDetail(day);
  });

  $("#project-grid").addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest("[data-day]");
    if (card) {
      event.preventDefault();
      openDetail(Number(card.dataset.day));
    }
  });

  $("#drawer-backdrop").addEventListener("click", closeDrawer);
  $("#drawer-close").addEventListener("click", closeDrawer);
  $("#wiki-open").addEventListener("click", () => openWiki("guide"));
  $("#wiki-guide-link").addEventListener("click", (event) => {
    event.preventDefault();
    openWiki("guide");
  });

  $("#drawer-tabs").addEventListener("click", (event) => {
    const tab = event.target.closest("[data-tab]");
    if (!tab) return;
    const tabName = tab.dataset.tab;
    if (tabName === "detail") {
      if (state.detailDay) openDetail(state.detailDay);
      return;
    }
    openWiki(tabName);
  });

  $("#drawer-body").addEventListener("click", (event) => {
    const copyButton = event.target.closest("[data-copy]");
    if (copyButton) {
      const index = Number(copyButton.dataset.copy);
      copyText(SYNC_COMMANDS[index].command).then((ok) => {
        copyButton.textContent = ok ? "Copied ✓" : "Select manually";
        setTimeout(() => (copyButton.textContent = "Copy"), 1600);
      });
      return;
    }
    const navButton = event.target.closest("[data-nav-day]");
    if (navButton) openDetail(Number(navButton.dataset.navDay));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.drawer) closeDrawer();
    if (event.key === "/" && !state.drawer && document.activeElement?.tagName !== "INPUT") {
      event.preventDefault();
      $("#search-input").focus();
    }
  });
}

function openDetail(day) {
  const project = state.projects.find((item) => item.dayNumber === day) ||
    state.allProjects.find((item) => item.dayNumber === day) ||
    FALLBACK_CATALOG.find((item) => item.dayNumber === day);
  if (!project) return;
  state.detailDay = day;
  const phase = phaseFor(project.dayNumber);
  const previous = state.allProjects.find((item) => item.dayNumber === day - 1);
  const next = state.allProjects.find((item) => item.dayNumber === day + 1);
  const tabs = [
    { id: "detail", label: "Project detail" },
    { id: "home", label: "Wiki Home" },
    { id: "capstone", label: "Capstone doc" },
    { id: "guide", label: "Sync guide" },
  ];

  openDrawer(tabs, "detail");
  $("#drawer-title").textContent = `${project.day}: ${project.title}`;
  $("#drawer-subtitle").textContent = `${project.arc} · ${project.phase}`;
  $("#drawer-body").innerHTML = `
    <div class="detail-block">
      <span class="section-kicker">Problem solved</span>
      <p>${escapeHtml(project.problemSolved)}</p>
    </div>
    <div class="detail-block">
      <span class="section-kicker">Key mechanism</span>
      <p>${escapeHtml(project.keyMechanism)}</p>
    </div>
    <div class="detail-block">
      <span class="section-kicker">Vault note</span>
      <p>${escapeHtml(project.lesson)}</p>
    </div>
    <div class="detail-block">
      <span class="section-kicker">Stack</span>
      <div class="tag-row">${project.stack.map((token) => `<span class="tag tag--${phase}">${escapeHtml(token)}</span>`).join("")}</div>
    </div>
    <a class="button button--violet" href="${escapeHtml(project.wikiPage)}" target="_blank" rel="noopener noreferrer">Read full Wiki section ↗</a>
    <div class="detail-nav">
      ${previous ? `<button class="button button--ghost" type="button" data-nav-day="${previous.dayNumber}">← ${escapeHtml(previous.title)}</button>` : "<span></span>"}
      ${next ? `<button class="button button--ghost" type="button" data-nav-day="${next.dayNumber}">${escapeHtml(next.title)} →</button>` : ""}
    </div>`;
}

function openWiki(tab) {
  const tabs = [
    { id: "home", label: "Wiki Home" },
    { id: "capstone", label: "Capstone doc" },
    { id: "guide", label: "Sync guide" },
  ];
  if (state.detailDay) tabs.unshift({ id: "detail", label: "Project detail" });
  openDrawer(tabs, tab);

  if (tab === "guide") {
    $("#drawer-title").textContent = "Publish wiki/ to GitHub Wiki";
    $("#drawer-subtitle").textContent = "Four Markdown files · one-time remote setup · plain git push";
    $("#drawer-body").innerHTML = `
      <div class="callout">
        <strong>GitHub Wiki pages are a separate Git repository.</strong>
        <span>The main repository holds <code>wiki/*.md</code>; the Wiki tab serves <code>&lt;repo&gt;.wiki.git</code>.</span>
      </div>
      <ol class="steps">
        <li>Open the repository's <strong>Wiki</strong> tab and create the first page so GitHub initialises the Wiki remote.</li>
        <li>Run the commands below from the repository root.</li>
        <li>Confirm the pages at ${REPO_BASE}/wiki.</li>
      </ol>
      ${SYNC_COMMANDS.map(
        (step, index) => `
        <div class="command-block">
          <div class="command-block__header"><span>${escapeHtml(step.label)}</span><button class="copy-button" type="button" data-copy="${index}">Copy</button></div>
          <pre><code>${escapeHtml(step.command)}</code></pre>
        </div>`,
      ).join("")}
      <div class="file-list">
        ${[
          "wiki/Home.md",
          "wiki/Days-001-to-070-Foundations-and-Apps.md",
          "wiki/Days-071-to-085-Systems-and-Data-Foundations.md",
          "wiki/Days-086-to-100-Polyglot-Vercel-Systems.md",
          "wiki/GitHub-Wiki-Sync-Guide.md",
        ]
          .map((file) => `<code>${escapeHtml(file)}</code>`)
          .join("")}
      </div>`;
    $("#drawer-tabs").querySelector('[data-tab="guide"]')?.classList.add("is-active");
    return;
  }

  const preview = WIKI_PREVIEWS[tab];
  if (!preview) return;
  $("#drawer-title").textContent = preview.file;
  $("#drawer-subtitle").textContent = "Markdown structure preview · full document lives in wiki/";
  $("#drawer-body").innerHTML = `
    <div class="callout callout--violet"><strong>Rendered preview</strong><span>${escapeHtml(preview.file)}</span></div>
    <article class="markdown-preview">${markdownToHtml(preview.markdown)}</article>
    <a class="button button--violet" href="${WIKI_BASE}/${tab === "home" ? "Home" : "Days-086-to-100-Polyglot-Vercel-Systems"}" target="_blank" rel="noopener noreferrer">Open live Wiki page ↗</a>`;
}

function markdownToHtml(markdown) {
  const lines = markdown.split("\n");
  let html = "";
  let listOpen = false;
  let ordered = false;
  const inline = (text) =>
    escapeHtml(text)
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  const closeList = () => {
    if (listOpen) {
      html += ordered ? "</ol>" : "</ul>";
      listOpen = false;
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      closeList();
      continue;
    }
    if (line.startsWith("### ")) {
      closeList();
      html += `<h4>${inline(line.slice(4))}</h4>`;
    } else if (line.startsWith("## ")) {
      closeList();
      html += `<h3>${inline(line.slice(3))}</h3>`;
    } else if (line.startsWith("# ")) {
      closeList();
      html += `<h2>${inline(line.slice(2))}</h2>`;
    } else if (/^\d+\.\s/.test(line)) {
      if (!listOpen || !ordered) {
        closeList();
        html += "<ol>";
        listOpen = true;
        ordered = true;
      }
      html += `<li>${inline(line.replace(/^\d+\.\s/, ""))}</li>`;
    } else if (line.startsWith("- ")) {
      if (!listOpen || ordered) {
        closeList();
        html += "<ul>";
        listOpen = true;
        ordered = false;
      }
      html += `<li>${inline(line.slice(2))}</li>`;
    } else if (line.startsWith("| ")) {
      closeList();
      html += `<p class="md-table-row">${inline(line.replaceAll("|", " │ "))}</p>`;
    } else {
      closeList();
      html += `<p>${inline(line)}</p>`;
    }
  }
  closeList();
  return html;
}

function openDrawer(tabs, activeTab) {
  state.drawer = activeTab;
  $("#drawer").classList.add("is-open");
  $("#drawer").setAttribute("aria-hidden", "false");
  $("#drawer-backdrop").classList.add("is-open");
  document.body.style.overflow = "hidden";
  $("#drawer-tabs").innerHTML = tabs
    .map(
      (tab) =>
        `<button class="drawer-tab ${tab.id === activeTab ? "is-active" : ""}" type="button" data-tab="${tab.id}">${escapeHtml(tab.label)}</button>`,
    )
    .join("");
}

function closeDrawer() {
  state.drawer = null;
  $("#drawer").classList.remove("is-open");
  $("#drawer").setAttribute("aria-hidden", "true");
  $("#drawer-backdrop").classList.remove("is-open");
  document.body.style.overflow = "";
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    textarea.remove();
    return ok;
  }
}

document.addEventListener("DOMContentLoaded", initialise);
