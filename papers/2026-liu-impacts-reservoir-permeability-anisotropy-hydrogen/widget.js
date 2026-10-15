/* Recovery explorer for Liu, Dempsey, Nicol, Parker and Titus (2026), Fuel 408:137596.
   Box model, single fully perforated vertical well, 50 m thick reservoir, 10 cycles.
   Values are the bar labels of Fig. 12 (hydrogen recovery efficiency, %, rounded by the paper
   to whole percent). Six of them are also stated in Section 3.3. No values are computed here. */
(function () {
  "use strict";
  var root = document.getElementById("w-aniso");
  if (!root) return;

  // DATA[kh/kv][average permeability, mD] = recovery (%) for kh,max/kh,min = 1, 5, 10
  var DATA = {
    "1":   { "50": [81, 81, 80], "100": [74, 75, 75], "200": [64, 66, 68] },
    "10":  { "50": [82, 82, 82], "100": [77, 77, 77], "200": [67, 69, 70] },
    "100": { "50": [85, 84, 84], "100": [82, 82, 82], "200": [77, 77, 78] }
  };
  var RATIOS = [1, 5, 10];
  var YMIN = 50, YMAX = 90;

  var style = document.createElement("style");
  style.textContent =
    "#w-aniso{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-aniso .wa-row{display:flex;flex-wrap:wrap;gap:8px 20px;margin:0 0 12px}" +
    "#w-aniso label{display:flex;flex-direction:column;gap:4px}" +
    "#w-aniso select{font:inherit;color:var(--fg);background:var(--panel);border:1px solid var(--rule);border-radius:4px;padding:2px 4px}" +
    "#w-aniso select:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-aniso .wa-bar{display:flex;align-items:center;gap:8px;margin:4px 0}" +
    "#w-aniso .wa-lab{flex:0 0 9.5em;font-size:0.9em}" +
    "#w-aniso .wa-track{flex:1 1 auto;height:1.2em;border-bottom:1px solid var(--rule);min-width:0}" +
    "#w-aniso .wa-fill{height:100%;background:var(--accent);opacity:0.85}" +
    "#w-aniso .wa-val{flex:0 0 3em;text-align:right;font-variant-numeric:tabular-nums}" +
    "#w-aniso .wa-read{margin:10px 0 4px}" +
    "#w-aniso .wa-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function makeSelect(labelText, options, value) {
    var lab = el("label");
    lab.appendChild(document.createTextNode(labelText));
    var sel = document.createElement("select");
    options.forEach(function (o) {
      var opt = document.createElement("option");
      opt.value = o[0];
      opt.textContent = o[1];
      if (o[0] === value) opt.selected = true;
      sel.appendChild(opt);
    });
    lab.appendChild(sel);
    return { label: lab, select: sel };
  }

  var row = el("div", "wa-row");
  var kSel = makeSelect("Average permeability", [["50", "50 mD"], ["100", "100 mD"], ["200", "200 mD"]], "200");
  var vSel = makeSelect("Horizontal to vertical ratio, kh/kv", [["1", "1"], ["10", "10"], ["100", "100"]], "1");
  row.appendChild(kSel.label);
  row.appendChild(vSel.label);
  root.appendChild(row);

  var bars = el("div");
  bars.setAttribute("aria-hidden", "true");
  var fills = [], vals = [];
  RATIOS.forEach(function (r) {
    var b = el("div", "wa-bar");
    b.appendChild(el("span", "wa-lab", "kh,max/kh,min = " + r));
    var track = el("div", "wa-track");
    var fill = el("div", "wa-fill");
    track.appendChild(fill);
    b.appendChild(track);
    var v = el("span", "wa-val");
    b.appendChild(v);
    bars.appendChild(b);
    fills.push(fill);
    vals.push(v);
  });
  root.appendChild(bars);

  var read = el("p", "wa-read");
  read.setAttribute("aria-live", "polite");
  root.appendChild(read);
  root.appendChild(el("p", "wa-cap",
    "Box model with one vertical well open over the full 50 m thickness, after ten injection and " +
    "withdrawal cycles. Values are the bar labels of Fig. 12, rounded in the paper to whole percent. " +
    "Bars start at " + YMIN + "%."));

  function update() {
    var k = kSel.select.value, v = vSel.select.value;
    var r = DATA[v][k];
    r.forEach(function (x, i) {
      fills[i].style.width = (100 * (x - YMIN) / (YMAX - YMIN)) + "%";
      vals[i].textContent = x + "%";
    });
    var d = r[2] - r[0], a = Math.abs(d);
    var change = d === 0 ? "no change in the rounded values" :
      (d > 0 ? "up " : "down ") + a + " percentage point" + (a === 1 ? "" : "s");
    read.textContent = "At " + k + " mD and kh/kv of " + v + ", hydrogen recovery is " +
      r[0] + "%, " + r[1] + "% and " + r[2] + "% for kh,max/kh,min of 1, 5 and 10 (" +
      change + " from 1 to 10).";
  }
  kSel.select.addEventListener("change", update);
  vSel.select.addEventListener("change", update);
  update();
})();
