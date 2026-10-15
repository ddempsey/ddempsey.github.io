/* Geothermal-BECCS plant scaling widget for Titus, Dempsey and Peer (2023), Int. J. Greenh. Gas
   Control 122, 103813. Per-kg/s results are from the paper's Table 2 (generated power, biomass burn
   rate, flue CO2, sequestration efficiency, gross annual sequestration) and Table 3 (emissions
   intensities). Scaling is linear in geofluid mass rate, as the paper does in Section 4.1. */
(function () {
  "use strict";
  var root = document.getElementById("w-gbeccs");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  // W: generated power per kg/s [kWe]; bio: biomass burn rate [kg/s]; seq: gross annual
  // sequestration [t/yr]; eff: share of flue CO2 sequestered [%]; ei: emissions intensity [g/kWh].
  var CONFIGS = [
    { id: "c1", n: 1, label: "flash", W: 64, bio: 0.008, seq: 217, eff: 100, ei: -386 },
    { id: "c2", n: 2, label: "ORC binary", W: 76, bio: 0.018, seq: 501, eff: 100, ei: -753 },
    { id: "c3", n: 3, label: "flash-binary", W: 62, bio: 0.018, seq: 501, eff: 100, ei: -922 },
    { id: "c4", n: 4, label: "biomass plant with geothermal preheat", W: 589, bio: 0.144, seq: 675, eff: 17, ei: -131 }
  ];
  // Operating plants, Table 3 (EIA, 2021; McLean et al., 2020).
  var PLANTS = [
    { label: "Coal, US 2021", ei: 1012 },
    { label: "Petroleum, US 2021", ei: 966 },
    { label: "Natural gas, US 2021", ei: 413 },
    { label: "Ngāwhā binary, NZ 2019", ei: 312 },
    { label: "Ohaaki flash, NZ 2019", ei: 299 },
    { label: "Geothermal, NZ 2019 average", ei: 73 }
  ];
  var cfg = CONFIGS[2], mwe = 100;

  var style = document.createElement("style");
  style.textContent =
    "#w-gbeccs{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-gbeccs fieldset{border:0;margin:0 0 8px;padding:0;display:flex;flex-wrap:wrap;gap:6px 14px}" +
    "#w-gbeccs legend{font-weight:600;margin-bottom:4px;padding:0}" +
    "#w-gbeccs label{cursor:pointer;display:inline-flex;align-items:center;gap:4px}" +
    "#w-gbeccs .wg-sl{margin:6px 0}" +
    "#w-gbeccs .wg-sl label{display:block}" +
    "#w-gbeccs input[type=range]{width:100%;max-width:420px;accent-color:var(--accent)}" +
    "#w-gbeccs input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-gbeccs svg{display:block;width:100%;height:auto;margin-top:6px}" +
    "#w-gbeccs .wg-read{margin:8px 0 4px;font-weight:600}" +
    "#w-gbeccs .wg-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  var fs = document.createElement("fieldset");
  var lg = document.createElement("legend");
  lg.textContent = "Geothermal-BECCS configuration";
  fs.appendChild(lg);
  CONFIGS.forEach(function (c) {
    var lab = document.createElement("label");
    var inp = document.createElement("input");
    inp.type = "radio"; inp.name = "wg-cfg"; inp.value = c.id; inp.id = "wg-" + c.id;
    inp.checked = c === cfg;
    inp.addEventListener("change", function () { cfg = c; render(); });
    lab.appendChild(inp);
    lab.appendChild(document.createTextNode(c.n + ": " + c.label));
    fs.appendChild(lab);
  });
  root.appendChild(fs);

  var sd = document.createElement("div"); sd.className = "wg-sl";
  var sl = document.createElement("label"); sl.htmlFor = "wg-mwe";
  var sOut = document.createElement("span");
  sl.appendChild(document.createTextNode("Plant size (MWe): ")); sl.appendChild(sOut);
  var s = document.createElement("input");
  s.type = "range"; s.id = "wg-mwe"; s.min = 10; s.max = 500; s.step = 10; s.value = mwe;
  s.addEventListener("input", function () { mwe = parseFloat(s.value); render(); });
  sd.appendChild(sl); sd.appendChild(s); root.appendChild(sd);

  var read = document.createElement("p");
  read.className = "wg-read"; read.setAttribute("aria-live", "polite");
  root.appendChild(read);

  var W = 600, ROW = 24, LX = 250, X0 = 262, X1 = 590, VMIN = -1000, VMAX = 1350;
  var rows = PLANTS.length + CONFIGS.length, H = 30 + rows * ROW + 30;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var cap = document.createElement("p");
  cap.className = "wg-cap";
  cap.textContent = "Bars show emissions intensity in grams of CO2 per kWh. Negative values mean more CO2 is " +
    "stored than emitted. Plant needs are the paper's results per kg/s of 160 °C geofluid (Table 2), " +
    "scaled linearly to the chosen size (our arithmetic). The scaling ignores the cost and size of equipment " +
    "and neglects parasitic loads. Site resources would have to be estimated before a plant could be sized. Intensities count operational emissions only. Operating-plant values are " +
    "as given in the paper (EIA, 2021; McLean et al., 2020). Source: Titus, Dempsey and Peer (2023), " +
    "International Journal of Greenhouse Gas Control 122, 103813.";
  root.appendChild(cap);

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }
  function X(v) { return X0 + (X1 - X0) * (v - VMIN) / (VMAX - VMIN); }
  function fmt(x) { return x >= 100 ? String(Math.round(x)) : x >= 10 ? x.toFixed(0) : x.toFixed(1); }

  function render() {
    sOut.textContent = String(mwe);
    var geo = mwe * 1000 / cfg.W;          // kg/s of geofluid
    var bio = cfg.bio * geo;               // kg/s of biomass
    var seq = cfg.seq * geo;               // t/yr sequestered
    var seqTxt = seq >= 1e5 ? (seq / 1e6).toFixed(2) + " Mt" : fmt(seq / 1e3) + " kt";
    read.textContent = "Configuration " + cfg.n + " (" + cfg.label + ") at " + mwe + " MWe needs " + fmt(geo) +
      " kg/s of geofluid and " + fmt(bio) + " kg/s of biomass. It sequesters " + seqTxt +
      " of CO2 a year (" + cfg.eff + "% of its flue CO2). Emissions intensity " +
      String(cfg.ei).replace("-", "−") + " g of CO2 per kWh.";

    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var list = PLANTS.map(function (p) { return { label: p.label, ei: p.ei, sel: false, cfg: false }; })
      .concat(CONFIGS.map(function (c) { return { label: "Configuration " + c.n, ei: c.ei, sel: c === cfg, cfg: true }; }));
    el("text", { x: X0, y: 14, fill: "var(--muted)", "font-size": 13 }, "Emissions intensity, g CO2 per kWh");
    list.forEach(function (r, i) {
      var y = 26 + i * ROW, x0 = X(0), xv = X(r.ei);
      el("text", { x: LX, y: y + 15, fill: r.sel ? "var(--fg)" : "var(--muted)", "font-size": 13, "text-anchor": "end", "font-weight": r.sel ? 700 : 400 }, r.label);
      el("rect", { x: Math.min(x0, xv), y: y + 4, width: Math.max(1, Math.abs(xv - x0)), height: ROW - 8,
        fill: r.sel ? "var(--accent)" : r.cfg ? "var(--rule)" : "var(--muted)", opacity: r.sel ? 1 : 0.7 });
      el("text", { x: r.ei < 0 ? x0 + 4 : xv + 4, y: y + 15, fill: "var(--fg)", "font-size": 12,
        "text-anchor": "start" }, String(r.ei).replace("-", "−"));
    });
    var yb = 26 + rows * ROW;
    el("line", { x1: X(0), x2: X(0), y1: 22, y2: yb, stroke: "var(--fg)" });
    [-1000, -500, 0, 500, 1000].forEach(function (v) {
      el("text", { x: X(v), y: yb + 16, fill: "var(--muted)", "font-size": 12, "text-anchor": "middle" }, String(v).replace("-", "−"));
    });
  }

  render();
})();
