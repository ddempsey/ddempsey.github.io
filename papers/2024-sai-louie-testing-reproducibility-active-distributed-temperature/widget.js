/* Sensitivity widget for Sai Louie et al. (2024), Journal of Hydrology 633, 130877.
   All values are from Table 1 of the paper (sensitivity analysis of the MILS model for the
   sixth survey, S6). r = effective radial distance between heating wires and optical fibres,
   K = thermal conductivity. Average specific discharge q and its range along the cable are
   shown for the eight combinations that use this experiment's data. The ninth row of Table 1
   (Banks et al. 2022 raw data) is a different survey and is left out. Combinations that the
   table does not contain are reported as not tested. */
(function () {
  "use strict";
  var root = document.getElementById("w-adts-sensitivity");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var BASE = 3.8; // m/d, base case r = 1.8 mm, K fitted (Table 1)

  var R = [
    { id: "0.7", label: "0.7 mm (measured under a microscope)" },
    { id: "1.8", label: "1.8 mm (base case, optimal value from the analysis)" },
    { id: "3.0", label: "3.0 mm (value used by Banks et al., 2022)" }
  ];
  var K = [
    { id: "fit", label: "Fitted by the model at each location" },
    { id: "0.56", label: "0.56 W/m/°C (value used by Banks et al., 2022)" },
    { id: "0.90", label: "0.90 W/m/°C (intermediate value tested in the paper)" },
    { id: "2.38", label: "2.38 W/m/°C (measured on core in the laboratory)" }
  ];
  // Table 1 rows: q average and range in m/d; kfit = average (range) of fitted K in W/m/°C.
  var ROWS = [
    { r: "1.8", k: "fit", q: 3.8, lo: "1.3", hi: "5.1", kfit: "1.33 (0.40 to 1.89)" },
    { r: "0.7", k: "fit", q: 1.5, lo: "1.1", hi: "2.0", kfit: "1.32 (0.51 to 1.87)" },
    { r: "1.8", k: "0.90", q: 3.0, lo: "close to 0", hi: "3.9" },
    { r: "0.7", k: "2.38", q: 2.4, lo: "1.3", hi: "5.1" },
    { r: "1.8", k: "2.38", q: 6.3, lo: "3.3", hi: "13.1" },
    { r: "3.0", k: "2.38", q: 10.4, lo: "5.5", hi: "21.8" },
    { r: "3.0", k: "fit", q: 0.6, lo: "0.5", hi: "0.8", kfit: "1.32 (0.51 to 1.86)" },
    { r: "3.0", k: "0.56", q: 18.1, lo: "close to 0", hi: "43.0" }
  ];
  var QMAX = 20;

  var style = document.createElement("style");
  style.textContent =
    "#w-adts-sensitivity{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-adts-sensitivity h4{margin:0 0 8px;font-size:1em}" +
    "#w-adts-sensitivity label{display:block;margin:6px 0 2px}" +
    "#w-adts-sensitivity select{max-width:100%;font:inherit;color:var(--fg);background:var(--panel);border:1px solid var(--rule);padding:2px 4px}" +
    "#w-adts-sensitivity select:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-adts-sensitivity svg{display:block;width:100%;max-width:440px;height:auto;margin-top:10px}" +
    "#w-adts-sensitivity .wa-read{margin:8px 0 0;font-weight:600}" +
    "#w-adts-sensitivity .wa-cap{color:var(--muted);font-size:0.85em;margin:6px 0 0}";
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
    for (var a in attrs) e.setAttribute(a, attrs[a]);
    if (text != null) e.textContent = text;
    parent.appendChild(e);
    return e;
  }
  function select(parent, id, text, opts, initial) {
    var lab = mk("label", parent, null, text);
    lab.setAttribute("for", id);
    var s = document.createElement("select");
    s.id = id;
    for (var i = 0; i < opts.length; i++) {
      var o = document.createElement("option");
      o.value = opts[i].id;
      o.textContent = opts[i].label;
      s.appendChild(o);
    }
    s.value = initial;
    parent.appendChild(s);
    return s;
  }
  function find(r, k) {
    for (var i = 0; i < ROWS.length; i++) if (ROWS[i].r === r && ROWS[i].k === k) return ROWS[i];
    return null;
  }
  function kText(k) {
    return k === "fit" ? "K fitted" : "K " + k;
  }

  mk("h4", root, null, "Average groundwater flow from the sixth survey, for different model inputs");
  var selR = select(root, "wa-r", "Distance between heating wires and optical fibres (r)", R, "1.8");
  var selK = select(root, "wa-k", "Thermal conductivity of the gravels (K)", K, "fit");

  var svg = document.createElementNS(NS, "svg");
  var H = 22 * ROWS.length + 34;
  svg.setAttribute("viewBox", "0 0 440 " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = mk("p", root, "wa-read");
  read.setAttribute("aria-live", "polite");
  mk("p", root, "wa-cap", "Each dot is the average specific discharge along the saturated cable for one combination tested in Table 1 of the paper. The dashed line is the base case, 3.8 m/d. The relative error was 6.0% with r of 1.8 mm and 6.1% with 0.7 mm.");
  mk("p", root, "wa-cap", "Source: Sai Louie et al. (2024), Journal of Hydrology 633, 130877, Table 1 and section 5.");

  var X0 = 150, W = 270;
  function x(q) { return X0 + W * Math.min(q, QMAX) / QMAX; }

  function draw(sel) {
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var sorted = ROWS.slice().sort(function (a, b) { return a.q - b.q; });
    var top = 6, bottom = top + 22 * sorted.length;
    sv("line", { x1: x(BASE), y1: top - 4, x2: x(BASE), y2: bottom, stroke: "var(--muted)", "stroke-dasharray": "4 3" }, svg);
    for (var i = 0; i < sorted.length; i++) {
      var d = sorted[i], y = top + 22 * i + 11, on = d === sel;
      sv("text", { x: 0, y: y + 4, fill: on ? "var(--fg)" : "var(--muted)", "font-size": 12, "font-weight": on ? 700 : 400 }, svg,
        "r " + d.r + " mm, " + kText(d.k));
      sv("line", { x1: X0, y1: y, x2: X0 + W, y2: y, stroke: "var(--rule)" }, svg);
      sv("circle", { cx: x(d.q), cy: y, r: on ? 6 : 4, fill: on ? "var(--accent)" : "var(--muted)" }, svg);
    }
    sv("line", { x1: X0, y1: bottom, x2: X0 + W, y2: bottom, stroke: "var(--fg)" }, svg);
    for (var t = 0; t <= QMAX; t += 5) {
      sv("line", { x1: x(t), y1: bottom, x2: x(t), y2: bottom + 4, stroke: "var(--fg)" }, svg);
      sv("text", { x: x(t), y: bottom + 16, fill: "var(--fg)", "font-size": 11, "text-anchor": "middle" }, svg, String(t));
    }
    sv("text", { x: X0 + W, y: bottom + 28, fill: "var(--muted)", "font-size": 11, "text-anchor": "end" }, svg, "specific discharge (m/d)");
  }

  function update() {
    var r = selR.value, k = selK.value, d = find(r, k);
    draw(d);
    var kLabel = k === "fit" ? "K fitted by the model" : "K = " + k + " W/m/°C";
    if (!d) {
      read.textContent = "The paper did not test r = " + r + " mm with " + kLabel + ".";
      return;
    }
    var s = "With r = " + r + " mm and " + kLabel;
    if (d.kfit) s += " (average and range " + d.kfit + " W/m/°C)";
    s += ", the sixth survey gives an average specific discharge of " + d.q.toFixed(1) +
      " m/d, ranging from " + d.lo + " to " + d.hi + " m/d along the cable.";
    if (d.r === "1.8" && d.k === "fit") s += " This is the base case used for the main results.";
    read.textContent = s;
  }
  selR.addEventListener("change", update);
  selK.addEventListener("change", update);
  update();
})();
