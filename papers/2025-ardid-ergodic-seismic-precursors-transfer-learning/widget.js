/* AUC comparison for Ardid, Dempsey et al. (2025), Nat. Commun. 16:1758.
   Values are Table 1 of the paper (ML tailored, ML generalised, RSAM 6 h).
   null = no tailored model was built for that case. */
(function () {
  "use strict";
  var root = document.getElementById("w-auc-compare");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var CASES = [
    { id: "whk", name: "Whakaari", kind: "volcano", tailored: 0.89, general: 0.96, rsam: 0.86 },
    { id: "bez", name: "Bezymianny", kind: "volcano", tailored: 0.77, general: 0.75, rsam: 0.70 },
    { id: "cop", name: "Copahue", kind: "volcano", tailored: 0.96, general: 0.93, rsam: 0.76 },
    { id: "mag", name: "Magmatic pool", kind: "pool", tailored: null, general: 0.81, rsam: 0.50 },
    { id: "phr", name: "Phreatic pool", kind: "pool", tailored: null, general: 0.80, rsam: 0.74 },
    { id: "wld", name: "World pool", kind: "pool", tailored: null, general: 0.80, rsam: 0.58 }
  ];
  var BARS = [
    { key: "general", label: "Generalised model" },
    { key: "tailored", label: "Tailored model" },
    { key: "rsam", label: "Amplitude benchmark" }
  ];

  var style = document.createElement("style");
  style.textContent =
    "#w-auc-compare{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-auc-compare fieldset{border:0;margin:0 0 8px;padding:0;display:flex;flex-wrap:wrap;gap:6px}" +
    "#w-auc-compare legend{padding:0;margin:0 0 6px;font-weight:600}" +
    "#w-auc-compare label{display:inline-flex;align-items:center;gap:4px;border:1px solid var(--rule);border-radius:4px;padding:3px 8px;cursor:pointer}" +
    "#w-auc-compare input{accent-color:var(--accent);margin:0}" +
    "#w-auc-compare input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-auc-compare svg{display:block;width:100%;height:auto}" +
    "#w-auc-compare .ac-read{margin:8px 0 4px;font-weight:600}" +
    "#w-auc-compare .ac-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  function mk(tag, attrs, text) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    return e;
  }

  var fs = mk("fieldset");
  fs.appendChild(mk("legend", null, "Choose a volcano or a pool of volcanoes"));
  var radios = [];
  CASES.forEach(function (c, i) {
    var lab = mk("label", { "for": "ac-" + c.id });
    var r = mk("input", { type: "radio", name: "ac-case", id: "ac-" + c.id, value: String(i) });
    if (i === 0) r.checked = true;
    lab.appendChild(r);
    lab.appendChild(document.createTextNode(c.name));
    fs.appendChild(lab);
    radios.push(r);
  });
  root.appendChild(fs);

  var W = 600, LX = 190, X1 = 570, TOP = 24, ROW = 44;
  var H = TOP + BARS.length * ROW + 40;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = mk("p", { "class": "ac-read", "aria-live": "polite" });
  root.appendChild(read);
  root.appendChild(mk("p", { "class": "ac-cap" },
    "AUC measures how well a model separates the 48 hours before an eruption from other times. " +
    "The dashed line at 0.5 is the score expected by chance, and 1 is perfect separation. " +
    "Generalised models were tested on volcanoes left out of their training. Tailored models were built only for " +
    "the three volcanoes with enough eruptions. The amplitude benchmark was scaled using each volcano's full record, including data from after each forecast. " +
    "Values are from Table 1 of Ardid et al. (2025), Nature Communications 16:1758, CC BY 4.0."));

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }
  function xOf(v) { return LX + (X1 - LX) * v; }

  function render() {
    var c = CASES[0];
    radios.forEach(function (r) { if (r.checked) c = CASES[parseInt(r.value, 10)]; });
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    var axisY = TOP + BARS.length * ROW;
    [0, 0.25, 0.5, 0.75, 1].forEach(function (t) {
      var x = xOf(t);
      el("line", { x1: x, x2: x, y1: TOP - 10, y2: axisY, stroke: "var(--rule)", "stroke-dasharray": t === 0.5 ? "6 4" : "1 5", "stroke-width": t === 0.5 ? 2 : 1 });
      el("text", { x: x, y: axisY + 20, fill: "var(--muted)", "font-size": 14, "text-anchor": "middle" }, String(t));
    });
    el("text", { x: xOf(0.5) + 4, y: TOP - 12, fill: "var(--muted)", "font-size": 13 }, "chance");

    BARS.forEach(function (b, i) {
      var y = TOP + i * ROW + 6;
      var v = c[b.key];
      el("text", { x: LX - 10, y: y + 19, fill: "var(--fg)", "font-size": 15, "text-anchor": "end" }, b.label);
      if (v == null) {
        el("text", { x: LX + 6, y: y + 19, fill: "var(--muted)", "font-size": 14 }, "not built for a pool");
        return;
      }
      el("rect", { x: LX, y: y, width: xOf(v) - LX, height: 26, fill: b.key === "general" ? "var(--accent)" : "var(--muted)", rx: 2 });
      el("text", { x: xOf(v) + 6, y: y + 19, fill: "var(--fg)", "font-size": 15 }, v.toFixed(2));
    });

    var t = c.kind === "pool" ? "For the " + c.name.toLowerCase() : "At " + c.name;
    var s = t + ", the generalised model scored an AUC of " + c.general.toFixed(2);
    if (c.tailored != null) s += ", the tailored model " + c.tailored.toFixed(2) + ",";
    s += " and the amplitude benchmark " + c.rsam.toFixed(2) + ".";
    read.textContent = s;
  }

  radios.forEach(function (r) { r.addEventListener("change", render); });
  render();
})();
