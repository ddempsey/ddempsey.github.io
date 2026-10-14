/* Caprock doming above a CO2 injection well, for Dempsey et al. (2014), Int. J. Greenh. Gas Control 22:223-236.
   Schematic only. The four cases and their numbers are the paper's reported results after ten years of
   injection (Sections 4.1, 4.2 and 4.4). The bump shape and vertical exaggeration are ours. */
(function () {
  "use strict";
  var root = document.getElementById("w-caprock");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var W = 640, H = 310, XC = W / 2, SIG = 120, EXAG = 220; // px per metre of uplift (schematic)
  var Y_SURF = 100, Y_RES_TOP = 210, Y_RES_BOT = 242, Y_BASE = 305;

  // Paper's reported values. cfs: peak caprock dCFS (MPa), or null where the paper gives no single value.
  var CASES = [
    { id: "bench", name: "benchmark", label: "Benchmark (5 MPa, 20 GPa caprock)", op: 5, E: 20, uplift: 0.09, upTxt: "about 0.09 m",
      cfs: 1.2, cfsTxt: "1.2 MPa" },
    { id: "op15", name: "higher-overpressure", label: "Higher overpressure (15 MPa, 20 GPa)", op: 15, E: 20, uplift: 0.29, upTxt: "almost 0.3 m",
      cfs: 3.5, cfsTxt: "3.5 MPa" },
    { id: "soft", name: "soft-caprock", label: "Soft caprock (5 MPa, 5 GPa)", op: 5, E: 5, uplift: 0.18, upTxt: "0.18 m",
      cfs: null, cfsTxt: "little changed from the benchmark" },
    { id: "stiff", name: "stiff-caprock", label: "Stiff caprock (5 MPa, 100 GPa)", op: 5, E: 100, uplift: 0.05, upTxt: "about 0.05 m",
      cfs: null, cfsTxt: "little changed from the benchmark" }
  ];

  function el(name, attrs, parent) {
    var e = document.createElementNS(NS, name), k;
    for (k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }

  // ---- layout ----
  var style = document.createElement("style");
  style.textContent =
    "#w-caprock{border:1px solid var(--rule);background:var(--panel);padding:12px;border-radius:6px;color:var(--fg)}" +
    "#w-caprock fieldset{border:0;margin:0 0 8px;padding:0;display:flex;flex-wrap:wrap;gap:6px 14px}" +
    "#w-caprock legend{font-weight:600;margin-bottom:4px;padding:0}" +
    "#w-caprock label{display:flex;align-items:center;gap:6px;cursor:pointer;font-size:0.95em}" +
    "#w-caprock svg{width:100%;height:auto;display:block}" +
    "#w-caprock .ro{margin:8px 0 4px;font-size:0.95em}" +
    "#w-caprock .cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  var fs = document.createElement("fieldset");
  var lg = document.createElement("legend");
  lg.textContent = "Simulated case (overpressure, caprock Young's modulus)";
  fs.appendChild(lg);
  CASES.forEach(function (c, i) {
    var lab = document.createElement("label");
    var inp = document.createElement("input");
    inp.type = "radio"; inp.name = "w-caprock-case"; inp.value = c.id; inp.checked = i === 0;
    inp.addEventListener("change", function () { if (inp.checked) draw(c); });
    lab.appendChild(inp);
    lab.appendChild(document.createTextNode(c.label));
    fs.appendChild(lab);
  });
  root.appendChild(fs);

  var svg = el("svg", { viewBox: "0 0 " + W + " " + H, role: "img",
    "aria-label": "Cross-section: caprock above a pressurised reservoir, domed upward over the injection well" });
  root.appendChild(svg);
  var ro = document.createElement("p");
  ro.className = "ro"; ro.setAttribute("aria-live", "polite");
  root.appendChild(ro);
  var cap = document.createElement("p");
  cap.className = "cap";
  cap.textContent = "This is a schematic. The numbers are the paper's model results after ten years of injection from one well. " +
    "The shape of the dome, its width and the vertical exaggeration are ours, for illustration only. " +
    "Shading in the caprock scales with the paper's peak ΔCFS where one value is reported.";
  root.appendChild(cap);

  function bump(x, a) { var d = (x - XC) / SIG; return a * Math.exp(-0.5 * d * d); }

  function surfPath(y0, a) {
    var s = "", x;
    for (x = 0; x <= W; x += 8) s += (x ? "L" : "M") + x + " " + (y0 - bump(x, a)).toFixed(1) + " ";
    return s;
  }

  function band(yTop, yBot, aTop, aBot) {
    var s = surfPath(yTop, aTop), x;
    for (x = W; x >= 0; x -= 8) s += "L" + x + " " + (yBot - bump(x, aBot)).toFixed(1) + " ";
    return s + "Z";
  }

  function arrow(g, x1, y, x2) {
    el("line", { x1: x1, y1: y, x2: x2, y2: y, stroke: "currentColor", "stroke-width": 2 }, g);
    var dir = x2 > x1 ? -1 : 1;
    el("path", { d: "M" + x2 + " " + y + " l" + (8 * dir) + " -5 v10 Z", fill: "currentColor" }, g);
  }

  function text(g, x, y, s, anchor) {
    var t = el("text", { x: x, y: y, "font-size": 15, fill: "currentColor", "text-anchor": anchor || "start" }, g);
    t.textContent = s;
    return t;
  }

  function draw(c) {
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var a = c.uplift * EXAG;             // surface uplift (px)
    var aRes = a * 1.15;                  // reservoir top domes a little more (schematic)
    var g = el("g", { style: "color:var(--fg)" }, svg);

    // basement
    el("path", { d: band(Y_RES_BOT, Y_BASE, aRes * 0.6, 0), fill: "var(--rule)", opacity: 0.35 }, g);
    // reservoir, shaded by overpressure
    el("path", { d: band(Y_RES_TOP, Y_RES_BOT, aRes, aRes * 0.6), fill: "var(--accent)",
      opacity: (0.25 + 0.04 * c.op).toFixed(2) }, g);
    // caprock
    el("path", { d: band(Y_SURF, Y_RES_TOP, a, aRes), fill: "var(--panel)", stroke: "var(--muted)", "stroke-width": 1 }, g);
    // raised dCFS zone in caprock above well
    var op = c.cfs === null ? 0.3 : Math.min(0.75, 0.25 * c.cfs);
    el("ellipse", { cx: XC, cy: (Y_SURF + Y_RES_TOP) / 2 - bump(XC, (a + aRes) / 2), rx: 95, ry: 52,
      fill: "var(--accent)", opacity: op.toFixed(2) }, g);
    // original surface for reference
    el("line", { x1: 0, y1: Y_SURF, x2: W, y2: Y_SURF, stroke: "var(--muted)", "stroke-dasharray": "4 4" }, g);
    el("path", { d: surfPath(Y_SURF, a), fill: "none", stroke: "currentColor", "stroke-width": 2 }, g);
    // well
    el("line", { x1: XC, y1: Y_SURF - a - 30, x2: XC, y2: Y_RES_TOP - aRes + 12, stroke: "currentColor",
      "stroke-width": 3 }, g);
    // extension arrows near the surface
    var yA = Y_SURF - a + 20;
    arrow(g, XC - 30, yA, XC - 90);
    arrow(g, XC + 30, yA, XC + 90);

    text(g, 8, Y_SURF - 8, "ground surface (dashed line before injection)");
    text(g, 8, (Y_SURF + Y_RES_TOP) / 2 + 30, "caprock");
    text(g, 8, Y_RES_BOT - 10, "reservoir (" + c.op + " MPa overpressure)");
    text(g, 8, Y_BASE - 12, "basement");
    text(g, XC + 96, yA - 10, "horizontal extension");

    ro.textContent = "In the " + c.name + " case (" + c.op + " MPa overpressure, " + c.E + " GPa caprock), uplift after ten years was " +
      c.upTxt + " and peak caprock ΔCFS was " + c.cfsTxt + ".";
  }

  draw(CASES[0]);
})();
