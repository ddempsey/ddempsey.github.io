/* Scenario widget for Birdsell et al. (2015), Water Resources Research 51, 7159-7188.
   Panel 1: percentage of injected fracturing fluid tracer that has reached the aquifer after
            1,000 years (TTA1000) in each scenario, from section 6 (6.1, 6.2.1-6.2.9) and Figure 8.
   Panel 2: where the injected tracer is after 20 years in the base case (section 6.1, Figure 7):
            68% removed by the well, 13% imbibed, 19% remaining at depth, 0.1% in the aquifer.
   Only values stated in the paper are shown. */
(function () {
  "use strict";
  var root = document.getElementById("w-hf-fate");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var BASE = 1.2; // % TTA1000, base case (section 6.2.2; 1.19% in section 6.2.9)
  var MAX = 12.3;

  var SC = [
    { n: "Base case", v: 1.2, s: "1.2%", d: "a 1 mm pathway, 20 years of production with 5 MPa of suction, and low imbibition" },
    { n: "No permeable pathway", v: 0, s: "0%", d: "intact rock between the shale and the aquifer" },
    { n: "Pathway with less than 10 m of intact seal", v: 0.00006, s: "0.00006%", d: "a section of intact seal less than 10 m long in an otherwise leaky pathway" },
    { n: "High imbibition", v: 0.9, s: "0.9%", d: "a high imbibition rate" },
    { n: "No buoyancy", v: 1.06, s: "1.06%", d: "buoyancy neglected (the base case gives 1.19% at this precision)" },
    { n: "No imbibition", v: 1.5, s: "1.5%", d: "no imbibition into the shale" },
    { n: "Production for only 30 days", v: 9.5, s: "9.5%", d: "a well that stops producing after a month" },
    { n: "6 MPa overpressure, 5 MPa suction", v: 9.7, s: "9.7%", d: "a well held only 5 MPa below an overpressured shale" },
    { n: "No flow out of the well", v: 10, s: "more than 10%", d: "no flow out of the well during production", lower: true },
    { n: "No flow out of the well and no imbibition", v: 12.3, s: "12.3%", d: "no flow out of the well and no imbibition" }
  ];
  var FATE = [
    { n: "Removed by the well", v: 68, c: "var(--accent)" },
    { n: "Imbibed into the shale", v: 13, c: "var(--fg)" },
    { n: "Remaining at depth", v: 19, c: "var(--muted)" },
    { n: "Reached the aquifer", v: 0.1, c: "var(--rule)" }
  ];

  var style = document.createElement("style");
  style.textContent =
    "#w-hf-fate{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-hf-fate .hf-part{margin:0 0 14px}" +
    "#w-hf-fate h4{margin:0 0 6px;font-size:1em}" +
    "#w-hf-fate label{display:block;margin:4px 0}" +
    "#w-hf-fate select{max-width:100%;font:inherit;color:var(--fg);background:var(--panel);border:1px solid var(--rule);padding:2px 4px}" +
    "#w-hf-fate select:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-hf-fate svg{display:block;width:100%;max-width:420px;height:auto;margin-top:6px}" +
    "#w-hf-fate .hf-read{margin:6px 0 0;font-weight:600}" +
    "#w-hf-fate .hf-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}" +
    "#w-hf-fate ul{list-style:none;padding:0;margin:6px 0 0;font-size:0.9em}" +
    "#w-hf-fate li{margin:2px 0}" +
    "#w-hf-fate .hf-key{display:inline-block;width:10px;height:10px;margin-right:6px;border:1px solid var(--rule)}";
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
  function svg(parent, h) {
    var e = document.createElementNS(NS, "svg");
    e.setAttribute("viewBox", "0 0 420 " + h);
    e.setAttribute("aria-hidden", "true");
    parent.appendChild(e);
    return e;
  }
  function clear(e) { while (e.firstChild) e.removeChild(e.firstChild); }
  function bar(g, y, label, val, fill, dashed) {
    var X0 = 120, W = 290;
    sv("text", { x: 0, y: y + 13, fill: "var(--fg)", "font-size": 13 }, g, label);
    sv("rect", { x: X0, y: y, width: W, height: 18, fill: "none", stroke: "var(--rule)" }, g);
    var w = val > 0 ? Math.max(2, W * val / MAX) : 0;
    if (w === 0) return;
    var a = { x: X0, y: y, width: w, height: 18, fill: fill };
    if (dashed) { a.fill = "none"; a.stroke = fill; a["stroke-dasharray"] = "4 3"; a["stroke-width"] = 2; }
    sv("rect", a, g);
  }

  // ---- Panel 1: fluid reaching the aquifer after 1,000 years, by scenario ----
  var p1 = mk("div", root, "hf-part");
  mk("h4", p1, null, "Injected fluid reaching the aquifer after 1,000 years");
  var lab = mk("label", p1, null, "Scenario");
  lab.setAttribute("for", "hf-scen");
  var sel = document.createElement("select");
  sel.id = "hf-scen";
  for (var i = 0; i < SC.length; i++) {
    var o = document.createElement("option");
    o.value = i; o.textContent = SC[i].n;
    sel.appendChild(o);
  }
  p1.appendChild(sel);
  var s1 = svg(p1, 56);
  var r1 = mk("p", p1, "hf-read");
  r1.setAttribute("aria-live", "polite");
  mk("p", p1, "hf-cap", "Each scenario changes the base case as described. Bars run from 0 to 12.3%, the largest value in the paper. For no flow out of the well the paper gives a lower bound only (dashed bar).");

  function upd() {
    var d = SC[Number(sel.value)];
    clear(s1);
    bar(s1, 4, "Base case", BASE, "var(--muted)");
    bar(s1, 34, "This scenario", d.v, "var(--accent)", d.lower);
    var t = "With " + d.d + ", " + d.s + " of the injected fluid reaches the aquifer after 1,000 years";
    if (d.v >= 5) t += ", about " + Math.round(d.v / BASE) + " times the base case";
    r1.textContent = t + ".";
  }
  sel.addEventListener("change", upd);

  // ---- Panel 2: base-case fate of injected fluid after 20 years ----
  var p2 = mk("div", root, "hf-part");
  mk("h4", p2, null, "Where the injected fluid is after 20 years of production (base case)");
  var s2 = svg(p2, 24);
  var x = 0;
  for (var j = 0; j < FATE.length; j++) {
    var w = Math.max(1, 420 * FATE[j].v / 100);
    sv("rect", { x: x, y: 2, width: w, height: 20, fill: FATE[j].c, stroke: "var(--panel)" }, s2);
    x += w;
  }
  var ul = mk("ul", p2);
  for (var k = 0; k < FATE.length; k++) {
    var li = mk("li", ul);
    var key = mk("span", li, "hf-key");
    key.style.background = FATE[k].c;
    li.appendChild(document.createTextNode(FATE[k].n + ": " + FATE[k].v + "%"));
  }
  mk("p", p2, "hf-read", "After 20 years, the well has removed 68% of the injected fluid, 13% has been imbibed, 19% remains at depth and 0.1% has reached the aquifer.");

  mk("p", root, "hf-cap", "Source: Birdsell et al. (2015), Water Resources Research 51, 7159-7188, section 6 and Figures 7 and 8.");

  upd();
})();
