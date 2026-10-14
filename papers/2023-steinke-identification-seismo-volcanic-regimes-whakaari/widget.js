/* Regime timeline for Steinke et al. (2023), JGR Solid Earth 128, e2022JB026221.
   Steps through the seismic regimes detected at Whakaari for the episode from
   June 2011 to January 2014, using the dates and interpretations given in the
   paper's text (Sections 3.2.2 and 4.1). Bar positions are approximate to about
   half a month, because the paper gives most dates as "late June" and similar. */
(function () {
  "use strict";
  var root = document.getElementById("w-ep1-regimes");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var M0 = 0, M1 = 32; // months after 1 June 2011; 32 = 1 February 2014
  // s, e: start and end in months after 1 June 2011.
  var STAGES = [
    { s: 0, e: 8, tag: "α", name: "Background (α-type, cluster 1), June 2011 to February 2012",
      txt: "The lowest RSAM and DSAR. Unrest was reported from mid-August 2011, and the first window outside cluster 1 appeared on 17 August 2011, but the detector registered no regime change." },
    { s: 8, e: 8.7, tag: "?", un: true, name: "R2 (cluster 5), February 2012",
      txt: "The first detected regime change, after strong changes in gas chemistry in mid-January. It had no statistically significant features and was left unclassified." },
    { s: 8.7, e: 12.7, tag: "α", name: "R3, background (α-type), late February to late June 2012",
      txt: "RSAM and DSAR decreased, possibly indicating a reduced gas flux." },
    { s: 12.7, e: 14.13, tag: "β", name: "R4, pressurisation mode 1 (β-type), late June to 5 August 2012",
      txt: "RSAM and DSAR rose sharply. This may indicate new fluids rising into the hydrothermal system. Christenson et al. (2017) interpreted sulfur sealing and gas entrapment during this episode. Seal failure possibly caused the hydrothermal explosion of 5 August 2012." },
    { s: 14.13, e: 15.7, tag: "β", name: "R5, pressurisation mode 1 (β-type), August to late September 2012",
      txt: "DSAR rose again after the explosion. This could reflect renewed pressurisation as a lava dome and intruded magma blocked the vent." },
    { s: 15.7, e: 18.7, tag: "γ", name: "R6 and R7, pressurisation mode 2 (γ-type), late September to late December 2012",
      txt: "Tremor was unsteady relative to its RSAM level. The change could reflect a transition between dome extrusion and cooling. The lava dome was observed in November 2012." },
    { s: 18.7, e: 19.5, tag: "δ", name: "R8, depressurisation (δ-type), late December 2012 to mid-January 2013",
      txt: "Gas flux increased through the south-east vent and DSAR declined." },
    { s: 19.5, e: 32, tag: "ε…", name: "R9 (ε-type) and later regimes, mid-January 2013 to January 2014",
      txt: "R9 marks strong surface activity and free degassing. Hydrothermal activity eventually evaporated the crater lake completely. RSAM reached its highest level of the episode at this time. Regimes R10 to R17 follow, and the paper does not interpret them one by one." }
  ];
  var EVENTS = [
    { m: 14.13, t: "Aug 2012 explosion" },
    { m: 17.5, t: "dome seen" },
    { m: 23.5, t: "May 2013 explosion" },
    { m: 26.5, t: "Aug 2013" },
    { m: 28.5, t: "Oct 2013" }
  ];
  var TICKS = [{ m: 0, t: "Jun 2011" }, { m: 7, t: "Jan 2012" }, { m: 19, t: "Jan 2013" }, { m: 31, t: "Jan 2014" }];

  var style = document.createElement("style");
  style.textContent =
    "#w-ep1-regimes{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-ep1-regimes .rg-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:0 0 8px}" +
    "#w-ep1-regimes label{display:inline-flex;flex-wrap:wrap;align-items:center;gap:6px;max-width:100%}" +
    "#w-ep1-regimes select,#w-ep1-regimes button{font:inherit;color:var(--fg);background:transparent;border:1px solid var(--rule);border-radius:4px;padding:2px 8px;max-width:100%}" +
    "#w-ep1-regimes option{color:#000}" +
    "#w-ep1-regimes button:focus-visible,#w-ep1-regimes select:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-ep1-regimes svg{display:block;width:100%;height:auto}" +
    "#w-ep1-regimes svg rect.rg-seg{cursor:pointer}" +
    "#w-ep1-regimes .rg-read{margin:8px 0 4px}" +
    "#w-ep1-regimes .rg-read strong{display:block}" +
    "#w-ep1-regimes .rg-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  function mk(tag, attrs, text) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    return e;
  }

  var row = mk("div", { "class": "rg-row" });
  var prev = mk("button", { type: "button", "aria-label": "Previous regime" }, "← Previous");
  var next = mk("button", { type: "button", "aria-label": "Next regime" }, "Next →");
  var lab = mk("label", { "for": "rg-sel" }, "Regime");
  var sel = mk("select", { id: "rg-sel" });
  STAGES.forEach(function (st, i) { sel.appendChild(mk("option", { value: String(i) }, st.name)); });
  lab.appendChild(sel);
  row.appendChild(prev);
  row.appendChild(next);
  row.appendChild(lab);
  root.appendChild(row);

  var W = 600, X0 = 10, X1 = 590, BAR_Y = 70, BAR_H = 34;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " 140");
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = mk("div", { "class": "rg-read", "aria-live": "polite" });
  root.appendChild(read);
  root.appendChild(mk("p", { "class": "rg-cap" },
    "Bars show regimes detected by the classifier, and vertical lines show eruptions and the lava dome observation. " +
    "Positions are approximate. They are based on the months named in the paper's text. " +
    "Greek letters are the paper's regime types. Interpretations are the paper's hypotheses. " +
    "Source: Steinke et al. (2023), Journal of Geophysical Research: Solid Earth 128, e2022JB026221, CC BY 4.0."));

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }
  function xOf(m) { return X0 + (X1 - X0) * (m - M0) / (M1 - M0); }

  var cur = 0;
  function render() {
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    EVENTS.forEach(function (ev, i) {
      var x = xOf(ev.m);
      el("line", { x1: x, x2: x, y1: 18 + (i % 2) * 16, y2: BAR_Y + BAR_H + 6, stroke: "var(--fg)", "stroke-width": 1.5, "stroke-dasharray": "3 3" });
      el("text", { x: x, y: 13 + (i % 2) * 16, fill: "var(--fg)", "font-size": 12, "text-anchor": i === EVENTS.length - 1 ? "end" : "middle" }, ev.t);
    });
    STAGES.forEach(function (st, i) {
      var xa = xOf(st.s), xb = xOf(st.e), on = i === cur;
      var r = el("rect", {
        "class": "rg-seg", x: xa + 0.5, y: BAR_Y, width: Math.max(1, xb - xa - 1), height: BAR_H,
        fill: on ? "var(--accent)" : (st.un ? "none" : "var(--muted)"),
        "fill-opacity": on ? 1 : 0.35, stroke: st.un || on ? "var(--fg)" : "none",
        "stroke-dasharray": st.un ? "3 2" : "none"
      });
      r.addEventListener("click", function () { cur = i; sync(); });
      if (xb - xa > 14) {
        el("text", { x: (xa + xb) / 2, y: BAR_Y + BAR_H / 2 + 5, fill: "var(--fg)", "font-size": 14, "text-anchor": "middle", "font-weight": on ? 700 : 400 }, st.tag);
      }
    });
    el("line", { x1: X0, x2: X1, y1: BAR_Y + BAR_H + 8, y2: BAR_Y + BAR_H + 8, stroke: "var(--rule)" });
    TICKS.forEach(function (tk, i) {
      el("text", { x: xOf(tk.m), y: BAR_Y + BAR_H + 26, fill: "var(--muted)", "font-size": 12,
        "text-anchor": i === 0 ? "start" : (i === TICKS.length - 1 ? "end" : "middle") }, tk.t);
    });
    var st = STAGES[cur];
    read.textContent = "";
    read.appendChild(mk("strong", {}, st.name));
    read.appendChild(document.createTextNode(st.txt));
    prev.disabled = cur === 0;
    next.disabled = cur === STAGES.length - 1;
  }
  function sync() { sel.value = String(cur); render(); }

  prev.addEventListener("click", function () { if (cur > 0) { cur--; sync(); } });
  next.addEventListener("click", function () { if (cur < STAGES.length - 1) { cur++; sync(); } });
  sel.addEventListener("change", function () { cur = parseInt(sel.value, 10); render(); });

  sync();
})();
