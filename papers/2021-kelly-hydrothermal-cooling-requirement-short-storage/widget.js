/* Cooling-time comparison widget for Kelly et al. (2021), G-Cubed 22, e2021GC009794.
   Shows the heat-loss times the paper reports for a 150 km3 Mamaku magma body, from quartz
   saturation to 10 wt% crystals, on a log time axis:
     conduction        > 1,000 yr               (Section 3.1)
     rainfall model    200-300 yr               (Section 3.3)
     groundwater model 18 yr (lowest non-zero), median about 100 yr, 90% < 280 yr
                                                (Sections 3.4 and 4.1, Figure 7a)
   The shaded band marks "decades to a few centuries" (Gualda et al., 2018, as cited in the
   paper). Its edges (10 and 300 yr) are our choice. */
(function () {
  "use strict";
  var root = document.getElementById("w-cooling-times");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var TMIN = 1, TMAX = 10000;
  var MODELS = [
    { id: "cond", name: "Conduction only", lo: 1000, hi: TMAX, open: true,
      text: "Conduction alone took more than 1,000 years to remove the heat, at every storage depth tested." },
    { id: "rain", name: "Rainfall-driven hydrothermal system", lo: 200, hi: 300,
      text: "The rainfall-driven hydrothermal model took 200 to 300 years. This is longer than most of the quartz timescales." },
    { id: "gw", name: "Groundwater-flow hydrothermal system", lo: 18, hi: 280, mid: 100,
      text: "In the groundwater-flow model, half of 10,000 trials took less than 100 years and 90% took less than 280 years." }
  ];

  var style = document.createElement("style");
  style.textContent =
    "#w-cooling-times{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-cooling-times fieldset{border:0;margin:0 0 8px;padding:0}" +
    "#w-cooling-times legend{font-weight:600;margin-bottom:4px;padding:0}" +
    "#w-cooling-times label{display:block;margin:3px 0;cursor:pointer}" +
    "#w-cooling-times input{accent-color:var(--accent);margin-right:6px}" +
    "#w-cooling-times input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-cooling-times svg{display:block;width:100%;max-width:520px;height:auto}" +
    "#w-cooling-times .wc-read{margin:6px 0 0;font-weight:600}" +
    "#w-cooling-times .wc-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
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

  var fs = mk("fieldset", root);
  mk("legend", fs, null, "Heat-loss model");
  var radios = MODELS.map(function (m, i) {
    var lab = mk("label", fs);
    var inp = document.createElement("input");
    inp.type = "radio"; inp.name = "wc-model"; inp.value = m.id; inp.id = "wc-" + m.id;
    if (i === 2) inp.checked = true;
    lab.setAttribute("for", inp.id);
    lab.appendChild(inp);
    lab.appendChild(document.createTextNode(m.name));
    inp.addEventListener("change", draw);
    return inp;
  });

  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 520 200");
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);
  var read = mk("p", root, "wc-read");
  read.setAttribute("aria-live", "polite");
  mk("p", root, "wc-cap",
    "Times are for a single 150 km³ magma body, measured from the onset of quartz crystallisation to 10% crystals by weight. " +
    "The shaded band marks decades to a few centuries, the storage time suggested by quartz crystals. Its edges at 10 and 300 years are our choice. " +
    "Source: Kelly et al. (2021), Geochemistry, Geophysics, Geosystems 22, e2021GC009794, Sections 3 and 4 and Figure 7a.");

  var X0 = 20, W = 480;
  function xs(t) { return X0 + W * (Math.log10(t) - Math.log10(TMIN)) / (Math.log10(TMAX) - Math.log10(TMIN)); }

  function draw() {
    var sel = 2;
    radios.forEach(function (r, i) { if (r.checked) sel = i; });
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    // target band
    sv("rect", { x: xs(10), y: 8, width: xs(300) - xs(10), height: 150, fill: "var(--accent)", opacity: 0.12 }, svg);
    sv("text", { x: (xs(10) + xs(300)) / 2, y: 22, fill: "var(--muted)", "font-size": 12, "text-anchor": "middle" }, svg, "decades to a few centuries");

    MODELS.forEach(function (m, i) {
      var y = 40 + i * 40, on = i === sel;
      var col = on ? "var(--accent)" : "var(--muted)";
      sv("text", { x: X0, y: y - 4, fill: on ? "var(--fg)" : "var(--muted)", "font-size": 12, "font-weight": on ? 700 : 400 }, svg, m.name);
      sv("rect", { x: xs(m.lo), y: y, width: xs(m.hi) - xs(m.lo), height: 14, fill: col, opacity: on ? 1 : 0.45 }, svg);
      if (m.open) sv("path", { d: "M" + (xs(m.hi) - 2) + "," + (y - 3) + " l10,10 l-10,10 z", fill: col, opacity: on ? 1 : 0.45 }, svg);
      if (m.mid) sv("line", { x1: xs(m.mid), y1: y - 3, x2: xs(m.mid), y2: y + 17, stroke: "var(--fg)", "stroke-width": 2 }, svg);
    });

    // axis
    var ay = 165;
    sv("line", { x1: X0, y1: ay, x2: X0 + W, y2: ay, stroke: "var(--rule)" }, svg);
    [1, 10, 100, 1000, 10000].forEach(function (t) {
      sv("line", { x1: xs(t), y1: ay, x2: xs(t), y2: ay + 5, stroke: "var(--muted)" }, svg);
      sv("text", { x: xs(t), y: ay + 18, fill: "var(--muted)", "font-size": 12, "text-anchor": "middle" }, svg, t.toLocaleString("en-NZ"));
    });
    sv("text", { x: X0 + W / 2, y: 197, fill: "var(--muted)", "font-size": 12, "text-anchor": "middle" }, svg, "time to remove the heat (years, log scale)");

    var t = MODELS[sel].text;
    if (MODELS[sel].mid) t += " The bar runs from the shortest non-zero time, 18 years, to 280 years. The vertical mark shows the median.";
    read.textContent = t;
  }

  draw();
})();
