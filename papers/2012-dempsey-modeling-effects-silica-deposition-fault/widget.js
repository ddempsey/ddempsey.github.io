/* Silica deposition widget for Dempsey et al. (2012), J. Geophys. Res. 117, B05207.
   Panel 1: direction factor of Eq. (4), rate proportional to M . gradT = |M||gradT| cos(theta).
            Cooling (theta > 90 deg) precipitates, warming (theta < 90 deg) dissolves (para. 40).
   Panel 2: cube-law porosity-permeability relation of Eq. (6), k = A1 phi^3, with A1 fixed by
            Table 2 (phi = 20%, k = 10^-12.9 m2 at the surface). */
(function () {
  "use strict";
  var root = document.getElementById("w-silica-angle");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var LOGK0 = -12.9, PHI0 = 20; // Table 2, z = 0

  var style = document.createElement("style");
  style.textContent =
    "#w-silica-angle{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-silica-angle .ws-part{margin:0 0 14px}" +
    "#w-silica-angle h4{margin:0 0 6px;font-size:1em}" +
    "#w-silica-angle label{display:block;margin:4px 0}" +
    "#w-silica-angle input[type=range]{width:100%;max-width:420px;accent-color:var(--accent)}" +
    "#w-silica-angle input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-silica-angle svg{display:block;width:100%;max-width:420px;height:auto}" +
    "#w-silica-angle .ws-read{margin:6px 0 0;font-weight:600}" +
    "#w-silica-angle .ws-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
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
  function slider(parent, id, text, min, max, step, val) {
    var lab = mk("label", parent);
    lab.setAttribute("for", id);
    var span = mk("span", lab, null, text);
    var inp = document.createElement("input");
    inp.type = "range"; inp.id = id; inp.min = min; inp.max = max; inp.step = step; inp.value = val;
    parent.appendChild(inp);
    return { inp: inp, span: span };
  }

  // ---- Panel 1: angle between flow and temperature gradient ----
  var p1 = mk("div", root, "ws-part");
  mk("h4", p1, null, "Direction of flow relative to the temperature gradient");
  var a = slider(p1, "ws-angle", "", 0, 180, 5, 150);
  var svg1 = document.createElementNS(NS, "svg");
  svg1.setAttribute("viewBox", "0 0 420 190");
  svg1.setAttribute("aria-hidden", "true");
  p1.appendChild(svg1);
  var r1 = mk("p", p1, "ws-read");
  r1.setAttribute("aria-live", "polite");

  var defs = sv("defs", {}, svg1);
  ["acc", "mut"].forEach(function (n) {
    var m = sv("marker", { id: "ws-head-" + n, viewBox: "0 0 10 10", refX: 8, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto-start-reverse" }, defs);
    sv("path", { d: "M0,0 L10,5 L0,10 z", fill: n === "acc" ? "var(--accent)" : "var(--fg)" }, m);
  });
  var CX = 110, CY = 95, L = 70;

  function drawAngle(th) {
    while (svg1.childNodes.length > 1) svg1.removeChild(svg1.lastChild);
    // temperature gradient arrow, fixed, pointing down (towards hotter rock)
    sv("text", { x: CX, y: 14, fill: "var(--muted)", "font-size": 13, "text-anchor": "middle" }, svg1, "cooler");
    sv("text", { x: CX, y: 186, fill: "var(--muted)", "font-size": 13, "text-anchor": "middle" }, svg1, "hotter");
    sv("line", { x1: CX, y1: CY, x2: CX, y2: CY + L, stroke: "var(--fg)", "stroke-width": 3, "marker-end": "url(#ws-head-mut)" }, svg1);
    var rad = th * Math.PI / 180;
    var fx = CX + L * Math.sin(rad), fy = CY + L * Math.cos(rad);
    sv("line", { x1: CX, y1: CY, x2: fx, y2: fy, stroke: "var(--accent)", "stroke-width": 4, "marker-end": "url(#ws-head-acc)" }, svg1);
    // legend
    sv("line", { x1: 220, y1: 40, x2: 250, y2: 40, stroke: "var(--fg)", "stroke-width": 3 }, svg1);
    sv("text", { x: 258, y: 45, fill: "var(--fg)", "font-size": 14 }, svg1, "temperature gradient");
    sv("line", { x1: 220, y1: 66, x2: 250, y2: 66, stroke: "var(--accent)", "stroke-width": 4 }, svg1);
    sv("text", { x: 258, y: 71, fill: "var(--fg)", "font-size": 14 }, svg1, "water flow");
    // rate bar: -1 (dissolve) .. +1 (precipitate)
    var f = -Math.cos(rad), BX = 220, BW = 180, BY = 110, mid = BX + BW / 2;
    sv("rect", { x: BX, y: BY, width: BW, height: 16, fill: "none", stroke: "var(--rule)" }, svg1);
    sv("line", { x1: mid, y1: BY - 4, x2: mid, y2: BY + 20, stroke: "var(--muted)" }, svg1);
    var w = Math.abs(f) * BW / 2;
    if (w > 0.5) sv("rect", { x: f >= 0 ? mid : mid - w, y: BY, width: w, height: 16, fill: "var(--accent)" }, svg1);
    sv("text", { x: BX, y: BY + 34, fill: "var(--muted)", "font-size": 13 }, svg1, "dissolves");
    sv("text", { x: BX + BW, y: BY + 34, fill: "var(--muted)", "font-size": 13, "text-anchor": "end" }, svg1, "precipitates");
    return f;
  }

  function updAngle() {
    var th = Number(a.inp.value);
    a.span.textContent = "Angle between water flow and the temperature gradient: " + th + "°";
    var f = drawAngle(th);
    var pct = Math.round(Math.abs(f) * 100);
    var s;
    if (pct < 1) {
      s = "At " + th + "°, the temperature of the water does not change as it flows. Silica neither precipitates nor dissolves.";
    } else if (f > 0) {
      s = "At " + th + "°, the water cools as it flows. Silica precipitates at " + pct + "% of the rate for flow straight towards cooler rock.";
    } else {
      s = "At " + th + "°, the water warms as it flows. Silica dissolves at " + pct + "% of the rate for flow straight towards hotter rock.";
    }
    r1.textContent = s;
  }
  a.inp.addEventListener("input", updAngle);
  mk("p", p1, "ws-cap", "This panel is illustrative. The rate scales with the cosine of the angle (Eq. 4 of the paper). Flow rate, temperature gradient, and the change of silica solubility with temperature are held fixed. The panel shows relative rates only.");

  // ---- Panel 2: porosity to permeability ----
  var p2 = mk("div", root, "ws-part");
  mk("h4", p2, null, "Porosity loss and permeability in the volcanic deposits");
  var b = slider(p2, "ws-phi", "", 2, 20, 1, 8);
  var svg2 = document.createElementNS(NS, "svg");
  svg2.setAttribute("viewBox", "0 0 420 70");
  svg2.setAttribute("aria-hidden", "true");
  p2.appendChild(svg2);
  var r2 = mk("p", p2, "ws-read");
  r2.setAttribute("aria-live", "polite");
  mk("p", p2, "ws-cap", "Permeability varies with the cube of porosity, scaled to 20% porosity and 1.3 × 10⁻¹³ m² at the surface (Eq. 6 and Table 2 of the paper, where the logarithm is −12.9). The same relation gives Table 2's value at 6% porosity (logarithm −14.5), and about 10⁻¹⁶ m² at 2%, the model's lower limit (our arithmetic).");

  function sup(n) {
    var m = { "-": "⁻", "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹" };
    return String(n).split("").map(function (c) { return m[c] || c; }).join("");
  }

  function updPhi() {
    var phi = Number(b.inp.value);
    b.span.textContent = "Porosity: " + phi + "%";
    var logk = LOGK0 + 3 * Math.log10(phi / PHI0);
    var ratio = Math.pow(PHI0 / phi, 3);
    while (svg2.firstChild) svg2.removeChild(svg2.firstChild);
    var X0 = 10, W = 400, lo = -16, hi = -12.9;
    sv("rect", { x: X0, y: 10, width: W, height: 18, fill: "none", stroke: "var(--rule)" }, svg2);
    sv("rect", { x: X0, y: 10, width: Math.max(2, W * (logk - lo) / (hi - lo)), height: 18, fill: "var(--accent)" }, svg2);
    sv("text", { x: X0, y: 46, fill: "var(--muted)", "font-size": 13 }, svg2, "10⁻¹⁶ m²");
    sv("text", { x: X0 + W, y: 46, fill: "var(--muted)", "font-size": 13, "text-anchor": "end" }, svg2, "1.3 × 10⁻¹³ m²");
    sv("text", { x: X0 + W / 2, y: 62, fill: "var(--muted)", "font-size": 13, "text-anchor": "middle" }, svg2, "permeability, log scale");
    var rr = ratio >= 100 ? Math.round(ratio / 10) * 10 : Math.round(ratio);
    var rt = ratio < 1.05 ? "the same as unaltered surface rock" :
      String(rr).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " times lower than unaltered surface rock at 20%";
    var e = Math.floor(logk), m = Math.pow(10, logk - e);
    if (m >= 9.95) { m = 1; e += 1; }
    r2.textContent = "At " + phi + "% porosity, permeability is about " + m.toFixed(1) + " × 10" + sup(e) + " m², " + rt + ".";
  }
  b.inp.addEventListener("input", updPhi);

  mk("p", root, "ws-cap", "Source: Dempsey et al. (2012), Journal of Geophysical Research 117, B05207, equations 4 and 6 and Table 2.");

  updAngle();
  updPhi();
})();
