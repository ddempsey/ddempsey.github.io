/* Price-sensitivity widget for Titus, Dempsey, Peer and Hanik (2024), J. R. Soc. N. Z. 55(4),
   893-911. Median costs at the base case ($50/tCO2, $60/MWh) are from Table 5. The slopes are our
   linear reading of the paper's cost breakdown (Section 3, Figure 4): the CO2 removal revenue
   component of LCNE is ~$90/MWh at $50/tCO2 (Configurations 2 and 3), the CO2 sales component
   ~$206/MWh (Configuration 3), and the electricity revenue component of LCRC ~$33/tCO2 at $60/MWh.
   CO2 sales are priced at the CO2 price, as the paper assumes. This reproduces the crossover prices
   stated in Section 3 (~$20, ~$40, ~$70 and ~$90 per tonne) but not the Monte Carlo spread. */
(function () {
  "use strict";
  var root = document.getElementById("w-ngawha");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  // lcne50: median LCNE at $50/tCO2 [$/MWh]; k: fall in LCNE per $1/tCO2 rise in CO2 price.
  // lcrc60: median LCRC at $60/MWh [$/tCO2]; m: fall in LCRC per $1/MWh rise in electricity price.
  var CONFIGS = [
    { n: 1, label: "Config. 1 (vented)", lcne50: 194, k: 0, lcrc60: null, m: 0 },
    { n: 2, label: "Config. 2 (BECCS)", lcne50: 267, k: 90 / 50, lcrc60: 164, m: 33 / 60 },
    { n: 3, label: "Config. 3 (BECCUS)", lcne50: 137, k: (90 + 206) / 50, lcrc60: 93, m: 33 / 60 }
  ];
  var co2 = 50, elec = 60;

  function money(v) { v = Math.round(v); return (v < 0 ? "−$" : "$") + Math.abs(v); }
  function lcne(c) { return c.lcne50 - c.k * (co2 - 50); }
  function lcrc(c) { return c.lcrc60 - c.m * (elec - 60); }

  var style = document.createElement("style");
  style.textContent =
    "#w-ngawha{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-ngawha .wn-sl{margin:6px 0 2px}" +
    "#w-ngawha .wn-sl label{display:block;font-weight:600}" +
    "#w-ngawha input[type=range]{width:100%;max-width:420px;accent-color:var(--accent)}" +
    "#w-ngawha input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-ngawha svg{display:block;width:100%;height:auto;margin-top:4px}" +
    "#w-ngawha .wn-read{margin:6px 0 10px}" +
    "#w-ngawha .wn-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  function slider(id, text, min, max, val, onInput) {
    var wrap = document.createElement("div");
    wrap.className = "wn-sl";
    var lab = document.createElement("label");
    lab.htmlFor = id;
    var inp = document.createElement("input");
    inp.type = "range"; inp.id = id; inp.min = min; inp.max = max; inp.step = 5; inp.value = val;
    function upd() { lab.textContent = text(+inp.value); }
    inp.addEventListener("input", function () { onInput(+inp.value); upd(); });
    upd();
    wrap.appendChild(lab); wrap.appendChild(inp);
    root.appendChild(wrap);
    return inp;
  }

  function el(name, attrs, txt) {
    var e = document.createElementNS(NS, name);
    for (var a in attrs) e.setAttribute(a, attrs[a]);
    if (txt !== undefined) e.textContent = txt;
    return e;
  }

  // Horizontal bar chart with a zero line and optional reference lines.
  function chart(rows, lo, hi, refs) {
    var W = 360, L = 150, R = 344, rowH = 26, top = 6;
    var H = top + rows.length * rowH + 22;
    var svg = el("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-hidden": "true" });
    function x(v) { return L + (R - L) * (Math.max(lo, Math.min(hi, v)) - lo) / (hi - lo); }
    (refs || []).forEach(function (r) {
      svg.appendChild(el("line", { x1: x(r.v), x2: x(r.v), y1: top, y2: H - 18, stroke: "var(--muted)", "stroke-dasharray": "3 3" }));
      svg.appendChild(el("text", { x: x(r.v), y: H - 6, "text-anchor": "middle", fill: "var(--muted)", "font-size": "10" }, r.t));
    });
    svg.appendChild(el("line", { x1: x(0), x2: x(0), y1: top, y2: H - 18, stroke: "var(--fg)" }));
    svg.appendChild(el("text", { x: x(0), y: H - 6, "text-anchor": "middle", fill: "var(--fg)", "font-size": "10" }, "0"));
    rows.forEach(function (r, i) {
      var y = top + i * rowH;
      svg.appendChild(el("text", { x: 0, y: y + 16, fill: "var(--fg)", "font-size": "11" }, r.label));
      var x0 = x(Math.min(0, r.v)), x1 = x(Math.max(0, r.v));
      svg.appendChild(el("rect", { x: x0, y: y + 4, width: Math.max(1, x1 - x0), height: 16, fill: "var(--accent)", opacity: r.v < 0 ? 0.55 : 0.9 }));
      var tx = r.v >= 0 ? x1 + 3 : x0 - 3;
      var anchor = r.v >= 0 ? "start" : "end";
      if (r.v >= 0 && tx > R - 30) { tx = x1 - 3; anchor = "end"; }
      svg.appendChild(el("text", { x: tx, y: y + 16, "text-anchor": anchor, fill: r.v >= 0 && anchor === "end" ? "var(--panel)" : "var(--fg)", "font-size": "11" }, money(r.v)));
    });
    return svg;
  }

  // Panel A: LCNE against CO2 price.
  slider("wn-co2", function (v) { return "CO2 price: $" + v + " per tonne"; }, 0, 100, co2, function (v) { co2 = v; draw(); });
  var boxA = document.createElement("div");
  root.appendChild(boxA);
  var readA = document.createElement("p");
  readA.className = "wn-read"; readA.setAttribute("aria-live", "polite");
  root.appendChild(readA);

  // Panel B: LCRC against electricity price (CO2 sales held at $50 per tonne).
  slider("wn-elec", function (v) { return "Electricity price: $" + v + " per MWh"; }, 0, 120, elec, function (v) { elec = v; draw(); });
  var boxB = document.createElement("div");
  root.appendChild(boxB);
  var readB = document.createElement("p");
  readB.className = "wn-read"; readB.setAttribute("aria-live", "polite");
  root.appendChild(readB);

  var cap = document.createElement("p");
  cap.className = "wn-cap";
  cap.textContent = "Config. 1 vents its biomass CO2, Config. 2 is geothermal-BECCS and Config. 3 is geothermal-BECCUS. The upper chart shows the median levelised cost of new electricity (LCNE, US$ per MWh). The lower chart shows the median levelised cost of removed carbon (LCRC, US$ per tonne of CO2), with CO2 sales at $50 a tonne. " +
    "Values at $50 a tonne and $60 per MWh are the paper's medians. Other prices are our straight-line reading of the paper's cost breakdown. " +
    "It matches the crossover prices the paper reports but omits the uncertainty range.";
  root.appendChild(cap);

  function draw() {
    var a = CONFIGS.map(function (c) { return { n: c.n, label: c.label, v: lcne(c) }; });
    boxA.textContent = "";
    boxA.appendChild(chart(a, -200, 450, []));
    var cheapest = a.reduce(function (p, q) { return q.v < p.v ? q : p; });
    var estA = co2 !== 50;
    readA.textContent = "At $" + co2 + " a tonne of CO2, LCNE is " + (estA ? "about " : "") + money(a[0].v) + ", " +
      money(a[1].v) + " and " + money(a[2].v) + " per MWh for Configurations 1 to 3" +
      (estA ? " (our straight-line estimate)" : " (the paper's medians)") + ". Configuration " + cheapest.n + " is cheapest" +
      (a[2].v < 0 ? ". Its CO2 revenue exceeds the whole cost of its new electricity." : ".");

    var b = CONFIGS.filter(function (c) { return c.lcrc60 !== null; }).map(function (c) { return { label: c.label, v: lcrc(c) }; });
    boxB.textContent = "";
    boxB.appendChild(chart(b, 0, 250, [{ v: 100, t: "$100" }, { v: 200, t: "$200" }]));
    var estB = elec !== 60;
    readB.textContent = "At $" + elec + " per MWh, LCRC is " + (estB ? "about " : "") + money(b[0].v) +
      " a tonne for Configuration 2 and " + money(b[1].v) + " for Configuration 3" +
      (estB ? " (our straight-line estimate)." : " (the paper's medians).");
  }
  draw();
})();
