/* Fully vs partially bridging fracture designs, for Yu, Dempsey and Archer (2021),
   Int. J. Rock Mech. Min. Sci. 143, 104787.
   Schematic cross-section (not to scale). Fracture spacing 120 m and well spacing
   400 m from Table 1. Four fractures, injection well above the production well
   (Section 2.3). Time to failure at a point halfway between two fractures:
   14.5 years (fully bridging) and 12.5 years (partially bridging), four fractures,
   constant injection rate of 100 kg/s (Section 3.3, Table 3). The gap left by
   partially bridging fractures is not given in the paper and is illustrative. */
(function () {
  "use strict";
  var root = document.getElementById("w-bridging");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var TFAIL = { full: 14.5, partial: 12.5 };
  var TMAX = 20;

  var style = document.createElement("style");
  style.textContent =
    "#w-bridging{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-bridging fieldset{border:0;margin:0;padding:0}" +
    "#w-bridging legend{font-weight:600;margin-bottom:4px}" +
    "#w-bridging label{display:inline-block;margin:2px 16px 2px 0;cursor:pointer}" +
    "#w-bridging input{accent-color:var(--accent)}" +
    "#w-bridging input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-bridging svg{display:block;width:100%;height:auto;margin-top:6px}" +
    "#w-bridging .wb-read{margin:8px 0 4px;font-weight:600}" +
    "#w-bridging .wb-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  var fs = document.createElement("fieldset");
  var lg = document.createElement("legend");
  lg.textContent = "Fracture design";
  fs.appendChild(lg);
  function radio(value, text, checked) {
    var lab = document.createElement("label");
    var inp = document.createElement("input");
    inp.type = "radio"; inp.name = "wb-design"; inp.value = value; inp.checked = checked;
    lab.appendChild(inp);
    lab.appendChild(document.createTextNode(" " + text));
    fs.appendChild(lab);
    return inp;
  }
  var rFull = radio("full", "Fully bridging", false);
  var rPart = radio("partial", "Partially bridging", true);
  root.appendChild(fs);

  var W = 600, H = 340;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = document.createElement("p");
  read.className = "wb-read";
  read.setAttribute("aria-live", "polite");
  root.appendChild(read);
  var cap = document.createElement("p");
  cap.className = "wb-cap";
  cap.textContent = "Schematic cross-section, not to scale. Fracture spacing (120 m) and well spacing (400 m) " +
    "follow Table 1 of the paper. The paper does not state how far partially bridging fractures stop short of " +
    "the other well, so the gap shown is illustrative. Failure times are for the model with four fractures and " +
    "a constant injection rate of 100 kilograms per second (Section 3.3). The dashed tick on the timeline " +
    "marks the time to failure for the other design. " +
    "Source: Yu, Dempsey and Archer (2021), Int. J. Rock Mech. Min. Sci. 143, 104787.";
  root.appendChild(cap);

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }

  var YI = 40, YP = 220;            // injection and production wells
  var XS = [150, 260, 370, 480];    // four fractures, equal spacing
  var GAP = 45;                     // illustrative gap for partial fractures

  function arrow(x1, y1, x2, y2) {
    el("line", { x1: x1, y1: y1, x2: x2, y2: y2, stroke: "var(--accent)", "stroke-width": 2.5, "marker-end": "url(#wb-ah)" });
  }

  function render() {
    var d = rFull.checked ? "full" : "partial";
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    var defs = el("defs", {});
    var mk = document.createElementNS(NS, "marker");
    mk.setAttribute("id", "wb-ah"); mk.setAttribute("viewBox", "0 0 10 10");
    mk.setAttribute("refX", "8"); mk.setAttribute("refY", "5");
    mk.setAttribute("markerWidth", "6"); mk.setAttribute("markerHeight", "6");
    mk.setAttribute("orient", "auto-start-reverse");
    var mp = document.createElementNS(NS, "path");
    mp.setAttribute("d", "M0 0L10 5L0 10Z"); mp.setAttribute("fill", "var(--accent)");
    mk.appendChild(mp); defs.appendChild(mk);

    // Stimulated reservoir volume
    el("rect", { x: 110, y: YI - 20, width: 410, height: YP - YI + 40, fill: "var(--accent)", "fill-opacity": 0.08, stroke: "var(--rule)" });
    el("text", { x: 515, y: YP + 14, fill: "var(--muted)", "font-size": 12, "text-anchor": "end" }, "SRV");

    // Wells
    el("line", { x1: 40, x2: 560, y1: YI, y2: YI, stroke: "var(--fg)", "stroke-width": 4 });
    el("line", { x1: 40, x2: 560, y1: YP, y2: YP, stroke: "var(--fg)", "stroke-width": 4 });
    el("text", { x: 40, y: YI - 8, fill: "var(--fg)", "font-size": 13 }, "injection well");
    el("text", { x: 40, y: YP + 22, fill: "var(--fg)", "font-size": 13 }, "production well");

    // Fractures
    XS.forEach(function (x, i) {
      var y1 = YI, y2 = YP;
      if (d === "partial") {
        if (i % 2 === 0) { y2 = YP - GAP; } else { y1 = YI + GAP; }
      }
      el("line", { x1: x, x2: x, y1: y1, y2: y2, stroke: "var(--fg)", "stroke-width": 3 });
    });

    // Flow paths
    if (d === "full") {
      XS.forEach(function (x) { arrow(x + 8, YI + 20, x + 8, YP - 20); });
    } else {
      arrow(XS[0] + 6, (YI + YP) / 2, XS[1] - 8, (YI + YP) / 2 + 20);
      arrow(XS[2] - 6, (YI + YP) / 2, XS[1] + 8, (YI + YP) / 2 + 20);
      arrow(XS[2] + 6, (YI + YP) / 2, XS[3] - 8, (YI + YP) / 2 + 20);
    }

    // Point halfway between two fractures
    var px = (XS[1] + XS[2]) / 2, py = (YI + YP) / 2;
    el("circle", { cx: px, cy: py, r: 6, fill: "var(--fg)" });
    el("text", { x: px, y: py - 12, fill: "var(--fg)", "font-size": 12, "text-anchor": "middle" }, "midway point");

    // Timeline of time to failure
    var T0 = 60, T1 = 560, TY = 300;
    function tx(t) { return T0 + (T1 - T0) * t / TMAX; }
    el("line", { x1: T0, x2: T1, y1: TY, y2: TY, stroke: "var(--rule)", "stroke-width": 2 });
    [0, 5, 10, 15, 20].forEach(function (t) {
      el("line", { x1: tx(t), x2: tx(t), y1: TY - 4, y2: TY + 4, stroke: "var(--rule)" });
      el("text", { x: tx(t), y: TY + 20, fill: "var(--muted)", "font-size": 12, "text-anchor": "middle" }, String(t));
    });
    el("text", { x: T1, y: TY + 36, fill: "var(--muted)", "font-size": 12, "text-anchor": "end" }, "years of injection");
    el("rect", { x: T0, y: TY - 7, width: tx(TFAIL[d]) - T0, height: 14, fill: "var(--accent)", "fill-opacity": 0.6 });
    var other = d === "full" ? "partial" : "full";
    el("line", { x1: tx(TFAIL[other]), x2: tx(TFAIL[other]), y1: TY - 10, y2: TY + 10, stroke: "var(--muted)", "stroke-width": 2, "stroke-dasharray": "3 2" });
    el("text", { x: T0, y: TY - 14, fill: "var(--fg)", "font-size": 12 }, "failure at midway point: " + TFAIL[d] + " years");

    read.textContent = d === "full"
      ? "Fully bridging fractures join both wells. Most injected water flows along the fractures. " +
        "In our model, failure at the midway point began after 14.5 years of injection."
      : "Partially bridging fractures stop short of the other well. Water has to cross the rock between fractures. " +
        "In our model, failure at the midway point began after 12.5 years of injection.";
  }

  rFull.addEventListener("change", render);
  rPart.addEventListener("change", render);
  render();
})();
