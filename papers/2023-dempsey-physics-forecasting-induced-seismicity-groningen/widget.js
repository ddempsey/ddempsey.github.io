/* Forecast comparison widget for Dempsey and Suckale (2023), Seismol. Res. Lett. 94.
   Shows only values stated in the paper (Table 3, DS22 forecast for 2021 to 2030).
   No interpolation or modelling. */
(function () {
  "use strict";
  var root = document.getElementById("w-mmax-2030");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  // Table 3: exceedance probability p, largest magnitude (tapered, unbounded),
  // and number of M >= 2.5 events (tapered, unbounded).
  var ROWS = [
    { p: "10%", tp: 3.6, ub: 4.3, ntp: 8, nub: 8 },
    { p: "1%", tp: 3.8, ub: 5.4, ntp: 11, nub: 11 },
    { p: "0.1%", tp: 3.9, ub: 6.5, ntp: 13, nub: 14 }
  ];
  var M_OBS = 3.6; // largest Groningen earthquake to date (2012), Section 2
  var MLO = 3.0, MHI = 7.0;

  var style = document.createElement("style");
  style.textContent =
    "#w-mmax-2030{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-mmax-2030 fieldset{border:0;margin:0 0 8px;padding:0;display:flex;flex-wrap:wrap;gap:6px 14px}" +
    "#w-mmax-2030 legend{font-weight:600;margin-bottom:4px;padding:0}" +
    "#w-mmax-2030 label{cursor:pointer;display:inline-flex;align-items:center;gap:4px}" +
    "#w-mmax-2030 input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-mmax-2030 svg{display:block;width:100%;height:auto}" +
    "#w-mmax-2030 .wg-read{margin:8px 0 4px;font-weight:600}" +
    "#w-mmax-2030 .wg-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  var fs = document.createElement("fieldset");
  var lg = document.createElement("legend");
  lg.textContent = "Choose the chance that the largest earthquake from 2021 to 2030 is exceeded";
  fs.appendChild(lg);
  ROWS.forEach(function (r, i) {
    var lab = document.createElement("label");
    var inp = document.createElement("input");
    inp.type = "radio"; inp.name = "wg-p"; inp.value = String(i);
    inp.id = "wg-p-" + i;
    if (i === 1) inp.checked = true;
    inp.addEventListener("change", function () { render(i); });
    lab.appendChild(inp);
    lab.appendChild(document.createTextNode(r.p + " chance"));
    fs.appendChild(lab);
  });
  root.appendChild(fs);

  var W = 600, H = 200;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = document.createElement("p");
  read.className = "wg-read";
  read.setAttribute("aria-live", "polite");
  root.appendChild(read);
  var cap = document.createElement("p");
  cap.className = "wg-cap";
  cap.textContent = "Each bar ends at the magnitude that the largest earthquake from 2021 to 2030 has the chosen " +
    "chance of exceeding. The upper bar assumes ruptures are confined to the reservoir (tapered " +
    "Gutenberg-Richter law). The lower bar assumes ruptures can extend into the rock beneath it (unbounded " +
    "Gutenberg-Richter law). The dashed line is the largest Groningen earthquake to date, a magnitude 3.6 " +
    "in 2012. Values are those in Table 3 of the paper, with nothing interpolated. Source: Dempsey and " +
    "Suckale (2023), Seismological Research Letters 94.";
  root.appendChild(cap);

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }

  var X0 = 150, X1 = 580;
  function mx(m) { return X0 + (X1 - X0) * (m - MLO) / (MHI - MLO); }

  function render(sel) {
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var r = ROWS[sel];
    var yAxis = 160;
    el("line", { x1: X0, x2: X1, y1: yAxis, y2: yAxis, stroke: "var(--rule)", "stroke-width": 1 });
    for (var t = 3; t <= 7; t += 1) {
      var tx = mx(t);
      el("line", { x1: tx, x2: tx, y1: yAxis, y2: yAxis + 6, stroke: "var(--muted)" });
      el("text", { x: tx, y: yAxis + 24, fill: "var(--muted)", "font-size": 14, "text-anchor": "middle" }, String(t));
    }
    el("text", { x: X0 - 10, y: yAxis + 24, fill: "var(--muted)", "font-size": 14, "text-anchor": "end" }, "Magnitude");

    var xo = mx(M_OBS);
    el("line", { x1: xo, x2: xo, y1: 16, y2: yAxis, stroke: "var(--muted)", "stroke-width": 1.5, "stroke-dasharray": "5 4" });
    el("text", { x: xo + 4, y: 14, fill: "var(--muted)", "font-size": 13 }, "M 3.6 (2012)");

    var bars = [
      { label: "Confined", m: r.tp, y: 52, fill: "var(--accent)" },
      { label: "Can extend below", m: r.ub, y: 112, fill: "var(--fg)" }
    ];
    bars.forEach(function (b) {
      el("text", { x: X0 - 10, y: b.y + 5, fill: "var(--fg)", "font-size": 14, "text-anchor": "end" }, b.label);
      el("rect", { x: X0, y: b.y - 12, width: Math.max(1, mx(b.m) - X0), height: 24, fill: b.fill, opacity: 0.85, rx: 3 });
      var tx = mx(b.m) + 6, anchor = "start";
      if (tx > X1 - 30) { tx = mx(b.m) - 6; anchor = "end"; }
      el("text", { x: tx, y: b.y + 5, fill: anchor === "end" ? "var(--panel)" : "var(--fg)", "font-size": 15,
        "font-weight": 700, "text-anchor": anchor }, "M " + b.m.toFixed(1));
    });

    // The text reports the count only where both distributions agree (10% and 1%).
    var nText = r.ntp === r.nub
      ? " Both give a " + r.p + " chance of more than " + r.ntp + " earthquakes of magnitude 2.5 or more."
      : "";
    read.textContent = "At a " + r.p + " chance of exceedance, the largest earthquake from 2021 to 2030 is magnitude " +
      r.tp.toFixed(1) + " if ruptures are confined to the reservoir and " + r.ub.toFixed(1) +
      " if they can extend below it." + nText;
  }

  render(1);
})();
