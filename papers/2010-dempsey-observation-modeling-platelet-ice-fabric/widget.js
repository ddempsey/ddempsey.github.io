/* Critical platelet flux widget for Dempsey et al. (2010), J. Geophys. Res. 115, C01007.
   Equation (4), section 5.6 (p. 13 of the PDF): F_crit = (b / V) * dz_int/dt.
   V = (4/3) pi (l/2)^3 / a, with l = 4 mm (para 52) and a = gb/gc = 30 (para 47), giving 1.1e-9 m^3.
   Packing efficiency b: 0.05 to 0.07, the range the paper uses with equation (4) (section 5.6, from Table 3).
   Ice growth rate: 10 mm/day in midwinter (para 52, Purdie et al., 2006). Other rates are illustrative.
   Check: b = 0.05 and 0.07 at 10 mm/day give 4.5 and 6.3 x 10^5 platelets m^-2 d^-1, as in the paper.
   Model simulations formed a layer for F > 5.4 x 10^5 (section 5.6). */
(function () {
  "use strict";
  var root = document.getElementById("w-critical-flux");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var L = 0.004;            // platelet basal dimension, m
  var ASPECT = 30;          // basal to c axis growth ratio
  var V = (4 / 3) * Math.PI * Math.pow(L / 2, 3) / ASPECT; // m^3
  var RMIN = 2, RMAX = 20;  // growth rate axis, mm/day
  var FMAX = 12e5;          // flux axis, platelets m^-2 d^-1

  function fcrit(b, rateMm) { return b / V * rateMm / 1000; }

  var style = document.createElement("style");
  style.textContent =
    "#w-critical-flux{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-critical-flux h4{margin:0 0 6px;font-size:1em}" +
    "#w-critical-flux label{display:block;margin:6px 0 2px}" +
    "#w-critical-flux input[type=range]{width:100%;max-width:420px;accent-color:var(--accent)}" +
    "#w-critical-flux input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-critical-flux svg{display:block;width:100%;max-width:420px;height:auto;margin-top:8px}" +
    "#w-critical-flux .cf-read{margin:8px 0 0;font-weight:600}" +
    "#w-critical-flux .cf-cap{color:var(--muted);font-size:0.85em;margin:6px 0 0}";
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

  mk("h4", root, null, "Platelet supply needed to form a loose layer");
  var sB = slider("cf-packing", 5.0, 7.0, 0.1, 5.0);
  var sR = slider("cf-rate", RMIN, RMAX, 1, 10);

  // Plot: critical flux against ice growth rate for the chosen packing efficiency.
  var W = 420, H = 220, PL = 56, PR = 12, PT = 12, PB = 40;
  var svg = sv("svg", { viewBox: "0 0 " + W + " " + H, role: "img",
    "aria-label": "Critical platelet flux plotted against the rate of ice growth" }, root);
  function px(r) { return PL + (r - RMIN) / (RMAX - RMIN) * (W - PL - PR); }
  function py(f) { return H - PB - f / FMAX * (H - PT - PB); }

  sv("line", { x1: PL, y1: H - PB, x2: W - PR, y2: H - PB, stroke: "var(--muted)" }, svg);
  sv("line", { x1: PL, y1: PT, x2: PL, y2: H - PB, stroke: "var(--muted)" }, svg);
  [2, 5, 10, 15, 20].forEach(function (r) {
    sv("text", { x: px(r), y: H - PB + 14, "text-anchor": "middle", "font-size": 11, fill: "var(--muted)" }, svg, String(r));
  });
  [0, 4, 8, 12].forEach(function (f) {
    sv("text", { x: PL - 6, y: py(f * 1e5) + 4, "text-anchor": "end", "font-size": 11, fill: "var(--muted)" }, svg, String(f));
  });
  sv("text", { x: (PL + W - PR) / 2, y: H - 6, "text-anchor": "middle", "font-size": 11, fill: "var(--fg)" }, svg,
    "Rate of ice growth (mm per day)");
  sv("text", { x: 14, y: (PT + H - PB) / 2, "text-anchor": "middle", "font-size": 11, fill: "var(--fg)",
    transform: "rotate(-90 14 " + (PT + H - PB) / 2 + ")" }, svg, "Critical flux (10^5 per m² per day)");

  // Midwinter rate reported in the paper.
  sv("line", { x1: px(10), y1: PT, x2: px(10), y2: H - PB, stroke: "var(--rule)", "stroke-dasharray": "3 3" }, svg);
  sv("text", { x: px(10) + 4, y: PT + 10, "font-size": 10, fill: "var(--muted)" }, svg, "midwinter, 10 mm/day");

  var curve = sv("line", { stroke: "var(--accent)", "stroke-width": 2 }, svg);
  var dot = sv("circle", { r: 5, fill: "var(--accent)" }, svg);

  var read = mk("p", root, "cf-read");
  read.setAttribute("aria-live", "polite");
  mk("p", root, "cf-cap",
    "From equation (4) of the paper, for platelets 4 mm across with a width 30 times their thickness. " +
    "The packing efficiency range, 5% to 7%, is the one the paper uses with this equation. " +
    "The paper uses a rate of ice growth of 10 mm per day. Other rates are our illustration of the same equation. " +
    "At 10 mm per day, model simulations formed a layer above 5.4 × 10^5 platelets per square metre per day.");

  function fmt(f) { return (f / 1e5).toFixed(1) + " × 10^5"; }

  function update() {
    var b = parseFloat(sB.input.value) / 100;
    var r = parseFloat(sR.input.value);
    sB.label.textContent = "Packing efficiency (fraction of the layer that is ice): " + (b * 100).toFixed(1) + "%";
    sR.label.textContent = "Rate of ice growth: " + r + " mm per day";
    curve.setAttribute("x1", px(RMIN)); curve.setAttribute("y1", py(fcrit(b, RMIN)));
    var rEnd = Math.min(RMAX, FMAX / fcrit(b, 1));
    curve.setAttribute("x2", px(rEnd)); curve.setAttribute("y2", py(fcrit(b, rEnd)));
    var f = fcrit(b, r);
    dot.setAttribute("cx", px(r)); dot.setAttribute("cy", py(Math.min(f, FMAX)));
    var perCm = Math.round(f / 1e4);
    read.textContent = "A loose platelet layer forms if more than " + fmt(f) +
      " platelets arrive per square metre per day, about " + perCm + " per square centimetre per day (our arithmetic).";
  }
  sB.input.addEventListener("input", update);
  sR.input.addEventListener("input", update);
  update();
})();
