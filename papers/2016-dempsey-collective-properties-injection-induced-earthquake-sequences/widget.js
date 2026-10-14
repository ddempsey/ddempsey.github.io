/* Two-well interaction widget for Dempsey, Suckale and Huang (2016),
   J. Geophys. Res. Solid Earth 121, 3638-3665. All numbers are from Table 6
   of the paper (modelled Guy-Greenbrier catalogues GGS1, GGS1-1, GGS1-5,
   GGS2, GGS2-1, GGS2-5). Counts are modelled earthquakes of magnitude 1.6
   or above. */
(function () {
  "use strict";
  var root = document.getElementById("w-wells");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var DATA = {
    s100: {
      label: "100% of Well 1 volume reaches the Ozark Aquifer",
      w1: 578, w5: 0, both: 743,
      peak1: "day 156", peak5: "none", peakBoth: "day 132"
    },
    s10: {
      label: "10% of Well 1 volume reaches the Ozark Aquifer",
      w1: 26, w5: 358, both: 743,
      peak1: "day 228", peak5: "day 157", peakBoth: "day 132"
    }
  };

  var style = document.createElement("style");
  style.textContent =
    "#w-wells{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-wells fieldset{border:0;margin:0;padding:0}" +
    "#w-wells legend{font-weight:600;margin-bottom:4px;padding:0}" +
    "#w-wells .ww-opt{display:block;margin:2px 0;cursor:pointer}" +
    "#w-wells input{accent-color:var(--accent)}" +
    "#w-wells input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-wells svg{display:block;width:100%;height:auto;margin-top:8px}" +
    "#w-wells .ww-read{margin:8px 0 4px;font-weight:600}" +
    "#w-wells .ww-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  var fs = document.createElement("fieldset");
  var lg = document.createElement("legend");
  lg.textContent = "Injection scenario";
  fs.appendChild(lg);
  var current = "s100";
  ["s100", "s10"].forEach(function (key) {
    var lab = document.createElement("label");
    lab.className = "ww-opt";
    var r = document.createElement("input");
    r.type = "radio"; r.name = "ww-scen"; r.value = key;
    r.checked = key === current;
    r.addEventListener("change", function () { if (r.checked) { current = key; render(); } });
    lab.appendChild(r);
    lab.appendChild(document.createTextNode(" " + DATA[key].label));
    fs.appendChild(lab);
  });
  root.appendChild(fs);

  var W = 600, H = 230;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = document.createElement("p");
  read.className = "ww-read";
  read.setAttribute("aria-live", "polite");
  root.appendChild(read);

  var cap = document.createElement("p");
  cap.className = "ww-cap";
  cap.textContent = "Bars show modelled earthquakes of magnitude 1.6 or above at Guy-Greenbrier. " +
    "The total for both wells was scaled to the number of catalogued earthquakes. The single-well runs use the same scaling. " +
    "The sum bar adds the two single-well runs. " +
    "Source: Table 6 of Dempsey, Suckale and Huang (2016), J. Geophys. Res. Solid Earth 121, 3638–3665.";
  root.appendChild(cap);

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }

  var X0 = 190, X1 = 520, MAXV = 800;
  function bx(v) { return X0 + (X1 - X0) * v / MAXV; }

  function render() {
    var d = DATA[current];
    var sum = d.w1 + d.w5;
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    var rows = [
      { name: "Well 1 alone", v: d.w1, fill: "var(--muted)" },
      { name: "Well 5 alone", v: d.w5, fill: "var(--muted)" },
      { name: "Sum of the two", v: sum, fill: "none" },
      { name: "Both wells together", v: d.both, fill: "var(--accent)" }
    ];
    rows.forEach(function (r, i) {
      var y = 14 + i * 50;
      el("text", { x: X0 - 10, y: y + 22, fill: "var(--fg)", "font-size": 16, "text-anchor": "end" }, r.name);
      var w = Math.max(bx(r.v) - X0, 0);
      if (r.fill === "none") {
        el("rect", { x: X0, y: y + 4, width: Math.max(w, 1), height: 26, fill: "none", stroke: "var(--fg)", "stroke-width": 2, "stroke-dasharray": "6 4" });
      } else {
        el("rect", { x: X0, y: y + 4, width: Math.max(w, 1), height: 26, fill: r.fill });
      }
      el("text", { x: X0 + w + 8, y: y + 22, fill: "var(--fg)", "font-size": 16 }, String(r.v));
    });
    el("line", { x1: X0, x2: X0, y1: 10, y2: 214, stroke: "var(--rule)", "stroke-width": 2 });

    read.textContent = "Both wells together triggered " + d.both + " modelled earthquakes. " +
      "Well 1 alone triggered " + d.w1 + " and Well 5 alone " + d.w5 + ". Their sum, " + sum +
      ", is " + (d.both - sum) + " fewer than the count for both wells together. " +
      "Seismicity peaked at " + d.peakBoth + " with both wells, " + d.peak1 + " with Well 1 alone, and " +
      (d.peak5 === "none" ? "not at all with Well 5 alone." : d.peak5 + " with Well 5 alone.") +
      " Days are counted from July 2010.";
  }

  render();
})();
