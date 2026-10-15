/* Share widget for Bosserelle et al. (2024), Hydrogeology Journal 32:577-600.
   Depth: share of the interpolated area by median depth to groundwater, 2016-2020
          (Results, 'Depth to groundwater': 62%, 35%, 3%).
   Recent trends: seasonal Kendall trends, 2016-2020, 245 APP sites
          (Results, 'Spatial clusters, outliers and trends analysis': 40% B, 46% D, 14% A, C or E).
   Pre-CES trends: CCC long-term shallow piezometers before 2010 (same section: 32% B, 50% D, 18%).
   A decreasing depth trend (B) means a rising water table, an increasing one (D) a falling table. */
(function () {
  "use strict";
  var root = document.getElementById("w-gwshare");
  if (!root) return;

  var VIEWS = [
    { id: "depth", label: "Depth to groundwater, 2016 to 2020 (share of mapped area)",
      unit: "of the interpolated area",
      parts: [["1 m or less", 62], ["1 to 2 m", 35], ["more than 2 m", 3]] },
    { id: "recent", label: "Trends, 2016 to 2020 (share of 245 automatic sites)",
      unit: "of the 245 automatic sites",
      parts: [["water table rising (likely or more certain)", 40],
              ["water table falling (likely or more certain)", 46],
              ["no clear trend or low likelihood", 14]] },
    { id: "pre", label: "Trends before 2010 (share of long-term manual wells)",
      unit: "of the long-term manual wells",
      parts: [["water table rising (likely or more certain)", 32],
              ["water table falling (likely or more certain)", 50],
              ["no clear trend or low likelihood", 18]] }
  ];
  var FILL = ["var(--accent)", "var(--muted)", "var(--rule)"];
  var OPAC = [0.85, 0.6, 1];

  var style = document.createElement("style");
  style.textContent =
    "#w-gwshare{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-gwshare h4{margin:0 0 6px;font-size:1em}" +
    "#w-gwshare fieldset{border:0;margin:0 0 8px;padding:0}" +
    "#w-gwshare legend{padding:0;margin-bottom:4px}" +
    "#w-gwshare label{display:block;margin:3px 0;cursor:pointer}" +
    "#w-gwshare input{accent-color:var(--accent);margin-right:6px}" +
    "#w-gwshare input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-gwshare svg{display:block;width:100%;max-width:480px;height:auto}" +
    "#w-gwshare ul{list-style:none;margin:6px 0 0;padding:0}" +
    "#w-gwshare li{margin:2px 0}" +
    "#w-gwshare .gs-sw{display:inline-block;width:12px;height:12px;margin-right:6px;vertical-align:-1px;border:1px solid var(--rule)}" +
    "#w-gwshare .gs-read{margin:6px 0 0;font-weight:600}" +
    "#w-gwshare .gs-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  function mk(tag, parent, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    parent.appendChild(e);
    return e;
  }
  var NS = "http://www.w3.org/2000/svg";
  function sv(name, attrs, parent) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    parent.appendChild(e);
    return e;
  }

  mk("h4", root, null, "Shallow groundwater beneath Christchurch");
  var fs = mk("fieldset", root);
  mk("legend", fs, null, "Show:");
  var radios = VIEWS.map(function (v, i) {
    var lab = mk("label", fs);
    var r = document.createElement("input");
    r.type = "radio"; r.name = "gs-view"; r.id = "gs-" + v.id; r.value = String(i);
    if (i === 0) r.checked = true;
    lab.setAttribute("for", r.id);
    lab.appendChild(r);
    lab.appendChild(document.createTextNode(v.label));
    r.addEventListener("change", update);
    return r;
  });

  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 480 48");
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);
  var list = mk("ul", root);
  var read = mk("p", root, "gs-read");
  read.setAttribute("aria-live", "polite");
  mk("p", root, "gs-cap", "Bar lengths are the percentages reported in the paper. Depths are medians below ground level. Trends are from the seasonal Kendall test on depth to groundwater. The paper does not give the number of long-term manual wells.");
  mk("p", root, "gs-cap", "Source: Bosserelle et al. (2024), Hydrogeology Journal 32:577-600, Results.");

  function update() {
    var i = 0;
    radios.forEach(function (r, k) { if (r.checked) i = k; });
    var v = VIEWS[i];
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    while (list.firstChild) list.removeChild(list.firstChild);
    var x = 4, W = 472;
    v.parts.forEach(function (p, k) {
      var w = W * p[1] / 100;
      sv("rect", { x: x, y: 6, width: Math.max(w, 1), height: 36, fill: FILL[k], "fill-opacity": OPAC[k],
        stroke: "var(--panel)", "stroke-width": 1 }, svg);
      if (w > 40) {
        var t = sv("text", { x: x + w / 2, y: 29, "text-anchor": "middle", "font-size": 14,
          fill: k === 0 ? "var(--panel)" : "var(--fg)" }, svg);
        t.textContent = p[1] + "%";
      }
      x += w;
      var li = mk("li", list);
      var sw = mk("span", li, "gs-sw");
      sw.style.background = FILL[k];
      sw.style.opacity = OPAC[k];
      li.appendChild(document.createTextNode(p[0] + ": " + p[1] + "%"));
    });
    read.textContent = v.parts.map(function (p) { return p[1] + "% " + p[0]; }).join(", ") +
      " (" + v.unit + ").";
  }
  update();
})();
