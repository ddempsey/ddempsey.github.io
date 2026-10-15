/* Equal voting system for Parker et al. (2026), New Zealand Journal of Geology and
   Geophysics 69, e70064. The reader picks the group predicted by each of the four
   algorithms. The widget applies the paper's confidence-category rules (Section 4)
   and shows how many of the 132 test samples were in each category (Section 4). */
(function () {
  "use strict";
  var root = document.getElementById("w-tct-vote");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var GROUPS = ["Rakaia PF1–3", "Rakaia PF4", "Kaweka Terrane", "Pahau Terrane"];
  var ALGS = [
    { id: "lsvm", name: "Linear support vector machine" },
    { id: "knn", name: "k-nearest neighbours" },
    { id: "rf", name: "Random forest" },
    { id: "nn", name: "Neural network" }
  ];
  // Test-set counts per category, from Section 4 (87, 26, 17 and 2 of 132).
  // E has no samples: the four reported counts add to 132.
  var CATS = {
    A: { n: 87, rule: "All four algorithms predict the same group.", note: " 16 of all 132 test samples were category A and assigned the wrong group." },
    B: { n: 26, rule: "Three algorithms agree and one predicts a different group.", note: "" },
    C: { n: 17, rule: "Two groups each get two votes. The sample is assigned to both, shared equally.", note: "" },
    D: { n: 2, rule: "Three groups are predicted, one of them by two algorithms. No group is assigned.", note: "" },
    E: { n: 0, rule: "All four algorithms predict different groups. No group is assigned.", note: "" }
  };
  var ORDER = ["A", "B", "C", "D", "E"];
  var TOTAL = 132;
  var PRESETS = [
    { t: "All agree", v: [2, 2, 2, 2] },
    { t: "Three agree", v: [0, 0, 3, 0] },
    { t: "Two and two", v: [0, 1, 0, 1] },
    { t: "Two, one, one", v: [3, 3, 0, 1] },
    { t: "All differ", v: [0, 1, 2, 3] }
  ];

  var style = document.createElement("style");
  style.textContent =
    "#w-tct-vote{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-tct-vote .tv-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px;margin:0 0 8px}" +
    "#w-tct-vote label{display:flex;flex-direction:column;gap:2px;font-size:0.9em}" +
    "#w-tct-vote .tv-row{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 8px;align-items:center}" +
    "#w-tct-vote select,#w-tct-vote button{font:inherit;color:var(--fg);background:transparent;border:1px solid var(--rule);border-radius:4px;padding:2px 8px;max-width:100%}" +
    "#w-tct-vote option{color:#000}" +
    "#w-tct-vote button:focus-visible,#w-tct-vote select:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-tct-vote svg{display:block;width:100%;max-width:520px;height:auto}" +
    "#w-tct-vote .tv-read{margin:8px 0 4px}" +
    "#w-tct-vote .tv-read strong{display:block}" +
    "#w-tct-vote .tv-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  function mk(tag, attrs, text) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    return e;
  }

  var grid = mk("div", { "class": "tv-grid" });
  var sels = ALGS.map(function (a, i) {
    var lab = mk("label", { "for": "tv-" + a.id }, a.name);
    var sel = mk("select", { id: "tv-" + a.id });
    GROUPS.forEach(function (g, j) { sel.appendChild(mk("option", { value: String(j) }, g)); });
    sel.value = String(PRESETS[0].v[i]);
    sel.addEventListener("change", render);
    lab.appendChild(sel);
    grid.appendChild(lab);
    return sel;
  });
  root.appendChild(grid);

  var row = mk("div", { "class": "tv-row", role: "group", "aria-label": "Example vote patterns" });
  row.appendChild(mk("span", {}, "Examples:"));
  PRESETS.forEach(function (p) {
    var b = mk("button", { type: "button" }, p.t);
    b.addEventListener("click", function () {
      sels.forEach(function (s, i) { s.value = String(p.v[i]); });
      render();
    });
    row.appendChild(b);
  });
  root.appendChild(row);

  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 520 150");
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = mk("div", { "class": "tv-read", "aria-live": "polite" });
  root.appendChild(read);
  root.appendChild(mk("p", { "class": "tv-cap" },
    "Bars show the number of the 132 test samples in each confidence category. " +
    "The vote patterns are chosen by the reader and do not represent particular samples. " +
    "Category rules and counts are from Section 4 of Parker et al. (2026), " +
    "New Zealand Journal of Geology and Geophysics 69, e70064."));

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }

  function classify(votes) {
    var counts = {};
    votes.forEach(function (v) { counts[v] = (counts[v] || 0) + 1; });
    var keys = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; });
    var top = counts[keys[0]];
    if (keys.length === 1) return { cat: "A", groups: [keys[0]] };
    if (top === 3) return { cat: "B", groups: [keys[0]] };
    if (keys.length === 2) return { cat: "C", groups: keys.slice().sort() };
    if (keys.length === 3) return { cat: "D", groups: [] };
    return { cat: "E", groups: [] };
  }

  function render() {
    var votes = sels.map(function (s) { return s.value; });
    var res = classify(votes);
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var X0 = 40, BW = 80, GAP = 16, BASE = 118, HMAX = 90;
    el("line", { x1: X0 - 6, x2: X0 + 5 * (BW + GAP) - GAP + 6, y1: BASE, y2: BASE, stroke: "var(--rule)" });
    ORDER.forEach(function (c, i) {
      var n = CATS[c].n, h = HMAX * n / CATS.A.n, x = X0 + i * (BW + GAP), on = c === res.cat;
      el("rect", { x: x, y: BASE - h, width: BW, height: Math.max(h, 0.5),
        fill: on ? "var(--accent)" : "var(--muted)", "fill-opacity": on ? 1 : 0.35,
        stroke: on ? "var(--fg)" : "none" });
      el("text", { x: x + BW / 2, y: BASE - h - 6, fill: "var(--fg)", "font-size": 13, "text-anchor": "middle" }, String(n));
      el("text", { x: x + BW / 2, y: BASE + 20, fill: "var(--fg)", "font-size": 15, "text-anchor": "middle", "font-weight": on ? 700 : 400 }, c);
    });
    el("text", { x: 4, y: 14, fill: "var(--muted)", "font-size": 12 }, "Test samples per category (of 132)");

    var info = CATS[res.cat];
    var assigned = res.groups.length === 0 ? "No group assigned." :
      res.groups.length === 1 ? "Assigned to " + GROUPS[+res.groups[0]] + "." :
      "Shared between " + GROUPS[+res.groups[0]] + " and " + GROUPS[+res.groups[1]] + ".";
    var share = info.n === 0 ? "No test samples were in this category." :
      info.n + " of " + TOTAL + " test samples were in this category." + info.note;
    read.textContent = "";
    read.appendChild(mk("strong", {}, "Category " + res.cat + ". " + assigned));
    read.appendChild(document.createTextNode(info.rule + " " + share));
  }

  render();
})();
