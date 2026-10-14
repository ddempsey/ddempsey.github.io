/* Hypocentre position and directivity widget for Dempsey and Suckale (2016),
   J. Geophys. Res. Solid Earth 121, 3609-3637. Uses Eq. (2), E = 1 - 2a, and
   Eq. (3), D = (1 - 6a^2 + 4a^3) / sqrt(1 - 12a^2 + 24a^3 - 12a^4), where a is
   the hypocentre position inside the rupture measured from the end nearest the
   injection well. Negative D and E mean rupture towards the well. */
(function () {
  "use strict";
  var root = document.getElementById("w-directivity");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  function D(a) {
    return (1 - 6 * a * a + 4 * a * a * a) /
      Math.sqrt(1 - 12 * a * a + 24 * a * a * a - 12 * a * a * a * a);
  }
  function E(a) { return 1 - 2 * a; }

  var style = document.createElement("style");
  style.textContent =
    "#w-directivity{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-directivity label{display:block;font-weight:600;margin-bottom:4px}" +
    "#w-directivity input[type=range]{width:100%;accent-color:var(--accent)}" +
    "#w-directivity input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-directivity svg{display:block;width:100%;height:auto;margin-top:6px}" +
    "#w-directivity .wd-read{margin:8px 0 4px;font-weight:600}" +
    "#w-directivity .wd-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  var lab = document.createElement("label");
  lab.setAttribute("for", "wd-alpha");
  lab.textContent = "Hypocentre position inside the rupture, measured from the end nearest the well";
  root.appendChild(lab);
  var inp = document.createElement("input");
  inp.type = "range"; inp.id = "wd-alpha";
  inp.min = "0"; inp.max = "100"; inp.step = "1"; inp.value = "40";
  root.appendChild(inp);

  var W = 600, H = 330;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = document.createElement("p");
  read.className = "wd-read";
  read.setAttribute("aria-live", "polite");
  root.appendChild(read);
  var cap = document.createElement("p");
  cap.className = "wd-cap";
  cap.textContent = "The curves are Eq. (2) and Eq. (3) of the paper, which assume two rupture fronts travelling at the same constant speed. " +
    "The diagram shows these formulas only. Model catalogues are described in the text. " +
    "D changes steeply near the middle of the rupture. A small shift of the hypocentre away from the centre gives a large shift towards unilateral rupture. " +
    "Source: Dempsey and Suckale (2016), J. Geophys. Res. Solid Earth 121, 3609–3637.";
  root.appendChild(cap);

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }

  // Rupture diagram geometry
  var RX0 = 90, RX1 = 560, RY = 52;
  // Plot geometry
  var PX0 = 90, PX1 = 560, PY0 = 120, PY1 = 300;
  function px(a) { return PX0 + (PX1 - PX0) * a; }
  function py(v) { return PY0 + (PY1 - PY0) * (1 - v) / 2; }

  function curve(f) {
    var d = "";
    for (var i = 0; i <= 200; i++) {
      var a = i / 200;
      d += (i ? "L" : "M") + px(a).toFixed(1) + " " + py(f(a)).toFixed(1);
    }
    return d;
  }
  var dPath = curve(D), ePath = curve(E);

  function arrow(x1, x2, y) {
    if (Math.abs(x2 - x1) < 2) return;
    var dir = x2 > x1 ? 1 : -1;
    el("line", { x1: x1, x2: x2 - dir * 8, y1: y, y2: y, stroke: "var(--accent)", "stroke-width": 4 });
    el("path", { d: "M" + x2 + " " + y + "L" + (x2 - dir * 12) + " " + (y - 7) + "L" + (x2 - dir * 12) + " " + (y + 7) + "Z", fill: "var(--accent)" });
  }

  function render() {
    var a = Number(inp.value) / 100;
    var d = D(a), e = E(a);
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    // Well and rupture
    el("rect", { x: 20, y: RY - 22, width: 14, height: 44, fill: "var(--muted)" });
    el("text", { x: 27, y: RY + 40, fill: "var(--fg)", "font-size": 14, "text-anchor": "middle" }, "well");
    el("line", { x1: RX0, x2: RX1, y1: RY, y2: RY, stroke: "var(--rule)", "stroke-width": 10 });
    var hx = RX0 + (RX1 - RX0) * a;
    arrow(hx, RX0, RY);
    arrow(hx, RX1, RY);
    el("path", { d: starPath(hx, RY, 11, 5), fill: "var(--fg)" });
    el("text", { x: RX0, y: RY - 18, fill: "var(--muted)", "font-size": 14 }, "rupture end nearest well");
    el("text", { x: RX1, y: RY + 30, fill: "var(--muted)", "font-size": 14, "text-anchor": "end" }, "far end");

    // Axes
    el("line", { x1: PX0, x2: PX1, y1: py(0), y2: py(0), stroke: "var(--rule)" });
    el("line", { x1: PX0, x2: PX0, y1: PY0, y2: PY1, stroke: "var(--rule)" });
    [1, 0, -1].forEach(function (v) {
      el("text", { x: PX0 - 8, y: py(v) + 5, fill: "var(--muted)", "font-size": 14, "text-anchor": "end" }, String(v).replace("-", "−"));
    });
    el("text", { x: PX0 - 8, y: py(0.5) + 5, fill: "var(--muted)", "font-size": 13, "text-anchor": "end" }, "away");
    el("text", { x: PX0 - 8, y: py(-0.5) + 5, fill: "var(--muted)", "font-size": 13, "text-anchor": "end" }, "towards");
    [0, 0.5, 1].forEach(function (v) {
      el("text", { x: px(v), y: PY1 + 20, fill: "var(--muted)", "font-size": 14, "text-anchor": "middle" }, String(v));
    });

    el("path", { d: ePath, fill: "none", stroke: "var(--muted)", "stroke-width": 2, "stroke-dasharray": "6 4" });
    el("path", { d: dPath, fill: "none", stroke: "var(--accent)", "stroke-width": 3 });
    el("text", { x: px(0.13), y: py(D(0.13)) - 8, fill: "var(--accent)", "font-size": 15 }, "D, Eq. (3)");
    el("text", { x: px(0.2), y: py(E(0.2)) + 22, fill: "var(--muted)", "font-size": 15 }, "E, Eq. (2)");

    el("line", { x1: px(a), x2: px(a), y1: PY0, y2: PY1, stroke: "var(--muted)", "stroke-dasharray": "2 3" });
    el("circle", { cx: px(a), cy: py(e), r: 6, fill: "var(--panel)", stroke: "var(--muted)", "stroke-width": 2 });
    el("circle", { cx: px(a), cy: py(d), r: 7, fill: "var(--accent)" });

    var pct = Math.round(a * 100);
    var dir;
    if (pct === 50) dir = "The rupture is perfectly bilateral.";
    else if (pct === 0) dir = "The whole rupture travels away from the well.";
    else if (pct === 100) dir = "The whole rupture travels towards the well.";
    else if (d > 0) dir = "More of the rupture travels away from the well.";
    else dir = "More of the rupture travels towards the well.";
    read.textContent = "Hypocentre " + pct + "% of the way along the rupture from the end nearest the well. " +
      "Directivity ratio D = " + fmt(d) + " and proportion of unilateral rupture E = " + fmt(e) + ". " + dir;
  }

  function fmt(v) {
    var s = (Math.abs(v) < 0.005 ? 0 : v).toFixed(2);
    return s.charAt(0) === "-" ? "−" + s.slice(1) : s;
  }

  function starPath(cx, cy, R, r) {
    var p = "";
    for (var i = 0; i < 10; i++) {
      var ang = Math.PI / 5 * i - Math.PI / 2, rad = i % 2 ? r : R;
      p += (i ? "L" : "M") + (cx + rad * Math.cos(ang)).toFixed(1) + " " + (cy + rad * Math.sin(ang)).toFixed(1);
    }
    return p + "Z";
  }

  inp.addEventListener("input", render);
  render();
})();
