/* IFT calculator for Chang, Dempsey and Huang (2026), Journal of Energy Storage 143, 119683.
   Formula (section 3.4): IFT = A0 + A1*x + A2*P + A3*T, with x = H2S mole fraction, P in MPa,
   T in K. Coefficients from Table 8. Stated range of validity: 298-343 K, 10-30 MPa,
   x <= 0.40 (section 3.5).
   Simulated (molecular dynamics) values and standard deviations from Tables 3 and 4
   (10-40 mol% H2S only, the 0 mol% values are not tabulated). They are shown when the
   chosen pressure and temperature match a simulated condition. */
(function () {
  "use strict";
  var root = document.getElementById("w-ift-h2s");
  if (!root) return;
  var NS = "http://www.w3.org/2000/svg";

  var COEF = {
    H2: [116.84832, -113.49682, -0.37202, -0.11794],
    CH4: [89.44622, -87.21419, -0.3057, -0.08961]
  };
  var PS = [10, 14.5, 22.5, 30];
  // MD[gas][T][pressure index] = [[IFT, std] at 10, 20, 30, 40 mol% H2S]
  var MD = {
    H2: {
      343: [[[64.52, 1.08], [51.81, 1.43], [40.93, 0.31], [28.53, 1.09]],
            [[58.21, 1.67], [47.99, 0.71], [35.63, 1.63], [26.13, 0.13]],
            [[54.89, 0.60], [44.87, 0.57], [32.25, 1.31], [23.45, 1.07]],
            [[53.85, 0.71], [42.99, 0.32], [30.73, 0.19], [23.36, 0.17]]],
      298: [[[68.72, 0.82], [56.73, 1.27], [43.28, 0.28], [30.31, 0.58]],
            [[67.19, 1.46], [53.59, 0.37], [40.68, 0.33], [28.29, 1.83]],
            [[63.98, 0.41], [49.53, 0.14], [39.21, 1.33], [26.13, 0.26]],
            [[61.42, 0.76], [47.46, 1.43], [35.69, 0.42], [25.82, 1.71]]]
    },
    CH4: {
      343: [[[50.63, 0.82], [39.13, 0.29], [30.72, 1.24], [22.36, 0.38]],
            [[45.59, 1.62], [34.33, 0.03], [26.38, 1.91], [18.83, 0.13]],
            [[42.52, 1.06], [32.84, 0.24], [24.89, 1.00], [17.73, 0.79]],
            [[42.06, 0.53], [32.16, 0.77], [24.07, 0.61], [17.06, 0.63]]],
      298: [[[52.72, 1.71], [44.45, 0.76], [32.92, 1.14], [24.58, 0.24]],
            [[47.71, 1.25], [40.09, 0.54], [30.04, 0.89], [22.79, 1.27]],
            [[45.43, 1.42], [37.09, 0.66], [28.29, 1.76], [21.26, 0.08]],
            [[44.61, 1.18], [36.84, 1.40], [26.99, 1.55], [21.45, 0.37]]]
    }
  };
  var NAME = { H2: "hydrogen", CH4: "methane" };

  function ift(g, x, p, t) {
    var a = COEF[g];
    return a[0] + a[1] * x + a[2] * p + a[3] * t;
  }

  var style = document.createElement("style");
  style.textContent =
    "#w-ift-h2s{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-ift-h2s h4{margin:0 0 8px;font-size:1em}" +
    "#w-ift-h2s .wi-row{margin:6px 0}" +
    "#w-ift-h2s label{display:block;margin:0 0 2px}" +
    "#w-ift-h2s input[type=range]{width:100%;max-width:420px;accent-color:var(--accent)}" +
    "#w-ift-h2s select{font:inherit;color:var(--fg);background:var(--panel);border:1px solid var(--rule);padding:2px 4px}" +
    "#w-ift-h2s select:focus-visible,#w-ift-h2s input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-ift-h2s svg{display:block;width:100%;max-width:440px;height:auto;margin-top:8px}" +
    "#w-ift-h2s .wi-read{margin:8px 0 0;font-weight:600}" +
    "#w-ift-h2s .wi-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
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
  function slider(parent, id, min, max, step, val) {
    var row = mk("div", parent, "wi-row");
    var lab = mk("label", row);
    lab.setAttribute("for", id);
    var inp = document.createElement("input");
    inp.type = "range"; inp.id = id;
    inp.min = min; inp.max = max; inp.step = step; inp.value = val;
    row.appendChild(inp);
    return { input: inp, label: lab };
  }

  mk("h4", root, null, "Fitted interfacial tension formula");
  var gRow = mk("div", root, "wi-row");
  var gLab = mk("label", gRow, null, "Stored gas");
  gLab.setAttribute("for", "wi-gas");
  var gSel = document.createElement("select");
  gSel.id = "wi-gas";
  ["H2", "CH4"].forEach(function (g) {
    var o = document.createElement("option");
    o.value = g; o.textContent = g === "H2" ? "Hydrogen (H2)" : "Methane (CH4)";
    gSel.appendChild(o);
  });
  gRow.appendChild(gSel);

  var sx = slider(root, "wi-x", 0, 40, 1, 20);
  var sp = slider(root, "wi-p", 10, 30, 0.5, 14.5);
  var st = slider(root, "wi-t", 298, 343, 1, 343);

  var W = 440, H = 230, L = 46, R = 12, T = 12, B = 40;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = mk("p", root, "wi-read");
  read.setAttribute("aria-live", "polite");
  mk("p", root, "wi-cap",
    "The line is the fitted formula (Table 8 of the paper) at the chosen pressure and temperature. " +
    "Dots show the simulated values (Tables 3 and 4) when the pressure is 10, 14.5, 22.5 or 30 MPa " +
    "and the temperature is 298 or 343 K. The formula is not intended for use outside 298 to 343 K and " +
    "10 to 30 MPa, or above 40 mol% H2S.");

  var YMAX = 90;
  function X(v) { return L + (W - L - R) * v / 40; }
  function Y(v) { return T + (H - T - B) * (1 - v / YMAX); }

  function draw() {
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var g = gSel.value, x = +sx.input.value, p = +sp.input.value, t = +st.input.value;
    var i, v;
    for (v = 0; v <= YMAX; v += 30) {
      sv("line", { x1: L, x2: W - R, y1: Y(v), y2: Y(v), stroke: "var(--rule)", "stroke-width": 1 }, svg);
      sv("text", { x: L - 6, y: Y(v) + 4, "text-anchor": "end", "font-size": 11, fill: "var(--muted)" }, svg, v);
    }
    for (v = 0; v <= 40; v += 10) {
      sv("text", { x: X(v), y: H - B + 16, "text-anchor": "middle", "font-size": 11, fill: "var(--muted)" }, svg, v);
    }
    sv("text", { x: (L + W - R) / 2, y: H - 6, "text-anchor": "middle", "font-size": 11, fill: "var(--muted)" }, svg, "H2S in gas (mol%)");
    sv("text", { x: 12, y: (T + H - B) / 2, "text-anchor": "middle", "font-size": 11, fill: "var(--muted)",
      transform: "rotate(-90 12 " + (T + H - B) / 2 + ")" }, svg, "IFT (mN/m)");
    sv("line", { x1: X(0), y1: Y(ift(g, 0, p, t)), x2: X(40), y2: Y(ift(g, 0.4, p, t)),
      stroke: "var(--accent)", "stroke-width": 2 }, svg);

    var pi = PS.indexOf(p), md = null;
    if (pi >= 0 && (t === 298 || t === 343)) {
      var rows = MD[g][t][pi];
      for (i = 0; i < 4; i++) {
        var cx = X(10 * (i + 1)), m = rows[i];
        sv("line", { x1: cx, x2: cx, y1: Y(m[0] - m[1]), y2: Y(m[0] + m[1]), stroke: "var(--fg)", "stroke-width": 1 }, svg);
        sv("circle", { cx: cx, cy: Y(m[0]), r: 3.5, fill: "var(--panel)", stroke: "var(--fg)", "stroke-width": 1.5 }, svg);
      }
      if (x > 0 && x % 10 === 0) md = rows[x / 10 - 1];
    }
    var y = ift(g, x / 100, p, t);
    sv("circle", { cx: X(x), cy: Y(y), r: 5, fill: "var(--accent)" }, svg);

    sx.label.textContent = "H2S in gas: " + x + " mol%";
    sp.label.textContent = "Pressure: " + p + " MPa";
    st.label.textContent = "Temperature: " + t + " K (" + (t - 273) + " °C, rounded)";
    var txt = "The formula gives " + y.toFixed(1) + " mN/m for " + NAME[g] + " with " + x +
      " mol% H2S at " + p + " MPa and " + t + " K.";
    if (md) txt += " The simulation gave " + md[0].toFixed(2) + " ± " + md[1].toFixed(2) + " mN/m.";
    read.textContent = txt;
  }

  [gSel, sx.input, sp.input, st.input].forEach(function (e) { e.addEventListener("input", draw); });
  gSel.addEventListener("change", draw);
  draw();
})();
