/* Potential Economic Value calculator for Ardid et al. (2026), Nat. Commun. 17:9356.
   Uses the paper's Eq. (4), PEV = 1 - (C*b + L*m) / L, with the central cost values
   given for each volcano in Methods ("Cost assumptions"). */
(function () {
  "use strict";
  var root = document.getElementById("w-pev");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  // Central costs from Methods, in millions. C per false-alarm day, L per missed eruption.
  var PRESETS = [
    { name: "Ontake", C: 1, L: 400 },
    { name: "Whakaari", C: 0.5, L: 20 },
    { name: "Ruapehu", C: 0.5, L: 75 },
    { name: "Copahue", C: 0.5, L: 30 },
    { name: "Bezymianny", C: 1, L: 250 }
  ];

  var style = document.createElement("style");
  style.textContent =
    "#w-pev{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-pev .pv-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px 14px;margin:0 0 10px}" +
    "#w-pev label{display:flex;flex-direction:column;gap:4px}" +
    "#w-pev input,#w-pev select{font:inherit;color:var(--fg);background:transparent;border:1px solid var(--rule);border-radius:4px;padding:2px 4px;max-width:100%;box-sizing:border-box}" +
    "#w-pev input[type=range]{border:none;padding:0;accent-color:var(--accent)}" +
    "#w-pev option{color:#000}" +
    "#w-pev input:focus-visible,#w-pev select:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-pev svg{display:block;width:100%;height:auto}" +
    "#w-pev .pv-read{margin:8px 0 4px;font-weight:600}" +
    "#w-pev .pv-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  function mk(tag, attrs, text) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    return e;
  }
  function field(labelText, input) {
    var l = mk("label", { "for": input.id }, labelText);
    l.appendChild(input);
    return l;
  }

  var grid = mk("div", { "class": "pv-grid" });
  var selV = mk("select", { id: "pv-v" });
  PRESETS.forEach(function (p, i) { selV.appendChild(mk("option", { value: String(i) }, p.name + " costs")); });
  var inC = mk("input", { id: "pv-c", type: "number", min: "0", step: "0.1", value: "1" });
  var inL = mk("input", { id: "pv-l", type: "number", min: "0.1", step: "1", value: "400" });
  var inB = mk("input", { id: "pv-b", type: "range", min: "0", max: "500", step: "1", value: "40" });
  var inM = mk("input", { id: "pv-m", type: "range", min: "0", max: "100", step: "5", value: "0" });
  grid.appendChild(field("Volcano", selV));
  grid.appendChild(field("False-alarm cost C (million per day)", inC));
  grid.appendChild(field("Missed-eruption loss L (million)", inL));
  var labB = field("False-alarm days per eruption, b = 40", inB);
  var labM = field("Eruptions missed, m = 0%", inM);
  grid.appendChild(labB);
  grid.appendChild(labM);
  root.appendChild(grid);

  var W = 600, H = 120, X0 = 150, X1 = 585;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = mk("p", { "class": "pv-read", "aria-live": "polite" });
  root.appendChild(read);
  root.appendChild(mk("p", { "class": "pv-cap" },
    "The top bar is the loss from never acting, L. The lower bar is the cost of acting on the forecast, " +
    "C times b for false alarms (solid) plus L times m for missed eruptions (hatched). " +
    "Costs are the central values in the paper's Methods. The paper gives the Whakaari false-alarm cost " +
    "as NZD 0.5 million per day in Methods and USD 0.5 million in Results, and the widget treats it as 0.5 " +
    "in the units of L. The paper writes the equation for one eruption. For several eruptions, read b as " +
    "false-alarm days per eruption. The break-even number of days and the Ontake example were calculated " +
    "for this page and are not given in the paper. The equation and costs are from Ardid et al. (2026), Nature Communications, CC BY 4.0."));

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }
  function fmt(v) {
    if (Math.abs(v) >= 100) return v.toFixed(0);
    if (Math.abs(v) >= 10) return v.toFixed(1).replace(/\.0$/, "");
    return Number(v.toPrecision(2)).toString();
  }

  // Hatch pattern for the missed-eruption part of the bar.
  function defs() {
    var d = el("defs", {});
    var pat = document.createElementNS(NS, "pattern");
    pat.setAttribute("id", "pv-hatch");
    pat.setAttribute("width", "6");
    pat.setAttribute("height", "6");
    pat.setAttribute("patternUnits", "userSpaceOnUse");
    pat.setAttribute("patternTransform", "rotate(45)");
    var ln = document.createElementNS(NS, "line");
    ln.setAttribute("x1", "0"); ln.setAttribute("y1", "0");
    ln.setAttribute("x2", "0"); ln.setAttribute("y2", "6");
    ln.setAttribute("stroke", "var(--fg)"); ln.setAttribute("stroke-width", "3");
    pat.appendChild(ln);
    d.appendChild(pat);
  }

  function render() {
    var C = parseFloat(inC.value), L = parseFloat(inL.value);
    var b = parseInt(inB.value, 10), m = parseInt(inM.value, 10) / 100;
    labB.firstChild.textContent = "False-alarm days per eruption, b = " + b;
    labM.firstChild.textContent = "Eruptions missed, m = " + Math.round(m * 100) + "%";
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    if (!(C >= 0) || !(L > 0)) {
      read.textContent = "Enter a false-alarm cost of 0 or more and a missed-eruption loss greater than 0.";
      return;
    }
    defs();
    var fa = C * b, miss = L * m, act = fa + miss;
    var pev = 1 - act / L;
    var scale = (X1 - X0) / Math.max(L, act);

    el("text", { x: 0, y: 34, fill: "var(--fg)", "font-size": 15 }, "Never act");
    el("rect", { x: X0, y: 16, width: Math.max(1, L * scale), height: 26, fill: "var(--muted)" });
    el("text", { x: 0, y: 84, fill: "var(--fg)", "font-size": 15 }, "Act on forecast");
    if (fa > 0) el("rect", { x: X0, y: 66, width: fa * scale, height: 26, fill: "var(--accent)" });
    if (miss > 0) el("rect", { x: X0 + fa * scale, y: 66, width: miss * scale, height: 26, fill: "url(#pv-hatch)", stroke: "var(--fg)" });
    el("line", { x1: X0, x2: X0, y1: 8, y2: 100, stroke: "var(--rule)" });
    el("text", { x: X0, y: 116, fill: "var(--muted)", "font-size": 13 }, "0");
    el("text", { x: X1, y: 116, fill: "var(--muted)", "font-size": 13, "text-anchor": "end" }, fmt(Math.max(L, act)) + " million");

    var be = C > 0 ? " Acting costs less than never acting up to " + fmt((1 - m) * L / C) + " false-alarm days per eruption." : "";
    read.textContent = "With C = " + fmt(C) + " million per day, L = " + fmt(L) + " million, " + b +
      " false-alarm days and " + Math.round(m * 100) + "% of eruptions missed, acting costs " + fmt(act) +
      " million against " + fmt(L) + " million for never acting, a PEV of " + pev.toFixed(2) + "." + be;
  }

  selV.addEventListener("change", function () {
    var p = PRESETS[parseInt(selV.value, 10)];
    inC.value = String(p.C);
    inL.value = String(p.L);
    render();
  });
  [inC, inL, inB, inM].forEach(function (e) { e.addEventListener("input", render); });

  render();
})();
