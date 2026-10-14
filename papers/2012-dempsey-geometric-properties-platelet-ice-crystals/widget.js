/* Slice-angle widget for Dempsey and Langhorne (2012), Cold Regions Science and Technology 78, 1-13.
   Illustrative toy, grounded in section 3.3 (unconstrained growth gives discoid crystals because growth
   in the basal plane is favoured over growth along the c-axis, approximated as ellipsoids) and
   section 4.3 / Fig. 11 (vertical planes at 0, 45 and 90 degrees to the c-axis: narrow, vertically
   stretched outlines near the c-axis, broader outlines as the plane approaches the basal plane).
   Our assumptions (the paper gives none of these): the crystal is an oblate spheroid five times wider than thick,
   its c-axis is horizontal (resumed columnar crystals have c-axes close to horizontal, section 4.2),
   and the vertical plane passes through its centre.
   Half-width of the cut along a direction at angle b to the c-axis: 1 / sqrt(cos^2 b / c^2 + sin^2 b / a^2).
   Half-height: a. */
(function () {
  "use strict";
  var root = document.getElementById("w-slice-angle");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var A = 5, C = 1; // disc radius and half-thickness, ratio 5:1 (our assumption)

  var style = document.createElement("style");
  style.textContent =
    "#w-slice-angle{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-slice-angle label{display:block;margin:4px 0}" +
    "#w-slice-angle input[type=range]{width:100%;max-width:420px;accent-color:var(--accent)}" +
    "#w-slice-angle input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-slice-angle svg{display:block;width:100%;max-width:420px;height:auto}" +
    "#w-slice-angle .ws-read{margin:6px 0 0;font-weight:600}" +
    "#w-slice-angle .ws-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
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

  mk("h4", root, null, "One crystal, cut by a vertical plane at different angles");
  var lab = mk("label", root);
  lab.setAttribute("for", "ws-angle");
  var span = mk("span", lab);
  var inp = document.createElement("input");
  inp.type = "range"; inp.id = "ws-angle"; inp.min = 0; inp.max = 90; inp.step = 5; inp.value = 0;
  root.appendChild(inp);

  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 420 200");
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = mk("p", root, "ws-read");
  read.setAttribute("aria-live", "polite");
  mk("p", root, "ws-cap", "This is our illustration. The crystal is drawn as a disc five times wider than it is thick, with its c-axis horizontal. These proportions are our assumption. The paper does not give them. The left panel shows the disc from above, with the cut in colour. The right panel shows the outline of the crystal in the vertical slice.");
  mk("p", root, "ws-cap", "Source: Dempsey and Langhorne (2012), Cold Regions Science and Technology 78, 1-13, sections 3.3 and 4.3.");

  function clear(e) { while (e.firstChild) e.removeChild(e.firstChild); }

  function update() {
    var deg = Number(inp.value);
    var b = deg * Math.PI / 180;
    var cs = Math.cos(b), sn = Math.sin(b);
    var halfW = 1 / Math.sqrt(cs * cs / (C * C) + sn * sn / (A * A));
    var ratio = A / halfW;
    span.textContent = "Angle between the slice and the c-axis: " + deg + "°";
    clear(svg);

    // Plan view: disc seen from above is a thin ellipse, c-axis along x.
    var s = 15, cx = 100, cy = 100;
    sv("text", { x: cx, y: 16, "text-anchor": "middle", fill: "var(--fg)", "font-size": 13 }, svg, "Seen from above");
    sv("ellipse", { cx: cx, cy: cy, rx: C * s, ry: A * s, fill: "var(--rule)", stroke: "var(--fg)", "stroke-width": 1 }, svg);
    sv("line", { x1: cx - 85, y1: cy, x2: cx + 85, y2: cy, stroke: "var(--muted)", "stroke-dasharray": "4 3" }, svg);
    sv("text", { x: cx + 85, y: cy - 6, "text-anchor": "end", fill: "var(--muted)", "font-size": 11 }, svg, "c-axis");
    var L = 85;
    sv("line", { x1: cx - L * cs, y1: cy + L * sn, x2: cx + L * cs, y2: cy - L * sn, stroke: "var(--accent)", "stroke-width": 3 }, svg);

    // Vertical slice: outline of half-width halfW and half-height A.
    var vx = 310, vy = 110, t = 15;
    sv("text", { x: vx, y: 16, "text-anchor": "middle", fill: "var(--fg)", "font-size": 13 }, svg, "Outline in the vertical slice");
    sv("ellipse", { cx: vx, cy: vy, rx: halfW * t, ry: A * t, fill: "var(--accent)", "fill-opacity": 0.35, stroke: "var(--accent)", "stroke-width": 2 }, svg);
    sv("line", { x1: vx - 90, y1: vy, x2: vx + 90, y2: vy, stroke: "var(--rule)" }, svg);

    var r = ratio.toFixed(1);
    read.textContent = "At " + deg + "° to the c-axis, the outline is " +
      (ratio < 1.05 ? "as wide as it is tall, the full width of the disc." : r + " times taller than it is wide.");
  }
  inp.addEventListener("input", update);
  update();
})();
