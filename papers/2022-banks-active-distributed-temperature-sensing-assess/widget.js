/* Sensitivity widget for Banks et al. (2022), Journal of Hydrology 615, 128667.
   All values are from Table 1 (sensitivity analysis, True Right survey only):
   average groundwater velocity u (m/d) with its range along the cable, for the base case and for
   each input raised or lowered by 20%. Thermal conductivity was 0.56 (0.48, 0.62) W/m/degC in every case.
   Start-time case (12.0 -> 15.4 m/d, 0.56 -> 0.69 W/m/degC) is from section 5, para. 4. */
(function () {
  "use strict";
  var root = document.getElementById("w-adts-sensitivity");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var MAX = 20; // m/d, axis limit
  var BASE = { avg: 12.0, lo: 10.8, hi: 13.6 };

  var CASES = [
    { name: "Base case", desc: "heater-to-fibre distance 3.0 mm, porosity 0.2, solid heat capacity 800 J per kg per °C, heating start 240 s", avg: 12.0, lo: 10.8, hi: 13.6, k: "0.56" },
    { name: "Shorter heater-to-fibre distance", desc: "distance 2.4 mm in place of 3.0 mm", avg: 9.6, lo: 8.7, hi: 10.9, k: "0.56" },
    { name: "Longer heater-to-fibre distance", desc: "distance 3.6 mm in place of 3.0 mm", avg: 14.4, lo: 13.0, hi: 16.3, k: "0.56" },
    { name: "Lower porosity", desc: "porosity 0.16 in place of 0.2", avg: 14.4, lo: 13.0, hi: 16.3, k: "0.56" },
    { name: "Higher porosity", desc: "porosity 0.24 in place of 0.2", avg: 6.3, lo: 5.6, hi: 7.1, k: "0.56" },
    { name: "Lower solid heat capacity", desc: "640 J per kg per °C in place of 800", avg: 10.3, lo: 9.3, hi: 11.7, k: "0.56" },
    { name: "Higher solid heat capacity", desc: "960 J per kg per °C in place of 800", avg: 13.5, lo: 12.2, hi: 15.3, k: "0.56" },
    { name: "Later heating start", desc: "heating start 252 s in place of 240 s", avg: 15.4, lo: null, hi: null, k: "0.69" }
  ];

  var style = document.createElement("style");
  style.textContent =
    "#w-adts-sensitivity{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-adts-sensitivity h4{margin:0 0 6px;font-size:1em}" +
    "#w-adts-sensitivity label{display:block;margin:4px 0}" +
    "#w-adts-sensitivity select{max-width:100%;font:inherit;color:var(--fg);background:var(--panel);border:1px solid var(--rule);padding:2px 4px}" +
    "#w-adts-sensitivity select:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-adts-sensitivity svg{display:block;width:100%;max-width:440px;height:auto;margin-top:6px}" +
    "#w-adts-sensitivity .wa-read{margin:6px 0 0;font-weight:600}" +
    "#w-adts-sensitivity .wa-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
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

  mk("h4", root, null, "Estimated groundwater velocity under different assumed inputs (first survey)");
  var lab = mk("label", root, null, "Input value tested");
  lab.setAttribute("for", "wa-case");
  var sel = document.createElement("select");
  sel.id = "wa-case";
  for (var i = 0; i < CASES.length; i++) {
    var o = document.createElement("option");
    o.value = String(i);
    o.textContent = CASES[i].name;
    sel.appendChild(o);
  }
  root.appendChild(sel);

  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 440 110");
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = mk("p", root, "wa-read");
  read.setAttribute("aria-live", "polite");
  mk("p", root, "wa-cap", "Bars show the average velocity along the cable, and whiskers show the range along the cable. The paper reports no range for the later heating start. Each input other than heating start was raised or lowered by 20%.");
  mk("p", root, "wa-cap", "Source: Banks et al. (2022), Journal of Hydrology 615, 128667, Table 1 and section 5.");

  var X0 = 120, W = 300;
  function x(v) { return X0 + W * v / MAX; }
  function clear(e) { while (e.firstChild) e.removeChild(e.firstChild); }
  function row(y, label, d, fill) {
    sv("text", { x: 0, y: y + 14, fill: "var(--fg)", "font-size": 13 }, svg, label);
    sv("rect", { x: X0, y: y, width: W, height: 20, fill: "none", stroke: "var(--rule)" }, svg);
    sv("rect", { x: X0, y: y + 3, width: Math.max(2, x(d.avg) - X0), height: 14, fill: fill }, svg);
    if (d.lo != null) {
      sv("line", { x1: x(d.lo), x2: x(d.hi), y1: y + 10, y2: y + 10, stroke: "var(--fg)", "stroke-width": 1.5 }, svg);
      sv("line", { x1: x(d.lo), x2: x(d.lo), y1: y + 5, y2: y + 15, stroke: "var(--fg)", "stroke-width": 1.5 }, svg);
      sv("line", { x1: x(d.hi), x2: x(d.hi), y1: y + 5, y2: y + 15, stroke: "var(--fg)", "stroke-width": 1.5 }, svg);
    }
  }
  function axis(y) {
    sv("line", { x1: X0, x2: X0 + W, y1: y, y2: y, stroke: "var(--muted)" }, svg);
    for (var v = 0; v <= MAX; v += 5) {
      sv("line", { x1: x(v), x2: x(v), y1: y, y2: y + 4, stroke: "var(--muted)" }, svg);
      sv("text", { x: x(v), y: y + 16, fill: "var(--muted)", "font-size": 11, "text-anchor": "middle" }, svg, String(v));
    }
    sv("text", { x: X0 + W / 2, y: y + 30, fill: "var(--muted)", "font-size": 11, "text-anchor": "middle" }, svg, "metres per day");
  }

  function upd() {
    var d = CASES[Number(sel.value)];
    clear(svg);
    row(4, "Base case", BASE, "var(--muted)");
    row(34, "Selected", d, "var(--accent)");
    axis(62);
    var s = "With " + d.desc + ", the average velocity is " + d.avg.toFixed(1) + " m per day";
    if (d.lo != null) s += " (" + d.lo.toFixed(1) + " to " + d.hi.toFixed(1) + " along the cable)";
    s += ", and the average thermal conductivity is " + d.k + " W per metre per °C.";
    read.textContent = s;
  }
  sel.addEventListener("change", upd);
  upd();
})();
