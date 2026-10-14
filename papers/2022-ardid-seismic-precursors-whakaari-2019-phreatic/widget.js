/* Five-phase timeline before the December 2019 Whakaari eruption, for Ardid et al. (2022),
   Nature Communications 13:2002. Dates and descriptions are from the paper's Results
   ("Inferring eruptive processes in the Whakaari 2019 eruption") and Fig. 4. Phase
   boundaries are approximate. Time axis: days after 9 November 2019, 00:00. */
(function () {
  "use strict";
  var root = document.getElementById("w-whakaari-phases");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var T0 = 0, T1 = 31;          // 9 Nov to 10 Dec 2019 (Fig. 4 range)
  var ERUPT = 30;               // 9 Dec 2019, plotted at the start of the day
  var PHASES = [
    { a: 1, b: 14, name: "magma and groundwater interaction", dates: "10 to 23 November",
      tremor: "In the tremor, a sustained harmonic signal lasted minutes to days.",
      surface: "At the surface, geysering began and the crater lake level rose. The alert level was raised from 1 to 2 on 18 November.",
      interp: "We interpret this signal as magma interacting with the groundwater. The magma source has been estimated at 0.8 to 1.0 km depth (Jolly et al., 2020)." },
    { a: 14, b: 24, name: "pulsating gas release", dates: "23 November to 2 December",
      tremor: "In the tremor, the 2 to 5 Hz band fell while the medium and high bands rose, with day-long cycles.",
      surface: "At the surface, gas emissions and water jetting became more frequent, and satellites detected raised sulfur dioxide output. A large gas pulse occurred on 2 December.",
      interp: "We interpret each cycle as pressure building below a weak seal until the seal failed and gas escaped." },
    { a: 24, b: 27, name: "sealing", dates: "3 December to a few days before the eruption",
      tremor: "In the tremor, both bands declined for a few days. The medium band then rose steadily, and the nDSAR median increased.",
      surface: "At the surface, no sulfur dioxide output or unusual activity was reported.",
      interp: "We hypothesise that a stronger seal formed and the groundwater beneath it pressurised." },
    { a: 27, b: ERUPT - 16 / 24, name: "pressurisation", dates: "the final days before the eruption",
      tremor: "In the tremor, the nDSAR median declined, mainly because the medium band fell.",
      surface: "The paper describes no surface observations for this phase.",
      interp: "This could indicate that the groundwater below the seal had reached an equilibrium pressure with the fluid supply from depth." },
    { a: ERUPT - 16 / 24, b: ERUPT, name: "seal breakdown and eruption", dates: "about 16 hours before the eruption",
      tremor: "In the tremor, a burst occurred in all bands, and the inverse of the 2 to 5 Hz amplitude began a steady linear decrease.",
      surface: "At the surface, a strong sulfur dioxide signal was detected up to 40 minutes before the eruption.",
      interp: "We interpret this as cracking within the seal that eventually allowed the pressurised fluid to escape explosively." }
  ];
  var MARKS = [
    { t: 9, txt: "Alert level 2" },
    { t: 23, txt: "Gas pulse" },
    { t: ERUPT, txt: "Eruption" }
  ];
  var cur = 2;

  var style = document.createElement("style");
  style.textContent =
    "#w-whakaari-phases{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-whakaari-phases .wp-btns{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 8px}" +
    "#w-whakaari-phases button{font:inherit;color:var(--fg);background:transparent;border:1px solid var(--rule);border-radius:4px;padding:4px 10px;cursor:pointer}" +
    "#w-whakaari-phases button[aria-pressed=true]{border-color:var(--accent);outline:1px solid var(--accent)}" +
    "#w-whakaari-phases button:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-whakaari-phases svg{display:block;width:100%;height:auto}" +
    "#w-whakaari-phases svg rect{cursor:pointer}" +
    "#w-whakaari-phases .wp-read{margin:8px 0 4px;font-weight:600}" +
    "#w-whakaari-phases .wp-det p{margin:4px 0}" +
    "#w-whakaari-phases .wp-cap{color:var(--muted);font-size:0.85em;margin:8px 0 0}";
  root.appendChild(style);

  function mk(tag, attrs, text) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    return e;
  }

  var btnRow = mk("div", { "class": "wp-btns", role: "group", "aria-label": "Choose a phase" });
  var btns = PHASES.map(function (ph, i) {
    var b = mk("button", { type: "button", "aria-pressed": "false", "aria-label": "Phase " + (i + 1) + ", " + ph.name }, "Phase " + (i + 1));
    b.addEventListener("click", function () { cur = i; render(); });
    b.addEventListener("keydown", function (e) {
      var d = e.key === "ArrowRight" ? 1 : (e.key === "ArrowLeft" ? -1 : 0);
      if (!d) return;
      e.preventDefault();
      cur = (cur + d + PHASES.length) % PHASES.length;
      render();
      btns[cur].focus();
    });
    btnRow.appendChild(b);
    return b;
  });
  root.appendChild(btnRow);

  var W = 600, H = 120, X0 = 20, X1 = 580, BAR_Y = 48, BAR_H = 26;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = mk("p", { "class": "wp-read", "aria-live": "polite" });
  root.appendChild(read);
  var det = mk("div", { "class": "wp-det" });
  root.appendChild(det);
  root.appendChild(mk("p", { "class": "wp-cap" },
    "The bar runs from 9 November to 10 December 2019. Phase boundaries are approximate and follow the dates " +
    "given in the paper. The paper does not date the boundary between phases 3 and 4. It is drawn here 3 days " +
    "before the eruption, the middle of the 2 to 4 day peak in the general pattern. Dates and descriptions are from " +
    "Ardid et al. (2022), Nature Communications 13:2002, CC BY 4.0. The timeline was drawn for this page " +
    "from the dates in the paper."));

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }
  function xOf(t) { return X0 + (X1 - X0) * (t - T0) / (T1 - T0); }

  function render() {
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    el("rect", { x: X0, y: BAR_Y, width: X1 - X0, height: BAR_H, fill: "none", stroke: "var(--rule)" });
    PHASES.forEach(function (ph, i) {
      var r = el("rect", {
        x: xOf(ph.a), y: BAR_Y, width: Math.max(2, xOf(ph.b) - xOf(ph.a)), height: BAR_H,
        fill: i === cur ? "var(--accent)" : "var(--muted)",
        "fill-opacity": i === cur ? 1 : 0.35, stroke: "var(--panel)", "stroke-width": 1
      });
      r.addEventListener("click", function () { cur = i; render(); });
      var mid = (xOf(ph.a) + xOf(ph.b)) / 2;
      el("text", { x: mid, y: BAR_Y - 6, "text-anchor": "middle", "font-size": 13,
        fill: i === cur ? "var(--fg)" : "var(--muted)", "font-weight": i === cur ? 700 : 400 }, String(i + 1));
    });
    MARKS.forEach(function (m, j) {
      var x = xOf(m.t);
      el("line", { x1: x, x2: x, y1: BAR_Y + BAR_H, y2: BAR_Y + BAR_H + 12, stroke: "var(--fg)" });
      el("text", { x: x, y: BAR_Y + BAR_H + 26, "font-size": 12, fill: "var(--fg)",
        "text-anchor": j === MARKS.length - 1 ? "end" : "middle" }, m.txt);
    });
    [{ t: 0, s: "9 Nov" }, { t: 22, s: "1 Dec" }].forEach(function (d) {
      el("text", { x: xOf(d.t), y: 18, "font-size": 12, fill: "var(--muted)", "text-anchor": "start" }, d.s);
    });

    var ph = PHASES[cur];
    btns.forEach(function (b, i) { b.setAttribute("aria-pressed", i === cur ? "true" : "false"); });
    read.textContent = "Phase " + (cur + 1) + " of 5 is " + ph.name + ", " + ph.dates + ".";
    while (det.firstChild) det.removeChild(det.firstChild);
    [ph.tremor, ph.surface, ph.interp].forEach(function (s) { det.appendChild(mk("p", {}, s)); });
  }

  render();
})();
