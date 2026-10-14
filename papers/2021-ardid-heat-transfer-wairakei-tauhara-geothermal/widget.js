/* Clay-cap temperature profile widget for Ardid et al. (2021), Geophys. Res. Lett. 48, e2020GL092056.
   Profile: Eq. (1) of the paper (Bredehoeft & Papadopulos, 1965),
            (T - T0)/(TL - T0) = (exp(beta z/L) - 1)/(exp(beta) - 1).
            Here z is measured upward from the base of the cap, so beta > 0 means upward flow
            (our sign convention; the paper does not state one).
   Inputs:  T0 = 58 C and TL = 199 C, mean temperatures at the top and bottom of the clay cap (Sec. 3);
            L = 316 m, average clay cap thickness (Sec. 4).
   Readout: heat flux at the top of the cap relative to conduction alone,
            beta / (1 - exp(-beta)) (our arithmetic from Eq. 1), and the temperature at mid-depth.
   Reference values in the caption: median conductive 1.05 W/m2 and median fitted 2.15 W/m2 (Sec. 4). */
(function () {
  "use strict";
  var root = document.getElementById("w-upflow");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var T0 = 58, TL = 199, L = 316;

  var style = document.createElement("style");
  style.textContent =
    "#w-upflow{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-upflow h4{margin:0 0 6px;font-size:1em}" +
    "#w-upflow label{display:block;margin:4px 0}" +
    "#w-upflow input[type=range]{width:100%;max-width:440px;accent-color:var(--accent)}" +
    "#w-upflow input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-upflow svg{display:block;width:100%;max-width:440px;height:auto}" +
    "#w-upflow .wu-read{margin:6px 0 0;font-weight:600}" +
    "#w-upflow .wu-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
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

  mk("h4", root, null, "Temperature through the clay cap");
  var lab = mk("label", root);
  lab.setAttribute("for", "wu-beta");
  var labSpan = mk("span", lab);
  var inp = document.createElement("input");
  inp.type = "range"; inp.id = "wu-beta"; inp.min = 0; inp.max = 4; inp.step = 0.1; inp.value = 0;
  root.appendChild(inp);

  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 440 300");
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);
  var read = mk("p", root, "wu-read");
  read.setAttribute("aria-live", "polite");
  mk("p", root, "wu-cap",
    "The curve is Eq. 1 of the paper for a clay cap 316 m thick, with 58°C at its top and 199°C at its base, " +
    "the averages across the field. The dashed line is conduction alone. The flow parameter β increases with the " +
    "speed of upward flow. The heat-flux factor is our arithmetic from Eq. 1. For comparison, the paper's median " +
    "fitted heat flux, 2.15 W/m², is about twice its median conduction-only value of 1.05 W/m². " +
    "The profile is illustrative and uses field averages.");

  // axes: temperature (x) 40 to 220 C, depth below top of cap (y) 0 to L m
  var X0 = 52, X1 = 425, Y0 = 20, Y1 = 255;
  function px(t) { return X0 + (X1 - X0) * (t - 40) / 180; }
  function py(d) { return Y0 + (Y1 - Y0) * d / L; }

  // temperature at height z above the base of the cap
  function temp(z, b) {
    if (b < 1e-6) return TL - (TL - T0) * z / L;
    var f = (Math.exp(b * z / L) - 1) / (Math.exp(b) - 1);
    return TL - (TL - T0) * f;
  }
  function factor(b) { return b < 1e-6 ? 1 : b / (1 - Math.exp(-b)); }

  function drawStatic(g) {
    sv("rect", { x: X0, y: Y0, width: X1 - X0, height: Y1 - Y0, fill: "none", stroke: "var(--rule)" }, g);
    [40, 80, 120, 160, 200].forEach(function (t) {
      sv("line", { x1: px(t), y1: Y1, x2: px(t), y2: Y1 + 4, stroke: "var(--muted)" }, g);
      sv("text", { x: px(t), y: Y1 + 17, fill: "var(--muted)", "font-size": 12, "text-anchor": "middle" }, g, String(t));
    });
    [0, 100, 200, 300].forEach(function (d) {
      sv("line", { x1: X0 - 4, y1: py(d), x2: X0, y2: py(d), stroke: "var(--muted)" }, g);
      sv("text", { x: X0 - 7, y: py(d) + 4, fill: "var(--muted)", "font-size": 12, "text-anchor": "end" }, g, String(d));
    });
    sv("text", { x: (X0 + X1) / 2, y: 293, fill: "var(--fg)", "font-size": 13, "text-anchor": "middle" }, g, "temperature (°C)");
    sv("text", { x: 14, y: (Y0 + Y1) / 2, fill: "var(--fg)", "font-size": 13, "text-anchor": "middle",
      transform: "rotate(-90 14 " + (Y0 + Y1) / 2 + ")" }, g, "depth below top of clay cap (m)");
    sv("line", { x1: px(T0), y1: py(0), x2: px(TL), y2: py(L), stroke: "var(--muted)", "stroke-dasharray": "5 4", "stroke-width": 1.5 }, g);
  }

  function update() {
    var b = Number(inp.value);
    labSpan.textContent = "Upward flow parameter β: " + b.toFixed(1);
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    drawStatic(svg);
    var pts = [];
    for (var i = 0; i <= 60; i++) {
      var d = L * i / 60;
      pts.push(px(temp(L - d, b)).toFixed(1) + "," + py(d).toFixed(1));
    }
    sv("polyline", { points: pts.join(" "), fill: "none", stroke: "var(--accent)", "stroke-width": 3 }, svg);
    var tMid = temp(L / 2, b);
    sv("circle", { cx: px(tMid), cy: py(L / 2), r: 5, fill: "var(--accent)" }, svg);
    var tLin = (T0 + TL) / 2;
    read.textContent = "With β = " + b.toFixed(1) + ", the heat flux at the top of the cap is " +
      factor(b).toFixed(2) + " times the conduction-only value, and the temperature halfway down is " +
      Math.round(tMid) + "°C, against " + Math.round(tLin) + "°C for conduction alone.";
  }

  inp.addEventListener("input", update);
  mk("p", root, "wu-cap", "Source: Ardid et al. (2021), Geophysical Research Letters 48, e2020GL092056, Eq. 1 and Sections 3 and 4.");
  update();
})();
