/* Scenario comparison widget for Dempsey and Suckale (2017), Geophys. Res. Lett. 44, 7773-7782.
   Shows only values stated in the paper (Discussion, p. 9). No interpolation or modelling. */
(function () {
  "use strict";
  var root = document.getElementById("w-mt-scenarios");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  // 10% exceedance magnitude (P10) of the largest event, February 2017 to end 2024.
  var SC = [
    { rate: 21, ours: 3.82, zh: 4.14 },
    { rate: 27, ours: 3.87, zh: 4.26 },
    { rate: 33, ours: 3.89, zh: 4.31 }
  ];
  var MLO = 3.6, MHI = 4.5;

  var style = document.createElement("style");
  style.textContent =
    "#w-mt-scenarios{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-mt-scenarios fieldset{border:0;margin:0 0 8px;padding:0;display:flex;flex-wrap:wrap;gap:6px 14px}" +
    "#w-mt-scenarios legend{font-weight:600;margin-bottom:4px;padding:0}" +
    "#w-mt-scenarios label{cursor:pointer;display:inline-flex;align-items:center;gap:4px}" +
    "#w-mt-scenarios input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-mt-scenarios svg{display:block;width:100%;height:auto}" +
    "#w-mt-scenarios .wm-read{margin:8px 0 4px;font-weight:600}" +
    "#w-mt-scenarios .wm-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  var fs = document.createElement("fieldset");
  var lg = document.createElement("legend");
  lg.textContent = "Choose a gas extraction scenario (billion cubic metres a year)";
  fs.appendChild(lg);
  SC.forEach(function (sc, i) {
    var lab = document.createElement("label");
    var inp = document.createElement("input");
    inp.type = "radio"; inp.name = "wm-sc"; inp.value = String(i);
    inp.id = "wm-sc-" + sc.rate;
    if (i === 0) inp.checked = true;
    inp.addEventListener("change", function () { render(i); });
    lab.appendChild(inp);
    lab.appendChild(document.createTextNode(sc.rate + " bcm/yr"));
    fs.appendChild(lab);
  });
  root.appendChild(fs);

  var W = 600, H = 230;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = document.createElement("p");
  read.className = "wm-read";
  read.setAttribute("aria-live", "polite");
  root.appendChild(read);
  var cap = document.createElement("p");
  cap.className = "wm-cap";
  cap.textContent = "Each dot is the magnitude that the largest earthquake from February 2017 to the end of 2024 " +
    "has a 10% chance of exceeding. Filled dots are our forecast. Hollow dots are the statistical forecast of " +
    "Zöller and Holschneider (2016), as reported in our paper. The dashed line is magnitude 4.0, which our " +
    "forecast gives a 5% chance of exceeding under all three scenarios. Values are those stated in the paper, " +
    "with nothing interpolated. Source: Dempsey and Suckale (2017), Geophysical Research Letters 44.";
  root.appendChild(cap);

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }

  var X0 = 110, X1 = 580;
  function mx(m) { return X0 + (X1 - X0) * (m - MLO) / (MHI - MLO); }

  function render(sel) {
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var yAxis = 196;
    // axis and ticks
    el("line", { x1: X0, x2: X1, y1: yAxis, y2: yAxis, stroke: "var(--rule)", "stroke-width": 1 });
    for (var t = 3.6; t <= 4.5001; t += 0.1) {
      var tx = mx(t), major = Math.abs(t * 10 - Math.round(t * 5) * 2) < 0.01;
      el("line", { x1: tx, x2: tx, y1: yAxis, y2: yAxis + (major ? 6 : 3), stroke: "var(--muted)" });
      if (major) el("text", { x: tx, y: yAxis + 22, fill: "var(--muted)", "font-size": 14, "text-anchor": "middle" }, t.toFixed(1));
    }
    el("text", { x: X0 - 8, y: yAxis + 22, fill: "var(--muted)", "font-size": 14, "text-anchor": "end" }, "Magnitude");
    // M 4.0 reference line
    var x4 = mx(4.0);
    el("line", { x1: x4, x2: x4, y1: 14, y2: yAxis, stroke: "var(--muted)", "stroke-width": 1.5, "stroke-dasharray": "5 4" });
    el("text", { x: x4 + 4, y: 14, fill: "var(--muted)", "font-size": 13 }, "M 4.0 (5% chance, ours)");

    SC.forEach(function (sc, i) {
      var y = 52 + i * 50, on = i === sel;
      el("text", { x: X0 - 12, y: y + 5, fill: on ? "var(--fg)" : "var(--muted)", "font-size": 15,
        "font-weight": on ? 700 : 400, "text-anchor": "end" }, sc.rate + " bcm/yr");
      el("line", { x1: mx(sc.ours), x2: mx(sc.zh), y1: y, y2: y, stroke: on ? "var(--fg)" : "var(--rule)", "stroke-width": on ? 2 : 1 });
      el("circle", { cx: mx(sc.ours), cy: y, r: on ? 8 : 6, fill: "var(--accent)", stroke: "var(--accent)", opacity: on ? 1 : 0.5 });
      el("circle", { cx: mx(sc.zh), cy: y, r: on ? 8 : 6, fill: "var(--panel)", stroke: "var(--fg)", "stroke-width": 2, opacity: on ? 1 : 0.5 });
      if (on) {
        el("text", { x: mx(sc.ours), y: y - 13, fill: "var(--fg)", "font-size": 14, "text-anchor": "middle" }, sc.ours.toFixed(2));
        el("text", { x: mx(sc.zh), y: y - 13, fill: "var(--fg)", "font-size": 14, "text-anchor": "middle" }, sc.zh.toFixed(2));
      }
    });

    var sc = SC[sel];
    read.textContent = "At " + sc.rate + " billion cubic metres a year, our forecast gives a 10% chance that the largest event exceeds magnitude " +
      sc.ours.toFixed(2) + ", against " + sc.zh.toFixed(2) + " in Zöller and Holschneider (2016). The difference is " +
      (sc.zh - sc.ours).toFixed(2) + " magnitude units.";
  }

  render(0);
})();
