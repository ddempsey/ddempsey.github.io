/* Hypocentre density versus pressure rise, for Riffault, Dempsey, Karra and
   Archer (2018), J. Geophys. Res. Solid Earth 123, 6845-6870. Uses Eq. (5),
   n = 0 for dP < dPcrit and n = k (dP - dPcrit) otherwise, with the Habanero
   fit of Section 3.2: k = 280 events per km^2 per MPa, dPcrit = 4.6 MPa. */
(function () {
  "use strict";
  var root = document.getElementById("w-hypodensity");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var K = 280, PCRIT = 4.6, PMAX = 35;
  function n(dp) { return dp < PCRIT ? 0 : K * (dp - PCRIT); }

  var style = document.createElement("style");
  style.textContent =
    "#w-hypodensity{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-hypodensity label{display:block;font-weight:600;margin-bottom:4px}" +
    "#w-hypodensity input[type=range]{width:100%;accent-color:var(--accent)}" +
    "#w-hypodensity input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-hypodensity svg{display:block;width:100%;height:auto;margin-top:6px}" +
    "#w-hypodensity .wh-read{margin:8px 0 4px;font-weight:600}" +
    "#w-hypodensity .wh-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  var lab = document.createElement("label");
  lab.setAttribute("for", "wh-dp");
  lab.textContent = "Rise in fluid pressure above its initial value (MPa)";
  root.appendChild(lab);
  var inp = document.createElement("input");
  inp.type = "range"; inp.id = "wh-dp";
  inp.min = "0"; inp.max = String(PMAX); inp.step = "0.5"; inp.value = "20";
  root.appendChild(inp);

  var W = 600, H = 300;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = document.createElement("p");
  read.className = "wh-read";
  read.setAttribute("aria-live", "polite");
  root.appendChild(read);
  var cap = document.createElement("p");
  cap.className = "wh-cap";
  cap.textContent = "The line is Eq. (5) of the paper with the fit to the Habanero stimulation in 2003 " +
    "(280 earthquakes per square kilometre per MPa above a critical pressure rise of 4.6 MPa). " +
    "It counts only earthquakes above magnitude −0.8, the detection threshold of the Habanero catalogue. " +
    "It also applies only while the pressure rise exceeds any reached earlier in the stimulation. " +
    "Source: Riffault et al. (2018), J. Geophys. Res. Solid Earth 123, 6845–6870.";
  root.appendChild(cap);

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }

  var X0 = 90, X1 = 570, Y0 = 20, Y1 = 240, NMAX = 9000;
  function px(dp) { return X0 + (X1 - X0) * dp / PMAX; }
  function py(v) { return Y1 - (Y1 - Y0) * v / NMAX; }

  function fmtInt(v) {
    var r = Math.round(v / 10) * 10;
    return String(r).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function render() {
    var dp = Number(inp.value);
    var v = n(dp);
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    // Axes and ticks
    el("line", { x1: X0, x2: X1, y1: Y1, y2: Y1, stroke: "var(--rule)" });
    el("line", { x1: X0, x2: X0, y1: Y0, y2: Y1, stroke: "var(--rule)" });
    [0, 10, 20, 30].forEach(function (t) {
      el("line", { x1: px(t), x2: px(t), y1: Y1, y2: Y1 + 5, stroke: "var(--rule)" });
      el("text", { x: px(t), y: Y1 + 22, fill: "var(--muted)", "font-size": 14, "text-anchor": "middle" }, String(t));
    });
    [0, 3000, 6000, 9000].forEach(function (t) {
      el("text", { x: X0 - 8, y: py(t) + 5, fill: "var(--muted)", "font-size": 14, "text-anchor": "end" }, fmtInt(t));
    });
    el("text", { x: (X0 + X1) / 2, y: H - 6, fill: "var(--muted)", "font-size": 14, "text-anchor": "middle" }, "pressure rise (MPa)");
    el("text", { x: 18, y: (Y0 + Y1) / 2, fill: "var(--muted)", "font-size": 14, "text-anchor": "middle",
      transform: "rotate(-90 18 " + (Y0 + Y1) / 2 + ")" }, "earthquakes per km²");

    // Critical pressure rise
    el("line", { x1: px(PCRIT), x2: px(PCRIT), y1: Y0, y2: Y1, stroke: "var(--muted)", "stroke-dasharray": "4 4" });
    el("text", { x: px(PCRIT) + 6, y: Y0 + 14, fill: "var(--muted)", "font-size": 13 }, "critical rise, 4.6 MPa");

    // Model line
    el("path", { d: "M" + px(0) + " " + py(0) + "L" + px(PCRIT) + " " + py(0) + "L" + px(PMAX) + " " + py(n(PMAX)),
      fill: "none", stroke: "var(--accent)", "stroke-width": 3 });

    // Current point
    el("line", { x1: px(dp), x2: px(dp), y1: py(v), y2: Y1, stroke: "var(--muted)", "stroke-dasharray": "2 3" });
    el("circle", { cx: px(dp), cy: py(v), r: 7, fill: "var(--accent)" });

    var dps = dp.toFixed(1);
    if (dp < PCRIT) {
      read.textContent = "A pressure rise of " + dps + " MPa is below the critical rise of 4.6 MPa. The model gives no earthquakes at this pressure.";
    } else {
      read.textContent = "A pressure rise of " + dps + " MPa gives about " + fmtInt(v) +
        " earthquakes per square kilometre of the plane of injection.";
    }
  }

  inp.addEventListener("input", render);
  render();
})();
