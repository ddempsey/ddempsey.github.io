/* Size of 30-year prediction ranges (90% envelopes) before and after each data step, for
   Dempsey, O'Malley & Pawar (2015), Int. J. Greenh. Gas Control 37:24-37.
   Prior = 100%. Bayesian posterior reductions of 40, 45 and 72% (Abstract, Section 4.2) for CO2
   retention, brine production and CO2 production. Interference-test weighting reductions of a
   further 8, 38 and 69% relative to the unweighted posterior (Section 4.3). The combined values
   (posterior x weighting) are our arithmetic: 55.2, 34.1 and 8.7% of the prior size. */
(function () {
  "use strict";
  var root = document.getElementById("w-envelopes");
  if (!root) return;

  var OUT = [
    { id: "ret", name: "CO2 retention", post: 40, wt: 8 },
    { id: "brine", name: "Brine production", post: 45, wt: 38 },
    { id: "co2", name: "CO2 production", post: 72, wt: 69 }
  ];

  var style = document.createElement("style");
  style.textContent =
    "#w-envelopes{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-envelopes fieldset{border:0;margin:0 0 10px;padding:0}" +
    "#w-envelopes legend{padding:0;margin-bottom:4px}" +
    "#w-envelopes fieldset label{margin-right:16px;white-space:nowrap;display:inline-block}" +
    "#w-envelopes input[type=radio]{accent-color:var(--accent)}" +
    "#w-envelopes input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-envelopes .ev-row{display:flex;align-items:center;gap:8px;margin:6px 0}" +
    "#w-envelopes .ev-lab{flex:0 0 9.5em;font-size:0.9em}" +
    "#w-envelopes .ev-track{flex:1 1 auto;height:22px;border:1px solid var(--rule);border-radius:3px;position:relative;min-width:60px}" +
    "#w-envelopes .ev-bar{height:100%;background:var(--accent);border-radius:2px;transition:width .3s}" +
    "#w-envelopes .ev-val{flex:0 0 3.5em;text-align:right;font-variant-numeric:tabular-nums}" +
    "#w-envelopes .ev-read{margin:10px 0 4px;font-weight:600}" +
    "#w-envelopes .ev-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}" +
    "@media (max-width:420px){#w-envelopes .ev-lab{flex-basis:7em}}" +
    "@media (prefers-reduced-motion:reduce){#w-envelopes .ev-bar{transition:none}}";
  root.appendChild(style);

  var fs = document.createElement("fieldset");
  var lg = document.createElement("legend");
  lg.textContent = "Predicted outcome";
  fs.appendChild(lg);
  var radios = [];
  OUT.forEach(function (o, i) {
    var l = document.createElement("label");
    var r = document.createElement("input");
    r.type = "radio"; r.name = "ev-out"; r.value = String(i); r.id = "ev-" + o.id;
    if (i === 1) r.checked = true;
    l.setAttribute("for", r.id);
    l.appendChild(r);
    l.appendChild(document.createTextNode(" " + o.name));
    fs.appendChild(l);
    radios.push(r);
  });
  root.appendChild(fs);

  var STEPS = ["Prior only", "Well permeability (posterior)", "Plus interference tests"];
  var bars = [], vals = [];
  STEPS.forEach(function (s) {
    var row = document.createElement("div");
    row.className = "ev-row";
    var lab = document.createElement("span");
    lab.className = "ev-lab";
    lab.textContent = s;
    var tr = document.createElement("div");
    tr.className = "ev-track";
    tr.setAttribute("aria-hidden", "true");
    var b = document.createElement("div");
    b.className = "ev-bar";
    tr.appendChild(b);
    var v = document.createElement("span");
    v.className = "ev-val";
    row.appendChild(lab); row.appendChild(tr); row.appendChild(v);
    root.appendChild(row);
    bars.push(b); vals.push(v);
  });

  var read = document.createElement("p");
  read.className = "ev-read";
  read.setAttribute("aria-live", "polite");
  root.appendChild(read);

  var cap = document.createElement("p");
  cap.className = "ev-cap";
  cap.textContent = "Size of the 30-year prediction range that contains 90% of model runs, as a percentage of its size under the prior. " +
    "The paper reports reductions of 40, 45 and 72% from the well measurements, and a further 8, 38 and 69% from weighting by interference tests. " +
    "The combined percentages are our arithmetic from these values. All results are for one synthetic reservoir. " +
    "Source: Dempsey, O'Malley and Pawar (2015), International Journal of Greenhouse Gas Control 37.";
  root.appendChild(cap);

  function sel() {
    for (var i = 0; i < radios.length; i++) if (radios[i].checked) return OUT[i];
    return OUT[1];
  }

  function render() {
    var o = sel();
    var p = 100 - o.post;
    var w = p * (100 - o.wt) / 100;
    [100, p, w].forEach(function (x, i) {
      bars[i].style.width = x + "%";
      vals[i].textContent = Math.round(x) + "%";
    });
    read.textContent = o.name + ": the well measurements shrink the prediction range to " + p +
      "% of its prior size. Weighting by interference tests shrinks it to about " + Math.round(w) + "%.";
  }
  radios.forEach(function (rd) { rd.addEventListener("change", render); });
  render();
})();
