/* Predicted H2 leakage probability for Chang, Dempsey, Xu, Zhang & Zhao (2027), Fuel 428, 140374.
   Evaluates the logistic form of Eq. (3.2), p = 1 / (1 + exp(-(b0 + sum b_k x_k))), with the posterior
   mean coefficients of the random parameter logistic model (Table 5). The paper predicts new samples
   with these posterior means (Section 3.3). Inputs are rescaled as in Section 2: depth, well spacing and
   permeability divided by 1e3, injection rate divided by 1e6. Curve 3 is the reference category.
   Checked against the paper: at mid-range inputs (cycles 5.5) this gives 0.109 for curve 3 (paper: 0.11,
   Section 4.4) and 0.465 to 0.510 for curves 1, 5 and 9 (paper: about 0.47 to 0.51), and it reproduces
   all six Table 6 changes to two decimal places. The widget's integer cycle default of 5 gives 0.110. */
(function () {
  "use strict";
  var root = document.getElementById("w-leakprob");
  if (!root) return;

  var B0 = 0.2525;
  var INPUTS = [
    { id: "H", label: "Reservoir depth", unit: "m", min: 1000, max: 3000, step: 50, val: 2000, scale: 1e-3, b: -0.5862 },
    { id: "L", label: "Distance to abandoned well", unit: "m", min: 70, max: 700, step: 5, val: 385, scale: 1e-3, b: -7.234 },
    { id: "K", label: "Permeability", unit: "mD", min: 100, max: 1000, step: 10, val: 550, scale: 1e-3, b: 0.4168 },
    { id: "P", label: "Porosity", unit: "", min: 0.1, max: 0.5, step: 0.01, val: 0.3, scale: 1, b: -1.653 },
    { id: "Q", label: "Injection rate", unit: "Sm3/d", min: 10000, max: 1000000, step: 5000, val: 505000, scale: 1e-6, b: 3.863 },
    { id: "N", label: "Injection-production cycles", unit: "", min: 1, max: 10, step: 1, val: 5, scale: 1, b: -0.01438 }
  ];
  var CURVES = [
    { n: 1, cls: "high", b: 2.037 }, { n: 2, cls: "intermediate", b: 0.8356 },
    { n: 3, cls: "intermediate", b: 0 }, { n: 4, cls: "intermediate", b: 0.2266 },
    { n: 5, cls: "high", b: 1.961 }, { n: 6, cls: "low", b: -0.2915 },
    { n: 7, cls: "low", b: -2.868 }, { n: 8, cls: "intermediate", b: -0.09476 },
    { n: 9, cls: "high", b: 2.14 }, { n: 10, cls: "low", b: -2.841 }
  ];

  var style = document.createElement("style");
  style.textContent =
    "#w-leakprob{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-leakprob .lp-ctl{display:flex;flex-wrap:wrap;gap:8px 20px;margin-bottom:10px}" +
    "#w-leakprob label{display:flex;flex-direction:column;gap:2px;flex:1 1 200px}" +
    "#w-leakprob input[type=range]{width:100%;accent-color:var(--accent)}" +
    "#w-leakprob select{font:inherit;color:var(--fg);background:var(--panel);border:1px solid var(--rule);padding:2px 4px}" +
    "#w-leakprob input:focus-visible,#w-leakprob select:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-leakprob .lp-bars{position:relative;margin:4px 0}" +
    "#w-leakprob .lp-row{display:flex;align-items:center;gap:6px;margin:2px 0;font-size:0.85em}" +
    "#w-leakprob .lp-name{flex:0 0 9.5em;white-space:nowrap}" +
    "#w-leakprob .lp-track{position:relative;flex:1 1 auto;height:12px;border-left:1px solid var(--rule)}" +
    "#w-leakprob .lp-bar{height:100%;background:var(--muted);opacity:0.55}" +
    "#w-leakprob .lp-row.sel .lp-bar{background:var(--accent);opacity:1}" +
    "#w-leakprob .lp-row.sel{font-weight:600}" +
    "#w-leakprob .lp-cut{position:absolute;top:0;bottom:0;border-left:1px dashed var(--fg);opacity:0.6}" +
    "#w-leakprob .lp-val{flex:0 0 3em;text-align:right}" +
    "#w-leakprob .lp-read{margin:8px 0 4px;font-weight:600}" +
    "#w-leakprob .lp-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  var ctl = document.createElement("div");
  ctl.className = "lp-ctl";
  root.appendChild(ctl);

  function fmt(inp, v) {
    if (inp.id === "Q") return v.toLocaleString("en-NZ") + " " + inp.unit;
    if (inp.id === "P") return v.toFixed(2);
    return String(v) + (inp.unit ? " " + inp.unit : "");
  }

  INPUTS.forEach(function (inp) {
    var lab = document.createElement("label");
    lab.setAttribute("for", "lp-" + inp.id);
    var span = document.createElement("span");
    lab.appendChild(span);
    var r = document.createElement("input");
    r.type = "range"; r.id = "lp-" + inp.id;
    r.min = inp.min; r.max = inp.max; r.step = inp.step; r.value = inp.val;
    lab.appendChild(r);
    ctl.appendChild(lab);
    inp.el = r; inp.span = span;
    r.addEventListener("input", render);
  });

  var sl = document.createElement("label");
  sl.setAttribute("for", "lp-curve");
  var st = document.createElement("span");
  st.textContent = "Relative permeability curve";
  sl.appendChild(st);
  var sel = document.createElement("select");
  sel.id = "lp-curve";
  CURVES.forEach(function (c) {
    var o = document.createElement("option");
    o.value = String(c.n);
    o.textContent = "Curve " + c.n + " (" + c.cls + " mobility)" + (c.n === 3 ? ", reference" : "");
    if (c.n === 3) o.selected = true;
    sel.appendChild(o);
  });
  sl.appendChild(sel);
  ctl.appendChild(sl);
  sel.addEventListener("change", render);

  var bars = document.createElement("div");
  bars.className = "lp-bars";
  bars.setAttribute("aria-hidden", "true");
  root.appendChild(bars);
  var rows = CURVES.map(function (c) {
    var row = document.createElement("div");
    row.className = "lp-row";
    var nm = document.createElement("span");
    nm.className = "lp-name";
    nm.textContent = "Curve " + c.n + " (" + c.cls.slice(0, 3) + ")";
    var tr = document.createElement("span");
    tr.className = "lp-track";
    var bar = document.createElement("div");
    bar.className = "lp-bar";
    tr.appendChild(bar);
    [0.3, 0.5].forEach(function (cut) {
      var m = document.createElement("span");
      m.className = "lp-cut";
      m.style.left = (cut * 100) + "%";
      tr.appendChild(m);
    });
    var v = document.createElement("span");
    v.className = "lp-val";
    row.appendChild(nm); row.appendChild(tr); row.appendChild(v);
    bars.appendChild(row);
    return { row: row, bar: bar, val: v, c: c };
  });

  var read = document.createElement("p");
  read.className = "lp-read";
  read.setAttribute("aria-live", "polite");
  root.appendChild(read);

  var cap = document.createElement("p");
  cap.className = "lp-cap";
  cap.textContent = "Predicted probability that hydrogen leaks through the abandoned well, from the fitted surrogate " +
    "(the logistic equation with the average weights of the random parameter model, Table 5). Bars show all ten curves " +
    "at the current settings. Dashed lines mark the 0.3 and 0.5 cut-offs. Inputs are limited to the simulated ranges. " +
    "Sliders start at the middle of each range, which is our inference of the paper's “representative midpoint " +
    "values” because it reproduces the reported 0.11 for curve 3. Cycles start at 5, as the slider takes whole numbers. " +
    "The model assumes a homogeneous reservoir and an abandoned well of 4000 mD, and it predicts only whether leakage " +
    "occurs. Source: Chang, Dempsey, Xu, Zhang and Zhao (2027), Fuel 428, 140374.";
  root.appendChild(cap);

  function prob(curveB) {
    var z = B0 + curveB;
    INPUTS.forEach(function (inp) { z += inp.b * parseFloat(inp.el.value) * inp.scale; });
    return 1 / (1 + Math.exp(-z));
  }

  function render() {
    INPUTS.forEach(function (inp) { inp.span.textContent = inp.label + ": " + fmt(inp, parseFloat(inp.el.value)); });
    var n = parseInt(sel.value, 10), chosen = null;
    rows.forEach(function (r) {
      var p = prob(r.c.b);
      r.bar.style.width = (p * 100).toFixed(1) + "%";
      r.val.textContent = p.toFixed(2);
      var on = r.c.n === n;
      r.row.className = "lp-row" + (on ? " sel" : "");
      if (on) chosen = { p: p, c: r.c };
    });
    var p = chosen.p, verdict;
    if (p >= 0.5) verdict = "Flagged as a leak at both the 0.5 and the conservative 0.3 cut-off.";
    else if (p >= 0.3) verdict = "Flagged as a leak only at the conservative 0.3 cut-off.";
    else verdict = "Below both the 0.5 and the conservative 0.3 cut-off.";
    read.textContent = "Curve " + chosen.c.n + " (" + chosen.c.cls + " mobility): predicted leakage probability " +
      p.toFixed(2) + ". " + verdict;
  }

  render();
})();
