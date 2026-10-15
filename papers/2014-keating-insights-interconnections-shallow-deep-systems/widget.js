/* Widget for Keating et al. (2014), International Journal of Greenhouse Gas Control 25, 162-172.
   Panel 1: sum of squared errors between simulated and measured drawdown for three conceptual
            models of the fault zone (Table 4).
   Panel 2: shallow groundwater chemistry against chloride for 8 production wells and 3 Salado
            Springs samples (Table 1: Cl, HCO3, SO4; Table 2: Li, Rb, As), in mg/l.
   Table values were checked against a second (Docling) extraction of the PDF. Only values
   stated in the paper are plotted. The count of samples above the arsenic limit is ours. */
(function () {
  "use strict";
  var root = document.getElementById("w-springerville");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";

  var FAULT = [
    { n: "Flow-neutral fault zone", p: 1087, m: 133, d: "no distinct hydraulic properties" },
    { n: "Distinct fault zone, shallow only", p: 5358, m: 10, d: "a distinct zone reaching only to the base of the deepest production well" },
    { n: "Distinct fault zone, full penetration", p: 598, m: 6, d: "a distinct zone through the full model thickness" }
  ];

  // [sample, Cl, HCO3, SO4, Li, Rb, As, isSalado]
  var S = [
    ["P-7a", 146, 458, 259, 0.18, 0.044, 0.003, 0],
    ["P-8a", 190, 522, 345, 0.24, 0.055, 0.012, 0],
    ["P-9a", 491, 754, 710, 0.57, 0.107, 0.042, 0],
    ["P-10a", 213, 563, 379, 0.26, 0.062, 0.018, 0],
    ["P-16", 138, 467, 252, 0.18, 0.049, 0.011, 0],
    ["P-18", 414, 710, 692, 0.47, 0.100, 0.035, 0],
    ["P-19", 215, 559, 402, 0.25, 0.069, 0.016, 0],
    ["P-20", 175, 516, 323, 0.23, 0.061, 0.014, 0],
    ["Salado 1 (spring)", 473, 744, 710, 0.55, 0.100, 0.016, 1],
    ["Salado 2 (spring)", 449, 758, 707, 0.50, 0.098, 0.009, 1],
    ["Salado 3 (well)", 449, 769, 688, 0.53, 0.102, 0.021, 1]
  ];
  var EL = [
    { n: "Bicarbonate", c: 2, max: 800, t: "Bicarbonate rises with chloride in the wells and at Salado Springs." },
    { n: "Sulfate", c: 3, max: 800, t: "Sulfate rises with chloride in the wells and at Salado Springs." },
    { n: "Lithium", c: 4, max: 0.6, t: "Lithium rises with chloride, and Salado Springs fall on the same trend as the wells." },
    { n: "Rubidium", c: 5, max: 0.12, t: "Rubidium rises with chloride, and Salado Springs fall on the same trend as the wells." },
    { n: "Arsenic", c: 6, max: 0.045, lim: 0.010, t: "Arsenic rises with chloride in the production wells, but Salado Springs fall below that trend. Of the 11 samples, 9 exceed the 0.010 mg/l limit (our count)." }
  ];

  var style = document.createElement("style");
  style.textContent =
    "#w-springerville{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-springerville .sv-part{margin:0 0 16px}" +
    "#w-springerville h4{margin:0 0 6px;font-size:1em}" +
    "#w-springerville label{display:block;margin:4px 0}" +
    "#w-springerville select{max-width:100%;font:inherit;color:var(--fg);background:var(--panel);border:1px solid var(--rule);padding:2px 4px}" +
    "#w-springerville select:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-springerville svg{display:block;width:100%;max-width:440px;height:auto;margin-top:6px}" +
    "#w-springerville .sv-read{margin:6px 0 0;font-weight:600}" +
    "#w-springerville .sv-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
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
  function clear(e) { while (e.firstChild) e.removeChild(e.firstChild); }
  function fmt(v) { return v.toLocaleString("en-NZ"); }
  var uid = 0;
  function select(parent, labelText, items) {
    var id = "w-springerville-s" + (uid++);
    var lab = mk("label", parent, null, labelText);
    lab.setAttribute("for", id);
    var sel = mk("select", parent);
    sel.id = id;
    items.forEach(function (it, i) {
      var o = mk("option", sel, null, it.n);
      o.value = String(i);
    });
    return sel;
  }

  /* Panel 1: fault models */
  var p1 = mk("div", root, "sv-part");
  mk("h4", p1, null, "Which fault model matches the measured drawdown?");
  var sel1 = select(p1, "Fault zone model", FAULT);
  var svg1 = sv("svg", { viewBox: "0 0 440 150", role: "img" }, p1);
  var read1 = mk("p", p1, "sv-read");
  read1.setAttribute("aria-live", "polite");
  mk("p", p1, "sv-cap", "Sum of squared errors between simulated and measured drawdown (Table 4 of the paper). A smaller value is a better match. Each group of bars has its own scale.");

  function draw1() {
    var k = +sel1.value;
    clear(svg1);
    sv("title", {}, svg1, "Sum of squared errors for the three fault zone models");
    var groups = [
      { n: "Production wells (15)", key: "p", y: 8 },
      { n: "Monitoring wells (6)", key: "m", y: 80 }
    ];
    groups.forEach(function (g) {
      var mx = Math.max.apply(null, FAULT.map(function (f) { return f[g.key]; }));
      sv("text", { x: 0, y: g.y + 10, fill: "var(--fg)", "font-size": 12 }, svg1, g.n);
      FAULT.forEach(function (f, i) {
        var y = g.y + 16 + i * 18;
        var w = Math.max(2, 260 * f[g.key] / mx);
        sv("rect", { x: 110, y: y, width: w, height: 13, fill: i === k ? "var(--accent)" : "var(--muted)", opacity: i === k ? 1 : 0.45 }, svg1);
        sv("text", { x: 0, y: y + 11, fill: "var(--muted)", "font-size": 10 }, svg1, ["Flow-neutral", "Shallow only", "Full depth"][i]);
        sv("text", { x: 114 + w, y: y + 11, fill: "var(--fg)", "font-size": 11 }, svg1, fmt(f[g.key]));
      });
    });
    var f = FAULT[k];
    var best = k === 2 ? " This is the best match of the three." : "";
    read1.textContent = f.n + " (" + f.d + "): sum of squared errors " + fmt(f.p) +
      " for the production wells and " + fmt(f.m) + " for the monitoring wells." + best;
  }

  /* Panel 2: chemistry against chloride */
  var p2 = mk("div", root, "sv-part");
  mk("h4", p2, null, "Shallow groundwater chemistry against chloride");
  var sel2 = select(p2, "Element or ion plotted against chloride", EL);
  sel2.value = "4";
  var svg2 = sv("svg", { viewBox: "0 0 440 260", role: "img" }, p2);
  var read2 = mk("p", p2, "sv-read");
  read2.setAttribute("aria-live", "polite");
  mk("p", p2, "sv-cap", "Filled circles are production wells and open squares are Salado Springs. Concentrations in mg/l, from Tables 1 and 2 of the paper. The dashed line is the 0.010 mg/l drinking water limit for arsenic.");

  function draw2() {
    var e = EL[+sel2.value];
    clear(svg2);
    sv("title", {}, svg2, e.n + " against chloride for 11 groundwater samples");
    var L = 56, R = 428, T = 10, B = 220, XMAX = 500;
    function X(v) { return L + (R - L) * v / XMAX; }
    function Y(v) { return B - (B - T) * v / e.max; }
    sv("line", { x1: L, y1: B, x2: R, y2: B, stroke: "var(--rule)" }, svg2);
    sv("line", { x1: L, y1: T, x2: L, y2: B, stroke: "var(--rule)" }, svg2);
    [0, 100, 200, 300, 400, 500].forEach(function (v) {
      sv("text", { x: X(v), y: B + 14, fill: "var(--muted)", "font-size": 10, "text-anchor": "middle" }, svg2, String(v));
    });
    [0, 0.5, 1].forEach(function (fr) {
      var v = e.max * fr;
      sv("text", { x: L - 4, y: Y(v) + 3, fill: "var(--muted)", "font-size": 10, "text-anchor": "end" }, svg2, String(+v.toPrecision(3)));
    });
    sv("text", { x: (L + R) / 2, y: B + 32, fill: "var(--fg)", "font-size": 11, "text-anchor": "middle" }, svg2, "Chloride (mg/l)");
    sv("text", { x: 12, y: (T + B) / 2, fill: "var(--fg)", "font-size": 11, "text-anchor": "middle", transform: "rotate(-90 12 " + (T + B) / 2 + ")" }, svg2, e.n + " (mg/l)");
    if (e.lim) {
      sv("line", { x1: L, y1: Y(e.lim), x2: R, y2: Y(e.lim), stroke: "var(--fg)", "stroke-dasharray": "4 3" }, svg2);
      sv("text", { x: R, y: Y(e.lim) - 4, fill: "var(--fg)", "font-size": 10, "text-anchor": "end" }, svg2, "limit 0.010");
    }
    S.forEach(function (r) {
      var x = X(r[1]), y = Y(r[e.c]), g;
      if (r[7]) {
        g = sv("rect", { x: x - 5, y: y - 5, width: 10, height: 10, fill: "none", stroke: "var(--fg)", "stroke-width": 1.5 }, svg2);
      } else {
        g = sv("circle", { cx: x, cy: y, r: 5, fill: "var(--accent)" }, svg2);
      }
      sv("title", {}, g, r[0] + ": chloride " + r[1] + ", " + e.n.toLowerCase() + " " + r[e.c] + " mg/l");
    });
    read2.textContent = e.t;
  }

  sel1.addEventListener("change", draw1);
  sel2.addEventListener("change", draw2);
  sel1.value = "2";
  draw1();
  draw2();
})();
