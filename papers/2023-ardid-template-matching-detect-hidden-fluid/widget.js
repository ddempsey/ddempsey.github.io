/* Exponential tremor decay after a fluid release, for Ardid et al. (2023), JGR Solid Earth
   128, e2023JB026729. Model from Section 5, Eqs. 3 to 6: discharge rate Q = Q0 exp(-t/td), with
   RSAM assumed proportional to Q, so RSAM/RSAM_peak = exp(-t/td). The 24-hour window, the 2-hour
   acceptance threshold, the 10 to 40 hour decay times after the 2006 and 2007 Ruapehu eruptions
   and the 12-hour minimum at Ruapehu are from Section 3.2. The curve is an illustration, not
   recorded data. */
(function () {
  "use strict";
  var root = document.getElementById("w-discharge-decay");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var TMAX = 24;          // hours, the fitting window used in the paper
  var THRESH = 2;         // hours, acceptance threshold on td
  var REFS = [
    { v: 2, txt: "2-hour acceptance threshold" },
    { v: 12, txt: "Shortest Ruapehu value of 12 hours" },
    { v: 40, txt: "Upper value of 40 hours after the 2006 and 2007 eruptions" }
  ];
  var td = 12;

  var style = document.createElement("style");
  style.textContent =
    "#w-discharge-decay{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-discharge-decay label{display:block;margin:0 0 4px}" +
    "#w-discharge-decay input[type=range]{width:100%;accent-color:var(--accent)}" +
    "#w-discharge-decay input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-discharge-decay .dd-btns{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0}" +
    "#w-discharge-decay button{font:inherit;font-size:0.9em;color:var(--fg);background:transparent;border:1px solid var(--rule);border-radius:4px;padding:3px 8px;cursor:pointer}" +
    "#w-discharge-decay button:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-discharge-decay svg{display:block;width:100%;height:auto;margin-top:6px}" +
    "#w-discharge-decay .dd-read{margin:8px 0 4px;font-weight:600}" +
    "#w-discharge-decay .dd-cap{color:var(--muted);font-size:0.85em;margin:8px 0 0}";
  root.appendChild(style);

  function mk(tag, attrs, text) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    return e;
  }

  var lab = mk("label", { "for": "dd-td" });
  root.appendChild(lab);
  var slider = mk("input", { type: "range", id: "dd-td", min: "1", max: "100", step: "1", value: String(td) });
  root.appendChild(slider);
  slider.addEventListener("input", function () { td = +slider.value; render(); });

  var btnRow = mk("div", { "class": "dd-btns", role: "group", "aria-label": "Discharge times from the paper" });
  REFS.forEach(function (r) {
    var b = mk("button", { type: "button" }, r.txt);
    b.addEventListener("click", function () { td = r.v; slider.value = String(td); render(); });
    btnRow.appendChild(b);
  });
  root.appendChild(btnRow);

  var W = 600, H = 220, X0 = 50, X1 = 585, Y0 = 15, Y1 = 180;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = mk("p", { "class": "dd-read", "aria-live": "polite" });
  root.appendChild(read);
  root.appendChild(mk("p", { "class": "dd-cap" },
    "Our illustration of the paper's draining reservoir model, in which tremor after a release falls " +
    "as exp(-t/discharge time). The curve shows tremor as a fraction of its peak over the 24 hours that " +
    "the paper uses to fit the decay. It is drawn for this page and shows no recorded data. Reference " +
    "values are from Ardid et al. (2023), Section 3.2."));

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }
  function xOf(t) { return X0 + (X1 - X0) * t / TMAX; }
  function yOf(f) { return Y1 - (Y1 - Y0) * f; }

  function render() {
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    el("line", { x1: X0, x2: X1, y1: Y1, y2: Y1, stroke: "var(--rule)" });
    el("line", { x1: X0, x2: X0, y1: Y0, y2: Y1, stroke: "var(--rule)" });
    [0, 0.5, 1].forEach(function (f) {
      el("text", { x: X0 - 6, y: yOf(f) + 4, "font-size": 12, "text-anchor": "end", fill: "var(--muted)" }, Math.round(f * 100) + "%");
    });
    [0, 6, 12, 18, 24].forEach(function (t) {
      el("text", { x: xOf(t), y: Y1 + 16, "font-size": 12, "text-anchor": "middle", fill: "var(--muted)" }, t + " h");
    });
    el("text", { x: (X0 + X1) / 2, y: H - 4, "font-size": 12, "text-anchor": "middle", fill: "var(--muted)" }, "Hours after the tremor peak");

    var pts = [];
    for (var i = 0; i <= 120; i++) {
      var t = TMAX * i / 120;
      pts.push(xOf(t).toFixed(1) + "," + yOf(Math.exp(-t / td)).toFixed(1));
    }
    el("polyline", { points: pts.join(" "), fill: "none", stroke: "var(--accent)", "stroke-width": 2.5 });

    var end = Math.exp(-TMAX / td);
    el("circle", { cx: xOf(TMAX), cy: yOf(end), r: 4, fill: "var(--accent)" });

    var pct = end * 100;
    var pctTxt = pct >= 1 ? Math.round(pct) + "%" : "less than 1%";
    lab.textContent = "Discharge time: " + td + " hours";
    read.textContent = "With a discharge time of " + td + " hours, tremor 24 hours after the peak is " +
      pctTxt + " of its peak. " + (td > THRESH ? "This passes" : "This fails") + " the paper's 2-hour threshold.";
  }

  render();
})();
