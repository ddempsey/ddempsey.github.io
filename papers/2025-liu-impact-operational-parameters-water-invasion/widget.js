/* Widget for Liu et al. (2025), Int. J. Hydrogen Energy 153, 150236.
   Model water production for three sets of runs, each with three cases.
   Cushion gas volume: Section 3.2 (first-cycle rates 128.1, 78.5, 52.2 m3/day; totals 4.52, 3.44,
     2.74 x 10^4 m3). Cushion volumes 1.5, 4.5, 7.5 x 10^7 Sm3 are our arithmetic
     (5 x 10^5 Sm3/day x 30, 90, 150 days, Table 2).
   Working gas volume per cycle, same duration and same number of cycles: Table 3.
   The cushion gas injection rate runs are left out because the paper gives their totals without
   saying which total belongs to which rate (see claims.yaml, inconsistencies). */
(function () {
  "use strict";
  var root = document.getElementById("w-uhs-water");
  if (!root) return;
  var NS = "http://www.w3.org/2000/svg";

  var style = document.createElement("style");
  style.textContent =
    "#w-uhs-water{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-uhs-water label{display:block;margin:4px 0}" +
    "#w-uhs-water select{max-width:100%;font:inherit;color:var(--fg);background:var(--panel);border:1px solid var(--rule);padding:2px 4px}" +
    "#w-uhs-water select:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-uhs-water svg{display:block;width:100%;max-width:480px;height:auto;margin-top:8px}" +
    "#w-uhs-water .uw-read{margin:6px 0 0;font-weight:600}" +
    "#w-uhs-water .uw-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  var RUNS = {
    cush: {
      name: "Cushion gas volume",
      cases: ["30 days of cushion gas (1.5 × 10⁷ Sm³)", "90 days, baseline (4.5 × 10⁷ Sm³)", "150 days of cushion gas (7.5 × 10⁷ Sm³)"],
      short: ["30 days", "90 days", "150 days"],
      rate: [128.1, 78.5, 52.2], rateWhen: "at the end of the first cycle",
      vol: [45200, 34400, 27400], volWhen: "over the whole simulation"
    },
    dur: {
      name: "Volume per cycle, same 1530 days",
      cases: ["60-day injection and withdrawal stages", "90-day stages, baseline", "120-day injection and withdrawal stages"],
      short: ["60-day", "90-day", "120-day"],
      rate: [40.7, 45.2, 52.1], rateWhen: "at day 1530",
      vol: [29420, 29050, 29010], volWhen: "up to day 1530"
    },
    cyc: {
      name: "Volume per cycle, same ten cycles",
      cases: ["60-day injection and withdrawal stages", "90-day stages, baseline", "120-day injection and withdrawal stages"],
      short: ["60-day", "90-day", "120-day"],
      rate: [42.3, 41.3, 38.7], rateWhen: "at the 10th cycle",
      vol: [25470, 34430, 42050], volWhen: "up to the 10th cycle"
    }
  };

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
  function opt(sel, value, text) {
    var o = document.createElement("option");
    o.value = value;
    o.textContent = text;
    sel.appendChild(o);
  }
  function fmt(v) {
    return v >= 1000 ? Math.round(v).toLocaleString("en-NZ") : v.toFixed(1);
  }

  var l1 = mk("label", root, null, "Set of model runs ");
  var selRun = mk("select", l1);
  selRun.id = "uw-run";
  opt(selRun, "cush", RUNS.cush.name);
  opt(selRun, "dur", RUNS.dur.name);
  opt(selRun, "cyc", RUNS.cyc.name);

  var l2 = mk("label", root, null, "Quantity ");
  var selQ = mk("select", l2);
  selQ.id = "uw-q";
  opt(selQ, "vol", "Total water produced (m³)");
  opt(selQ, "rate", "Water production rate (m³/day)");

  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 480 150");
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = mk("p", root, "uw-read");
  read.setAttribute("aria-live", "polite");
  mk("p", root, "uw-cap",
    "Model results from the paper (Section 3.2 and Table 3), for one calibrated model of the Ahuroa field. " +
    "Cushion gas volumes in brackets are our arithmetic from the injection rate and duration.");

  function draw() {
    var r = RUNS[selRun.value];
    var q = selQ.value;
    var vals = r[q];
    var when = q === "vol" ? r.volWhen : r.rateWhen;
    var unit = q === "vol" ? " m³" : " m³/day";
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var max = Math.max.apply(null, vals);
    var x0 = 80, wMax = 300;
    for (var i = 0; i < 3; i++) {
      var y = 12 + i * 44;
      var w = Math.max(2, wMax * vals[i] / max);
      sv("text", { x: 0, y: y + 19, fill: "var(--fg)", "font-size": "13" }, svg, r.short[i]);
      sv("rect", { x: x0, y: y, width: w, height: 28, rx: 3,
        fill: i === 1 ? "var(--muted)" : "var(--accent)" }, svg);
      sv("text", { x: x0 + w + 6, y: y + 19, fill: "var(--fg)", "font-size": "13" }, svg, fmt(vals[i]));
    }
    read.textContent = r.name + ", water " + (q === "vol" ? "produced " : "production rate ") + when + ": " +
      r.short[0] + " " + fmt(vals[0]) + unit + ", " + r.short[1] + " (baseline) " + fmt(vals[1]) + unit +
      ", " + r.short[2] + " " + fmt(vals[2]) + unit + ".";
    svg.setAttribute("aria-label", read.textContent);
  }
  selRun.addEventListener("change", draw);
  selQ.addEventListener("change", draw);
  draw();
})();
