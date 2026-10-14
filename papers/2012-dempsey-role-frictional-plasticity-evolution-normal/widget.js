/* Fault rotation and proto-fault offset widget for Dempsey et al. (2012),
   J. Struct. Geol. 39:122-137. Linear extrapolation of two model rates:
   fault rotation of 23.5 degrees per Myr (Sections 7 and 9) and proto-fault
   slip of about 0.15 mm/yr (Section 8), from an initial dip of 50 degrees. */
(function () {
  "use strict";
  var root = document.getElementById("w-fault-clock");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var DIP0 = 50;          // initial fault dip, degrees (Section 3)
  var ROT = 23.5;         // rotation rate, degrees per million years (Section 7)
  var SLIP = 0.15;        // proto-fault slip rate, mm per year (Section 8)
  var CYCLE = 220;        // interseismic period, years (Section 4)
  var BAND = 45;          // shear band dip, degrees (Sections 4 and 6)

  var style = document.createElement("style");
  style.textContent =
    "#w-fault-clock{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-fault-clock label{display:block;font-weight:600;margin-bottom:4px}" +
    "#w-fault-clock input[type=range]{width:100%;accent-color:var(--accent)}" +
    "#w-fault-clock input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-fault-clock svg{display:block;width:100%;height:auto;margin-top:8px}" +
    "#w-fault-clock .wf-read{margin:8px 0 4px;font-weight:600}" +
    "#w-fault-clock .wf-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  var lab = document.createElement("label");
  lab.setAttribute("for", "wf-time");
  lab.textContent = "Time since the fault formed (thousand years)";
  root.appendChild(lab);

  var inp = document.createElement("input");
  inp.type = "range"; inp.id = "wf-time";
  inp.min = "0"; inp.max = "500"; inp.step = "10"; inp.value = "100";
  root.appendChild(inp);

  var W = 600, H = 250;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = document.createElement("p");
  read.className = "wf-read";
  read.setAttribute("aria-live", "polite");
  root.appendChild(read);

  var cap = document.createElement("p");
  cap.className = "wf-cap";
  cap.textContent = "Illustration only. We hold both model rates constant here as an assumption. " +
    "We expect the rotation rate to slow as the fault rotates out of the range in which it can slip. " +
    "Rates: 23.5° per million years of rotation and a proto-fault slip rate on the order of 0.15 mm per year, " +
    "from Dempsey et al. (2012), Journal of Structural Geology 39:122-137. Cross-section not to scale.";
  root.appendChild(cap);

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }

  var SURF = 40, DEPTH = 170, FX = 170;   // surface y, drawn fault depth (px), fault trace x

  function line(x, dipDeg, attrs) {
    var dx = DEPTH / Math.tan(dipDeg * Math.PI / 180);
    var a = { x1: x, y1: SURF, x2: x + dx, y2: SURF + DEPTH };
    for (var k in attrs) a[k] = attrs[k];
    return el("line", a);
  }

  function render() {
    var kyr = Number(inp.value);
    var yr = kyr * 1000;
    var dip = DIP0 - ROT * yr / 1e6;
    var offset = SLIP * yr / 1000;          // metres
    var cycles = Math.round(yr / CYCLE);

    while (svg.firstChild) svg.removeChild(svg.firstChild);
    el("rect", { x: 20, y: SURF, width: W - 40, height: DEPTH + 10, fill: "var(--rule)", "fill-opacity": "0.25" });
    el("line", { x1: 20, y1: SURF, x2: W - 20, y2: SURF, stroke: "var(--fg)", "stroke-width": 2 });
    el("text", { x: 30, y: SURF - 12, fill: "var(--muted)", "font-size": 14 }, "Footwall");
    el("text", { x: W - 30, y: SURF - 12, fill: "var(--muted)", "font-size": 14, "text-anchor": "end" }, "Hanging wall");

    line(FX, DIP0, { stroke: "var(--muted)", "stroke-width": 2, "stroke-dasharray": "6 5" });
    line(FX, dip, { stroke: "var(--fg)", "stroke-width": 4 });
    el("text", { x: FX - 8, y: SURF + DEPTH + 2, fill: "var(--muted)", "font-size": 13, "text-anchor": "end" }, "start, 50°");
    var dx = DEPTH / Math.tan(dip * Math.PI / 180);
    el("text", { x: FX + dx + 8, y: SURF + DEPTH - 4, fill: "var(--fg)", "font-size": 14 }, "main fault, ~" + Math.round(dip) + "°");

    var op = Math.min(1, 0.15 + offset / 75);
    line(FX + 200, BAND, { stroke: "var(--accent)", "stroke-width": 3, "stroke-opacity": op.toFixed(2) });
    el("text", { x: FX + 210, y: SURF + 22, fill: "var(--accent)", "font-size": 14 }, "proto-fault, ~" + Math.round(offset) + " m offset");

    read.textContent = "If both rates stayed constant, after " + kyr + " thousand years (about " + cycles +
      " earthquake cycles of 220 years) the main fault would dip at roughly " + Math.round(dip) +
      "° and a proto-fault would have an offset on the order of " + Math.round(offset) + " m.";
  }

  inp.addEventListener("input", render);
  render();
})();
