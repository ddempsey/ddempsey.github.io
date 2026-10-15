/* Scaling calculator for Titus, Dempsey, Peer and Archer (2025), Geothermics 125:103159.
   Scales the Taupo Volcanic Zone case (Section 4.1: 100 kg/s of fluid at 275 C) in proportion
   to a target, as the paper does for 1 MtCO2/yr and for 1 GWe:
     geothermal-BECCS per 100 kg/s: 16.5 MWe, 32.3 ktCO2/yr net removal, 25.4 kt/yr feedstock
     geothermal-DACCS per 100 kg/s:  7.8 MWe, 41.0 ktCO2/yr net removal, no feedstock
     wells at 50 kg/s each (DiPippo, 2016, as cited in the paper)
   Capital cost is OUR linear scaling of the paper's 1 MtCO2/yr figures (USD 2.2 and 2.3 billion). */
(function () {
  "use strict";
  var root = document.getElementById("w-gcdr");
  if (!root) return;

  var UNIT = 100, WELL = 50;
  var CASES = [
    { key: "BECCS", name: "Geothermal-BECCS", mwe: 16.5, cdr: 32.3, feed: 25.4, capexPerMt: 2.2 },
    { key: "DACCS", name: "Geothermal-DACCS", mwe: 7.8, cdr: 41.0, feed: 0, capexPerMt: 2.3 }
  ];
  var MODES = {
    cdr: { label: "CO2 removal target (Mt per year)", min: 0.1, max: 6, step: 0.1, value: 1 },
    mwe: { label: "Net generating capacity target (MWe)", min: 50, max: 2000, step: 10, value: 1000 }
  };

  var style = document.createElement("style");
  style.textContent =
    "#w-gcdr{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-gcdr .gc-row{display:flex;flex-wrap:wrap;gap:8px 16px;align-items:flex-end;margin:0 0 10px}" +
    "#w-gcdr fieldset{border:none;margin:0;padding:0}" +
    "#w-gcdr legend{padding:0;margin:0 0 4px}" +
    "#w-gcdr label{display:inline-flex;align-items:center;gap:4px;margin-right:10px}" +
    "#w-gcdr .gc-num{display:flex;flex-direction:column;gap:4px;flex:1 1 200px;min-width:0}" +
    "#w-gcdr input{font:inherit;color:var(--fg);background:transparent}" +
    "#w-gcdr input[type=range]{width:100%;accent-color:var(--accent)}" +
    "#w-gcdr input[type=number]{width:6em;border:1px solid var(--rule);border-radius:4px;padding:2px 4px}" +
    "#w-gcdr input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-gcdr .gc-wrap{overflow-x:auto}" +
    "#w-gcdr table{border-collapse:collapse;width:100%;min-width:300px}" +
    "#w-gcdr th,#w-gcdr td{border-bottom:1px solid var(--rule);padding:4px 6px;text-align:right}" +
    "#w-gcdr th:first-child,#w-gcdr td:first-child{text-align:left}" +
    "#w-gcdr .gc-read{margin:8px 0 4px;font-weight:600}" +
    "#w-gcdr .gc-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  function mk(tag, attrs, text) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    return e;
  }

  var row = mk("div", { "class": "gc-row" });
  var fs = mk("fieldset");
  fs.appendChild(mk("legend", null, "Target type"));
  var radios = {};
  ["cdr", "mwe"].forEach(function (m, i) {
    var lab = mk("label");
    var r = mk("input", { type: "radio", name: "gc-mode", value: m, id: "gc-mode-" + m });
    if (i === 0) r.checked = true;
    radios[m] = r;
    lab.appendChild(r);
    lab.appendChild(document.createTextNode(m === "cdr" ? "CO2 removal" : "Capacity"));
    fs.appendChild(lab);
  });
  row.appendChild(fs);

  var numWrap = mk("div", { "class": "gc-num" });
  var lab = mk("label", { "for": "gc-val", id: "gc-lab" });
  var range = mk("input", { type: "range", id: "gc-val" });
  var num = mk("input", { type: "number", id: "gc-num", "aria-labelledby": "gc-lab" });
  numWrap.appendChild(lab);
  numWrap.appendChild(range);
  numWrap.appendChild(num);
  row.appendChild(numWrap);
  root.appendChild(row);

  var wrap = mk("div", { "class": "gc-wrap" });
  var table = mk("table");
  var thead = mk("thead");
  var hr = mk("tr");
  ["", "Fluid (kg/s)", "Wells", "Net MWe", "CO2 removed (Mt/yr)", "Feedstock (kt/yr)", "Capital (USD bn)"].forEach(function (h) {
    hr.appendChild(mk("th", { scope: "col" }, h));
  });
  thead.appendChild(hr);
  table.appendChild(thead);
  var tbody = mk("tbody");
  table.appendChild(tbody);
  wrap.appendChild(table);
  root.appendChild(wrap);

  var read = mk("p", { "class": "gc-read", "aria-live": "polite" });
  root.appendChild(read);
  root.appendChild(mk("p", { "class": "gc-cap" },
    "Proportional scaling of the paper's New Zealand case (100 kg/s of fluid at 275 °C), as the paper " +
    "does for 1 Mt of CO2 per year and for 1000 MWe. All values are our scaling. They can differ slightly " +
    "from the paper's rounded figures. For 1000 MWe of geothermal-DACCS, this table gives 5.26 Mt of CO2 removed " +
    "per year, and the paper gives 5.2. Capital costs are our linear scaling of the paper's 1 Mt figures. " +
    "At 1000 MWe they differ slightly from the paper's own USD 4.4 and 12.3 billion."));

  var mode = "cdr";

  function fmt(x, d) { return x.toLocaleString("en-NZ", { minimumFractionDigits: d, maximumFractionDigits: d }); }

  function compute(c, target) {
    var units = mode === "cdr" ? target * 1000 / c.cdr : target / c.mwe;
    var cdrMt = units * c.cdr / 1000;
    return {
      fluid: units * UNIT,
      wells: Math.round(units * UNIT / WELL),
      mwe: units * c.mwe,
      cdr: cdrMt,
      feed: units * c.feed,
      capex: cdrMt * c.capexPerMt
    };
  }

  function setMode(m) {
    mode = m;
    var cfg = MODES[m];
    lab.textContent = cfg.label;
    [range, num].forEach(function (el) {
      el.min = cfg.min; el.max = cfg.max; el.step = cfg.step; el.value = cfg.value;
    });
    update();
  }

  function update() {
    var cfg = MODES[mode];
    var v = parseFloat(num.value);
    if (isNaN(v)) return;
    v = Math.min(cfg.max, Math.max(cfg.min, v));
    cfg.value = v;
    while (tbody.firstChild) tbody.removeChild(tbody.firstChild);
    var res = CASES.map(function (c) {
      var r = compute(c, v);
      var tr = mk("tr");
      tr.appendChild(mk("th", { scope: "row" }, c.name));
      [fmt(r.fluid, 0), fmt(r.wells, 0), fmt(r.mwe, 0), fmt(r.cdr, 2),
        c.feed ? fmt(r.feed, 0) : "none", fmt(r.capex, 1)].forEach(function (t) { tr.appendChild(mk("td", null, t)); });
      tbody.appendChild(tr);
      return r;
    });
    var b = res[0], d = res[1];
    var tgt = mode === "cdr" ? fmt(v, 1) + " Mt of CO2 removal per year" : fmt(v, 0) + " MWe";
    read.textContent = "For " + tgt + ": geothermal-BECCS needs about " + fmt(b.wells, 0) + " wells (" +
      fmt(b.mwe, 0) + " MWe, " + fmt(b.cdr, 2) + " Mt CO2/yr, " + fmt(b.feed, 0) + " kt/yr of residues), and " +
      "geothermal-DACCS needs about " + fmt(d.wells, 0) + " wells (" + fmt(d.mwe, 0) + " MWe, " +
      fmt(d.cdr, 2) + " Mt CO2/yr, no fuel).";
  }

  range.addEventListener("input", function () { num.value = range.value; update(); });
  num.addEventListener("input", function () { range.value = num.value; update(); });
  num.addEventListener("change", function () { num.value = MODES[mode].value; range.value = num.value; });
  radios.cdr.addEventListener("change", function () { if (radios.cdr.checked) setMode("cdr"); });
  radios.mwe.addEventListener("change", function () { if (radios.mwe.checked) setMode("mwe"); });

  setMode("cdr");
})();
