/* 48-hour probability converter for Dempsey et al. (2022), Bull. Volcanol. 84:91.
   Uses the paper's window conversion, 1 - p_long = (1 - p_short)^N, and plots the
   result against 48-hour probabilities reported in the paper. */
(function () {
  "use strict";
  var root = document.getElementById("w-prob-scale");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var UNINFORMED = 0.37; // % in 48 h, paper
  var WINDOWS = [
    { h: 24, label: "24 hours" },
    { h: 48, label: "48 hours" },
    { h: 672, label: "4 weeks" }
  ];
  // 48-hour probabilities (%) stated in the paper. lo == hi for single values.
  var REFS = [
    { lo: 0.01, hi: 0.01, txt: "0.01% (calibrated model, lowest output)" },
    { lo: 0.064, hi: 0.064, txt: "0.064% (warning system, outside a warning)" },
    { lo: 0.37, hi: 0.37, txt: "0.37% (uninformed forecast, the average rate)" },
    { lo: 0.6, hi: 1.1, txt: "0.6 to 1.1% (experts on 2 Dec 2019, converted)" },
    { lo: 2, hi: 4, txt: "2 to 4% (calibrated model, 4 days before the 2019 eruption)" },
    { lo: 8.1, hi: 8.1, txt: "8.1% (warning system, during a warning)" },
    { lo: 80, hi: 80, txt: "80% (calibrated model, highest output)" }
  ];
  var PRESETS = [
    { p: 8, w: 2, txt: "8% in 4 weeks (experts, 2 Dec 2019, low)" },
    { p: 14, w: 2, txt: "14% in 4 weeks (experts, 2 Dec 2019, high)" },
    { p: 40, w: 0, txt: "40% in 24 hours (experts, 11 to 14 Dec, low end)" },
    { p: 60, w: 0, txt: "60% in 24 hours (experts, 11 to 14 Dec, high end)" },
    { p: 0.37, w: 1, txt: "0.37% in 48 hours (uninformed forecast)" }
  ];

  var style = document.createElement("style");
  style.textContent =
    "#w-prob-scale{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-prob-scale .ps-row{display:flex;flex-wrap:wrap;gap:8px 14px;align-items:center;margin:0 0 8px}" +
    "#w-prob-scale label{display:inline-flex;flex-wrap:wrap;align-items:center;gap:6px}" +
    "#w-prob-scale input,#w-prob-scale select{font:inherit;color:var(--fg);background:transparent;border:1px solid var(--rule);border-radius:4px;padding:2px 4px;max-width:100%}" +
    "#w-prob-scale input{width:6em}" +
    "#w-prob-scale option{color:#000}" +
    "#w-prob-scale input:focus-visible,#w-prob-scale select:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-prob-scale svg{display:block;width:100%;height:auto}" +
    "#w-prob-scale .ps-read{margin:8px 0 4px;font-weight:600}" +
    "#w-prob-scale .ps-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  function mk(tag, attrs, text) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    return e;
  }

  var row1 = mk("div", { "class": "ps-row" });
  var labP = mk("label", { "for": "ps-p" }, "Probability (%)");
  var inP = mk("input", { id: "ps-p", type: "number", min: "0.001", max: "99.9", step: "any", value: "8" });
  labP.appendChild(inP);
  var labW = mk("label", { "for": "ps-w" }, "over the next");
  var selW = mk("select", { id: "ps-w" });
  WINDOWS.forEach(function (w, i) {
    var o = mk("option", { value: String(i) }, w.label);
    if (i === 2) o.selected = true;
    selW.appendChild(o);
  });
  labW.appendChild(selW);
  row1.appendChild(labP);
  row1.appendChild(labW);
  root.appendChild(row1);

  var row2 = mk("div", { "class": "ps-row" });
  var labE = mk("label", { "for": "ps-e" }, "Or load a value from the paper");
  var selE = mk("select", { id: "ps-e" });
  selE.appendChild(mk("option", { value: "" }, "Choose an example"));
  PRESETS.forEach(function (pr, i) { selE.appendChild(mk("option", { value: String(i) }, pr.txt)); });
  labE.appendChild(selE);
  row2.appendChild(labE);
  root.appendChild(row2);

  var W = 600, X0 = 20, X1 = 580, ROW = 40, TOP = 34;
  var H = TOP + REFS.length * ROW + 40;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = mk("p", { "class": "ps-read", "aria-live": "polite" });
  root.appendChild(read);
  root.appendChild(mk("p", { "class": "ps-cap" },
    "The horizontal axis shows the chance of eruption in 48 hours, on a logarithmic scale from 0.01% to 100%. " +
    "The vertical line is your value converted to 48 hours. The conversion assumes the same probability " +
    "in each 48-hour part of a longer window, as in the paper. The paper converts 4-week and 48-hour values " +
    "to shorter windows. Results for 24-hour inputs apply the same relation in the other direction. These were calculated for this page and are not given in the paper. " +
    "Reference values are from Dempsey et al. (2022), Bulletin of Volcanology 84:91, CC BY 4.0."));

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }
  function xOf(pct) {
    var v = Math.min(100, Math.max(0.01, pct));
    return X0 + (X1 - X0) * (Math.log(v) / Math.LN10 + 2) / 4;
  }
  function fmt(v) {
    if (v >= 10) return v.toFixed(0);
    if (v >= 1) return v.toFixed(1);
    return Number(v.toPrecision(2)).toString();
  }
  function to48(pct, hours) {
    var p = pct / 100;
    return (1 - Math.pow(1 - p, 48 / hours)) * 100;
  }

  function render() {
    var pct = parseFloat(inP.value);
    var w = WINDOWS[parseInt(selW.value, 10)];
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    var axisY = TOP + REFS.length * ROW + 4;
    el("line", { x1: X0, x2: X1, y1: axisY, y2: axisY, stroke: "var(--rule)" });
    [0.01, 0.1, 1, 10, 100].forEach(function (t) {
      var x = xOf(t);
      el("line", { x1: x, x2: x, y1: TOP - 28, y2: axisY + 4, stroke: "var(--rule)", "stroke-dasharray": "2 4" });
      el("text", { x: x, y: axisY + 20, fill: "var(--muted)", "font-size": 14, "text-anchor": t === 0.01 ? "start" : (t === 100 ? "end" : "middle") }, t + "%");
    });

    REFS.forEach(function (r, i) {
      var y = TOP + i * ROW;
      var xa = xOf(r.lo), xb = xOf(r.hi);
      el("text", { x: X0, y: y - 12, fill: "var(--fg)", "font-size": 14 }, r.txt);
      if (r.hi > r.lo) {
        el("line", { x1: xa, x2: xb, y1: y, y2: y, stroke: "var(--fg)", "stroke-width": 6, "stroke-linecap": "round" });
      } else {
        el("circle", { cx: xa, cy: y, r: 5, fill: "var(--fg)" });
      }
    });

    if (!(pct > 0 && pct < 100) || !w) {
      read.textContent = "Enter a probability greater than 0% and less than 100%.";
      return;
    }
    var p48 = to48(pct, w.h);
    var xu = xOf(p48);
    el("line", { x1: xu, x2: xu, y1: TOP - 30, y2: axisY, stroke: "var(--accent)", "stroke-width": 3 });

    var ratio = p48 / UNINFORMED;
    var rTxt = ratio >= 1 ? fmt(ratio) + " times the uninformed forecast of 0.37%"
      : "below the uninformed forecast of 0.37%, by a factor of " + fmt(1 / ratio);
    read.textContent = "A probability of " + fmt(pct) + "% over " + w.label + " is about " + fmt(p48) +
      "% in 48 hours, " + rTxt + ".";
  }

  inP.addEventListener("input", function () { selE.value = ""; render(); });
  selW.addEventListener("change", function () { selE.value = ""; render(); });
  selE.addEventListener("change", function () {
    if (selE.value === "") return;
    var pr = PRESETS[parseInt(selE.value, 10)];
    inP.value = String(pr.p);
    selW.value = String(pr.w);
    render();
  });

  render();
})();
