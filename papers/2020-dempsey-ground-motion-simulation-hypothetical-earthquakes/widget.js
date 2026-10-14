/* Town-by-town shaking widget for Dempsey et al. (2020), NZ J. Geol. Geophys. 64(4):570-588.
   All values are copied from the paper's Table 2. Nothing is interpolated or recomputed. */
(function () {
  "use strict";
  var root = document.getElementById("w-town-shaking");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  // [name, KF:[mmi, lo, hi, pgaG, dsSN, dsNS], WF:same or null, note]
  var SITES = [
    ["Auckland CBD", [6.5, 6.3, 6.8, 0.12, 15, 47], [6.2, 6.0, 6.5, 0.15, 8, 16], ""],
    ["Auckland Airport", [6.5, 6.2, 6.9, 0.12, 18, 50], [6.6, 6.4, 6.9, 0.22, 7, 13], ""],
    ["Mangatawhiri Dam", [6.9, 6.5, 7.3, 0.21, 18, 38], [7.4, 6.9, 8.0, 0.45, 7, 7], "An earthen dam in the Hūnua Ranges that supplies Auckland's water."],
    ["Cambridge", [6.7, 6.1, 7.3, 0.18, 36, 16], null, ""],
    ["Coromandel", [7.1, 6.8, 7.5, 0.24, 13, 35], null, ""],
    ["Hamilton", [6.9, 6.5, 7.4, 0.15, 40, 25], null, "Above the Hamilton/Waikato basin. Compare Huntly, at a similar distance from the fault."],
    ["Huntly", [6.2, 5.8, 6.5, 0.12, 33, 31], null, "Outside the basin, at a similar distance from the fault (about 40 km) to Hamilton."],
    ["Matamata", [8.2, 7.2, 9.5, 0.44, 16, 11], null, "Near the fault, south of the Hauraki Rift basin."],
    ["Morrinsville", [7.4, 6.8, 7.9, 0.29, 26, 12], null, ""],
    ["Ngātea", [9.5, 9.2, 9.9, 0.57, 21, 25], null, "Above the deeper part of the Hauraki Rift basin, near the Firth of Thames."],
    ["Paeroa", [8.1, 7.4, 8.8, 0.41, 18, 21], null, ""],
    ["Pukekohe", [6.3, 5.9, 6.7, 0.12, 24, 44], null, "A South Auckland Basin was not modelled and could raise these values."],
    ["Rotorua", [5.5, 4.9, 6.3, 0.08, 47, 13], null, ""],
    ["Tauranga", [6.8, 6.0, 7.6, 0.15, 39, 17], null, ""],
    ["Te Aroha", [7.5, 6.7, 8.3, 0.34, 21, 16], null, ""],
    ["Te Awamutu", [6.1, 5.4, 6.9, 0.12, 42, 18], null, ""],
    ["Thames", [8.3, 7.8, 8.8, 0.34, 24, 33], null, "Near where the Firth of Thames meets the Hauraki Depression, above the basin."],
    ["Tirau", [7.2, 6.4, 8.1, 0.27, 28, 8], null, ""],
    ["Tokoroa", [5.4, 4.7, 6.3, 0.08, 45, 11], null, ""],
    ["Waihi", [6.9, 6.3, 7.6, 0.22, 27, 21], null, ""],
    ["Whangamatā", [6.6, 6.2, 7.1, 0.15, 30, 32], null, ""],
    ["Whitianga", [6.9, 6.5, 7.3, 0.16, 21, 47], null, ""]
  ];
  // MMI descriptions used in the paper's text
  var WORDS = [[5, "moderate"], [6, "strong"], [7, "very strong"], [8, "severe"], [9, "violent"]];
  var LO = 4, HI = 10;

  var style = document.createElement("style");
  style.textContent =
    "#w-town-shaking{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-town-shaking label{font-weight:600;margin-right:8px}" +
    "#w-town-shaking select{font:inherit;color:var(--fg);background:var(--panel);border:1px solid var(--rule);border-radius:4px;padding:3px 6px;max-width:100%}" +
    "#w-town-shaking select:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-town-shaking svg{display:block;width:100%;height:auto;margin-top:8px}" +
    "#w-town-shaking .ws-read{margin:8px 0 4px;font-weight:600}" +
    "#w-town-shaking .ws-note,#w-town-shaking .ws-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  var lab = document.createElement("label");
  lab.setAttribute("for", "ws-site");
  lab.textContent = "Location";
  root.appendChild(lab);
  var sel = document.createElement("select");
  sel.id = "ws-site";
  SITES.forEach(function (s, i) {
    var o = document.createElement("option");
    o.value = String(i);
    o.textContent = s[0];
    if (s[0] === "Hamilton") o.selected = true;
    sel.appendChild(o);
  });
  sel.addEventListener("change", function () { render(+sel.value); });
  root.appendChild(sel);

  var W = 600, H = 200;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = document.createElement("p");
  read.className = "ws-read";
  read.setAttribute("aria-live", "polite");
  root.appendChild(read);
  var note = document.createElement("p");
  note.className = "ws-note";
  root.appendChild(note);
  var cap = document.createElement("p");
  cap.className = "ws-cap";
  cap.textContent = "Dots are the mean of eight simulations with different slip patterns, and bars span the 90% range " +
    "for a future earthquake. The Wairoa North Fault scenario is shown only where the paper reports it. " +
    "Shaking duration is given for a rupture starting at the southern end of the fault, and for one simulation " +
    "starting at the northern end. Source: Table 2 of Dempsey et al. (2020).";
  root.appendChild(cap);

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }
  var X0 = 30, X1 = 570;
  function x(m) { return X0 + (X1 - X0) * (m - LO) / (HI - LO); }

  function axis() {
    var yA = 150;
    el("line", { x1: X0, x2: X1, y1: yA, y2: yA, stroke: "var(--rule)", "stroke-width": 1 });
    for (var m = LO; m <= HI; m++) {
      el("line", { x1: x(m), x2: x(m), y1: 20, y2: yA + 5, stroke: "var(--rule)", "stroke-width": 1, "stroke-dasharray": "2 4" });
      el("text", { x: x(m), y: yA + 20, fill: "var(--fg)", "font-size": 15, "text-anchor": "middle" }, String(m));
    }
    WORDS.forEach(function (w) {
      el("text", { x: (x(w[0]) + x(w[0] + 1)) / 2, y: yA + 40, fill: "var(--muted)", "font-size": 13, "text-anchor": "middle" }, w[1]);
    });
    el("text", { x: X0, y: 14, fill: "var(--muted)", "font-size": 13 }, "Shaking intensity (MMI)");
  }

  function row(y, v, title, filled) {
    el("text", { x: X0, y: y - 10, fill: "var(--fg)", "font-size": 15 }, title + ": MMI " + v[0].toFixed(1));
    el("line", { x1: x(v[1]), x2: x(v[2]), y1: y, y2: y, stroke: "var(--accent)", "stroke-width": 6, "stroke-linecap": "round", opacity: 0.45 });
    el("circle", { cx: x(v[0]), cy: y, r: 8, fill: filled ? "var(--accent)" : "var(--panel)", stroke: "var(--accent)", "stroke-width": 3 });
  }

  function render(i) {
    var s = SITES[i], kf = s[1], wf = s[2];
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    axis();
    row(60, kf, "Kerepehi Fault, Mw 7.3", true);
    if (wf) row(118, wf, "Wairoa North Fault, Mw 6.6", false);
    else el("text", { x: X0, y: 112, fill: "var(--muted)", "font-size": 14 }, "Wairoa North Fault scenario not reported for this location");

    var t = s[0] + ". Kerepehi Fault: MMI " + kf[0].toFixed(1) + " (90% range " + kf[1].toFixed(1) + " to " + kf[2].toFixed(1) +
      "), peak ground acceleration " + kf[3].toFixed(2) + " g, shaking for " + kf[4] + " s (southern start) or " + kf[5] + " s (northern start).";
    if (wf) t += " Wairoa North Fault: MMI " + wf[0].toFixed(1) + " (90% range " + wf[1].toFixed(1) + " to " + wf[2].toFixed(1) +
      "), peak ground acceleration " + wf[3].toFixed(2) + " g, shaking for " + wf[4] + " s (southern start) or " + wf[5] + " s (northern start).";
    read.textContent = t;
    note.textContent = s[3];
  }

  render(+sel.value);
})();
