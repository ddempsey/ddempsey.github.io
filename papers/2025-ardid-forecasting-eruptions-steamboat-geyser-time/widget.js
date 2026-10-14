/* 18-hour eruption probabilities at Steamboat Geyser, Ardid et al. (2025), JGR: Machine Learning and Computation 2, e2024JH000569.
   Values are stated in the paper's text: 12.6% (Results 3.5), 7% background and 8.1% fixed model,
   18% Frechet peak, about 10% (31 Oct 2018) and about 4% (mid-October 2018) (Discussion 4.3).
   The "1 in N" conversion is our own arithmetic (N = 100 / percent, rounded). */
(function () {
  "use strict";
  var root = document.getElementById("w-geyser-prob");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var CASES = [
    { id: "mlb", group: "Machine learning model", label: "Background level", when: "at its background level", p: 7, about: false },
    { id: "mlp", group: "Machine learning model", label: "Peak before an eruption", when: "at its peak before an eruption", p: 12.6, about: false },
    { id: "fix", group: "Fixed interval model", label: "Every 18-hour window", when: "for every 18-hour window", p: 8.1, about: false },
    { id: "frp", group: "Fréchet interval model", label: "Highest value", when: "at its highest", p: 18, about: false },
    { id: "fro", group: "Fréchet interval model", label: "At the 31 October eruption", when: "at the 31 October 2018 eruption", p: 10, about: true },
    { id: "frm", group: "Fréchet interval model", label: "At the mid-October eruption", when: "at the mid-October 2018 eruption", p: 4, about: true }
  ];
  var PMAX = 20;

  var style = document.createElement("style");
  style.textContent =
    "#w-geyser-prob{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-geyser-prob fieldset{border:0;margin:0 0 8px;padding:0;display:flex;flex-wrap:wrap;gap:6px}" +
    "#w-geyser-prob legend{padding:0;margin:0 0 6px;font-weight:600}" +
    "#w-geyser-prob label{display:inline-flex;align-items:center;gap:4px;border:1px solid var(--rule);border-radius:4px;padding:3px 8px;cursor:pointer}" +
    "#w-geyser-prob input{accent-color:var(--accent);margin:0}" +
    "#w-geyser-prob input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-geyser-prob svg{display:block;width:100%;height:auto}" +
    "#w-geyser-prob .gp-read{margin:8px 0 4px;font-weight:600}" +
    "#w-geyser-prob .gp-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  function mk(tag, attrs, text) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    return e;
  }

  var fs = mk("fieldset");
  fs.appendChild(mk("legend", null, "Choose a forecast to highlight"));
  var radios = [];
  CASES.forEach(function (c, i) {
    var lab = mk("label", { "for": "gp-" + c.id });
    var r = mk("input", { type: "radio", name: "gp-case", id: "gp-" + c.id, value: String(i) });
    if (i === 1) r.checked = true;
    lab.appendChild(r);
    lab.appendChild(document.createTextNode(c.group + ", " + c.label.toLowerCase()));
    fs.appendChild(lab);
    radios.push(r);
  });
  root.appendChild(fs);

  var W = 600, LX = 250, X1 = 540, TOP = 16, ROW = 38;
  var H = TOP + CASES.length * ROW + 34;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = mk("p", { "class": "gp-read", "aria-live": "polite" });
  root.appendChild(read);
  root.appendChild(mk("p", { "class": "gp-cap" },
    "Each bar is the probability of an eruption within the next 18 hours. " +
    "The fixed model divides 18 hours by the average interval between eruptions. The Fréchet model raises the probability as time passes since the last eruption. " +
    "The machine learning model uses seismic features and no information about the time since the last eruption. " +
    "Values marked \"about\" are approximate in the paper. The \"1 in N\" conversion is our arithmetic. " +
    "Values are from Ardid et al. (2025), JGR: Machine Learning and Computation 2, e2024JH000569."));

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }
  function xOf(p) { return LX + (X1 - LX) * p / PMAX; }

  function render() {
    var sel = 1;
    radios.forEach(function (r) { if (r.checked) sel = parseInt(r.value, 10); });
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    var axisY = TOP + CASES.length * ROW;
    [0, 5, 10, 15, 20].forEach(function (t) {
      var x = xOf(t);
      el("line", { x1: x, x2: x, y1: TOP - 6, y2: axisY, stroke: "var(--rule)", "stroke-dasharray": "1 5", "stroke-width": 1 });
      el("text", { x: x, y: axisY + 20, fill: "var(--muted)", "font-size": 14, "text-anchor": "middle" }, t + "%");
    });

    CASES.forEach(function (c, i) {
      var y = TOP + i * ROW + 6;
      var on = i === sel;
      el("text", { x: LX - 10, y: y + 11, fill: "var(--fg)", "font-size": 13, "text-anchor": "end", "font-weight": on ? 700 : 400 }, c.group);
      el("text", { x: LX - 10, y: y + 26, fill: "var(--muted)", "font-size": 12, "text-anchor": "end" }, c.label);
      el("rect", { x: LX, y: y + 2, width: xOf(c.p) - LX, height: 24, fill: on ? "var(--accent)" : "var(--muted)", "fill-opacity": on ? 1 : 0.5, rx: 2 });
      el("text", { x: xOf(c.p) + 6, y: y + 19, fill: "var(--fg)", "font-size": 14 }, (c.about ? "~" : "") + c.p + "%");
    });

    var c = CASES[sel];
    var n = Math.round(100 / c.p);
    read.textContent = "The " + (c.group.indexOf("Fréchet") === 0 ? c.group : c.group.charAt(0).toLowerCase() + c.group.slice(1)) + " gives " +
      (c.about ? "about " : "a ") + c.p + "% chance of an eruption within 18 hours " + c.when +
      ", roughly 1 in " + n + ".";
  }

  radios.forEach(function (r) { r.addEventListener("change", render); });
  render();
})();
