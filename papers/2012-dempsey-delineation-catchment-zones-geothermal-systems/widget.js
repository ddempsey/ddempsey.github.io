/* Catchment widget for Dempsey et al. (2012), J. Geophys. Res. 117, B10201.
   Points: heat output Q and catchment area C of the ten modelled systems (Table 1).
   Band: the 1-D relation of Weir (2009), Eq. (3), Q = rho_d h_u v_d C = c1 C with
         c1 = 0.5 to 1 MW per km2 (para. 41).
   Readout: catchment range C = Q / c1, its equivalent square side (our arithmetic), and the
            modelled system closest in heat output. */
(function () {
  "use strict";
  var root = document.getElementById("w-catchment");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  // Table 1: [system, Q (MW), C (km2)]
  var SYS = [[1, 105, 176], [2, 100, 70], [3, 133, 157], [4, 143, 97], [5, 240, 259],
             [6, 70, 104], [7, 157, 187], [8, 112, 91], [9, 833, 499], [10, 44, 83]];
  var C1LO = 0.5, C1HI = 1.0; // MW per km2, para. 41

  var style = document.createElement("style");
  style.textContent =
    "#w-catchment{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-catchment h4{margin:0 0 6px;font-size:1em}" +
    "#w-catchment label{display:block;margin:4px 0}" +
    "#w-catchment input[type=range]{width:100%;max-width:440px;accent-color:var(--accent)}" +
    "#w-catchment input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-catchment svg{display:block;width:100%;max-width:440px;height:auto}" +
    "#w-catchment .wc-read{margin:6px 0 0;font-weight:600}" +
    "#w-catchment .wc-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
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

  mk("h4", root, null, "Heat output and catchment area");
  var lab = mk("label", root);
  lab.setAttribute("for", "wc-q");
  var labSpan = mk("span", lab);
  var inp = document.createElement("input");
  inp.type = "range"; inp.id = "wc-q"; inp.min = 40; inp.max = 850; inp.step = 10; inp.value = 200;
  root.appendChild(inp);

  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 440 300");
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);
  var read = mk("p", root, "wc-read");
  read.setAttribute("aria-live", "polite");
  mk("p", root, "wc-cap", "Points are the ten modelled fields (Table 1 of the paper). The shaded band is the 1-D relation of Weir (2009), which gives 0.5 to 1 MW of heat output per km² of catchment for representative values from the model (Eq. 3 and para. 41). Both axes are logarithmic. The square sizes in the readout are our arithmetic.");

  // log-log axes: catchment area (x) 20 to 2000 km2, heat output (y) 20 to 1000 MW
  var X0 = 52, X1 = 425, Y0 = 255, Y1 = 12;
  var XL = Math.log10(20), XH = Math.log10(2000), YL = Math.log10(20), YH = Math.log10(1000);
  function px(c) { return X0 + (X1 - X0) * (Math.log10(c) - XL) / (XH - XL); }
  function py(q) { return Y0 - (Y0 - Y1) * (Math.log10(q) - YL) / (YH - YL); }

  function drawStatic(g) {
    // band between Q = 0.5 C and Q = 1 C, clipped to the plot
    var pts = [], c;
    for (c = 20; c <= 2000; c *= 1.05) pts.push([c, Math.min(1000, Math.max(20, C1HI * c))]);
    for (c = 2000; c >= 20; c /= 1.05) pts.push([c, Math.min(1000, Math.max(20, C1LO * c))]);
    sv("polygon", { points: pts.map(function (p) { return px(p[0]).toFixed(1) + "," + py(p[1]).toFixed(1); }).join(" "),
      fill: "var(--accent)", "fill-opacity": 0.15, stroke: "none" }, g);
    sv("rect", { x: X0, y: Y1, width: X1 - X0, height: Y0 - Y1, fill: "none", stroke: "var(--rule)" }, g);
    [20, 50, 100, 200, 500, 1000, 2000].forEach(function (t) {
      sv("line", { x1: px(t), y1: Y0, x2: px(t), y2: Y0 + 4, stroke: "var(--muted)" }, g);
      sv("text", { x: px(t), y: Y0 + 17, fill: "var(--muted)", "font-size": 12, "text-anchor": "middle" }, g, String(t));
    });
    [20, 50, 100, 200, 500, 1000].forEach(function (t) {
      sv("line", { x1: X0 - 4, y1: py(t), x2: X0, y2: py(t), stroke: "var(--muted)" }, g);
      sv("text", { x: X0 - 7, y: py(t) + 4, fill: "var(--muted)", "font-size": 12, "text-anchor": "end" }, g, String(t));
    });
    sv("text", { x: (X0 + X1) / 2, y: 293, fill: "var(--fg)", "font-size": 13, "text-anchor": "middle" }, g, "catchment area (km²)");
    sv("text", { x: 14, y: (Y0 + Y1) / 2, fill: "var(--fg)", "font-size": 13, "text-anchor": "middle",
      transform: "rotate(-90 14 " + (Y0 + Y1) / 2 + ")" }, g, "heat output (MW)");
    SYS.forEach(function (s) {
      sv("circle", { cx: px(s[2]), cy: py(s[1]), r: 4.5, fill: "var(--fg)" }, g);
    });
  }

  function fmt(v) { return String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, ","); }

  function nearest(q) {
    var best = SYS[0];
    SYS.forEach(function (s) { if (Math.abs(s[1] - q) < Math.abs(best[1] - q)) best = s; });
    return best;
  }

  function update() {
    var q = Number(inp.value);
    labSpan.textContent = "Field heat output: " + q + " MW";
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    drawStatic(svg);
    var cLo = q / C1HI, cHi = q / C1LO;
    var xa = px(Math.max(20, cLo)), xb = px(Math.min(2000, cHi));
    sv("line", { x1: X0, y1: py(q), x2: X1, y2: py(q), stroke: "var(--muted)", "stroke-dasharray": "4 4" }, svg);
    sv("line", { x1: xa, y1: py(q), x2: xb, y2: py(q), stroke: "var(--accent)", "stroke-width": 5 }, svg);
    var n = nearest(q);
    sv("circle", { cx: px(n[2]), cy: py(n[1]), r: 7, fill: "none", stroke: "var(--accent)", "stroke-width": 2 }, svg);
    var sLo = Math.round(Math.sqrt(cLo)), sHi = Math.round(Math.sqrt(cHi));
    read.textContent = "At " + q + " MW, the 1-D relation gives a catchment of " + fmt(cLo) + " to " +
      fmt(cHi) + " km², a square about " + sLo + " to " + sHi + " km on a side. The modelled field closest in output, system " +
      n[0] + " (" + n[1] + " MW), had a catchment of " + n[2] + " km².";
  }

  inp.addEventListener("input", update);
  mk("p", root, "wc-cap", "Source: Dempsey et al. (2012), Journal of Geophysical Research 117, B10201, Table 1, Eq. 3 and para. 41.");
  update();
})();
