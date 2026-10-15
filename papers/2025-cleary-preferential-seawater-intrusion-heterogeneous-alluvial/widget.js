/* Ensemble widget for Cleary et al. (2025), Journal of Hydrology 661, 133455.
   Panel 1: where the salt/fresh water interface lies in the 25 realisations.
            Steady state: around 1500 m offshore on average, one realisation within 100 m of the
            shoreline, another more than 2500 m offshore (section 3.1). Model domain 4 km offshore
            and 400 m onshore (section 2.2).
            After 100 years: interface reached the shoreline in half the realisations and the
            inland boundary in a quarter (section 3.3). "Shoreline but not boundary" = 1/2 - 1/4
            (our arithmetic).
   Panel 2: rate of interface movement in the heterogeneous realisations relative to the
            equivalent homogeneous models (section 4.2, Fig. 8b): average 2-4 times the advective
            model, 1-2 times the advective-dispersive model, maximum in many cases more than 5 times
            the advective-dispersive model.
   Only values stated in the paper are shown. */
(function () {
  "use strict";
  var root = document.getElementById("w-swi-ensemble");
  if (!root) return;
  var NS = "http://www.w3.org/2000/svg";

  var style = document.createElement("style");
  style.textContent =
    "#w-swi-ensemble{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-swi-ensemble .sw-part{margin:0 0 14px}" +
    "#w-swi-ensemble h4{margin:0 0 6px;font-size:1em}" +
    "#w-swi-ensemble label{display:block;margin:4px 0}" +
    "#w-swi-ensemble select{max-width:100%;font:inherit;color:var(--fg);background:var(--panel);border:1px solid var(--rule);padding:2px 4px}" +
    "#w-swi-ensemble select:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-swi-ensemble svg{display:block;width:100%;max-width:440px;height:auto;margin-top:6px}" +
    "#w-swi-ensemble .sw-read{margin:6px 0 0;font-weight:600}" +
    "#w-swi-ensemble .sw-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
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
    e.setAttribute("viewBox", "0 0 440 " + h);
    e.setAttribute("aria-hidden", "true");
    parent.appendChild(e);
    return e;
  }
  function clear(e) { while (e.firstChild) e.removeChild(e.firstChild); }
  function select(parent, id, text, opts) {
    var lab = mk("label", parent, null, text);
    lab.setAttribute("for", id);
    var s = document.createElement("select");
    s.id = id;
    for (var i = 0; i < opts.length; i++) {
      var o = document.createElement("option");
      o.value = i; o.textContent = opts[i];
      s.appendChild(o);
    }
    parent.appendChild(s);
    return s;
  }

  // ---- Panel 1: interface position across the ensemble ----
  var p1 = mk("div", root, "sw-part");
  mk("h4", p1, null, "Where the interface lies in the 25 realisations");
  var st = select(p1, "sw-stage", "Stage", ["Steady state", "After 100 years of intrusion"]);
  var s1 = svg(p1, 106);
  var r1 = mk("p", p1, "sw-read");
  r1.setAttribute("aria-live", "polite");
  mk("p", p1, "sw-cap", "The strip is the modelled aquifer, from the inland boundary 400 m onshore to 4,000 m offshore. The paper reports ensemble summaries only. The second stage therefore shows fractions of the 25 realisations.");

  var X0 = 20, XW = 400, XMIN = -400, XMAX = 4000;
  function px(x) { return X0 + XW * (x - XMIN) / (XMAX - XMIN); }

  function domain(g) {
    sv("rect", { x: px(XMIN), y: 20, width: px(0) - px(XMIN), height: 16, fill: "var(--rule)", opacity: 0.5 }, g);
    sv("rect", { x: px(0), y: 20, width: px(XMAX) - px(0), height: 16, fill: "none", stroke: "var(--rule)" }, g);
    sv("line", { x1: px(0), y1: 12, x2: px(0), y2: 44, stroke: "var(--fg)", "stroke-width": 2 }, g);
    sv("text", { x: px(0), y: 9, fill: "var(--fg)", "font-size": 11, "text-anchor": "middle" }, g, "shoreline");
    sv("text", { x: px(XMIN), y: 56, fill: "var(--muted)", "font-size": 11 }, g, "400 m onshore");
    sv("text", { x: px(XMAX), y: 56, fill: "var(--muted)", "font-size": 11, "text-anchor": "end" }, g, "4,000 m offshore");
  }

  function upd1() {
    clear(s1);
    domain(s1);
    if (st.value === "0") {
      // range from within 100 m to beyond 2500 m, mean 1500 m
      sv("line", { x1: px(100), y1: 28, x2: px(2500), y2: 28, stroke: "var(--accent)", "stroke-width": 3 }, s1);
      sv("path", { d: "M" + px(2500) + " 22 L" + (px(2500) + 8) + " 28 L" + px(2500) + " 34 Z", fill: "var(--accent)" }, s1);
      sv("circle", { cx: px(1500), cy: 28, r: 6, fill: "var(--accent)", stroke: "var(--panel)", "stroke-width": 2 }, s1);
      sv("text", { x: px(1500), y: 76, fill: "var(--fg)", "font-size": 12, "text-anchor": "middle" }, s1, "mean around 1,500 m offshore");
      sv("text", { x: px(100), y: 88, fill: "var(--muted)", "font-size": 11 }, s1, "closest within 100 m");
      r1.textContent = "At steady state, the interface lies around 1,500 m offshore on average, within 100 m of the shoreline in one realisation and more than 2,500 m offshore in another.";
    } else {
      var parts = [
        { f: 0.5, c: "var(--muted)", t: "half still offshore", y: 89, a: "start" },
        { f: 0.25, c: "var(--accent)", t: "a quarter reached the shoreline only", y: 102, a: "end" },
        { f: 0.25, c: "var(--fg)", t: "a quarter reached the inland boundary", y: 89, a: "end" }
      ];
      var x = X0;
      for (var i = 0; i < parts.length; i++) {
        var w = XW * parts[i].f;
        sv("rect", { x: x, y: 64, width: w, height: 12, fill: parts[i].c, stroke: "var(--panel)" }, s1);
        sv("text", { x: parts[i].a === "end" ? x + w - 2 : x + 2, y: parts[i].y, fill: "var(--fg)", "font-size": 10, "text-anchor": parts[i].a }, s1, parts[i].t);
        x += w;
      }
      sv("rect", { x: px(XMIN), y: 20, width: px(0) - px(XMIN), height: 16, fill: "var(--accent)", opacity: 0.6 }, s1);
      r1.textContent = "After 100 years with the onshore head 1 m below the offshore head, the interface has reached the shoreline in half the realisations, and the inland boundary in a quarter.";
    }
  }
  st.addEventListener("change", upd1);

  // ---- Panel 2: rate of interface movement relative to uniform models ----
  var p2 = mk("div", root, "sw-part");
  mk("h4", p2, null, "How fast the interface moved, compared with a uniform model");
  var ref = select(p2, "sw-ref", "Uniform model used for comparison", ["Advective (no dispersion)", "Advective-dispersive"]);
  var s2 = svg(p2, 96);
  var r2 = mk("p", p2, "sw-read");
  r2.setAttribute("aria-live", "polite");
  mk("p", p2, "sw-cap", "Bars show the range the paper gives, in multiples of the uniform model's rate (1 = same rate). The paper gives a maximum only against the advective-dispersive model, as a lower bound (dashed).");

  var B0 = 150, BW = 270, BMAX = 6;
  function bx(v) { return B0 + BW * v / BMAX; }
  function axis(g) {
    for (var v = 0; v <= BMAX; v++) {
      sv("line", { x1: bx(v), y1: 6, x2: bx(v), y2: 74, stroke: "var(--rule)", "stroke-width": v === 1 ? 2 : 1 }, g);
      sv("text", { x: bx(v), y: 88, fill: "var(--muted)", "font-size": 11, "text-anchor": "middle" }, g, v + "×");
    }
  }
  function range(g, y, label, lo, hi, open) {
    sv("text", { x: 0, y: y + 13, fill: "var(--fg)", "font-size": 12 }, g, label);
    var a = { x: bx(lo), y: y, width: bx(hi) - bx(lo), height: 18, fill: "var(--accent)" };
    if (open) { a.fill = "none"; a.stroke = "var(--accent)"; a["stroke-dasharray"] = "4 3"; a["stroke-width"] = 2; }
    sv("rect", a, g);
  }
  function upd2() {
    clear(s2);
    axis(s2);
    if (ref.value === "0") {
      range(s2, 12, "Average rate", 2, 4);
      sv("text", { x: 0, y: 55, fill: "var(--muted)", "font-size": 12 }, s2, "No maximum given");
      r2.textContent = "On average, the interface moved two to four times faster than the advective model predicts.";
    } else {
      range(s2, 12, "Average rate", 1, 2);
      range(s2, 42, "Fastest point", 5, BMAX, true);
      r2.textContent = "On average, the interface moved up to twice as fast as the advective-dispersive model, and at its fastest point more than five times faster in many realisations.";
    }
  }
  ref.addEventListener("change", upd2);

  mk("p", root, "sw-cap", "From Cleary et al. (2025), Journal of Hydrology 661, 133455, sections 3.1, 3.3 and 4.2.");

  upd1();
  upd2();
})();
