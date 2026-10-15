/* Don Nield's Scopus-indexed works and citations by collaborator, for Becker, Dempsey & Zhao (2025),
   Transport in Porous Media 152:61. All values are Table 1 of the paper ("SCOPUS-indexed works by Don
   Nield and his collaborations"). Totals 249 works and 22,480 citations are the Table 1 "Nield, D.A"
   row. Shares are our arithmetic. The text of the paper gives higher figures than Table 1 for the
   Bejan books (">10,000") and the Kuznetsov collaboration ("more than 9000"). The chart uses Table 1. */
(function () {
  "use strict";
  var root = document.getElementById("w-collab");
  if (!root) return;

  var TOTW = 249, TOTC = 22480;
  var ROWS = [
    ["As single author", 70, 3921],
    ["Kuznetsov, A.V.", 128, 8979], ["Bejan, A.", 4, 8056], ["Xiong, M.", 5, 537],
    ["Lage, J.L.", 12, 497], ["Barletta, A.", 24, 473], ["Simmons, C.T.", 11, 326],
    ["Joseph, D.D.", 4, 302], ["Papanicolaou, G.", 2, 238], ["Celli, M.", 8, 154],
    ["Junqueira, S.L.M.", 1, 134], ["Hooman, K.", 3, 133], ["Antohe, B.V.", 2, 125],
    ["Haji-Sheikh, A.", 2, 122], ["Ming, X.", 1, 85], ["Narasimhan, A.", 3, 60],
    ["Porneala, D.C.", 3, 53], ["Rees, D.A.S.", 2, 52], ["Manole, D.M.", 1, 41],
    ["Avramenko, A.A.", 2, 38], ["Ward, J.D.", 1, 38], ["Sharp Jr., J.M.", 1, 33],
    ["Love, A.J.", 1, 26], ["Vadasz, P.", 1, 4], ["Cohen, Y.", 1, 2],
    ["Johnson, C.J.", 1, 1], ["Kelly, P.A.", 1, 1]
  ];
  var NS = "http://www.w3.org/2000/svg";

  var style = document.createElement("style");
  style.textContent =
    "#w-collab{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-collab .cl-ctl{display:flex;flex-wrap:wrap;gap:8px 20px;margin-bottom:8px;align-items:flex-start}" +
    "#w-collab fieldset{border:0;margin:0;padding:0;flex:1 1 220px}" +
    "#w-collab legend{padding:0;margin-bottom:2px}" +
    "#w-collab fieldset label{margin-right:14px;white-space:nowrap}" +
    "#w-collab input[type=radio]{accent-color:var(--accent)}" +
    "#w-collab label.cl-sel{display:flex;flex-direction:column;gap:2px;flex:1 1 220px}" +
    "#w-collab select{max-width:100%;font:inherit;color:var(--fg);background:var(--panel);border:1px solid var(--rule);border-radius:4px;padding:2px 4px}" +
    "#w-collab input:focus-visible,#w-collab select:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-collab svg{display:block;width:100%;height:auto}" +
    "#w-collab .cl-read{margin:8px 0 4px;font-weight:600}" +
    "#w-collab .cl-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  var ctl = document.createElement("div");
  ctl.className = "cl-ctl";
  root.appendChild(ctl);

  var fs = document.createElement("fieldset");
  var lg = document.createElement("legend");
  lg.textContent = "Show and sort by";
  fs.appendChild(lg);
  var radios = [];
  [["w", "Number of works"], ["c", "Citations"]].forEach(function (m) {
    var l = document.createElement("label");
    var r = document.createElement("input");
    r.type = "radio"; r.name = "cl-m"; r.value = m[0]; r.id = "cl-m" + m[0];
    if (m[0] === "c") r.checked = true;
    l.setAttribute("for", r.id);
    l.appendChild(r);
    l.appendChild(document.createTextNode(" " + m[1]));
    fs.appendChild(l);
    radios.push(r);
  });
  ctl.appendChild(fs);

  var sl = document.createElement("label");
  sl.className = "cl-sel";
  sl.setAttribute("for", "cl-who");
  sl.appendChild(document.createTextNode("Highlight"));
  var sel = document.createElement("select");
  sel.id = "cl-who";
  ROWS.forEach(function (row, i) {
    var o = document.createElement("option");
    o.value = String(i); o.textContent = row[0];
    if (i === 1) o.selected = true;
    sel.appendChild(o);
  });
  sl.appendChild(sel);
  ctl.appendChild(sl);

  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = document.createElement("p");
  read.className = "cl-read";
  read.setAttribute("aria-live", "polite");
  root.appendChild(read);

  var cap = document.createElement("p");
  cap.className = "cl-cap";
  cap.textContent = "Don Nield's Scopus-indexed works and their citations to date, as single author and with each of his " +
    "26 collaborators, from Table 1 of the paper. A work with several co-authors appears in the row of each one. " +
    "Shares of his totals (249 works, 22,480 citations) are our arithmetic. The text of the paper gives higher " +
    "figures than Table 1 for the Bejan books (more than 10,000 citations) and the Kuznetsov collaboration " +
    "(more than 9,000). The chart uses Table 1. " +
    "Source: Becker, Dempsey and Zhao (2025), Transport in Porous Media 152:61.";
  root.appendChild(cap);

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }
  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ","); }
  function metric() { return radios[0].checked ? "w" : "c"; }

  var W = 600, LX = 150, BX0 = 156, BX1 = 520, ROWH = 20, TOP = 6;

  function render() {
    var m = metric(), idx = m === "w" ? 1 : 2, hi = parseInt(sel.value, 10);
    var order = ROWS.map(function (r, i) { return i; });
    order.sort(function (a, b) { return ROWS[b][idx] - ROWS[a][idx] || a - b; });
    var max = ROWS[order[0]][idx];
    var H = TOP + ROWS.length * ROWH + 6;
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    order.forEach(function (i, k) {
      var y = TOP + k * ROWH, v = ROWS[i][idx], on = i === hi;
      var bw = Math.max(1, (BX1 - BX0) * v / max);
      el("text", { x: LX, y: y + 14, fill: on ? "var(--accent)" : "var(--fg)", "font-size": 13,
        "font-weight": on ? 700 : 400, "text-anchor": "end" }, ROWS[i][0]);
      el("rect", { x: BX0, y: y + 3, width: bw.toFixed(1), height: ROWH - 6,
        fill: on ? "var(--accent)" : "var(--muted)", opacity: on ? 1 : 0.55 });
      el("text", { x: BX0 + bw + 5, y: y + 14, fill: on ? "var(--accent)" : "var(--muted)", "font-size": 12,
        "font-weight": on ? 700 : 400 }, fmt(v));
    });
    var r = ROWS[hi], rank = order.indexOf(hi) + 1;
    read.textContent = r[0] + ": " + fmt(r[1]) + " works (" + Math.round(100 * r[1] / TOTW) + "% of 249) and " +
      fmt(r[2]) + " citations (" + Math.round(100 * r[2] / TOTC) + "% of 22,480). Rank " + rank + " of " +
      ROWS.length + " rows by " + (m === "w" ? "works" : "citations") + ".";
  }
  radios.forEach(function (rd) { rd.addEventListener("change", render); });
  sel.addEventListener("change", render);
  render();
})();
