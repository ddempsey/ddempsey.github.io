/* Plant versus surface CO2 emissions widget for Dempsey (2026), Water Resour. Res. 62, e2026WR044239.
   Integrates the paper's CO2 mass balance (Eq. 17, tau = 0, no degassing, no reactions) with the
   exponential upflow and outflow of Eqs. 9-10, plant emissions Eq. 24, surface emissions Eq. 23
   and overcount Eqs. 46-48 (overcount = natural surface emissions - modelled surface emissions). */
(function () {
  "use strict";
  var root = document.getElementById("w-overcount");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg", YR = 3.15576e7, TMAX = 100;
  // qup0: natural upflow [kg/s]; fK: share of induced flow change taken by upflow (Kup/K).
  // Rotokawa qup0 and fK back-calculated (tuned) to reproduce the paper's reported medians (Qsurf,0 = 44 kt/yr,
  // t_beta = 6.3 yr). NOT the paper's tabulated median model (fK = 0.5, qup0 ~250 kg/s).
  // Nga Tamariki fK back-calculated from throughput rising from 38.5 to about 44 kg/s.
  var FIELDS = [
    { id: "rk", label: "Rotokawa", M: 1.2e11, C0: 0.0078, q0: 535, fq: 0.26, fC: 1.0, qup0: 178.8, fK: 0.208, tP: 1 },
    { id: "nt", label: "Ngā Tamariki", M: 1.5e11, C0: 0.0046, q0: 556, fq: 0.018, fC: 0.85, qup0: 38.5, fK: 0.55, tP: 1 }
  ];
  var field = FIELDS[0], fq = field.fq, fC = field.fC;

  var style = document.createElement("style");
  style.textContent =
    "#w-overcount{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-overcount fieldset{border:0;margin:0 0 8px;padding:0;display:flex;flex-wrap:wrap;gap:6px 14px}" +
    "#w-overcount legend{font-weight:600;margin-bottom:4px;padding:0}" +
    "#w-overcount label{cursor:pointer;display:inline-flex;align-items:center;gap:4px}" +
    "#w-overcount .wo-sl{display:block;margin:6px 0}" +
    "#w-overcount .wo-sl label{display:block}" +
    "#w-overcount input[type=range]{width:100%;max-width:420px;accent-color:var(--accent)}" +
    "#w-overcount input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-overcount svg{display:block;width:100%;height:auto}" +
    "#w-overcount .wo-read{margin:8px 0 4px;font-weight:600}" +
    "#w-overcount .wo-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  var fs = document.createElement("fieldset");
  var lg = document.createElement("legend");
  lg.textContent = "Field (calibrated median values)";
  fs.appendChild(lg);
  FIELDS.forEach(function (f, i) {
    var lab = document.createElement("label");
    var inp = document.createElement("input");
    inp.type = "radio"; inp.name = "wo-field"; inp.value = f.id; inp.id = "wo-" + f.id;
    if (i === 0) inp.checked = true;
    inp.addEventListener("change", function () {
      field = f; fq = f.fq; fC = f.fC;
      sFq.value = String(Math.round(fq * 1000) / 10); sFc.value = String(Math.round((1 - fC) * 100));
      render();
    });
    lab.appendChild(inp);
    lab.appendChild(document.createTextNode(f.label));
    fs.appendChild(lab);
  });
  root.appendChild(fs);

  function slider(id, text, min, max, step, val, onInput) {
    var d = document.createElement("div"); d.className = "wo-sl";
    var lab = document.createElement("label"); lab.htmlFor = id;
    var sp = document.createElement("span");
    lab.appendChild(document.createTextNode(text + ": ")); lab.appendChild(sp);
    var s = document.createElement("input");
    s.type = "range"; s.id = id; s.min = min; s.max = max; s.step = step; s.value = val;
    s.addEventListener("input", function () { onInput(parseFloat(s.value)); render(); });
    d.appendChild(lab); d.appendChild(s); root.appendChild(d);
    s.out = sp;
    return s;
  }
  var sFq = slider("wo-fq", "Produced fluid not reinjected (net extraction)", 0, 60, 0.1, 26,
    function (v) { fq = v / 100; });
  var sFc = slider("wo-fc", "Produced CO2 captured and reinjected", 0, 100, 5, 0,
    function (v) { fC = 1 - v / 100; });

  var W = 600, H = 300, X0 = 52, X1 = 585, Y0 = 20, Y1 = 255;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = document.createElement("p");
  read.className = "wo-read"; read.setAttribute("aria-live", "polite");
  root.appendChild(read);
  var cap = document.createElement("p");
  cap.className = "wo-cap";
  cap.textContent = "Illustration based on the paper's equations, with captured CO2 returning to the reservoir " +
    "immediately and no degassing, solubility limit or mineral reactions. Reservoir mass, initial CO2 and net " +
    "extraction are the paper's calibrated medians, and extraction rate and capture are its fixed inputs. " +
    "The Rotokawa setting is tuned to reproduce the paper's reported medians for natural surface emissions (44 kt a year) " +
    "and CO2 loss time (6.3 years). Its split of natural flow between upflow and outflow is our back-calculation and " +
    "differs from the paper's tabulated median model. With the other medians, that model gives natural surface " +
    "emissions of about 62 kt a year (our arithmetic). The Ngā Tamariki split is also our back-calculation, from the reported rise in " +
    "throughput. Source: Dempsey (2026), Water Resources Research 62, e2026WR044239, CC BY 4.0.";
  root.appendChild(cap);

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }

  // RK4 integration of M dC/dt = |qup| C0 - fC q0 C - max(qout,0) C, time in years.
  function simulate(f) {
    var dt = 0.02, n = Math.round(TMAX / dt), C = f.C0, out = [], fqq = fq * f.q0;
    function flows(t) {
      var E = 1 - Math.exp(-t / f.tP);
      return [f.qup0 + f.fK * fqq * E, f.qup0 - (1 - f.fK) * fqq * E];
    }
    function rate(t, c) {
      var q = flows(t);
      return YR / f.M * (q[0] * f.C0 - fC * f.q0 * c - Math.max(q[1], 0) * c);
    }
    function rec(t, c) {
      var qo = flows(t)[1];
      out.push({ t: t, pp: fC * f.q0 * c * YR / 1e6, sf: Math.max(qo, 0) * c * YR / 1e6, rev: qo < 0, C: c });
    }
    rec(0, C);
    for (var i = 0; i < n; i++) {
      var t = i * dt;
      var k1 = rate(t, C), k2 = rate(t + dt / 2, C + dt / 2 * k1), k3 = rate(t + dt / 2, C + dt / 2 * k2), k4 = rate(t + dt, C + dt * k3);
      C += dt / 6 * (k1 + 2 * k2 + 2 * k3 + k4);
      if ((i + 1) % 10 === 0) rec(t + dt, C);
    }
    return out;
  }

  function r(x) { return Math.abs(x) < 9.95 ? x.toFixed(1) : String(Math.round(x)); }

  function render() {
    sFq.out.textContent = (Math.round(fq * 1000) / 10) + "%";
    sFc.out.textContent = Math.round((1 - fC) * 100) + "%";
    var f = field, s = simulate(f), qs0 = f.qup0 * f.C0 * YR / 1e6;
    var ymax = qs0;
    s.forEach(function (p) { ymax = Math.max(ymax, p.pp, p.sf); });
    ymax = Math.ceil(ymax * 1.1 / 10) * 10;
    function X(t) { return X0 + (X1 - X0) * t / TMAX; }
    function Y(v) { return Y1 - (Y1 - Y0) * v / ymax; }

    while (svg.firstChild) svg.removeChild(svg.firstChild);
    el("line", { x1: X0, x2: X1, y1: Y1, y2: Y1, stroke: "var(--rule)" });
    el("line", { x1: X0, x2: X0, y1: Y0, y2: Y1, stroke: "var(--rule)" });
    for (var t = 0; t <= TMAX; t += 20) {
      el("text", { x: X(t), y: Y1 + 18, fill: "var(--muted)", "font-size": 13, "text-anchor": "middle" }, String(t));
    }
    el("text", { x: (X0 + X1) / 2, y: Y1 + 38, fill: "var(--muted)", "font-size": 13, "text-anchor": "middle" }, "Years of production");
    [0, ymax / 2, ymax].forEach(function (v) {
      el("text", { x: X0 - 6, y: Y(v) + 4, fill: "var(--muted)", "font-size": 13, "text-anchor": "end" }, r(v));
    });
    el("text", { x: X0 + 4, y: Y0 - 6, fill: "var(--muted)", "font-size": 13 }, "CO2 emissions, kt per year");

    // natural (pre-development) surface emissions baseline
    el("line", { x1: X0, x2: X1, y1: Y(qs0), y2: Y(qs0), stroke: "var(--muted)", "stroke-width": 1.5, "stroke-dasharray": "5 4" });
    function path(key) {
      return s.map(function (p, i) { return (i ? "L" : "M") + X(p.t).toFixed(1) + " " + Y(p[key]).toFixed(1); }).join("");
    }
    el("path", { d: path("pp"), fill: "none", stroke: "var(--accent)", "stroke-width": 2.5 });
    el("path", { d: path("sf"), fill: "none", stroke: "var(--fg)", "stroke-width": 2.5 });
    var last = s[s.length - 1];
    var labs = [
      { y: Y(last.pp), t: "plant", c: "var(--accent)" },
      { y: Y(last.sf), t: "surface", c: "var(--fg)" },
      { y: Y(qs0), t: "natural surface", c: "var(--muted)" }
    ].sort(function (a, b) { return a.y - b.y; });
    for (var i = 1; i < labs.length; i++) if (labs[i].y - labs[i - 1].y < 14) labs[i].y = labs[i - 1].y + 14;
    labs.forEach(function (L) {
      el("text", { x: X1 - 2, y: Math.min(L.y - 4, Y1 - 4), fill: L.c, "font-size": 13, "text-anchor": "end" }, L.t);
    });

    var over = qs0 - last.sf;
    var txt = f.label + ", after " + TMAX + " years: plant emissions " + r(last.pp) + " kt a year, surface emissions " +
      r(last.sf) + " kt a year against a natural level of " + r(qs0) + " kt a year. Plant metering " +
      (over >= 0 ? "overcounts the human-caused change by " + r(over) : "undercounts the human-caused change by " + r(-over)) +
      " kt a year.";
    if (last.rev) txt += " The outflow has reversed. Fresh water with no CO2 now flows into the reservoir.";
    read.textContent = txt;
  }

  render();
})();
