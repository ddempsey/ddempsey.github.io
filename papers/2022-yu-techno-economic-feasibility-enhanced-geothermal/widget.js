/* Heat output converter for Yu, Dempsey and Archer (2022), Energy Convers. Manag. 257:115405.
   Converts a constant thermal output, sustained for 120-day heating seasons over 20 years,
   into heated floor area (Eq. 15 with the Qiabuqia design values), coal displaced
   (1 kg standard coal = 7000 kcal) and CO2 avoided (2620 kg CO2 per tonne of coal). */
(function () {
  "use strict";
  var root = document.getElementById("w-egsheat");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  // Eq. (15): Qh = eta * N * qh * (Tin - Tm) / (Tin - Tout), J per year per m2.
  var ETA = 86400, N = 120, QH = 40, TIN = 20, TM = -1.6, TOUT = -9, YEARS = 20;
  var QH_YR = ETA * N * QH * (TIN - TM) / (TIN - TOUT);
  var J_PER_KG_COAL = 7000 * 4184;   // 7000 kcal per kg, 4184 J per kcal
  var CO2_PER_KG_COAL = 2.62;        // 2620 kg CO2 per tonne of coal
  var BEST_AREA = 2.8;               // km2, most favourable permeability case at Qiabuqia (paper)

  var PRESETS = [
    { name: "Benchmark model, 4 fractures (20 MW)", P: 20 },
    { name: "Qiabuqia, lower 95% bound (33.6 MW)", P: 33.6 },
    { name: "Qiabuqia, median (52.4 MW)", P: 52.4 },
    { name: "Qiabuqia, upper 95% bound (73.2 MW)", P: 73.2 }
  ];

  var style = document.createElement("style");
  style.textContent =
    "#w-egsheat{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-egsheat .eh-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px 14px;margin:0 0 10px}" +
    "#w-egsheat label{display:flex;flex-direction:column;gap:4px}" +
    "#w-egsheat select,#w-egsheat input{font:inherit;color:var(--fg);background:transparent;border:1px solid var(--rule);border-radius:4px;padding:2px 4px;max-width:100%;box-sizing:border-box}" +
    "#w-egsheat input[type=range]{border:none;padding:0;accent-color:var(--accent)}" +
    "#w-egsheat option{color:#000}" +
    "#w-egsheat select:focus-visible,#w-egsheat input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-egsheat svg{display:block;width:100%;height:auto}" +
    "#w-egsheat .eh-read{margin:8px 0 4px;font-weight:600}" +
    "#w-egsheat .eh-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  function mk(tag, attrs, text) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    return e;
  }

  var grid = mk("div", { "class": "eh-grid" });
  var sel = mk("select", { id: "eh-preset" });
  sel.appendChild(mk("option", { value: "" }, "Choose a case from the paper"));
  PRESETS.forEach(function (p, i) { sel.appendChild(mk("option", { value: String(i) }, p.name)); });
  var inP = mk("input", { id: "eh-p", type: "range", min: "5", max: "100", step: "0.1", value: "52.4" });
  var labSel = mk("label", { "for": "eh-preset" }, "Case");
  labSel.appendChild(sel);
  var labP = mk("label", { "for": "eh-p" }, "Constant heat output = 52.4 MW");
  labP.appendChild(inP);
  grid.appendChild(labSel);
  grid.appendChild(labP);
  root.appendChild(grid);

  var W = 600, H = 92, X0 = 150, X1 = 585, MAXA = 3.5;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = mk("p", { "class": "eh-read", "aria-live": "polite" });
  root.appendChild(read);
  root.appendChild(mk("p", { "class": "eh-cap" },
    "The bar is the floor area heated each season. The dashed line marks the 2.8 km² that the paper gives " +
    "for the most favourable permeability case at Qiabuqia. The conversions were calculated for this page from the paper's heat " +
    "consumption equation (Eq. 15, with the Qiabuqia design values), its coal factor of 7000 kcal per kg and " +
    "its CO2 factor of 2620 kg per tonne of coal, assuming the output is held for every 120-day season over " +
    "20 years. The paper does not report these values for the median or bounding outputs."));

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }
  function r2(v) { return Number(v.toPrecision(2)).toString(); }
  function group(v) { return String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, ","); }

  function render() {
    var P = parseFloat(inP.value);
    labP.firstChild.textContent = "Constant heat output = " + P.toFixed(1) + " MW";
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    var seasonJ = P * 1e6 * N * ETA;               // heat per season, J
    var areaKm2 = seasonJ / QH_YR / 1e6;           // heated floor area, km2
    var dwellings = Math.round(areaKm2 * 1e6 / 100 / 100) * 100;
    var coalKg = seasonJ * YEARS / J_PER_KG_COAL;  // over 20 years
    var co2Mt = coalKg * CO2_PER_KG_COAL / 1e9;

    var sc = (X1 - X0) / MAXA;
    el("text", { x: 0, y: 34, fill: "var(--fg)", "font-size": 15 }, "Heated area");
    el("rect", { x: X0, y: 16, width: Math.max(1, Math.min(areaKm2, MAXA) * sc), height: 26, fill: "var(--accent)" });
    el("line", { x1: X0 + BEST_AREA * sc, x2: X0 + BEST_AREA * sc, y1: 8, y2: 50, stroke: "var(--fg)", "stroke-dasharray": "4 3" });
    el("text", { x: X0 + BEST_AREA * sc, y: 66, fill: "var(--muted)", "font-size": 13, "text-anchor": "middle" }, "2.8 km²");
    el("line", { x1: X0, x2: X0, y1: 8, y2: 50, stroke: "var(--rule)" });
    el("text", { x: X0, y: 86, fill: "var(--muted)", "font-size": 13 }, "0");
    el("text", { x: X1, y: 86, fill: "var(--muted)", "font-size": 13, "text-anchor": "end" }, MAXA + " km²");

    read.textContent = "A constant " + P.toFixed(1) + " MW over each 120-day season heats about " + r2(areaKm2) +
      " km² (about " + group(dwellings) + " dwellings of 100 m²) and, over 20 years, displaces about " +
      r2(coalKg / 1e8) + " × 10⁸ kg of coal and " + r2(co2Mt) + " Mt of CO2.";
  }

  sel.addEventListener("change", function () {
    if (sel.value === "") return;
    inP.value = String(PRESETS[parseInt(sel.value, 10)].P);
    render();
  });
  inP.addEventListener("input", function () { sel.value = ""; render(); });

  render();
})();
