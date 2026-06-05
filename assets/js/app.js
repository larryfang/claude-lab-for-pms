/* ============================================================
   Claude Lab — application engine
   Routing, progress, badges, search, quizzes, checklists, confetti.
   ============================================================ */
(function () {
  "use strict";

  var STORE_KEY = "claudelab.v1";
  var COURSE = window.COURSE;
  var MD = window.MD;
  var bodyCache = {};

  /* ---------- State ---------- */
  function loadStore() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveStore() { try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) {} }
  var store = loadStore();
  store.completed = store.completed || {};
  store.checks = store.checks || {};
  store.collapsed = store.collapsed || {};

  /* ---------- Helpers ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $all(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  function allLessons() {
    var out = [];
    COURSE.modules.forEach(function (m) {
      m.lessons.forEach(function (l) { out.push({ lesson: l, module: m }); });
    });
    return out;
  }
  function countableLessons() {
    return allLessons().filter(function (x) { return x.module.id !== "reference"; });
  }
  function lessonById(id) {
    var found = null;
    COURSE.modules.forEach(function (m) {
      m.lessons.forEach(function (l, idx) { if (l.id === id) found = { lesson: l, module: m, idx: idx }; });
    });
    return found;
  }
  function flatOrder() { return allLessons().map(function (x) { return x.lesson.id; }); }

  function progressPct() {
    var c = countableLessons();
    var done = c.filter(function (x) { return store.completed[x.lesson.id]; }).length;
    return { done: done, total: c.length, pct: c.length ? Math.round(done / c.length * 100) : 0 };
  }
  function moduleProgress(m) {
    var done = m.lessons.filter(function (l) { return store.completed[l.id]; }).length;
    return { done: done, total: m.lessons.length, pct: m.lessons.length ? Math.round(done / m.lessons.length * 100) : 0 };
  }

  function earnedBadges() {
    return COURSE.badges.filter(function (b) {
      if (b.when.lesson) return !!store.completed[b.when.lesson];
      if (b.when.module) {
        var m = COURSE.modules.filter(function (x) { return x.id === b.when.module; })[0];
        return m && moduleProgress(m).pct === 100;
      }
      if (b.when.all) return progressPct().pct === 100;
      return false;
    });
  }

  /* ---------- Theme ---------- */
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    var tb = $("#themeBtn"); if (tb) tb.setAttribute("aria-pressed", t === "dark" ? "true" : "false");
    store.theme = t; saveStore();
  }
  (function initTheme() {
    var t = store.theme || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    applyTheme(t);
  })();
  $("#themeBtn").addEventListener("click", function () {
    applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  if (COURSE.meta.repo) $("#githubLink").href = COURSE.meta.repo;

  /* ---------- Top progress ---------- */
  function refreshTopProgress() {
    var p = progressPct();
    $("#topbarProgressFill").style.width = p.pct + "%";
    $("#topbarProgressLabel").textContent = p.pct + "%";
    var tp = $("#topbarProgress"); if (tp) tp.setAttribute("aria-valuenow", p.pct);
  }

  /* ---------- Sidebar nav ---------- */
  function buildNav() {
    var nav = $("#nav");
    nav.innerHTML = "";
    COURSE.modules.forEach(function (m) {
      var mp = moduleProgress(m);
      var collapsed = !!store.collapsed[m.id];
      var group = document.createElement("div");
      group.className = "nav-group" + (collapsed ? " collapsed" : "");
      group.dataset.module = m.id;

      var btn = document.createElement("button");
      btn.className = "nav-group-btn";
      btn.setAttribute("aria-expanded", collapsed ? "false" : "true");
      btn.innerHTML =
        '<span class="nav-group-emoji">' + m.emoji + "</span>" +
        '<span class="nav-group-title">' + m.title + "</span>" +
        '<span class="nav-group-meter">' + mp.done + "/" + mp.total + "</span>" +
        '<span class="nav-group-chev"><svg viewBox="0 0 24 24" width="16" height="16"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg></span>';
      btn.addEventListener("click", function () {
        group.classList.toggle("collapsed");
        var isCollapsed = group.classList.contains("collapsed");
        btn.setAttribute("aria-expanded", isCollapsed ? "false" : "true");
        store.collapsed[m.id] = isCollapsed;
        saveStore();
      });
      group.appendChild(btn);

      var ul = document.createElement("ul");
      ul.className = "nav-lessons";
      m.lessons.forEach(function (l) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.className = "nav-link" + (store.completed[l.id] ? " done" : "");
        a.href = "#/lesson/" + l.id;
        a.dataset.lesson = l.id;
        a.innerHTML =
          '<span class="nav-check">✓</span>' +
          '<span class="nav-title">' + l.title + "</span>" +
          (l.minutes ? '<span class="nav-min">' + l.minutes + "m</span>" : "");
        li.appendChild(a);
        ul.appendChild(li);
      });
      group.appendChild(ul);
      nav.appendChild(group);
    });
  }

  function setActiveNav(id) {
    $all(".nav-link").forEach(function (a) { a.classList.toggle("active", a.dataset.lesson === id); });
    // expand the group containing the active lesson
    var info = lessonById(id);
    if (info) {
      var g = $('.nav-group[data-module="' + info.module.id + '"]');
      if (g && g.classList.contains("collapsed")) { g.classList.remove("collapsed"); var gb = g.querySelector(".nav-group-btn"); if (gb) gb.setAttribute("aria-expanded", "true"); store.collapsed[info.module.id] = false; saveStore(); }
    }
  }

  /* ---------- Levels ---------- */
  function levelChip(level) {
    var map = { Beginner: "level-beginner", Core: "level-core", Advanced: "level-advanced", Reference: "level-core" };
    return '<span class="level-chip ' + (map[level] || "level-core") + '">' + level + "</span>";
  }

  /* ---------- Home ---------- */
  function renderHome() {
    var p = progressPct();
    var resume = countableLessons().filter(function (x) { return !store.completed[x.lesson.id]; })[0];
    var resumeId = resume ? resume.lesson.id : "welcome";
    var resumeLabel = p.done === 0 ? "Start the lab" : (p.pct === 100 ? "Review from the top" : "Resume where you left off");
    var earned = earnedBadges();

    var html = "";
    html += '<section class="hero">';
    html += '<span class="hero-eyebrow">✦ Hands-on · No code required</span>';
    html += "<h1>Become dangerous with <span class=\"grad\">Claude</span> in an afternoon.</h1>";
    html += '<p class="hero-sub">' + COURSE.meta.tagline + "</p>";
    html += '<div class="hero-cta">';
    html += '<a class="btn btn-primary" href="#/lesson/' + resumeId + '">' + resumeLabel + ' <svg viewBox="0 0 24 24" width="18" height="18"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></a>';
    html += '<a class="btn btn-ghost" href="#/lesson/what-is-claude">Read the 2-min primer</a>';
    html += "</div>";
    html += '<div class="hero-stats">';
    html += '<div class="hero-stat"><span class="num">' + countableLessons().length + '</span><span class="lbl">guided lessons</span></div>';
    html += '<div class="hero-stat"><span class="num">' + COURSE.modules.filter(function(m){return m.id!=="reference";}).length + '</span><span class="lbl">modules</span></div>';
    html += '<div class="hero-stat"><span class="num">' + COURSE.badges.length + '</span><span class="lbl">badges to earn</span></div>';
    html += '<div class="hero-stat"><span class="num">~' + Math.round(allLessons().reduce(function (s, x) { return s + (x.lesson.minutes || 0); }, 0) / 60) + 'h</span><span class="lbl">total, at your pace</span></div>';
    html += "</div></section>";

    // dashboard
    html += '<div class="dash">';
    html += '<div class="ring" style="--p:' + p.pct + '"><span class="ring-label">' + p.pct + '%</span></div>';
    html += '<div class="dash-info"><h3>Your progress</h3><p>' + p.done + ' of ' + p.total + ' lessons complete. ' +
      (p.pct === 100 ? "You finished the whole lab — legend. 🏆" : "Pick up any module in any order.") + "</p>";
    html += '<div class="badge-row">';
    COURSE.badges.forEach(function (b) {
      var has = earned.indexOf(b) !== -1;
      html += '<span class="badge ' + (has ? "earned" : "") + '" title="' + (has ? "Earned!" : "Locked") + '">' + (has ? b.emoji : "🔒") + " " + b.label + "</span>";
    });
    html += "</div></div></div>";

    // module grid
    html += '<h2 class="section-title">The path</h2><p class="section-desc">' +
      COURSE.modules.filter(function (m) { return m.id !== "reference"; }).length +
      ' modules. Work top-to-bottom, or jump to what you need.</p>';
    html += '<div class="module-grid">';
    COURSE.modules.forEach(function (m, mi) {
      if (m.id === "reference") return;
      var mp = moduleProgress(m);
      var first = m.lessons[0];
      html += '<a class="module-card" href="#/lesson/' + first.id + '">';
      html += '<span class="mc-step">' + (mi + 1) + "</span>";
      html += '<span class="mc-emoji">' + m.emoji + "</span>";
      html += "<h3>" + m.title + "</h3>";
      html += "<p>" + m.desc + "</p>";
      html += '<div class="mc-foot"><span>' + m.lessons.length + ' lessons</span><span>' + mp.done + "/" + mp.total + " done</span></div>";
      html += '<div class="mc-bar"><div style="width:' + mp.pct + '%"></div></div>';
      html += "</a>";
    });
    html += "</div>";

    // reference row
    var ref = COURSE.modules.filter(function (m) { return m.id === "reference"; })[0];
    if (ref) {
      html += '<h2 class="section-title">📚 Keep these handy</h2><div class="module-grid">';
      ref.lessons.forEach(function (l) {
        html += '<a class="module-card" href="#/lesson/' + l.id + '"><h3>' + l.title + "</h3><p>" + l.summary + "</p></a>";
      });
      html += "</div>";
    }

    html += '<p style="margin-top:48px;color:var(--muted);font-size:.85rem">Built to be remixed. ' +
      '<a href="' + COURSE.meta.repo + '" target="_blank" rel="noopener">Fork it on GitHub</a>, swap in your own examples, and share with your team.</p>';

    $("#content").innerHTML = html;
    setActiveNav(null);
    $all(".nav-link").forEach(function (a) { a.classList.remove("active"); });
    document.title = "Claude Lab — Hands-on Claude for Knowledge Workers";
    window.scrollTo(0, 0);
  }

  /* ---------- Lesson ---------- */
  function fetchBody(file) {
    if (bodyCache[file]) return Promise.resolve(bodyCache[file]);
    return fetch("content/" + file, { cache: "no-cache" }).then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.text();
    }).then(function (t) { bodyCache[file] = t; return t; });
  }

  function renderLesson(id) {
    var info = lessonById(id);
    if (!info) { renderHome(); return; }
    var l = info.lesson, m = info.module;
    var order = flatOrder();
    var pos = order.indexOf(id);
    var prevId = pos > 0 ? order[pos - 1] : null;
    var nextId = pos < order.length - 1 ? order[pos + 1] : null;

    $("#content").innerHTML = '<div class="loading"><div class="spinner"></div><p>Loading lesson…</p></div>';
    window.scrollTo(0, 0);
    setActiveNav(id);
    document.title = l.title + " · Claude Lab";

    fetchBody(l.file).then(function (md) {
      var bodyHtml = MD.render(md, { lessonId: id });
      var html = "";
      html += '<div class="lesson-top">';
      html += '<a class="crumb" href="#/">Home</a><span>›</span>';
      html += '<span class="crumb">' + m.emoji + " " + m.title + "</span>";
      html += '<span style="flex:1"></span>';
      html += '<span class="lesson-meta">' + levelChip(l.level) + (l.minutes ? '<span>· ' + l.minutes + ' min</span>' : "") + "</span>";
      html += "</div>";
      html += '<article class="lesson">' + bodyHtml + "</article>";

      // footer
      html += '<div class="lesson-foot">';
      if (m.id !== "reference") {
        var done = !!store.completed[id];
        html += '<div class="complete-row">';
        html += '<button class="complete-btn' + (done ? " done" : "") + '" id="completeBtn">' +
          (done ? '✓ Completed — nice!' : 'Mark this lesson complete') + "</button>";
        html += '<span class="complete-hint">' + (done ? "You can revisit any time." : "Finish the activities above, then mark it done to track progress.") + "</span>";
        html += "</div>";
      }
      html += '<div class="pager">';
      if (prevId) { var pInfo = lessonById(prevId); html += '<a href="#/lesson/' + prevId + '"><span class="dir">← Previous</span><span class="ptitle">' + pInfo.lesson.title + "</span></a>"; }
      else { html += '<a href="#/"><span class="dir">← Back</span><span class="ptitle">Course home</span></a>'; }
      if (nextId) { var nInfo = lessonById(nextId); html += '<a class="next" href="#/lesson/' + nextId + '"><span class="dir">Next →</span><span class="ptitle">' + nInfo.lesson.title + "</span></a>"; }
      else { html += '<a class="next" href="#/"><span class="dir">Done →</span><span class="ptitle">Back to home</span></a>'; }
      html += "</div></div>";

      $("#content").innerHTML = html;
      wireLesson(id);

      var cb = $("#completeBtn");
      if (cb) cb.addEventListener("click", function () { toggleComplete(id); });
    }).catch(function (err) {
      $("#content").innerHTML = errorHtml(l.file, err);
    });
  }

  function errorHtml(file, err) {
    var isFile = location.protocol === "file:";
    return '<div class="error-box"><h3>⚠️ Couldn\'t load this lesson</h3>' +
      (isFile
        ? "<p>It looks like you opened this file directly from your disk. Browsers block loading lesson files that way for security.</p><p><strong>Quick fix — run a tiny local server:</strong></p><div class=\"codeblock\"><div class=\"codeblock-head\"><span class=\"codeblock-lang\">terminal</span></div><pre><code># from the project folder\npython3 -m http.server 8080\n# then open http://localhost:8080</code></pre></div><p>Or just publish to GitHub Pages — see the README.</p>"
        : "<p>Tried to load <code>content/" + file + "</code> but got: <code>" + (err && err.message ? err.message : err) + "</code>.</p><p>Make sure the file exists and you're serving the site over http(s).</p>") +
      "</div>";
  }

  function toggleComplete(id) {
    var was = !!store.completed[id];
    var prevBadges = earnedBadges().map(function (b) { return b.id; });
    if (was) { delete store.completed[id]; } else { store.completed[id] = true; }
    saveStore();

    // update UI
    var cb = $("#completeBtn");
    if (cb) {
      cb.classList.toggle("done", !was);
      cb.textContent = !was ? "✓ Completed — nice!" : "Mark this lesson complete";
      var hint = $(".complete-hint");
      if (hint) hint.textContent = !was ? "You can revisit any time." : "Finish the activities above, then mark it done to track progress.";
    }
    var navA = $('.nav-link[data-lesson="' + id + '"]');
    if (navA) navA.classList.toggle("done", !was);
    refreshTopProgress();
    refreshNavMeters();

    if (!was) {
      var newBadges = earnedBadges().filter(function (b) { return prevBadges.indexOf(b.id) === -1; });
      if (newBadges.length) {
        burstConfetti();
        toast("🎉 Badge unlocked: " + newBadges[0].emoji + " " + newBadges[0].label);
      } else {
        toast("✓ Marked complete");
      }
    }
  }

  function refreshNavMeters() {
    COURSE.modules.forEach(function (m) {
      var g = $('.nav-group[data-module="' + m.id + '"] .nav-group-meter');
      if (g) { var mp = moduleProgress(m); g.textContent = mp.done + "/" + mp.total; }
    });
  }

  /* ---------- Wire interactive widgets inside a lesson ---------- */
  function wireLesson(id) {
    // restore checklist states
    $all(".check-item", $("#content")).forEach(function (label) {
      var key = label.dataset.lesson + ":" + label.dataset.check;
      var input = label.querySelector("input");
      if (store.checks[key]) { input.checked = true; label.classList.add("checked"); }
      input.addEventListener("change", function () {
        label.classList.toggle("checked", input.checked);
        if (input.checked) store.checks[key] = true; else delete store.checks[key];
        saveStore();
        maybeCelebrateChecklist(label);
      });
    });
  }

  function maybeCelebrateChecklist(label) {
    var list = label.closest(".checklist");
    if (!list) return;
    var inputs = $all('input[type="checkbox"]', list);
    if (inputs.length > 1 && inputs.every(function (i) { return i.checked; })) {
      toast("✅ Checklist complete!");
    }
  }

  // Delegated handlers (copy buttons + quizzes)
  document.addEventListener("click", function (e) {
    var copyBtn = e.target.closest("[data-copy]");
    if (copyBtn) { handleCopy(copyBtn); return; }

    var opt = e.target.closest(".quiz-opt");
    if (opt) { handleQuiz(opt); return; }
  });

  function handleCopy(btn) {
    var text = "";
    var cb = btn.closest(".codeblock");
    if (cb) { var code = cb.querySelector("pre code"); text = code ? code.textContent : ""; }
    else { var pc = btn.closest(".prompt-card"); if (pc) { var body = pc.querySelector(".prompt-body"); text = body ? body.textContent : ""; } }
    if (!text) return;
    var done = function () {
      var old = btn.textContent;
      btn.textContent = "Copied!"; btn.classList.add("copied");
      setTimeout(function () { btn.textContent = old; btn.classList.remove("copied"); }, 1500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function () { legacyCopy(text); done(); });
    } else { legacyCopy(text); done(); }
  }
  function legacyCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }

  function handleQuiz(opt) {
    var q = opt.closest(".quiz-q");
    if (!q || q.classList.contains("answered")) return;
    q.classList.add("answered");
    var correct = opt.dataset.correct === "1";
    opt.classList.add(correct ? "correct" : "wrong");
    if (!correct) {
      var right = q.querySelector('.quiz-opt[data-correct="1"]');
      if (right) right.classList.add("correct");
    }
    $all(".quiz-opt", q).forEach(function (b) { b.disabled = true; });
    var ex = q.querySelector(".quiz-explain");
    if (ex) ex.classList.add("show");
    if (correct) { toast("✓ Correct!"); }
  }

  /* ---------- Toast ---------- */
  var toastTimer;
  function toast(msg) {
    var t = $("#toast");
    if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; t.setAttribute("role", "status"); t.setAttribute("aria-live", "polite"); t.setAttribute("aria-atomic", "true"); document.body.appendChild(t); }
    t.textContent = msg;
    requestAnimationFrame(function () { t.classList.add("show"); });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2600);
  }

  /* ---------- Confetti ---------- */
  function burstConfetti() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var canvas = $("#confetti");
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    canvas.classList.add("active");
    var colors = ["#d97757", "#2f8f6b", "#8b5cf6", "#4a73c4", "#c98a16"];
    var pieces = [];
    for (var i = 0; i < 130; i++) {
      pieces.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: canvas.height / 3,
        vx: (Math.random() - 0.5) * 12,
        vy: Math.random() * -12 - 4,
        size: Math.random() * 8 + 4,
        color: colors[i % colors.length],
        rot: Math.random() * 6.28,
        vr: (Math.random() - 0.5) * 0.3,
        life: 0
      });
    }
    var start = performance.now();
    function frame(now) {
      var elapsed = now - start;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(function (p) {
        p.vy += 0.35; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life++;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        ctx.fillStyle = p.color; ctx.globalAlpha = Math.max(0, 1 - elapsed / 2200);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });
      if (elapsed < 2200) requestAnimationFrame(frame);
      else { ctx.clearRect(0, 0, canvas.width, canvas.height); canvas.classList.remove("active"); }
    }
    requestAnimationFrame(frame);
  }

  /* ---------- Search ---------- */
  var searchSel = -1, searchHits = [], searchReturnFocus = null;
  function openSearch() {
    searchReturnFocus = document.activeElement;
    $("#searchModal").hidden = false;
    var input = $("#searchInput"); input.value = ""; input.focus();
    runSearch("");
  }
  function closeSearch() {
    $("#searchModal").hidden = true; searchSel = -1;
    if (searchReturnFocus && searchReturnFocus.focus) { searchReturnFocus.focus(); }
    searchReturnFocus = null;
  }
  function runSearch(q) {
    q = q.trim().toLowerCase();
    var items = allLessons();
    var hits;
    if (!q) {
      hits = items.slice(0, 8);
    } else {
      hits = items.filter(function (x) {
        var hay = (x.lesson.title + " " + (x.lesson.summary || "") + " " + (x.lesson.keywords || []).join(" ") + " " + x.module.title).toLowerCase();
        return q.split(/\s+/).every(function (w) { return hay.indexOf(w) !== -1; });
      }).slice(0, 12);
    }
    searchHits = hits; searchSel = hits.length ? 0 : -1;
    var ul = $("#searchResults");
    if (!hits.length) { ul.innerHTML = '<li class="search-empty">No matches. Try “skills”, “jira”, or “cowork”.</li>'; return; }
    ul.innerHTML = hits.map(function (x, i) {
      return '<li><a href="#/lesson/' + x.lesson.id + '" class="' + (i === 0 ? "sel" : "") + '" data-i="' + i + '">' +
        '<span class="sr-title">' + x.lesson.title + "</span>" +
        '<span class="sr-group">' + x.module.emoji + " " + x.module.title + "</span></a></li>";
    }).join("");
    $all("#searchResults a").forEach(function (a) {
      a.addEventListener("click", function () { closeSearch(); });
      a.addEventListener("mousemove", function () { setSel(parseInt(a.dataset.i, 10)); });
    });
  }
  function setSel(i) {
    searchSel = i;
    $all("#searchResults a").forEach(function (a, idx) { a.classList.toggle("sel", idx === i); });
  }
  $("#searchBtn").addEventListener("click", openSearch);
  $("#searchInput").addEventListener("input", function (e) { runSearch(e.target.value); });
  $all("[data-close-search]").forEach(function (el) { el.addEventListener("click", closeSearch); });
  $("#searchInput").addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") { e.preventDefault(); setSel(Math.min(searchSel + 1, searchHits.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setSel(Math.max(searchSel - 1, 0)); }
    else if (e.key === "Enter") { e.preventDefault(); if (searchHits[searchSel]) { location.hash = "#/lesson/" + searchHits[searchSel].lesson.id; closeSearch(); } }
  });
  // Keep keyboard focus inside the open dialog (simple trap for this single-input modal).
  $("#searchModal").addEventListener("keydown", function (e) {
    if (e.key === "Tab") { e.preventDefault(); $("#searchInput").focus(); }
  });

  /* ---------- Global keyboard ---------- */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeSearch(); closeNav(); return; }
    var typing = /input|textarea/i.test((e.target.tagName || "")) || e.target.isContentEditable;
    if (e.key === "/" && !typing) { e.preventDefault(); openSearch(); return; }
    if (typing) return;
    // arrow nav between lessons
    var m = location.hash.match(/#\/lesson\/(.+)$/);
    if (m) {
      var order = flatOrder(); var pos = order.indexOf(m[1]);
      if (e.key === "ArrowRight" && pos < order.length - 1) location.hash = "#/lesson/" + order[pos + 1];
      if (e.key === "ArrowLeft" && pos > 0) location.hash = "#/lesson/" + order[pos - 1];
    }
  });

  /* ---------- Mobile nav ---------- */
  function openNav() { $("#sidebar").classList.add("open"); $("#scrim").hidden = false; $("#navToggle").setAttribute("aria-expanded", "true"); }
  function closeNav() { $("#sidebar").classList.remove("open"); $("#scrim").hidden = true; $("#navToggle").setAttribute("aria-expanded", "false"); }
  $("#navToggle").addEventListener("click", function () { $("#sidebar").classList.contains("open") ? closeNav() : openNav(); });
  $("#scrim").addEventListener("click", closeNav);
  $("#nav").addEventListener("click", function (e) { if (e.target.closest(".nav-link") && window.innerWidth <= 980) closeNav(); });

  /* ---------- Reset ---------- */
  $("#resetBtn").addEventListener("click", function () {
    if (confirm("Clear all your saved progress, checklists, and badges? This can't be undone.")) {
      store = { completed: {}, checks: {}, collapsed: {}, theme: store.theme };
      saveStore(); buildNav(); refreshTopProgress(); route(); toast("Progress reset.");
    }
  });

  /* ---------- Router ---------- */
  function route() {
    var hash = location.hash;
    var m = hash.match(/#\/lesson\/(.+)$/);
    if (m) renderLesson(m[1]);
    else renderHome();
  }
  window.addEventListener("hashchange", route);

  /* ---------- Boot ---------- */
  buildNav();
  refreshTopProgress();
  route();
})();
