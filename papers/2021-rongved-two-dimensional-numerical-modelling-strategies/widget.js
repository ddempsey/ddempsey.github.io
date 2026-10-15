/* Flow split between two fractures, for Rongved, Bauer, Dempsey and Holt (2021),
   Geothermics 90, 101978.
   Uses the paper's parallel-plate simplification (Section 3.2.1): Eq. (10),
   Q = dP w^3 / (12 mu), and Eq. (11), Q_A = Q / (1 + (w_B / w_A)^3), for two
   fractures under the same pressure gradient. Flow evens out when the ratio of the
   narrower to the wider aperture rises (Eqs. 12 and 13).
   Default apertures (20 and 10 micrometres, gains of 10 and 8) are our
   illustration, not model results. The slider range (5 to 80 micrometres) includes the hydraulic apertures
   implied by the paper's initial fracture permeabilities, w = (12 k)^(1/2)
   (Section 3.2.2): 10^-11 m2 gives about 11 micrometres and 5 x 10^-10 m2 about
   77 micrometres (our conversion). */
(function () {
  "use strict";
  var root = document.getElementById("w-aperture-ratio");
  if (!root) return;

  var style = document.createElement("style");
  style.textContent =
    "#w-aperture-ratio{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-aperture-ratio .wa-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:8px 16px}" +
    "#w-aperture-ratio label{display:block;font-size:0.9em}" +
    "#w-aperture-ratio input[type=range]{width:100%;accent-color:var(--accent)}" +
    "#w-aperture-ratio input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-aperture-ratio .wa-bars{margin-top:10px}" +
    "#w-aperture-ratio .wa-row{display:flex;align-items:center;gap:8px;margin:4px 0}" +
    "#w-aperture-ratio .wa-lab{flex:0 0 5.5em;font-size:0.85em;color:var(--muted)}" +
    "#w-aperture-ratio .wa-bar{flex:1 1 auto;display:flex;height:22px;border:1px solid var(--rule);border-radius:3px;overflow:hidden}" +
    "#w-aperture-ratio .wa-a{background:var(--accent);color:var(--panel);font-size:0.8em;line-height:22px;padding-left:4px;white-space:nowrap;overflow:hidden}" +
    "#w-aperture-ratio .wa-b{flex:1 1 auto;color:var(--fg);font-size:0.8em;line-height:22px;text-align:right;padding-right:4px;white-space:nowrap;overflow:hidden}" +
    "#w-aperture-ratio .wa-read{margin:8px 0 4px;font-weight:600}" +
    "#w-aperture-ratio .wa-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  var grid = document.createElement("div");
  grid.className = "wa-grid";
  root.appendChild(grid);

  var uid = 0;
  function slider(text, min, max, value) {
    var id = "wa-in-" + (uid++);
    var wrap = document.createElement("div");
    var lab = document.createElement("label");
    lab.setAttribute("for", id);
    var out = document.createElement("span");
    lab.appendChild(document.createTextNode(text + ": "));
    lab.appendChild(out);
    var inp = document.createElement("input");
    inp.type = "range"; inp.id = id;
    inp.min = String(min); inp.max = String(max); inp.step = "1"; inp.value = String(value);
    wrap.appendChild(lab);
    wrap.appendChild(inp);
    grid.appendChild(wrap);
    inp.addEventListener("input", update);
    return { input: inp, out: out };
  }

  var a1 = slider("Fracture 1 initial aperture", 5, 80, 20);
  var a2 = slider("Fracture 2 initial aperture", 5, 80, 10);
  var g1 = slider("Fracture 1 aperture gain from cooling", 0, 50, 10);
  var g2 = slider("Fracture 2 aperture gain from cooling", 0, 50, 8);

  var bars = document.createElement("div");
  bars.className = "wa-bars";
  bars.setAttribute("aria-hidden", "true");
  root.appendChild(bars);
  function barRow(text) {
    var row = document.createElement("div");
    row.className = "wa-row";
    var l = document.createElement("span");
    l.className = "wa-lab"; l.textContent = text;
    var bar = document.createElement("div");
    bar.className = "wa-bar";
    var a = document.createElement("div"); a.className = "wa-a";
    var b = document.createElement("div"); b.className = "wa-b";
    bar.appendChild(a); bar.appendChild(b);
    row.appendChild(l); row.appendChild(bar);
    bars.appendChild(row);
    return { a: a, b: b };
  }
  var before = barRow("Before");
  var after = barRow("After");

  var read = document.createElement("p");
  read.className = "wa-read";
  read.setAttribute("aria-live", "polite");
  root.appendChild(read);

  var cap = document.createElement("p");
  cap.className = "wa-cap";
  cap.textContent = "Illustrative calculation, with numbers of our choosing. The bars show the share of flow " +
    "through fracture 1 (shaded) and fracture 2 under the same pressure gradient, using the " +
    "parallel-plate relation in the paper (Eqs. 10 and 11). Flow scales with the cube of " +
    "aperture. Apertures are in micrometres. The slider range of 5 to 80 micrometres includes " +
    "about 11 to 77 micrometres, our conversion of the paper's initial fracture permeabilities. " +
    "Source: Rongved, Bauer, Dempsey and Holt (2021), Geothermics 90, 101978.";
  root.appendChild(cap);

  function share(w1, w2) {
    return 1 / (1 + Math.pow(w2 / w1, 3));
  }
  function pct(x) { return Math.round(100 * x); }

  function paint(row, s) {
    var p = pct(s);
    row.a.style.width = (100 * s).toFixed(1) + "%";
    row.a.textContent = p >= 12 ? p + "%" : "";
    row.b.textContent = 100 - p >= 12 ? (100 - p) + "%" : "";
  }

  function update() {
    var w1 = +a1.input.value, w2 = +a2.input.value;
    var d1 = +g1.input.value, d2 = +g2.input.value;
    a1.out.textContent = w1 + " µm";
    a2.out.textContent = w2 + " µm";
    g1.out.textContent = "+" + d1 + " µm";
    g2.out.textContent = "+" + d2 + " µm";
    var s0 = share(w1, w2), s1 = share(w1 + d1, w2 + d2);
    paint(before, s0);
    paint(after, s1);
    var r0 = Math.min(w1, w2) / Math.max(w1, w2);
    var r1 = Math.min(w1 + d1, w2 + d2) / Math.max(w1 + d1, w2 + d2);
    var trend;
    if (Math.abs(r1 - r0) < 0.005) trend = "The aperture ratio, and therefore the split of flow, is unchanged.";
    else if (r1 > r0) trend = "Flow became more even because the narrower aperture rose as a fraction of the wider one.";
    else trend = "Flow became more uneven because the narrower aperture fell as a fraction of the wider one.";
    read.textContent = "Fracture 1 takes " + pct(s0) + "% of the flow before cooling and " +
      pct(s1) + "% after. " + trend;
  }
  update();
})();
