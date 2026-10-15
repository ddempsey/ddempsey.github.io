/* Widget for Ardid et al. (2025), Int. J. Wildland Fire 34, WF24113.
   Applies the paper's warning rule. The paper states the boundary two ways (Methods, "Warning
   model": exceeds / at or below; "Alternative ROC curve": reaches or exceeds / falls below).
   This code uses >= and <. Equality does not occur on this synthetic series, so the choice has
   no effect. A warning ends after 48 consecutive hours under the threshold, and each return to
   the threshold restarts the 48 h count.
   The consensus record is ILLUSTRATIVE: a synthetic 24-day series built from smooth bumps, not
   data from the paper. Its shape loosely follows Fig. 7 (a rise over the days before the fire,
   with a peak a day before it), plus one earlier false bump and one brief spike.
   The paper's result at a threshold of 0.7 (282.6 days of warning, 11 of 15 fires during a
   warning) is quoted in the caption, not computed here. */
(function () {
  "use strict";
  var root = document.getElementById("w-fire-warn");
  if (!root) return;
  var NS = "http://www.w3.org/2000/svg";

  var style = document.createElement("style");
  style.textContent =
    "#w-fire-warn{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-fire-warn label{display:block;margin:0 0 4px}" +
    "#w-fire-warn input[type=range]{width:100%;accent-color:var(--accent)}" +
    "#w-fire-warn input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-fire-warn svg{display:block;width:100%;max-width:520px;height:auto;margin-top:6px}" +
    "#w-fire-warn .fw-read{margin:6px 0 0;font-weight:600}" +
    "#w-fire-warn .fw-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
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

  // ---- Illustrative consensus record: hourly values over 24 days, fire at day 20 ----
  var DAYS = 24, N = DAYS * 24, FIRE = 20 * 24;
  function bump(t, c, w, a) { var z = (t - c) / w; return a * Math.exp(-0.5 * z * z); }
  var y = [];
  for (var i = 0; i <= N; i++) {
    var d = i / 24;
    var v = 0.12 + 0.03 * Math.sin(2 * Math.PI * d)   // daily cycle
      + bump(d, 4.5, 0.9, 0.48)                         // earlier false bump
      + bump(d, 10.2, 0.12, 0.60)                       // brief spike, a few hours long
      + bump(d, 19.0, 3.2, 0.74);                       // build-up to the fire, peak a day before
    y.push(Math.max(0, Math.min(1, v)));
  }

  // ---- Warning rule ----
  function warnings(th) {
    var on = [], active = false, below = 0;
    for (var i = 0; i <= N; i++) {
      if (y[i] >= th) { active = true; below = 0; }
      else if (active) { below++; if (below >= 48) active = false; }
      on.push(active);
    }
    var spans = [], s = -1;
    for (i = 0; i <= N; i++) {
      if (on[i] && s < 0) s = i;
      if ((!on[i] || i === N) && s >= 0) { spans.push([s, on[i] ? i : i - 1]); s = -1; }
    }
    var hours = 0;
    for (i = 0; i < N; i++) if (on[i]) hours++;
    return { on: on, spans: spans, hours: hours };
  }

  // ---- UI ----
  var lab = mk("label", root, null, "");
  lab.setAttribute("for", "fw-th");
  lab.textContent = "Warning threshold: ";
  var lv = mk("span", lab, null, "");
  var inp = mk("input", root);
  inp.type = "range"; inp.id = "fw-th";
  inp.min = "0.30"; inp.max = "0.95"; inp.step = "0.05"; inp.value = "0.70";

  var W = 520, H = 210, L = 34, R = 10, T = 10, B = 30;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);
  var read = mk("p", root, "fw-read", "");
  read.setAttribute("aria-live", "polite");
  mk("p", root, "fw-cap",
    "This consensus record is synthetic, constructed for this widget. The warning rule is the one we used. A warning starts when the consensus crosses the threshold and ends after the consensus has remained below the threshold for 48 consecutive hours. In our study, a threshold of 0.7 gave 282.6 days of warning over 15.4 years, with 11 of 15 fires occurring during a warning.");

  function px(i) { return L + (W - L - R) * i / N; }
  function py(v) { return T + (H - T - B) * (1 - v); }

  function draw() {
    var th = parseFloat(inp.value);
    lv.textContent = th.toFixed(2);
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var w = warnings(th);
    w.spans.forEach(function (sp) {
      sv("rect", { x: px(sp[0]), y: T, width: Math.max(1, px(sp[1]) - px(sp[0])), height: H - T - B,
        fill: "var(--accent)", "fill-opacity": "0.15" }, svg);
    });
    [0, 0.5, 1].forEach(function (v) {
      sv("line", { x1: L, x2: W - R, y1: py(v), y2: py(v), stroke: "var(--rule)" }, svg);
      sv("text", { x: L - 4, y: py(v) + 4, "text-anchor": "end", "font-size": "11", fill: "var(--muted)" }, svg, v.toFixed(1));
    });
    for (var d = 0; d <= DAYS; d += 4) {
      sv("text", { x: px(d * 24), y: H - B + 14, "text-anchor": "middle", "font-size": "11", fill: "var(--muted)" }, svg, String(d));
    }
    sv("text", { x: (L + W - R) / 2, y: H - 3, "text-anchor": "middle", "font-size": "11", fill: "var(--muted)" }, svg, "Day");
    var pts = [];
    for (var i = 0; i <= N; i += 2) pts.push(px(i).toFixed(1) + "," + py(y[i]).toFixed(1));
    sv("polyline", { points: pts.join(" "), fill: "none", stroke: "var(--accent)", "stroke-width": "2" }, svg);
    sv("line", { x1: L, x2: W - R, y1: py(th), y2: py(th), stroke: "var(--fg)", "stroke-dasharray": "5 4" }, svg);
    sv("line", { x1: px(FIRE), x2: px(FIRE), y1: T, y2: H - B, stroke: "var(--fg)", "stroke-width": "2" }, svg);
    sv("text", { x: px(FIRE) + 4, y: T + 12, "font-size": "11", fill: "var(--fg)" }, svg, "fire");

    var days = w.hours / 24;
    var n = w.spans.length;
    var caught = w.on[FIRE];
    read.textContent = "At a threshold of " + th.toFixed(2) + ", warnings cover " + days.toFixed(1) +
      " of " + DAYS + " days (" + Math.round(100 * days / DAYS) + "%) in " + n +
      (n === 1 ? " warning" : " separate warnings") + ", and the fire falls " +
      (caught ? "during a warning." : "outside any warning.");
  }
  inp.addEventListener("input", draw);
  draw();
})();
