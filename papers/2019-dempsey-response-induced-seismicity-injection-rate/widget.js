/* Seismicity response to an injection cut, for Dempsey & Riffault (2019), Water Resour. Res. 55:656-681.
   Dimensionless point-source model of sections 2.2.1, 2.3.4 and 3: Theis pressure with superposition for
   the cut, earthquake rate proportional to the pressurisation rate where pressure exceeds the critical
   triggering pressure and its own previous maximum (Kaiser effect). Reconstructed by us from the paper's
   definitions. Checked against the bifurcation values in the Fig. 3 caption and the proportional
   (1 - f) result for zero critical pressure. */
(function () {
  "use strict";
  var root = document.getElementById("w-rate-cut");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg", TMAX = 6;

  function E1(x) {
    if (x <= 0) return Infinity;
    if (x < 1) {
      var s = 0, term = 1, k, d;
      for (k = 1; k < 60; k++) { term *= -x / k; d = -term / k; s += d; if (Math.abs(d) < 1e-16 * Math.abs(s)) break; }
      return -0.5772156649015329 - Math.log(x) + s;
    }
    if (x > 700) return 0;
    var b = x + 1, c = 1e300, dd = 1 / b, h = dd, i, an, del;
    for (i = 1; i < 200; i++) { an = -i * i; b += 2; dd = 1 / (an * dd + b); c = b + an / c; del = c * dd; h *= del; if (Math.abs(del - 1) < 1e-15) break; }
    return h * Math.exp(-x);
  }
  function E1inv(y) {
    var lo = 1e-300, hi = 50, k, m;
    for (k = 0; k < 300; k++) { m = Math.sqrt(lo * hi); if (E1(m) > y) lo = m; else hi = m; }
    return Math.sqrt(lo * hi);
  }
  // Long-term rate after the cut, normalised by the pre-cut rate (late-time limit of the model).
  function longTerm(f, pc) {
    if (pc <= 0) return 1 - f;
    return (1 - f) * (1 - Math.exp(-E1inv(pc / (1 - f)))) / (1 - Math.exp(-E1inv(pc)));
  }
  // u = r^2 in units of 4 D t_cut; area element 2 pi r dr = pi du. Rate normalised to 1 just before the cut.
  function model(f, pc) {
    var nu = 600, i, j, u = [], du = [], rm = [], ts = [], N = [], n1 = 1;
    for (i = 0; i < nu; i++) { u.push(1e-6 * Math.pow(40 * TMAX / 1e-6, i / (nu - 1))); rm.push(-Infinity); }
    for (i = 0; i < nu; i++) du.push((u[Math.min(i + 1, nu - 1)] - u[Math.max(i - 1, 0)]) / 2);
    for (j = 0; j < 100; j++) ts.push(0.01 + 0.99 * j / 100);
    for (j = 0; j < 400; j++) ts.push(1 + 1e-4 * Math.pow((TMAX - 1) / 1e-4, j / 399));
    for (j = 0; j < ts.length; j++) {
      var t = ts[j], s = 0, p, dp;
      for (i = 0; i < nu; i++) {
        p = E1(u[i] / t); dp = Math.exp(-u[i] / t) / t;
        if (t > 1) { p -= f * E1(u[i] / (t - 1)); dp -= f * Math.exp(-u[i] / (t - 1)) / (t - 1); }
        if (p > pc && dp > 0 && p >= rm[i] - 1e-12) s += dp * du[i];
        if (p > rm[i]) rm[i] = p;
      }
      N.push(s);
      if (t < 1) n1 = s;
    }
    for (j = 0; j < N.length; j++) N[j] /= n1;
    return { t: ts, N: N };
  }

  var style = document.createElement("style");
  style.textContent =
    "#w-rate-cut{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-rate-cut .rc-ctl{display:flex;flex-wrap:wrap;gap:8px 20px;margin-bottom:8px}" +
    "#w-rate-cut label{display:flex;flex-direction:column;gap:2px;flex:1 1 220px}" +
    "#w-rate-cut input[type=range]{width:100%;accent-color:var(--accent)}" +
    "#w-rate-cut input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-rate-cut svg{display:block;width:100%;height:auto}" +
    "#w-rate-cut .rc-read{margin:8px 0 4px;font-weight:600}" +
    "#w-rate-cut .rc-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  var ctl = document.createElement("div");
  ctl.className = "rc-ctl";
  root.appendChild(ctl);
  function slider(id, text, min, max, step, val) {
    var lab = document.createElement("label");
    lab.setAttribute("for", id);
    var span = document.createElement("span");
    lab.appendChild(span);
    var inp = document.createElement("input");
    inp.type = "range"; inp.id = id; inp.min = min; inp.max = max; inp.step = step; inp.value = val;
    lab.appendChild(inp);
    ctl.appendChild(lab);
    return { inp: inp, span: span, text: text };
  }
  var sf = slider("rc-f", "Injection cut", 0.1, 0.9, 0.05, 0.4);
  var sp = slider("rc-pc", "Critical triggering pressure (dimensionless)", 0, 2, 0.05, 1.3);

  var W = 600, H = 300, X0 = 52, X1 = 584, Y0 = 16, Y1 = 250;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);
  var read = document.createElement("p");
  read.className = "rc-read";
  read.setAttribute("aria-live", "polite");
  root.appendChild(read);
  var cap = document.createElement("p");
  cap.className = "rc-cap";
  cap.textContent = "Illustrative model for a single well injecting into a thin, wide aquifer, in dimensionless units. " +
    "This is our reconstruction of the paper's single-well model from the equations in sections 2 and 3, checked against the values the paper reports for this model. " +
    "Time is counted in multiples of the injection period before the cut. The earthquake rate is relative to its value just before the cut. " +
    "The dashed line is the long-term rate the model approaches after the cut. " +
    "The paper's examples show recoveries of up to 25% of the pre-cut rate, and some settings of our reconstruction exceed that. Source: Dempsey and Riffault (2019), Water Resources Research 55.";
  root.appendChild(cap);

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }
  function pct(n) { return n < 0.005 ? "less than 1%" : Math.round(n * 100) + "%"; }
  function X(t) { return X0 + (X1 - X0) * t / TMAX; }
  function Y(n) { return Y1 - (Y1 - Y0) * n / 1.1; }

  function render() {
    var f = parseFloat(sf.inp.value), pc = parseFloat(sp.inp.value);
    sf.span.textContent = sf.text + ": " + Math.round(f * 100) + "%";
    sp.span.textContent = sp.text + ": " + pc.toFixed(2);
    sf.inp.setAttribute("aria-valuetext", Math.round(f * 100) + " percent");
    var r = model(f, pc), lt = longTerm(f, pc), j;
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    [0, 0.25, 0.5, 0.75, 1].forEach(function (n) {
      el("line", { x1: X0, x2: X1, y1: Y(n), y2: Y(n), stroke: "var(--rule)", "stroke-width": 1 });
      el("text", { x: X0 - 6, y: Y(n) + 5, fill: "var(--muted)", "font-size": 14, "text-anchor": "end" }, Math.round(n * 100) + "%");
    });
    for (j = 0; j <= TMAX; j++) el("text", { x: X(j), y: Y1 + 20, fill: "var(--muted)", "font-size": 14, "text-anchor": "middle" }, String(j));
    el("text", { x: (X0 + X1) / 2, y: Y1 + 42, fill: "var(--fg)", "font-size": 15, "text-anchor": "middle" }, "Time since injection began, in pre-cut injection periods");
    el("line", { x1: X(1), x2: X(1), y1: Y0, y2: Y1, stroke: "var(--muted)", "stroke-dasharray": "3 3" });
    el("text", { x: X(1) + 6, y: Y0 + 14, fill: "var(--muted)", "font-size": 14 }, "cut");
    el("line", { x1: X(1), x2: X1, y1: Y(lt), y2: Y(lt), stroke: "var(--fg)", "stroke-dasharray": "6 4", "stroke-width": 1.5 });

    var d = "", mn = Infinity, tmn = 1, q0 = null, q1 = null;
    for (j = 0; j < r.t.length; j++) {
      d += (j ? "L" : "M") + X(r.t[j]).toFixed(1) + " " + Y(Math.min(r.N[j], 1.1)).toFixed(1);
      if (r.t[j] > 1) {
        if (r.N[j] < mn) { mn = r.N[j]; tmn = r.t[j]; }
        if (r.N[j] <= 1e-9) { if (q0 === null) q0 = r.t[j]; q1 = r.t[j]; }
      }
    }
    el("path", { d: d, fill: "none", stroke: "var(--accent)", "stroke-width": 2.5 });

    var head = "A " + Math.round(f * 100) + "% cut with a critical pressure of " + pc.toFixed(2);
    if (q0 !== null && q1 >= r.t[r.t.length - 1]) {
      read.textContent = head + " stops all earthquakes from " + (q0 - 1).toFixed(2) + " injection periods after the cut until beyond the plotted range" +
        ". The rate later recovers towards a long-term value of " + pct(lt) + " of the pre-cut rate.";
    } else if (q0 !== null) {
      read.textContent = head + " stops all earthquakes from " + (q0 - 1).toFixed(2) + " to " + (q1 - 1).toFixed(2) + " injection periods after the cut" +
        ". The rate then recovers towards a long-term value of " + pct(lt) + " of the pre-cut rate.";
    } else {
      read.textContent = head + " drops the earthquake rate to " + pct(mn) + " of the pre-cut rate, " +
        (tmn - 1).toFixed(2) + " injection periods after the cut. The rate then moves towards a long-term value of " + pct(lt) + ".";
    }
  }
  var timer = null;
  function schedule() { if (timer) clearTimeout(timer); timer = setTimeout(render, 30); }
  sf.inp.addEventListener("input", schedule);
  sp.inp.addEventListener("input", schedule);
  render();
})();
