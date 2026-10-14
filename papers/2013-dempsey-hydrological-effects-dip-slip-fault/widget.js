/* Fault rupture widget for Dempsey et al. (2013), J. Geophys. Res. Solid Earth 118, 195-211.
   Panel 1: excess water outflow after the coseismic pore-pressure change (section 4.1, paras 58-59):
            natural 360 kg/s, peak excess 740 kg/s, half/quarter/eighth of peak at 2.6/5.8/9 days,
            less than 10% of natural after about 20 days. Lasting rise from fault damage 14-15 kg/s (para 67).
   Panel 2: heat flow across the fault (paras 44, 66, 73-74): 10 MW before, 215 MW at rupture,
            80 MW after one week, 50 MW after two months. Only the reported points are shown. */
(function () {
  "use strict";
  var root = document.getElementById("w-fault-rupture");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var NATURAL = 360; // kg/s, para 58

  var FLOW = [
    { t: "Immediately after the earthquake", x: 740, s: "740", note: "the peak" },
    { t: "2.6 days after", x: 370, s: "about 370", note: "half the peak" },
    { t: "5.8 days after", x: 185, s: "about 185", note: "a quarter of the peak" },
    { t: "9 days after", x: 92.5, s: "about 90", note: "an eighth of the peak" },
    { t: "About 20 days after", x: 36, s: "less than 36", note: "less than 10% of the natural rate", upper: true }
  ];
  var HEAT = [
    { t: "Before the earthquake", x: 10, s: "Before the earthquake, about 10 MW crosses the fault, more than 90% of it by conduction." },
    { t: "Immediately after rupture", x: 215, s: "Immediately after rupture, about 215 MW flows from the footwall to the hanging wall. This is 20 times the earlier value, and about as much as the whole plume transported upwards before the earthquake." },
    { t: "One week after", x: 80, s: "One week after rupture, 80 MW crosses the fault." },
    { t: "Two months after", x: 50, s: "Two months after rupture, 50 MW crosses the fault, five times the value before the earthquake." }
  ];

  var style = document.createElement("style");
  style.textContent =
    "#w-fault-rupture{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-fault-rupture .wf-part{margin:0 0 14px}" +
    "#w-fault-rupture h4{margin:0 0 6px;font-size:1em}" +
    "#w-fault-rupture label{display:block;margin:4px 0}" +
    "#w-fault-rupture input[type=range]{width:100%;max-width:420px;accent-color:var(--accent)}" +
    "#w-fault-rupture input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-fault-rupture svg{display:block;width:100%;max-width:420px;height:auto}" +
    "#w-fault-rupture .wf-read{margin:6px 0 0;font-weight:600}" +
    "#w-fault-rupture .wf-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
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
  function slider(parent, id, max) {
    var lab = mk("label", parent);
    lab.setAttribute("for", id);
    var span = mk("span", lab);
    var inp = document.createElement("input");
    inp.type = "range"; inp.id = id; inp.min = 0; inp.max = max; inp.step = 1; inp.value = 0;
    parent.appendChild(inp);
    return { inp: inp, span: span };
  }
  function svg(parent, h) {
    var e = document.createElementNS(NS, "svg");
    e.setAttribute("viewBox", "0 0 420 " + h);
    e.setAttribute("aria-hidden", "true");
    parent.appendChild(e);
    return e;
  }
  function clear(e) { while (e.firstChild) e.removeChild(e.firstChild); }
  function bar(g, y, label, val, max, fill, dashed) {
    var X0 = 130, W = 280;
    sv("text", { x: 0, y: y + 13, fill: "var(--fg)", "font-size": 13 }, g, label);
    sv("rect", { x: X0, y: y, width: W, height: 18, fill: "none", stroke: "var(--rule)" }, g);
    var w = Math.max(2, W * val / max);
    var a = { x: X0, y: y, width: w, height: 18, fill: fill };
    if (dashed) { a.fill = "none"; a.stroke = fill; a["stroke-dasharray"] = "4 3"; a["stroke-width"] = 2; }
    sv("rect", a, g);
  }

  // ---- Panel 1: excess outflow after the pore-pressure change ----
  var p1 = mk("div", root, "wf-part");
  mk("h4", p1, null, "Extra water flowing out of the field after the pore-pressure change");
  var a = slider(p1, "wf-flow", FLOW.length - 1);
  var s1 = svg(p1, 96);
  var r1 = mk("p", p1, "wf-read");
  r1.setAttribute("aria-live", "polite");
  mk("p", p1, "wf-cap", "Only the times reported in the paper are shown, with no values in between. At about 20 days the paper gives an upper bound only (dashed bar). The bottom bar is the lasting rise of 14 to 15 kg/s from damage to the fault core. It persisted over the 10 years modelled.");

  function updFlow() {
    var d = FLOW[Number(a.inp.value)];
    a.span.textContent = "Time: " + d.t.toLowerCase();
    clear(s1);
    bar(s1, 4, "Natural outflow", NATURAL, 740, "var(--muted)");
    bar(s1, 36, "Extra outflow", d.x, 740, "var(--accent)", d.upper);
    bar(s1, 68, "Fault damage", 14.5, 740, "var(--fg)");
    r1.textContent = d.t + ", the extra outflow is " + d.s + " kg/s, " + d.note +
      ", in addition to a natural outflow of 360 kg/s.";
  }
  a.inp.addEventListener("input", updFlow);

  // ---- Panel 2: heat flow across the fault after damage to the fault core ----
  var p2 = mk("div", root, "wf-part");
  mk("h4", p2, null, "Heat crossing the fault after damage to the fault core");
  var b = slider(p2, "wf-heat", HEAT.length - 1);
  var s2 = svg(p2, 56);
  var r2 = mk("p", p2, "wf-read");
  r2.setAttribute("aria-live", "polite");
  mk("p", p2, "wf-cap", "The top bar is the total heat transported upwards by the plume before the earthquake, about 200 MW, for comparison. The one-week and two-month values come from a simulation that combined damage to the fault core with the pore-pressure change (section 5.1 of the paper).");

  function updHeat() {
    var d = HEAT[Number(b.inp.value)];
    b.span.textContent = "Time: " + d.t.toLowerCase();
    clear(s2);
    bar(s2, 4, "Plume, upwards", 200, 215, "var(--muted)");
    bar(s2, 34, "Across the fault", d.x, 215, "var(--accent)");
    r2.textContent = d.s;
  }
  b.inp.addEventListener("input", updHeat);

  mk("p", root, "wf-cap", "Source: Dempsey et al. (2013), Journal of Geophysical Research: Solid Earth 118, 195-211, sections 3, 4.1, 5 and 5.1.");

  updFlow();
  updHeat();
})();
