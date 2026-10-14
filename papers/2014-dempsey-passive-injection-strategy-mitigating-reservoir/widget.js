/* First-stage CO2 breakthrough time for passive injection, for Dempsey, Kelkar & Pawar (2014),
   Int. J. Greenh. Gas Control 28:96-113. Curves use the paper's fitted power law t = c r^n with
   c = 41.3, 18.1 and 8.9 years (the regression value at 1 km) for production pressures of 2, 5 and
   10 MPa and n = 1.76, the middle of the fitted range 1.74-1.78 (Section 4.2.1). The readout also gives
   the square-law value of Eq. 7 (n = 2). r is the well spacing in km. Checked against the stage-1 breakthrough times the paper reports
   at 1 km spacing: 18 years at 5 MPa (Section 4.1) and 9 years at 10 MPa (Table 3). */
(function () {
  "use strict";
  var root = document.getElementById("w-breakthrough");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var COEF = { 2: 41.3, 5: 18.1, 10: 8.9 };
  var PS = [2, 5, 10];
  var RMAX = 2.5, TMAXP = 100, TSIM = 50, NFIT = 1.76;
  function tfit(q, r) { return COEF[q] * Math.pow(r, NFIT); }

  var style = document.createElement("style");
  style.textContent =
    "#w-breakthrough{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-breakthrough .bt-ctl{display:flex;flex-wrap:wrap;gap:8px 20px;margin-bottom:8px;align-items:flex-start}" +
    "#w-breakthrough label.bt-sl{display:flex;flex-direction:column;gap:2px;flex:1 1 220px}" +
    "#w-breakthrough input[type=range]{width:100%;accent-color:var(--accent)}" +
    "#w-breakthrough fieldset{border:0;margin:0;padding:0;flex:1 1 220px}" +
    "#w-breakthrough legend{padding:0;margin-bottom:2px}" +
    "#w-breakthrough fieldset label{margin-right:14px;white-space:nowrap}" +
    "#w-breakthrough input[type=radio]{accent-color:var(--accent)}" +
    "#w-breakthrough input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-breakthrough svg{display:block;width:100%;height:auto}" +
    "#w-breakthrough .bt-read{margin:8px 0 4px;font-weight:600}" +
    "#w-breakthrough .bt-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  var ctl = document.createElement("div");
  ctl.className = "bt-ctl";
  root.appendChild(ctl);

  var lab = document.createElement("label");
  lab.className = "bt-sl";
  lab.setAttribute("for", "bt-r");
  var labText = document.createElement("span");
  lab.appendChild(labText);
  var sr = document.createElement("input");
  sr.type = "range"; sr.id = "bt-r"; sr.min = 0.2; sr.max = 2.4; sr.step = 0.2; sr.value = 1.0;
  lab.appendChild(sr);
  ctl.appendChild(lab);

  var fs = document.createElement("fieldset");
  var lg = document.createElement("legend");
  lg.textContent = "Production pressure below formation pressure";
  fs.appendChild(lg);
  var radios = [];
  PS.forEach(function (p) {
    var l = document.createElement("label");
    var r = document.createElement("input");
    r.type = "radio"; r.name = "bt-p"; r.value = String(p); r.id = "bt-p" + p;
    if (p === 5) r.checked = true;
    l.setAttribute("for", r.id);
    l.appendChild(r);
    l.appendChild(document.createTextNode(" " + p + " MPa"));
    fs.appendChild(l);
    radios.push(r);
  });
  ctl.appendChild(fs);

  var W = 600, H = 300, X0 = 56, X1 = 584, Y0 = 16, Y1 = 250;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = document.createElement("p");
  read.className = "bt-read";
  read.setAttribute("aria-live", "polite");
  root.appendChild(read);

  var cap = document.createElement("p");
  cap.className = "bt-cap";
  cap.textContent = "Illustrative. Time for injected CO2 to reach the production wells in the first stage, from the relation fitted to the paper's simulations: " +
    "a coefficient (41.3, 18.1 and 8.9 years for 2, 5 and 10 MPa) multiplied by the well spacing in km raised to the power 1.76. " +
    "The paper reports fitted powers of 1.74 to 1.78. Its simpler Eq. 7 uses a power of 2, and the readout gives that value too. " +
    "The dashed line marks the 50 years simulated. Values beyond it are extrapolations. " +
    "Source: Dempsey, Kelkar and Pawar (2014), International Journal of Greenhouse Gas Control 28.";
  root.appendChild(cap);

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }
  function X(r) { return X0 + (X1 - X0) * r / RMAX; }
  function Y(t) { return Y1 - (Y1 - Y0) * Math.min(t, TMAXP) / TMAXP; }
  function selP() {
    for (var i = 0; i < radios.length; i++) if (radios[i].checked) return parseInt(radios[i].value, 10);
    return 5;
  }

  function render() {
    var r = parseFloat(sr.value), p = selP(), t = tfit(p, r), t2 = COEF[p] * r * r;
    labText.textContent = "Well spacing: " + r.toFixed(1) + " km";
    sr.setAttribute("aria-valuetext", r.toFixed(1) + " kilometres");
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    [0, 25, 50, 75, 100].forEach(function (v) {
      el("line", { x1: X0, x2: X1, y1: Y(v), y2: Y(v), stroke: "var(--rule)", "stroke-width": 1 });
      el("text", { x: X0 - 6, y: Y(v) + 5, fill: "var(--muted)", "font-size": 14, "text-anchor": "end" }, String(v));
    });
    [0, 0.5, 1, 1.5, 2, 2.5].forEach(function (v) {
      el("text", { x: X(v), y: Y1 + 20, fill: "var(--muted)", "font-size": 14, "text-anchor": "middle" }, String(v));
    });
    el("text", { x: (X0 + X1) / 2, y: Y1 + 42, fill: "var(--fg)", "font-size": 15, "text-anchor": "middle" }, "Well spacing (km)");
    el("text", { x: 14, y: (Y0 + Y1) / 2, fill: "var(--fg)", "font-size": 15, "text-anchor": "middle",
      transform: "rotate(-90 14 " + (Y0 + Y1) / 2 + ")" }, "Years to breakthrough");
    el("line", { x1: X0, x2: X1, y1: Y(TSIM), y2: Y(TSIM), stroke: "var(--muted)", "stroke-dasharray": "5 4", "stroke-width": 1.5 });

    PS.forEach(function (q) {
      var d = "", k, rr, sel = q === p, last = null;
      for (k = 0; k <= 120; k++) {
        rr = RMAX * k / 120;
        if (tfit(q, rr) > TMAXP) break;
        d += (k ? "L" : "M") + X(rr).toFixed(1) + " " + Y(tfit(q, rr)).toFixed(1);
        last = rr;
      }
      el("path", { d: d, fill: "none", stroke: sel ? "var(--accent)" : "var(--muted)", "stroke-width": sel ? 3 : 1.5, opacity: sel ? 1 : 0.7 });
      var lx = Math.min(last, RMAX), ly = tfit(q, lx);
      el("text", { x: X(lx) - 4, y: Y(ly) - 6, fill: sel ? "var(--accent)" : "var(--muted)", "font-size": 14, "text-anchor": "end" }, q + " MPa");
    });

    if (t <= TMAXP) {
      el("circle", { cx: X(r), cy: Y(t), r: 6, fill: "var(--accent)", stroke: "var(--panel)", "stroke-width": 2 });
    } else {
      el("path", { d: "M" + (X(r) - 6) + " " + (Y0 + 10) + "L" + X(r) + " " + Y0 + "L" + (X(r) + 6) + " " + (Y0 + 10) + "Z", fill: "var(--accent)" });
    }

    var msg = "Wells " + r.toFixed(1) + " km apart, pumped " + p + " MPa below formation pressure: first-stage breakthrough after about " +
      Math.round(t) + " years from the fitted power of 1.76, or " + Math.round(t2) + " years from the square law.";
    if (t > TSIM) msg += " This is beyond the 50 years simulated and is an extrapolation.";
    read.textContent = msg;
  }
  sr.addEventListener("input", render);
  radios.forEach(function (rd) { rd.addEventListener("change", render); });
  render();
})();
