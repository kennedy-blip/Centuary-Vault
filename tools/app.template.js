/* CenturyVault — Vanilla ES6+ frontend. No TypeScript, no bundler, no build step. */
/* Global catalog fallback is generated from tools/catalog_data.py. */

/* BEGIN GENERATED CATALOG */
const FALLBACK_CATALOG = [];
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
