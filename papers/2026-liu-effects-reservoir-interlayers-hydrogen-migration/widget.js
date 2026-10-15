/* Widget for Liu, Dempsey, Nicol, Parker and Passmore (2026), Int. J. Hydrogen Energy 211, 153704.
   Ahuroa reservoir model: hydrogen recovery efficiency for four permeabilities of the thin TN
   interlayers (Section 4.3, para. 1; Fig. 15b). The 75 mD case gives the TN facies the permeability
   of the storage layers, which removes the interlayers (Section 4.2).
   First-cycle recovery: 66.0, 64.1, 61.2, 56.8%. End-of-simulation recovery: 77.7, 77.0, 75.4, 73.4%.
   Co-produced cushion gas: 2.0, 2.07, 2.2, 2.4 x 10^8 Sm3 (shown as 200, 207, 220, 240 million Sm3). All values are from Section 4.3. */
(function () {
  "use strict";
  var root = document.getElementById("w-tn");
  if (!root) return;

  var CASES = [
    { k: "0.5 mD", note: "lowest log value", first: 66.0, last: 77.7, cush: "200" },
    { k: "1 mD", note: "median log value", first: 64.1, last: 77.0, cush: "207" },
    { k: "10 mD", note: "highest log value", first: 61.2, last: 75.4, cush: "220" },
    { k: "75 mD", note: "interlayers ignored", first: 56.8, last: 73.4, cush: "240" }
  ];

  var style = document.createElement("style");
  style.textContent =
    "#w-tn{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-tn fieldset{border:0;margin:0 0 10px;padding:0}" +
    "#w-tn legend{padding:0;margin-bottom:4px}" +
    "#w-tn fieldset label{margin-right:14px;display:inline-block;white-space:nowrap}" +
    "#w-tn input[type=radio]{accent-color:var(--accent)}" +
    "#w-tn input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-tn .tn-row{display:flex;align-items:center;gap:8px;margin:6px 0}" +
    "#w-tn .tn-lab{flex:0 0 9em;font-size:0.9em}" +
    "#w-tn .tn-track{flex:1 1 auto;height:22px;border:1px solid var(--rule);border-radius:3px;min-width:60px}" +
    "#w-tn .tn-bar{height:100%;background:var(--accent);border-radius:2px;transition:width .3s}" +
    "#w-tn .tn-val{flex:0 0 3.5em;text-align:right;font-variant-numeric:tabular-nums}" +
    "#w-tn .tn-read{margin:10px 0 4px;font-weight:600}" +
    "#w-tn .tn-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}" +
    "@media (max-width:420px){#w-tn .tn-lab{flex-basis:6.5em}}" +
    "@media (prefers-reduced-motion:reduce){#w-tn .tn-bar{transition:none}}";
  root.appendChild(style);

  var fs = document.createElement("fieldset");
  var lg = document.createElement("legend");
  lg.textContent = "Permeability of the thin TN interlayers";
  fs.appendChild(lg);
  var radios = [];
  CASES.forEach(function (c, i) {
    var l = document.createElement("label");
    var r = document.createElement("input");
    r.type = "radio"; r.name = "tn-k"; r.value = String(i); r.id = "tn-k" + i;
    if (i === 0) r.checked = true;
    l.setAttribute("for", r.id);
    l.appendChild(r);
    l.appendChild(document.createTextNode(" " + c.k + " (" + c.note + ")"));
    fs.appendChild(l);
    radios.push(r);
  });
  root.appendChild(fs);

  var ROWS = ["After first cycle", "End of simulation"];
  var bars = [], vals = [];
  ROWS.forEach(function (name) {
    var row = document.createElement("div");
    row.className = "tn-row";
    var lab = document.createElement("span");
    lab.className = "tn-lab";
    lab.textContent = name;
    var tr = document.createElement("div");
    tr.className = "tn-track";
    tr.setAttribute("aria-hidden", "true");
    var b = document.createElement("div");
    b.className = "tn-bar";
    tr.appendChild(b);
    var v = document.createElement("span");
    v.className = "tn-val";
    row.appendChild(lab); row.appendChild(tr); row.appendChild(v);
    root.appendChild(row);
    bars.push(b); vals.push(v);
  });

  var read = document.createElement("p");
  read.className = "tn-read";
  read.setAttribute("aria-live", "polite");
  root.appendChild(read);

  var cap = document.createElement("p");
  cap.className = "tn-cap";
  cap.textContent = "Hydrogen recovery efficiency (hydrogen withdrawn as a percentage of hydrogen injected) in our model of a " +
    "hypothetical hydrogen store at the Ahuroa gas field. Bars run from 0 to 100%. The 75 mD case removes the interlayers by giving " +
    "the TN facies the permeability of the storage layers. Source: Liu et al. (2026), International Journal of " +
    "Hydrogen Energy 211, Section 4.3.";
  root.appendChild(cap);

  function render() {
    var c = CASES[0];
    for (var i = 0; i < radios.length; i++) if (radios[i].checked) c = CASES[i];
    [c.first, c.last].forEach(function (x, j) {
      bars[j].style.width = x + "%";
      vals[j].textContent = x.toFixed(1) + "%";
    });
    read.textContent = "With the TN interlayers at " + c.k + ", recovery was " + c.first.toFixed(1) +
      "% after the first cycle and " + c.last.toFixed(1) + "% at the end, and " + c.cush +
      " million Sm³ of cushion gas was withdrawn with the hydrogen.";
  }
  radios.forEach(function (r) { r.addEventListener("change", render); });
  render();
})();
