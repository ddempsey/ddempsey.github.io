/* Clay-prior uncertainty widget for Ardid et al. (2021), Geophysics 86(3), E171-E183.
   Data:    Table 1 of the paper, average posterior standard deviation of the top (z1) and
            bottom (z2) conductor boundary depths over the Wairakei MT stations inverted:
            no prior 31/77 m, lambda 80: 30/71, 60: 28/68, 40: 27/64, 20: 27/54.
            (Table 1 values read from the PDF and cross-checked against word coordinates.)
   Sketch:  a conductor 300 m thick, the paper's field average ("averaging approximately 300 m").
            Bands are one standard deviation either side of each boundary. The top depth of 0 m
            is a reference level of our choosing, not a value from the paper.
   Units:   the paper gives lambda in m/km in the Methodology text and in m in Table 1 and the
            Figure 7 caption, so the widget states lambda without a unit. */
(function () {
  "use strict";
  var root = document.getElementById("w-mebprior");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var ROWS = [
    { name: "No MeB prior", say: "Without the MeB prior", top: 31, bot: 77 },
    { name: "MeB prior, λ = 80", say: "With the MeB prior and λ = 80", top: 30, bot: 71 },
    { name: "MeB prior, λ = 60", say: "With the MeB prior and λ = 60", top: 28, bot: 68 },
    { name: "MeB prior, λ = 40", say: "With the MeB prior and λ = 40", top: 27, bot: 64 },
    { name: "MeB prior, λ = 20", say: "With the MeB prior and λ = 20", top: 27, bot: 54 }
  ];
  var THICK = 300;

  var style = document.createElement("style");
  style.textContent =
    "#w-mebprior{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-mebprior h4{margin:0 0 6px;font-size:1em}" +
    "#w-mebprior label{display:block;margin:4px 0}" +
    "#w-mebprior input[type=range]{width:100%;max-width:440px;accent-color:var(--accent)}" +
    "#w-mebprior input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-mebprior svg{display:block;width:100%;max-width:440px;height:auto}" +
    "#w-mebprior .wm-read{margin:6px 0 0;font-weight:600}" +
    "#w-mebprior .wm-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
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

  mk("h4", root, null, "Uncertainty in the conductor boundaries at Wairākei");
  var lab = mk("label", root);
  lab.setAttribute("for", "wm-prior");
  var labSpan = mk("span", lab);
  var inp = document.createElement("input");
  inp.type = "range"; inp.id = "wm-prior"; inp.min = 0; inp.max = ROWS.length - 1; inp.step = 1; inp.value = 0;
  root.appendChild(inp);

  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 440 300");
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);
  var read = mk("p", root, "wm-read");
  read.setAttribute("aria-live", "polite");
  mk("p", root, "wm-cap",
    "Each band spans one standard deviation either side of the mean depth of a boundary, using the averages " +
    "over the stations inverted. The conductor is drawn 300 m thick, the field average, with its top at a " +
    "reference depth of 0 m chosen by us. A smaller λ makes the prior uncertainty grow more slowly with " +
    "distance from a well. The paper gives λ in metres per kilometre in its text and in metres in Table 1. " +
    "No unit is shown here. The sketch is schematic.");
  mk("p", root, "wm-cap", "Source: Ardid et al. (2021), Geophysics 86(3), E171–E183, Table 1 and the Field example section.");

  // depth axis: -150 m to 450 m relative to the mean top boundary
  var D0 = -150, D1 = 450;
  var Y0 = 18, Y1 = 270, XL = 70, XR = 330;
  function py(d) { return Y0 + (Y1 - Y0) * (d - D0) / (D1 - D0); }

  function draw(r) {
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    sv("rect", { x: XL, y: Y0, width: XR - XL, height: Y1 - Y0, fill: "none", stroke: "var(--rule)" }, svg);
    [-100, 0, 100, 200, 300, 400].forEach(function (d) {
      sv("line", { x1: XL - 4, y1: py(d), x2: XL, y2: py(d), stroke: "var(--muted)" }, svg);
      sv("text", { x: XL - 7, y: py(d) + 4, fill: "var(--muted)", "font-size": 12, "text-anchor": "end" }, svg, String(d));
    });
    sv("text", { x: 16, y: (Y0 + Y1) / 2, fill: "var(--fg)", "font-size": 12, "text-anchor": "middle",
      transform: "rotate(-90 16 " + (Y0 + Y1) / 2 + ")" }, svg, "depth relative to mean top (m)");
    // conductor body
    sv("rect", { x: XL + 1, y: py(0), width: XR - XL - 2, height: py(THICK) - py(0),
      fill: "var(--accent)", "fill-opacity": 0.12 }, svg);
    sv("text", { x: (XL + XR) / 2, y: py(THICK / 2) + 4, fill: "var(--fg)", "font-size": 13, "text-anchor": "middle" },
      svg, "conductor (clay cap)");
    // uncertainty bands
    [[0, r.top, "top"], [THICK, r.bot, "bottom"]].forEach(function (b) {
      sv("rect", { x: XL + 1, y: py(b[0] - b[1]), width: XR - XL - 2, height: py(b[0] + b[1]) - py(b[0] - b[1]),
        fill: "var(--accent)", "fill-opacity": 0.35 }, svg);
      sv("line", { x1: XL, y1: py(b[0]), x2: XR, y2: py(b[0]), stroke: "var(--accent)", "stroke-width": 2 }, svg);
      sv("text", { x: XR + 6, y: py(b[0]) + 4, fill: "var(--fg)", "font-size": 12 }, svg, "± " + b[1] + " m");
    });
  }

  function update() {
    var r = ROWS[Number(inp.value)];
    labSpan.textContent = "Strength of the clay prior (" + r.name + ")";
    draw(r);
    read.textContent = r.say + ", the average standard deviation is " + r.top + " m for the top boundary and " +
      r.bot + " m for the bottom boundary.";
  }

  inp.addEventListener("input", update);
  update();
})();
