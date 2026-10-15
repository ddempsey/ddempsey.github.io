/* Critical ice-crystal flux widget for Wongpan et al. (2015), Ann. Glaciol. 56(69), 127-136.
   Relation from section "An advancing interface and a continuous ice flux from the ocean" (p. 133),
   taken from Dempsey and others (2010): phi_crit = (fs / v_pl) * g_int,
   v_pl = (4/3) pi (l/2)^3 / gamma (pi lost in the text extraction, restored: it reproduces the paper's value).
   fs = 0.25 (Smedsrud and Skogseth, 2006; Gough and others, 2012a), gamma = 30 (p. 132).
   Paper values: l = 10 mm, g_int = 2.5e-7 m/s -> phi_crit = 31e4 crystals m^-2 d^-1.
   Simulated supply: phi = 9e4 crystals m^-2 d^-1 (A = 0.1 x 0.1 m^2, one crystal per 100 s).
   Other diameters and rates are our illustration of the same relation. */
(function () {
  "use strict";
  var root = document.getElementById("w-crit-flux");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var FS = 0.25, GAMMA = 30, SUPPLY = 9e4, DAY = 86400;
  var DMIN = 2, DMAX = 20;          // crystal diameter axis, mm
  var LOGMIN = 4, LOGMAX = 8;       // flux axis, log10(crystals m^-2 d^-1)

  function vpl(dMm) { var l = dMm / 1000; return (4 / 3) * Math.PI * Math.pow(l / 2, 3) / GAMMA; }
  function crit(dMm, g7) { return FS / vpl(dMm) * g7 * 1e-7 * DAY; }

  var style = document.createElement("style");
  style.textContent =
    "#w-crit-flux{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-crit-flux h4{margin:0 0 6px;font-size:1em}" +
    "#w-crit-flux label{display:block;margin:6px 0 2px}" +
    "#w-crit-flux input[type=range]{width:100%;max-width:420px;accent-color:var(--accent)}" +
    "#w-crit-flux input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-crit-flux svg{display:block;width:100%;max-width:420px;height:auto;margin-top:8px}" +
    "#w-crit-flux .cx-read{margin:8px 0 0;font-weight:600}" +
    "#w-crit-flux .cx-cap{color:var(--muted);font-size:0.85em;margin:6px 0 0}";
  root.appendChild(style);

  function mk(tag, parent, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    parent.appendChild(e);
    return e;
  }
  function sv(name, attrs, parent, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    parent.appendChild(e);
    return e;
  }
  function slider(id, min, max, step, value) {
    var lab = mk("label", root);
    lab.setAttribute("for", id);
    var span = mk("span", lab);
    var inp = document.createElement("input");
    inp.type = "range"; inp.id = id;
    inp.min = min; inp.max = max; inp.step = step; inp.value = value;
    root.appendChild(inp);
    return { input: inp, label: span };
  }

  mk("h4", root, null, "Crystal supply needed to keep a sub-ice platelet layer");
  var sD = slider("cx-diam", DMIN, DMAX, 1, 10);
  var sG = slider("cx-rate", 1.0, 5.0, 0.1, 2.5);

  var W = 420, H = 230, PL = 56, PR = 12, PT = 12, PB = 40;
  var svg = sv("svg", { viewBox: "0 0 " + W + " " + H, role: "img",
    "aria-label": "Critical crystal flux plotted against crystal diameter, with the simulated supply as a horizontal line" }, root);
  function px(d) { return PL + (d - DMIN) / (DMAX - DMIN) * (W - PL - PR); }
  function py(f) {
    var lf = Math.max(LOGMIN, Math.min(LOGMAX, Math.log(f) / Math.LN10));
    return H - PB - (lf - LOGMIN) / (LOGMAX - LOGMIN) * (H - PT - PB);
  }

  sv("line", { x1: PL, y1: H - PB, x2: W - PR, y2: H - PB, stroke: "var(--muted)" }, svg);
  sv("line", { x1: PL, y1: PT, x2: PL, y2: H - PB, stroke: "var(--muted)" }, svg);
  [2, 5, 10, 15, 20].forEach(function (d) {
    sv("text", { x: px(d), y: H - PB + 14, "text-anchor": "middle", "font-size": 11, fill: "var(--muted)" }, svg, String(d));
  });
  [4, 5, 6, 7, 8].forEach(function (e) {
    sv("text", { x: PL - 6, y: py(Math.pow(10, e)) + 4, "text-anchor": "end", "font-size": 11, fill: "var(--muted)" }, svg, "10^" + e);
  });
  sv("text", { x: (PL + W - PR) / 2, y: H - 6, "text-anchor": "middle", "font-size": 11, fill: "var(--fg)" }, svg,
    "Crystal diameter (mm)");
  sv("text", { x: 14, y: (PT + H - PB) / 2, "text-anchor": "middle", "font-size": 11, fill: "var(--fg)",
    transform: "rotate(-90 14 " + (PT + H - PB) / 2 + ")" }, svg, "Crystals per m² per day");

  // Simulated supply in the paper's second scenario.
  sv("line", { x1: PL, y1: py(SUPPLY), x2: W - PR, y2: py(SUPPLY), stroke: "var(--muted)", "stroke-dasharray": "4 3" }, svg);
  sv("text", { x: W - PR - 4, y: py(SUPPLY) - 5, "text-anchor": "end", "font-size": 10, fill: "var(--muted)" }, svg,
    "simulated supply, 9 × 10^4");

  var curve = sv("polyline", { fill: "none", stroke: "var(--accent)", "stroke-width": 2 }, svg);
  var dot = sv("circle", { r: 5, fill: "var(--accent)" }, svg);

  var read = mk("p", root, "cx-read");
  read.setAttribute("aria-live", "polite");
  mk("p", root, "cx-cap",
    "From the relation the paper takes from Dempsey and others (2010), with a solid fraction of 0.25 and crystals 30 times wider than thick. " +
    "The paper evaluates it for 10 mm crystals and an ice base advancing at 2.5 × 10^-7 m/s, giving 31 × 10^4 crystals per square metre per day. " +
    "Other diameters and rates are our illustration of the same relation. With a supply below the curve, the advancing ice eventually freezes the whole layer into the sea ice.");

  function fmt(f) {
    if (f < 1e6) return Math.round(f / 1e4) + " × 10^4";
    var e = Math.floor(Math.log(f) / Math.LN10);
    return (f / Math.pow(10, e)).toFixed(1) + " × 10^" + e;
  }

  function update() {
    var d = parseFloat(sD.input.value);
    var g = parseFloat(sG.input.value);
    var cmDay = g * 1e-7 * DAY * 100;
    sD.label.textContent = "Diameter of arriving crystals: " + d + " mm";
    sG.label.textContent = "Advance of the ice base: " + g.toFixed(1) + " × 10^-7 m/s (" + cmDay.toFixed(1) + " cm per day)";
    var pts = [];
    for (var x = DMIN; x <= DMAX + 1e-9; x += 0.25) pts.push(px(x).toFixed(1) + "," + py(crit(x, g)).toFixed(1));
    curve.setAttribute("points", pts.join(" "));
    var f = crit(d, g);
    dot.setAttribute("cx", px(d)); dot.setAttribute("cy", py(f));
    var pct = Math.round(SUPPLY / f * 100);
    var verdict = SUPPLY >= f
      ? "The simulated supply of 9 × 10^4 would sustain the layer."
      : "The simulated supply of 9 × 10^4 is " + pct + "% of this. The advancing ice eventually freezes the layer in.";
    read.textContent = "A layer needs about " + fmt(f) + " crystals per square metre per day. " + verdict;
  }
  sD.input.addEventListener("input", update);
  sG.input.addEventListener("input", update);
  update();
})();
