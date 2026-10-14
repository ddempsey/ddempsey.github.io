/* Flashing front widget for Sanchez-Alfaro et al. (2024), Geophys. Res. Lett. 51, e2023GL108109.
   Compares the two end-member TOUGH2 scenarios reported in section 3.4:
   - Mw 1.0, Ti = 200 C: opening 0.69 mm; vapour only in the jog, Vf < 5%, lasting less than a millisecond.
   - Mw 3.0, Ti = 300 C: opening 6.5 mm; Vf up to ~0.3 in the jog, 0.15 in the damage zone at 0.125 m,
     > 0.2 in the host rock at 0.35 m; fluid with > 5% vapour lasts up to 1e4 s (~2.8 hr).
   The 'up to 1 m' reach (section 3.4, Key Points) conflicts with 'within the centimeter-scale'
   (Conclusions), so neither is shown (see claims.yaml and qa.md).
   Only the values stated in the text are shown. The other four modelled scenarios are not reported
   numerically in the text and are omitted. */
(function () {
  "use strict";
  var root = document.getElementById("w-flash-front");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var SCEN = [
    {
      id: "small", label: "Magnitude 1.0 earthquake, 200°C water",
      opening: "0.69 mm",
      vf: [
        { where: "In the jog", x: 0.05, s: "less than 5%", upper: true },
        { where: "Damage zone, 12.5 cm", x: 0, s: "no vapour" },
        { where: "Host rock, 35 cm", x: 0, s: "no vapour" }
      ],
      dur: 1e-3, durUpper: true, durS: "less than a millisecond",
      read: "With a magnitude 1.0 earthquake and 200°C water, the jog opens by 0.69 mm. Vapour is confined to the jog, at less than 5%, and lasts less than a millisecond."
    },
    {
      id: "large", label: "Magnitude 3.0 earthquake, 300°C water",
      opening: "6.5 mm",
      vf: [
        { where: "In the jog", x: 0.3, s: "up to about 30%" },
        { where: "Damage zone, 12.5 cm", x: 0.15, s: "15%" },
        { where: "Host rock, 35 cm", x: 0.2, s: "more than 20%", lower: true }
      ],
      dur: 1e4, durUpper: false, durS: "up to 10,000 s (about 2.8 hours)",
      read: "With a magnitude 3.0 earthquake and 300°C water, the jog opens by 6.5 mm and flashing spreads into the damage zone and host rock. Fluid with more than 5% vapour lasts up to 10,000 s, about 2.8 hours."
    }
  ];

  var style = document.createElement("style");
  style.textContent =
    "#w-flash-front{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-flash-front fieldset{border:0;margin:0 0 8px;padding:0}" +
    "#w-flash-front legend{font-weight:600;margin-bottom:4px}" +
    "#w-flash-front label{display:block;margin:3px 0;cursor:pointer}" +
    "#w-flash-front input{accent-color:var(--accent)}" +
    "#w-flash-front input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-flash-front h4{margin:10px 0 4px;font-size:1em}" +
    "#w-flash-front svg{display:block;width:100%;max-width:440px;height:auto}" +
    "#w-flash-front .wff-read{margin:8px 0 0;font-weight:600}" +
    "#w-flash-front .wff-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
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

  // Controls
  var fs = mk("fieldset", root);
  mk("legend", fs, null, "Scenario");
  var radios = [];
  SCEN.forEach(function (sc, i) {
    var lab = mk("label", fs);
    var r = document.createElement("input");
    r.type = "radio"; r.name = "wff-scen"; r.id = "wff-" + sc.id; r.value = String(i);
    if (i === 1) r.checked = true;
    lab.setAttribute("for", r.id);
    lab.appendChild(r);
    lab.appendChild(document.createTextNode(" " + sc.label));
    r.addEventListener("change", update);
    radios.push(r);
  });

  mk("h4", root, null, "Vapour fraction after the earthquake, by distance from the jog");
  var s1 = svg(root, 96);
  mk("h4", root, null, "How long the vapour lasts (logarithmic time axis)");
  var s2 = svg(root, 62);
  var read = mk("p", root, "wff-read");
  read.setAttribute("aria-live", "polite");
  mk("p", root, "wff-cap", "Only the two end-member scenarios with values stated in the paper are shown. Dashed outlines mark bounds: an upper bound for the jog and for the duration in the magnitude 1.0 case, and a lower bound for the host rock in the magnitude 3.0 case. The tick labels in minutes and hours are our conversions. All values are model results.");
  mk("p", root, "wff-cap", "Source: Sanchez-Alfaro et al. (2024), Geophysical Research Letters 51, e2023GL108109, section 3.4.");

  var X0 = 150, W = 280;

  function drawVf(sc) {
    clear(s1);
    var MAX = 0.35;
    sc.vf.forEach(function (d, i) {
      var y = 4 + i * 30;
      sv("text", { x: 0, y: y + 13, fill: "var(--fg)", "font-size": 12 }, s1, d.where);
      sv("rect", { x: X0, y: y, width: W, height: 18, fill: "none", stroke: "var(--rule)" }, s1);
      if (d.x > 0) {
        var a = { x: X0, y: y, width: Math.max(2, W * d.x / MAX), height: 18, fill: "var(--accent)" };
        if (d.upper || d.lower) { a.fill = "none"; a.stroke = "var(--accent)"; a["stroke-dasharray"] = "4 3"; a["stroke-width"] = 2; }
        sv("rect", a, s1);
      }
      sv("text", { x: X0 + W - 4, y: y + 13, fill: "var(--muted)", "font-size": 11, "text-anchor": "end" }, s1, d.s);
    });
  }

  function lx(t) { // log axis from 1e-4 s to 1e5 s
    return X0 - 140 + (Math.log(t) / Math.LN10 + 4) / 9 * (W + 140);
  }
  function drawDur(sc) {
    clear(s2);
    var L = lx(1e-4), R = lx(1e5);
    sv("line", { x1: L, y1: 34, x2: R, y2: 34, stroke: "var(--rule)" }, s2);
    var ticks = [[1e-3, "1 ms"], [1, "1 s"], [60, "1 min"], [3600, "1 h"]];
    ticks.forEach(function (t) {
      var x = lx(t[0]);
      sv("line", { x1: x, y1: 30, x2: x, y2: 38, stroke: "var(--muted)" }, s2);
      sv("text", { x: x, y: 54, fill: "var(--muted)", "font-size": 11, "text-anchor": "middle" }, s2, t[1]);
    });
    var a = { x: L, y: 8, width: Math.max(2, lx(sc.dur) - L), height: 18, fill: "var(--accent)" };
    if (sc.durUpper) { a.fill = "none"; a.stroke = "var(--accent)"; a["stroke-dasharray"] = "4 3"; a["stroke-width"] = 2; }
    sv("rect", a, s2);
  }

  function update() {
    var i = 1;
    radios.forEach(function (r) { if (r.checked) i = Number(r.value); });
    var sc = SCEN[i];
    drawVf(sc);
    drawDur(sc);
    read.textContent = sc.read;
  }
  update();
})();
