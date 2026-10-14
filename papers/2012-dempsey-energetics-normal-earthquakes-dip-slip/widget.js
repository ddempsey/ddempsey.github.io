/* Coseismic energy budget widget for Dempsey et al. (2012), Geology 40:279-282.
   Shows the footwall and hangingwall energy changes REPORTED in the paper (Fig. 2B text). */
(function () {
  "use strict";
  var root = document.getElementById("w-energy-budget");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var BLOCKS = [
    {
      id: "fw", label: "Footwall",
      out: [["Elastic strain energy", 0.85]],
      inn: [["Gravitational potential energy (uplift)", 0.43], ["Work done on the hangingwall", 0.28], ["Frictional heat on the fault", 0.14]],
      read: "Footwall. About 0.85 TJ of elastic strain energy is released. Of this, 0.43 TJ lifts the footwall, 0.28 TJ does work on the hangingwall, and 0.14 TJ heats the fault.",
      note: "The footwall rebounds elastically. The released energy is mostly volumetric, from expansion of the crust at 8 to 10 km depth after a drop in stress."
    },
    {
      id: "hw", label: "Hangingwall",
      out: [["Gravitational potential energy (subsidence)", 1.0], ["Work done by the footwall", 0.28], ["Distortional strain energy", 0.1]],
      inn: [["Volumetric strain energy (compression)", 1.3], ["Frictional heat on the fault", 0.14]],
      read: "Hangingwall. About 1.0 TJ of gravitational potential energy, 0.28 TJ of work from the footwall and 0.1 TJ of distortional strain energy are converted to 1.3 TJ of volumetric strain energy and 0.14 TJ of frictional heat.",
      note: "The hangingwall drops under gravity. Its fall in elevation compresses the crust and creates elastic strain energy. The paper's rounded values total 1.38 TJ given up and 1.44 TJ produced in this block."
    }
  ];

  var style = document.createElement("style");
  style.textContent =
    "#w-energy-budget{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-energy-budget fieldset{border:0;margin:0 0 8px;padding:0;display:flex;flex-wrap:wrap;gap:6px 14px}" +
    "#w-energy-budget legend{font-weight:600;margin-bottom:4px;padding:0}" +
    "#w-energy-budget label{cursor:pointer;display:inline-flex;align-items:center;gap:4px}" +
    "#w-energy-budget input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-energy-budget svg{display:block;width:100%;height:auto}" +
    "#w-energy-budget .we-read{margin:8px 0 4px;font-weight:600}" +
    "#w-energy-budget .we-note,#w-energy-budget .we-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  var fs = document.createElement("fieldset");
  var lg = document.createElement("legend");
  lg.textContent = "Choose a fault block";
  fs.appendChild(lg);
  BLOCKS.forEach(function (b, i) {
    var lab = document.createElement("label");
    var inp = document.createElement("input");
    inp.type = "radio"; inp.name = "we-block"; inp.value = String(i);
    inp.id = "we-" + b.id;
    if (i === 0) inp.checked = true;
    inp.addEventListener("change", function () { render(i); });
    lab.appendChild(inp);
    lab.appendChild(document.createTextNode(b.label));
    fs.appendChild(lab);
  });
  root.appendChild(fs);

  var W = 600, H = 256;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = document.createElement("p");
  read.className = "we-read";
  read.setAttribute("aria-live", "polite");
  root.appendChild(read);
  var note = document.createElement("p");
  note.className = "we-note";
  root.appendChild(note);
  var cap = document.createElement("p");
  cap.className = "we-cap";
  cap.textContent = "Energy changes during one model earthquake, in terajoules, as reported in the paper. " +
    "Bars share one scale, from 0 to 1.5 TJ. Source: Dempsey et al. (2012), Geology 40:279-282, accepted manuscript.";
  root.appendChild(cap);

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }

  var X0 = 20, BW = 560, MAX = 1.5;
  var SHADES = ["1", "0.6", "0.35"];

  function stack(y, title, parts) {
    var total = 0;
    parts.forEach(function (p) { total += p[1]; });
    el("text", { x: X0, y: y - 8, fill: "var(--fg)", "font-size": 16 }, title + " (" + total.toFixed(2) + " TJ)");
    el("rect", { x: X0, y: y, width: BW, height: 22, fill: "none", stroke: "var(--rule)" });
    var x = X0;
    parts.forEach(function (p, k) {
      var w = BW * p[1] / MAX;
      el("rect", { x: x, y: y, width: w, height: 22, fill: "var(--accent)", "fill-opacity": SHADES[k], stroke: "var(--panel)", "stroke-width": 1 });
      x += w;
    });
    parts.forEach(function (p, k) {
      var ly = y + 42 + k * 18;
      el("rect", { x: X0, y: ly - 11, width: 12, height: 12, fill: "var(--accent)", "fill-opacity": SHADES[k] });
      el("text", { x: X0 + 18, y: ly, fill: "var(--fg)", "font-size": 14 }, fmt(p[1]) + " TJ of " + p[0].charAt(0).toLowerCase() + p[0].slice(1));
    });
  }

  function fmt(v) { return v === 1 ? "1.0" : String(v); }

  function render(i) {
    var b = BLOCKS[i];
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    stack(28, "Energy given up", b.out);
    stack(170, "Energy produced", b.inn);
    read.textContent = b.read;
    note.textContent = b.note;
  }

  render(0);
})();
