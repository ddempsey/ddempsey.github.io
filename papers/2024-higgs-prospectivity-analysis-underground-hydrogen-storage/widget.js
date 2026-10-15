/* Widget for Higgs et al. (2024), Int. J. Hydrogen Energy 71, 1468-1485.
   Panel 1: top ten matrix rank scores under four weighting scenarios (Table 5, A-D).
            Scenario D values printed in the paper as "(809)" and "(792)" are read as 0.809 and
            0.792 (see claims.yaml, inconsistencies). Hydrocarbon phase and reservoir age from Table 4.
   Panel 2: working gas left in the two leading sites (Ahuroa 1.4 TWh + Maui A Kaimiro 21.6 TWh,
            Table 6; "23 TWh", Section 6.2) for a cushion gas share of 20-80% (Section 6.2). Default
            40%, inside the ~30-50% the paper gives for depleted fields (Section 3.3.2).
            Working gas = 23 x (1 - share) is our arithmetic. The paper gives two values for the
            2050 need, and both are drawn: band 1.5-4.2 TWh (Section 3.1) and line at ~5 TWh
            (Section 6.2). Neither is preferred (see claims.yaml, inconsistencies). */
(function () {
  "use strict";
  var root = document.getElementById("w-uhs-rank");
  if (!root) return;
  var NS = "http://www.w3.org/2000/svg";

  var style = document.createElement("style");
  style.textContent =
    "#w-uhs-rank{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-uhs-rank .uh-part{margin:0 0 16px}" +
    "#w-uhs-rank h4{margin:0 0 6px;font-size:1em}" +
    "#w-uhs-rank label{display:block;margin:4px 0}" +
    "#w-uhs-rank select,#w-uhs-rank input{max-width:100%;font:inherit;color:var(--fg);background:var(--panel)}" +
    "#w-uhs-rank select{border:1px solid var(--rule);padding:2px 4px}" +
    "#w-uhs-rank input[type=range]{width:100%;accent-color:var(--accent)}" +
    "#w-uhs-rank select:focus-visible,#w-uhs-rank input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-uhs-rank svg{display:block;width:100%;max-width:460px;height:auto;margin-top:6px}" +
    "#w-uhs-rank .uh-read{margin:6px 0 0;font-weight:600}" +
    "#w-uhs-rank .uh-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
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
    e.setAttribute("viewBox", "0 0 460 " + h);
    e.setAttribute("aria-hidden", "true");
    parent.appendChild(e);
    return e;
  }
  function clear(e) { while (e.firstChild) e.removeChild(e.firstChild); }

  // ---- Data: Table 5 (scores) and Table 4 (phase, age) ----
  var SITES = {
    ahu: { n: "Ahuroa (Tariki)", ph: "gas", age: "Oligocene" },
    mua: { n: "Maui A (Kaimiro)", ph: "gas", age: "Eocene" },
    kap: { n: "Kapuni (K1A Mangahewa)", ph: "gas", age: "Eocene" },
    poh: { n: "Pohokura (U1 Mangahewa)", ph: "gas", age: "Eocene" },
    mck: { n: "McKee (McKee)", ph: "gas cap", age: "Eocene" },
    kup: { n: "Kupe (Farewell)", ph: "gas leg, oil rim", age: "Paleocene" },
    tar: { n: "Tariki (Tariki)", ph: "gas", age: "Oligocene" },
    mub: { n: "Maui B (Kaimiro)", ph: "gas cap", age: "Eocene" },
    tui: { n: "Tui area (Farewell)", ph: "oil", age: "Paleocene" },
    maa: { n: "Maari (Mangahewa)", ph: "gas cap", age: "Eocene" }
  };
  var SCEN = [
    { lab: "A) Original weightings", under: "the original weightings",
      r:[["ahu", .806], ["mua", .796], ["kap", .784], ["poh", .765], ["mck", .762], ["kup", .756], ["tar", .756], ["mub", .753], ["tui", .753], ["maa", .725]] },
    { lab: "B) Higher weights on reactivity", under: "higher weights on reactivity",
      r:[["ahu", .811], ["mua", .797], ["poh", .774], ["tar", .766], ["mck", .763], ["tui", .763], ["kap", .757], ["mub", .751], ["kup", .737], ["maa", .726]] },
    { lab: "C) Lower weights on reactivity", under: "lower weights on reactivity",
      r:[["mua", .804], ["kap", .797], ["ahu", .794], ["poh", .765], ["mub", .765], ["kup", .761], ["mck", .758], ["tui", .752], ["tar", .742], ["maa", .722]] },
    { lab: "D) Higher weights on reservoir parameters", under: "higher weights on reservoir parameters",
      r:[["ahu", .831], ["kap", .820], ["mua", .809], ["poh", .803], ["kup", .792], ["tar", .787], ["mck", .781], ["mub", .770], ["tui", .770], ["maa", .757]] }
  ];

  // ---- Panel 1: ranking under each weighting scenario ----
  var p1 = mk("div", root, "uh-part");
  mk("h4", p1, null, "Top ten sites in the weighted matrix");
  var lab = mk("label", p1, null, "Weighting scenario");
  lab.setAttribute("for", "uh-scen");
  var sel = document.createElement("select");
  sel.id = "uh-scen";
  for (var i = 0; i < SCEN.length; i++) {
    var o = document.createElement("option");
    o.value = i; o.textContent = SCEN[i].lab;
    sel.appendChild(o);
  }
  p1.appendChild(sel);
  var s1 = svg(p1, 262);
  var r1 = mk("p", p1, "uh-read");
  r1.setAttribute("aria-live", "polite");
  mk("p", p1, "uh-cap", "Rank scores from Table 5 of the paper. The axis starts at 0.70 so that small differences between scores are visible. All ten sites are Paleogene (Paleocene, Eocene or Oligocene) reservoirs. The darker bars are gas or gas-cap reservoirs, and the open bar is the Tui area oil reservoir.");

  var LX = 168, W = 270, SMIN = 0.70, SMAX = 0.85;
  function sx(v) { return LX + W * (v - SMIN) / (SMAX - SMIN); }

  function draw1() {
    var sc = SCEN[parseInt(sel.value, 10) || 0];
    clear(s1);
    var ticks = [0.70, 0.75, 0.80, 0.85];
    for (var t = 0; t < ticks.length; t++) {
      var x = sx(ticks[t]);
      sv("line", { x1: x, x2: x, y1: 4, y2: 238, stroke: "var(--rule)", "stroke-width": 1 }, s1);
      sv("text", { x: x, y: 254, "text-anchor": "middle", "font-size": 11, fill: "var(--muted)" }, s1, ticks[t].toFixed(2));
    }
    for (var k = 0; k < sc.r.length; k++) {
      var id = sc.r[k][0], v = sc.r[k][1], site = SITES[id];
      var y = 6 + k * 23;
      var oil = site.ph === "oil";
      sv("text", { x: LX - 6, y: y + 14, "text-anchor": "end", "font-size": 11, fill: "var(--fg)" }, s1, (k + 1) + ". " + site.n);
      sv("rect", { x: LX, y: y + 2, width: Math.max(1, sx(v) - LX), height: 16,
        fill: oil ? "none" : "var(--accent)", stroke: "var(--accent)", "stroke-width": 1.5, opacity: oil ? 1 : 0.85 }, s1);
      sv("text", { x: sx(v) + 4, y: y + 14, "font-size": 11, fill: "var(--fg)" }, s1, v.toFixed(3));
    }
    var first = SITES[sc.r[0][0]];
    r1.textContent = "Under " + sc.under + ", " + first.n + " ranks first (" + sc.r[0][1].toFixed(3) +
      "), and the top ten span " + sc.r[9][1].toFixed(3) + " to " + sc.r[0][1].toFixed(3) + ".";
  }
  sel.addEventListener("change", draw1);
  draw1();

  // ---- Panel 2: cushion gas share and working gas in the two leading sites ----
  var TOTAL = 23, NEED_LO = 1.5, NEED_HI = 4.2, NEED_62 = 5, DEP_LO = 30, DEP_HI = 50;
  var p2 = mk("div", root, "uh-part");
  mk("h4", p2, null, "Working gas in Ahuroa and Maui A together");
  var lab2 = mk("label", p2, null, "Cushion gas share of total storage (%)");
  lab2.setAttribute("for", "uh-cush");
  var rng = document.createElement("input");
  rng.type = "range"; rng.id = "uh-cush"; rng.min = 20; rng.max = 80; rng.step = 5; rng.value = 50;
  p2.appendChild(rng);
  var s2 = svg(p2, 124);
  var r2 = mk("p", p2, "uh-read");
  r2.setAttribute("aria-live", "polite");
  mk("p", p2, "uh-cap", "The total is 23 TWh, with 1.4 TWh at Ahuroa and 21.6 TWh in the Kaimiro reservoir of Maui A (Table 6). The paper gives a cushion gas share of about 30 to 50% for depleted fields (Section 3.3.2) and about 20 to 80% in general (Section 6.2). The paper's own comparison assumes 50%. Working gas = 23 TWh x (1 - cushion share) is our arithmetic. The shaded band and the dashed line are the two values the paper gives for usable storage need in 2050.");

  var X0 = 20, XW = 420;
  function tx(v) { return X0 + XW * v / TOTAL; }

  function draw2() {
    var pc = +rng.value, f = pc / 100;
    var work = TOTAL * (1 - f);
    var inDep = pc >= DEP_LO && pc <= DEP_HI;
    rng.setAttribute("aria-valuetext", pc + "% cushion gas, " + work.toFixed(1) + " TWh working gas");
    clear(s2);
    // Legend for the two need values, each labelled with its section of the paper
    sv("rect", { x: X0, y: 4, width: 14, height: 10, fill: "var(--muted)", opacity: 0.35 }, s2);
    sv("text", { x: X0 + 20, y: 13, "font-size": 11, fill: "var(--fg)" }, s2, "2050 need in Section 3.1 (1.5 to 4.2 TWh)");
    sv("line", { x1: X0, x2: X0 + 14, y1: 25, y2: 25, stroke: "var(--fg)", "stroke-width": 1.5, "stroke-dasharray": "3 2" }, s2);
    sv("text", { x: X0 + 20, y: 29, "font-size": 11, fill: "var(--fg)" }, s2, "2050 need in Section 6.2 (about 5 TWh)");
    // Reference marks
    sv("rect", { x: tx(NEED_LO), y: 38, width: tx(NEED_HI) - tx(NEED_LO), height: 52, fill: "var(--muted)", opacity: 0.25 }, s2);
    // Working gas (filled) and cushion gas (open)
    sv("rect", { x: X0, y: 46, width: tx(work) - X0, height: 16, fill: "var(--accent)" }, s2);
    sv("rect", { x: tx(work), y: 46, width: tx(TOTAL) - tx(work), height: 16, fill: "none", stroke: "var(--accent)", "stroke-width": 1.5 }, s2);
    sv("line", { x1: tx(NEED_62), x2: tx(NEED_62), y1: 36, y2: 92, stroke: "var(--fg)", "stroke-width": 1.5, "stroke-dasharray": "3 2" }, s2);
    sv("text", { x: tx(TOTAL), y: 80, "text-anchor": "end", "font-size": 11, fill: "var(--fg)" }, s2, "working gas filled, cushion gas open");
    var ticks = [0, 5, 10, 15, 20];
    for (var t = 0; t < ticks.length; t++) {
      sv("text", { x: tx(ticks[t]), y: 106, "text-anchor": "middle", "font-size": 11, fill: "var(--muted)" }, s2, ticks[t] + "");
    }
    sv("text", { x: tx(TOTAL), y: 120, "text-anchor": "end", "font-size": 11, fill: "var(--muted)" }, s2, "TWh");
    r2.textContent = "With " + pc + "% cushion gas (" + (inDep ? "within" : "outside") +
      " the 30 to 50% given for depleted fields), about " + work.toFixed(1) + " TWh of the 23 TWh would be working gas.";
  }
  rng.addEventListener("input", draw2);
  draw2();
})();
