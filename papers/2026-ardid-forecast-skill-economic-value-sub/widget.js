/* Widget for Ardid et al. (2026), Int. J. Wildland Fire 35, WF25221.
   Shows the optimal operating points in Table 1 of the paper (p. 7): for each region and model,
   the TPR and FPR at the threshold that maximises PEV, plus PEV and net savings for the Sunshine
   Coast FBI and tailored rows only (null elsewhere, by editorial decision: see qa.md, "For the
   author", item 6-7). Values are copied from Table 1 and nothing is computed here. Table 1 is used in preference to the figure annotations
   and Results text, which disagree with it in places (see claims.yaml, inconsistencies).
   Costs assumed by the paper: A$50,000 per alarm, A$10 million per fire, with every correctly
   forecast fire avoided entirely (an upper bound). */
(function () {
  "use strict";
  var root = document.getElementById("w-pev-regions");
  if (!root) return;

  var MODELS = ["FBI", "ML tailored", "ML generalised"];
  var DATA = {
    "Sunshine Coast": { tpr: [0.38, 0.796, 0.682], fpr: [0.08, 0.077, 0.135], pev: [0.23, 0.651, null], sav: [34.5, 97.7, null] },
    "Brisbane":       { tpr: [0.611, 0.718, 0.568], fpr: [0.109, 0.158, 0.137], pev: [null, null, null], sav: [null, null, null] },
    "Hobart":         { tpr: [0.429, 0.755, 0.654], fpr: [0.101, 0.135, 0.129], pev: [null, null, null], sav: [null, null, null] }
  };
  var METRICS = {
    tpr: { label: "True positive rate (TPR)", max: 1, fmt: function (v) { return String(v); } },
    pev: { label: "Potential economic value (PEV)", max: 1, fmt: function (v) { return String(v); } },
    fpr: { label: "False positive rate (FPR)", max: 0.2, fmt: function (v) { return String(v); } },
    sav: { label: "Projected net savings (A$ million)", max: 100, fmt: function (v) { return "A$" + v.toFixed(1) + " million"; } }
  };

  var style = document.createElement("style");
  style.textContent =
    "#w-pev-regions{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-pev-regions .pr-ctl{display:flex;flex-wrap:wrap;gap:8px 16px;margin:0 0 8px}" +
    "#w-pev-regions label{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1 1 140px}" +
    "#w-pev-regions select{font:inherit;color:var(--fg);background:var(--panel);border:1px solid var(--rule);border-radius:4px;padding:3px 4px;max-width:100%}" +
    "#w-pev-regions select:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-pev-regions .pr-row{display:flex;align-items:center;gap:8px;margin:6px 0}" +
    "#w-pev-regions .pr-name{flex:0 0 7.5em;font-size:0.9em}" +
    "#w-pev-regions .pr-track{flex:1 1 auto;height:18px;border:1px solid var(--rule);border-radius:3px;position:relative;min-width:60px}" +
    "#w-pev-regions .pr-bar{position:absolute;left:0;top:0;bottom:0;background:var(--accent);border-radius:2px}" +
    "#w-pev-regions .pr-bar.pr-fbi{background:var(--muted)}" +
    "#w-pev-regions .pr-val{flex:0 0 auto;font-variant-numeric:tabular-nums;font-size:0.9em;min-width:4.5em;text-align:right}" +
    "#w-pev-regions .pr-read{margin:8px 0 0;font-weight:600}" +
    "#w-pev-regions .pr-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  function mk(tag, parent, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    parent.appendChild(e);
    return e;
  }
  function sel(parent, labelText, opts, value) {
    var lab = mk("label", parent, null, labelText);
    var s = mk("select", lab);
    opts.forEach(function (o) {
      var op = mk("option", s, null, o[1]);
      op.value = o[0];
      if (o[0] === value) op.selected = true;
    });
    return s;
  }

  var ctl = mk("div", root, "pr-ctl");
  var regSel = sel(ctl, "Region", Object.keys(DATA).map(function (r) { return [r, r]; }), "Sunshine Coast");
  var metSel = sel(ctl, "Quantity", Object.keys(METRICS).map(function (k) { return [k, METRICS[k].label]; }), "tpr");

  var chart = mk("div", root);
  chart.setAttribute("aria-hidden", "true");
  var rows = MODELS.map(function (m, i) {
    var row = mk("div", chart, "pr-row");
    mk("span", row, "pr-name", m);
    var track = mk("span", row, "pr-track");
    var bar = mk("span", track, "pr-bar" + (i === 0 ? " pr-fbi" : ""));
    var val = mk("span", row, "pr-val");
    return { bar: bar, val: val };
  });

  var read = mk("p", root, "pr-read");
  read.setAttribute("aria-live", "polite");
  mk("p", root, "pr-cap",
    "Values from Table 1 of the paper, at the threshold that gives the highest PEV for each region and model. " +
    "PEV and net savings are shown for the Sunshine Coast FBI and tailored model only. " +
    "The paper assumes A$50,000 per false alarm and A$10 million per missed fire, and that every correctly " +
    "forecast fire is avoided entirely. The savings are therefore upper bounds.");

  function update() {
    var d = DATA[regSel.value], k = metSel.value, M = METRICS[k];
    var parts = [];
    MODELS.forEach(function (m, i) {
      var v = d[k][i];
      if (v == null) {
        rows[i].bar.style.width = "0%";
        rows[i].val.textContent = "not shown";
        return;
      }
      rows[i].bar.style.width = Math.min(100, 100 * v / M.max) + "%";
      rows[i].val.textContent = M.fmt(v);
      parts.push(m + " " + M.fmt(v));
    });
    read.textContent = parts.length ?
      regSel.value + ", " + M.label + ": " + parts.join(", ") + "." :
      regSel.value + ": PEV and net savings are shown for the Sunshine Coast FBI and tailored model only.";
  }
  regSel.addEventListener("change", update);
  metSel.addEventListener("change", update);
  update();
})();
