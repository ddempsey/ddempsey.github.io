/* Averaging window and random scatter in an earthquake rate, for Yu et al. (2023), J. Geophys. Res. Solid Earth 128,
   e2022JB025952. Illustrative synthetic catalogue. Daily earthquake counts are drawn from a Poisson process
   (the paper's assumption when comparing regression models, Section 2.2) about a slowly varying synthetic rate whose
   median is the paper's Rotokawa median of 7.85 events per day (Section 3.2). The counts are averaged over a trailing
   window, as the paper computes seismicity rates (Section 2.1). Relative scatter 1/sqrt(rate x window) is our arithmetic. */
(function () {
  "use strict";
  var root = document.getElementById("w-avg-window");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg", DAYS = 600, MED = 7.85, AMP = 0.25, PER = 200;

  // Seeded generator (mulberry32) so every viewer sees the same synthetic catalogue.
  function rng(seed) {
    return function () {
      seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function poisson(lam, r) {
    var L = Math.exp(-lam), k = 0, p = 1;
    do { k++; p *= r(); } while (p > L);
    return k - 1;
  }
  function rate(d) { return MED * (1 + AMP * Math.sin(2 * Math.PI * d / PER)); }

  var r = rng(20230416), counts = [], d;
  for (d = 0; d < DAYS; d++) counts.push(poisson(rate(d), r));
  var cum = [0];
  for (d = 0; d < DAYS; d++) cum.push(cum[d] + counts[d]);

  var style = document.createElement("style");
  style.textContent =
    "#w-avg-window{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-avg-window label{display:flex;flex-direction:column;gap:2px;margin-bottom:8px}" +
    "#w-avg-window input[type=range]{width:100%;accent-color:var(--accent)}" +
    "#w-avg-window input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-avg-window svg{display:block;width:100%;height:auto}" +
    "#w-avg-window .aw-read{margin:8px 0 4px;font-weight:600}" +
    "#w-avg-window .aw-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  var lab = document.createElement("label");
  lab.setAttribute("for", "aw-win");
  var span = document.createElement("span");
  lab.appendChild(span);
  var inp = document.createElement("input");
  inp.type = "range"; inp.id = "aw-win"; inp.min = 1; inp.max = 30; inp.step = 1; inp.value = 20;
  lab.appendChild(inp);
  root.appendChild(lab);

  var W = 600, H = 290, X0 = 46, X1 = 584, Y0 = 14, Y1 = 236, YMAX = 22;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);
  var read = document.createElement("p");
  read.className = "aw-read";
  read.setAttribute("aria-live", "polite");
  root.appendChild(read);
  var cap = document.createElement("p");
  cap.className = "aw-cap";
  cap.textContent = "The daily earthquake counts here are simulated for illustration. They are drawn at random about a slowly varying synthetic rate " +
    "(dashed line) with a median of 7.85 events a day, the Rotokawa median reported in the paper. The solid line averages the counts " +
    "over the chosen number of preceding days. The scatter in the readout is our arithmetic, one divided by the square root of the expected count. " +
    "Source of the median rate: Yu et al. (2023), Journal of Geophysical Research: Solid Earth 128.";
  root.appendChild(cap);

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }
  function X(t) { return X0 + (X1 - X0) * t / (DAYS - 1); }
  function Y(v) { return Y1 - (Y1 - Y0) * Math.min(v, YMAX) / YMAX; }

  function render() {
    var w = parseInt(inp.value, 10), j;
    span.textContent = "Averaging window: " + w + (w === 1 ? " day" : " days");
    inp.setAttribute("aria-valuetext", w + (w === 1 ? " day" : " days"));
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    [0, 5, 10, 15, 20].forEach(function (v) {
      el("line", { x1: X0, x2: X1, y1: Y(v), y2: Y(v), stroke: "var(--rule)", "stroke-width": 1 });
      el("text", { x: X0 - 6, y: Y(v) + 5, fill: "var(--muted)", "font-size": 14, "text-anchor": "end" }, String(v));
    });
    for (j = 0; j <= DAYS; j += 100) el("text", { x: X(Math.min(j, DAYS - 1)), y: Y1 + 20, fill: "var(--muted)", "font-size": 14, "text-anchor": "middle" }, String(j));
    el("text", { x: (X0 + X1) / 2, y: Y1 + 42, fill: "var(--fg)", "font-size": 15, "text-anchor": "middle" }, "Day (synthetic catalogue)");
    el("text", { x: 12, y: (Y0 + Y1) / 2, fill: "var(--fg)", "font-size": 15, "text-anchor": "middle", transform: "rotate(-90 12 " + (Y0 + Y1) / 2 + ")" }, "Earthquakes per day");

    var dm = "";
    for (j = 0; j < DAYS; j++) dm += (j ? "L" : "M") + X(j).toFixed(1) + " " + Y(rate(j)).toFixed(1);
    el("path", { d: dm, fill: "none", stroke: "var(--fg)", "stroke-width": 1.5, "stroke-dasharray": "6 4" });

    var da = "";
    for (j = w - 1; j < DAYS; j++) {
      var avg = (cum[j + 1] - cum[j + 1 - w]) / w;
      da += (j === w - 1 ? "M" : "L") + X(j).toFixed(1) + " " + Y(avg).toFixed(1);
    }
    el("path", { d: da, fill: "none", stroke: "var(--accent)", "stroke-width": 2 });

    var n = MED * w, sc = 100 / Math.sqrt(n);
    read.textContent = "Averaging over " + w + (w === 1 ? " day" : " days") + " at 7.85 earthquakes a day counts about " +
      Math.round(n) + " earthquakes. Random scatter is about " + Math.round(sc) + "% of the rate.";
  }
  inp.addEventListener("input", render);
  render();
})();
