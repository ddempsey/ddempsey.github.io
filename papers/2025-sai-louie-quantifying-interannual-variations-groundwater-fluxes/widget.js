/* Range widget for Sai Louie et al. (2025), Water Resources Research 61, e2024WR039328.
   River flow at Whitecliffs over the study: 0.67-225 m3/s, median 2.51 m3/s, flood peak 225 m3/s
   on 31 May 2021 (sections 4.1 and 5.2). Average specific discharge over the saturated part of each
   cable: HDD1 3.5-5.9 m/day, HDD2 2.4-4.5 m/day, interquartile range 20.4% and 13.3% of the median
   (section 4.3). All tracks share one logarithmic scale (0.1 to 1,000), so bar length shows the
   ratio of largest to smallest value whatever the unit. Only reported values are drawn. */
(function () {
  "use strict";
  var root = document.getElementById("w-flux-spread");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var LO = -1, HI = 3; // log10 axis limits, 0.1 to 1,000
  var X0 = 12, W = 396; // plot area in viewBox units

  var ROWS = [
    { id: "river", label: "River flow, whole study", unit: "m³/s", lo: 0.67, hi: 225, mid: 2.51,
      read: "River flow at the gauge ranged from 0.67 to 225 m³/s over the study, about two and a half orders of magnitude. The May 2021 flood peak was about 90 times the median of 2.51 m³/s (marked)." },
    { id: "hdd1", label: "Specific discharge, HDD1 (main channel)", unit: "m/day", lo: 3.5, hi: 5.9,
      read: "Average specific discharge on HDD1, beneath the main channel, ranged from 3.5 to 5.9 m/day over 14 surveys. The spread of the middle half of the surveys was 20.4% of the median." },
    { id: "hdd2", label: "Specific discharge, HDD2 (secondary channel)", unit: "m/day", lo: 2.4, hi: 4.5,
      read: "Average specific discharge on HDD2, beneath the secondary channel, ranged from 2.4 to 4.5 m/day over 14 surveys. The spread of the middle half of the surveys was 13.3% of the median." }
  ];

  var style = document.createElement("style");
  style.textContent =
    "#w-flux-spread{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-flux-spread h4{margin:0 0 6px;font-size:1em}" +
    "#w-flux-spread fieldset{border:0;margin:0 0 6px;padding:0}" +
    "#w-flux-spread legend{padding:0;margin:0 0 4px}" +
    "#w-flux-spread label{display:block;margin:2px 0;cursor:pointer}" +
    "#w-flux-spread input{accent-color:var(--accent);margin-right:6px}" +
    "#w-flux-spread input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-flux-spread svg{display:block;width:100%;max-width:420px;height:auto}" +
    "#w-flux-spread .wfs-read{margin:6px 0 0;font-weight:600}" +
    "#w-flux-spread .wfs-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
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
  function px(v) { return X0 + W * (Math.log(v) / Math.LN10 - LO) / (HI - LO); }

  mk("h4", root, null, "Spread of river flow and of groundwater flux over the study");
  var fs = mk("fieldset", root);
  mk("legend", fs, null, "Show details for:");
  var radios = [];
  ROWS.forEach(function (r, i) {
    var lab = mk("label", fs);
    var inp = document.createElement("input");
    inp.type = "radio"; inp.name = "wfs-row"; inp.value = String(i); inp.id = "wfs-" + r.id;
    if (i === 0) inp.checked = true;
    lab.setAttribute("for", inp.id);
    lab.appendChild(inp);
    lab.appendChild(document.createTextNode(r.label));
    inp.addEventListener("change", draw);
    radios.push(inp);
  });

  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 420 196");
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);
  var read = mk("p", root, "wfs-read");
  read.setAttribute("aria-live", "polite");
  mk("p", root, "wfs-cap", "All three bars use the same logarithmic scale, where each tick is ten times the one before. Bar length therefore compares the relative spread of quantities with different units. The ticks read in m³/s for river flow and in m/day for specific discharge.");
  mk("p", root, "wfs-cap", "Source: Sai Louie et al. (2025), Water Resources Research 61, e2024WR039328, sections 4.1, 4.3 and 5.2.");

  function draw() {
    var sel = 0;
    radios.forEach(function (r, i) { if (r.checked) sel = i; });
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    ROWS.forEach(function (r, i) {
      var y = 8 + i * 56, on = i === sel;
      sv("text", { x: X0, y: y + 10, fill: on ? "var(--fg)" : "var(--muted)", "font-size": 12, "font-weight": on ? 700 : 400 }, svg, r.label + " (" + r.unit + ")");
      sv("line", { x1: X0, x2: X0 + W, y1: y + 28, y2: y + 28, stroke: "var(--rule)" }, svg);
      var a = px(r.lo), b = px(r.hi);
      sv("rect", { x: a, y: y + 19, width: Math.max(2, b - a), height: 18, fill: on ? "var(--accent)" : "var(--muted)", opacity: on ? 1 : 0.6 }, svg);
      if (r.mid) sv("line", { x1: px(r.mid), x2: px(r.mid), y1: y + 15, y2: y + 41, stroke: "var(--fg)", "stroke-width": 2 }, svg);
    });
    var ty = 8 + ROWS.length * 56;
    for (var d = LO; d <= HI; d++) {
      var x = px(Math.pow(10, d));
      sv("line", { x1: x, x2: x, y1: ty - 8, y2: ty - 2, stroke: "var(--muted)" }, svg);
      sv("text", { x: x, y: ty + 10, fill: "var(--muted)", "font-size": 11, "text-anchor": "middle" }, svg, d < 0 ? "0.1" : String(Math.pow(10, d)).replace("1000", "1,000"));
    }
    read.textContent = ROWS[sel].read;
  }
  draw();
})();
