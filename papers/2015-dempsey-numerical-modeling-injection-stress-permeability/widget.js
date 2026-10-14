/* Critical overpressure for shear failure at Desert Peak, for Dempsey, Kelkar,
   Davatzes, Hickman and Moos (2015), Int. J. Rock Mech. Min. Sci. 78, 190-206.
   Uses Eq. (1), (sh - P)/(sv - P) = 1/[(1 + mu^2)^0.5 + mu]^2, solved for
   P = P0 + dP, with sv = 22.6 MPa, sh = 13.8 +/- 0.4 MPa, P0 = 7.5 MPa
   (Section 2.1). Overpressure at depth = WHP + 1.1 MPa for filling the well
   (Section 2.1). WHP limit of 5.2 MPa to avoid hydraulic fracturing. */
(function () {
  "use strict";
  var root = document.getElementById("w-critpressure");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var SV = 22.6, SH = 13.8, DSH = 0.4, P0 = 7.5, FILL = 1.1, WHPMAX = 5.2;
  var MU0 = 0.6, MU1 = 1.0, YMAX = 7;

  function dpCrit(mu, sh) {
    var r = Math.sqrt(1 + mu * mu) + mu;
    var a = r * r;
    return (a * sh - SV) / (a - 1) - P0;
  }

  var style = document.createElement("style");
  style.textContent =
    "#w-critpressure{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-critpressure label{display:block;font-weight:600;margin:6px 0 4px}" +
    "#w-critpressure input[type=range]{width:100%;accent-color:var(--accent)}" +
    "#w-critpressure input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-critpressure svg{display:block;width:100%;height:auto;margin-top:6px}" +
    "#w-critpressure .wc-read{margin:8px 0 4px;font-weight:600}" +
    "#w-critpressure .wc-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  function slider(id, text, min, max, step, value) {
    var lab = document.createElement("label");
    lab.setAttribute("for", id);
    lab.textContent = text;
    root.appendChild(lab);
    var inp = document.createElement("input");
    inp.type = "range"; inp.id = id;
    inp.min = String(min); inp.max = String(max); inp.step = String(step); inp.value = String(value);
    root.appendChild(inp);
    return inp;
  }
  var muIn = slider("wc-mu", "Friction coefficient of the fractures", 0.65, 0.96, 0.01, 0.75);
  var whpIn = slider("wc-whp", "Wellhead pressure (MPa)", 0, WHPMAX, 0.1, 3.1);

  var W = 600, H = 300;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = document.createElement("p");
  read.className = "wc-read";
  read.setAttribute("aria-live", "polite");
  root.appendChild(read);
  var cap = document.createElement("p");
  cap.className = "wc-cap";
  cap.textContent = "The curve is Eq. (1) of the paper for cohesionless fractures at the best orientation, " +
    "with vertical stress 22.6 MPa, minimum horizontal stress 13.8 MPa (band: 13.4 to 14.2 MPa) " +
    "and initial fluid pressure 7.5 MPa at 930 m depth. Overpressure at depth is the wellhead pressure " +
    "plus about 1.1 MPa from the weight of water filling the well. Injectivity did not change at 1.7 and 2.4 MPa, although this calculation " +
    "puts some of those pressures inside or above the range. The range applies only to fractures at the best orientation, " +
    "and our calibrated model uses a friction coefficient of 0.75. In our model, the water at those steps was only about " +
    "20 °C cooler than the rock, too little to bring fractures to failure. Failure began at 3.1 MPa, once faster injection " +
    "delivered colder water and cooling and pressure acted together. " +
    "Source: Dempsey et al. (2015), Int. J. Rock Mech. Min. Sci. 78, 190–206, Section 2.1.";
  root.appendChild(cap);

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }

  var X0 = 60, X1 = 580, Y0 = 16, Y1 = 250;
  function px(mu) { return X0 + (X1 - X0) * (mu - MU0) / (MU1 - MU0); }
  function py(p) { return Y1 - (Y1 - Y0) * p / YMAX; }

  function curve(sh) {
    var pts = [];
    for (var i = 0; i <= 40; i++) {
      var mu = MU0 + (MU1 - MU0) * i / 40;
      pts.push([px(mu), py(dpCrit(mu, sh))]);
    }
    return pts;
  }
  function pathOf(pts) {
    return pts.map(function (q, i) { return (i ? "L" : "M") + q[0].toFixed(1) + " " + q[1].toFixed(1); }).join("");
  }

  function render() {
    var mu = Number(muIn.value), whp = Number(whpIn.value);
    var lo = dpCrit(mu, SH - DSH), mid = dpCrit(mu, SH), hi = dpCrit(mu, SH + DSH);
    var dp = whp + FILL;
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    el("line", { x1: X0, x2: X1, y1: Y1, y2: Y1, stroke: "var(--rule)" });
    el("line", { x1: X0, x2: X0, y1: Y0, y2: Y1, stroke: "var(--rule)" });
    [0.6, 0.7, 0.8, 0.9, 1.0].forEach(function (t) {
      el("line", { x1: px(t), x2: px(t), y1: Y1, y2: Y1 + 5, stroke: "var(--rule)" });
      el("text", { x: px(t), y: Y1 + 21, fill: "var(--muted)", "font-size": 14, "text-anchor": "middle" }, t.toFixed(1));
    });
    [0, 2, 4, 6].forEach(function (t) {
      el("text", { x: X0 - 8, y: py(t) + 5, fill: "var(--muted)", "font-size": 14, "text-anchor": "end" }, String(t));
    });
    el("text", { x: (X0 + X1) / 2, y: H - 4, fill: "var(--muted)", "font-size": 14, "text-anchor": "middle" }, "friction coefficient");
    el("text", { x: 16, y: (Y0 + Y1) / 2, fill: "var(--muted)", "font-size": 14, "text-anchor": "middle",
      transform: "rotate(-90 16 " + (Y0 + Y1) / 2 + ")" }, "overpressure (MPa)");

    // Band of critical overpressure for the stress uncertainty
    var up = curve(SH + DSH), down = curve(SH - DSH).reverse();
    el("path", { d: pathOf(up) + pathOf(down).replace("M", "L") + "Z", fill: "var(--accent)", "fill-opacity": 0.18, stroke: "none" });
    el("path", { d: pathOf(curve(SH)), fill: "none", stroke: "var(--accent)", "stroke-width": 3 });
    el("text", { x: px(0.62), y: py(dpCrit(0.62, SH + DSH)) - 8, fill: "var(--fg)", "font-size": 13 }, "predicted failure");

    // Hydraulic fracturing limit at depth
    var hf = SH - P0;
    el("line", { x1: X0, x2: X1, y1: py(hf), y2: py(hf), stroke: "var(--muted)", "stroke-dasharray": "6 4" });
    el("text", { x: X1 - 4, y: py(hf) - 6, fill: "var(--muted)", "font-size": 13, "text-anchor": "end" }, "hydraulic fracture");

    // Overpressure at depth for the chosen WHP
    el("line", { x1: X0, x2: X1, y1: py(dp), y2: py(dp), stroke: "var(--fg)", "stroke-width": 2 });
    el("text", { x: X0 + 6, y: py(dp) - 6, fill: "var(--fg)", "font-size": 13 }, "at depth: " + dp.toFixed(1) + " MPa");

    el("line", { x1: px(mu), x2: px(mu), y1: py(hi), y2: py(lo), stroke: "var(--fg)", "stroke-width": 2 });
    el("circle", { cx: px(mu), cy: py(mid), r: 6, fill: "var(--accent)" });

    var verdict = dp < lo ? "below this range" : (dp > hi ? "above this range" : "within this range");
    read.textContent = "With a friction coefficient of " + mu.toFixed(2) + ", failure of the best-oriented fractures should begin at " +
      lo.toFixed(1) + " to " + hi.toFixed(1) + " MPa of overpressure (" + mid.toFixed(1) +
      " MPa for the central stress). A wellhead pressure of " + whp.toFixed(1) + " MPa gives an overpressure at depth of about " +
      dp.toFixed(1) + " MPa, " + verdict + "." +
      (whp <= 2.4 ? " Injectivity did not change at wellhead pressures up to 2.4 MPa in 2010. In our model, the water at " +
        "these steps was only about 20 °C cooler than the rock, too little cooling for fractures to fail." : "");
  }

  muIn.addEventListener("input", render);
  whpIn.addEventListener("input", render);
  render();
})();
