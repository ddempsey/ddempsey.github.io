/* Alert-threshold trade-off widget for Dempsey et al. (2020), Nat. Commun. 11:3562.
   Steps between the operating points REPORTED in the paper; no interpolation. */
(function () {
  "use strict";
  var root = document.getElementById("w-alert-tradeoff");
  if (!root) return;

  var NS = "http://www.w3.org/2000/svg";
  var ERUPTIONS = ["Aug 2012", "19 Aug 2013", "3 Oct 2013", "8 Oct 2013", "11 Oct 2013", "Apr 2016", "Dec 2019"];
  // status per eruption: [state, note]; state: "c" caught, "m" missed, "u" not stated in the paper
  var OPS = [
    {
      id: "t80", label: "Threshold 0.8", alerts: 58, timePct: 8.5, timeTxt: "8.5% of the 9 years",
      prob: 8.6,
      st: [["c", "16 h"], ["c", "75 h"], ["c", "7 h"], ["m", ""], ["c", "70 h"], ["m", ""], ["c", "17 h"]],
      caught: "5 of the 7 eruptions",
      note: "Cross-validated result. Each eruption was withheld from training before the model forecast it."
    },
    {
      id: "t93", label: "Threshold 0.93", alerts: 26, timePct: 2.5, timeTxt: "2.5% of the 9 years",
      prob: 15,
      st: [["u", ""], ["u", ""], ["m", ""], ["m", ""], ["u", ""], ["m", ""], ["c", "≥ 4 h"]],
      caught: "an unreported number of the 7 eruptions, and 3 Oct 2013 was missed",
      note: "The paper names 3 Oct 2013 as the extra miss at this setting. Eruptions missed at 0.8 are also missed at 0.93. The paper does not report the status of the others, shown in grey."
    },
    {
      id: "hand", label: "Manually selected rule (overfit)", alerts: 12, timePct: 55 / 3287 * 100,
      timeTxt: "55 days (≈ 1.7% of the 9 years, our arithmetic)",
      prob: 50,
      st: [["c", ""], ["c", ""], ["c", ""], ["c", ""], ["c", ""], ["m", ""], ["c", ""]],
      caught: "6 of the 7 eruptions",
      note: "For comparison only. This rule uses two manually selected features tuned on all the data. It was not tested on eruptions withheld from tuning. Its scores are better, although we expect it to forecast future eruptions poorly."
    }
  ];

  var style = document.createElement("style");
  style.textContent =
    "#w-alert-tradeoff{border:1px solid var(--rule);background:var(--panel);color:var(--fg);padding:12px;border-radius:6px;max-width:100%;box-sizing:border-box;font-size:0.95em}" +
    "#w-alert-tradeoff fieldset{border:0;margin:0 0 8px;padding:0;display:flex;flex-wrap:wrap;gap:6px 14px}" +
    "#w-alert-tradeoff legend{font-weight:600;margin-bottom:4px;padding:0}" +
    "#w-alert-tradeoff label{cursor:pointer;display:inline-flex;align-items:center;gap:4px}" +
    "#w-alert-tradeoff input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}" +
    "#w-alert-tradeoff svg{display:block;width:100%;height:auto}" +
    "#w-alert-tradeoff .wt-read{margin:8px 0 4px;font-weight:600}" +
    "#w-alert-tradeoff .wt-note,#w-alert-tradeoff .wt-cap{color:var(--muted);font-size:0.85em;margin:4px 0 0}";
  root.appendChild(style);

  var fs = document.createElement("fieldset");
  var lg = document.createElement("legend");
  lg.textContent = "Choose an alert setting reported in the paper";
  fs.appendChild(lg);
  OPS.forEach(function (op, i) {
    var lab = document.createElement("label");
    var inp = document.createElement("input");
    inp.type = "radio"; inp.name = "wt-op"; inp.value = String(i);
    inp.id = "wt-" + op.id;
    if (i === 0) inp.checked = true;
    inp.addEventListener("change", function () { render(i); });
    lab.appendChild(inp);
    lab.appendChild(document.createTextNode(op.label));
    fs.appendChild(lab);
  });
  root.appendChild(fs);

  var W = 600, H = 262;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);

  var read = document.createElement("p");
  read.className = "wt-read";
  read.setAttribute("aria-live", "polite");
  root.appendChild(read);
  var note = document.createElement("p");
  note.className = "wt-note";
  root.appendChild(note);
  var cap = document.createElement("p");
  cap.className = "wt-cap";
  cap.textContent = "Values are the operating points stated in the paper. Nothing is interpolated between them. " +
    "Alert time and eruption probability for 0.8 and 0.93 come from the model trained without the 2019 eruption. " +
    "Warned or missed status and warning times come from the cross-validation tests. Source: Dempsey et al. (2020), Nature Communications 11:3562, CC BY 4.0.";
  root.appendChild(cap);

  function el(name, attrs, text) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    svg.appendChild(e);
    return e;
  }

  var X0 = 20, BW = 560;
  function bar(y, title, pct, valTxt, refPct, refTxt) {
    el("text", { x: X0, y: y - 8, fill: "var(--fg)", "font-size": 16 }, title);
    el("rect", { x: X0, y: y, width: BW, height: 18, fill: "none", stroke: "var(--rule)" });
    el("rect", { x: X0, y: y, width: Math.max(2, BW * pct / 100), height: 18, fill: "var(--accent)" });
    var vx = X0 + BW * pct / 100 + 6;
    el("text", { x: vx, y: y + 14, fill: "var(--fg)", "font-size": 15 }, valTxt);
    if (refPct != null) {
      var rx = X0 + BW * refPct / 100;
      el("line", { x1: rx, x2: rx, y1: y - 4, y2: y + 22, stroke: "var(--muted)", "stroke-width": 2, "stroke-dasharray": "4 3" });
      el("text", { x: rx, y: y + 36, fill: "var(--muted)", "font-size": 14, "text-anchor": "middle" }, refTxt);
    }
    el("text", { x: X0, y: y + 36, fill: "var(--muted)", "font-size": 14 }, "0%");
    el("text", { x: X0 + BW, y: y + 36, fill: "var(--muted)", "font-size": 14, "text-anchor": "end" }, "100%");
  }

  function render(i) {
    var op = OPS[i];
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    bar(28, "Time under alert", op.timePct, op.timeTxt.replace(/ \(.*\)/, "").replace(" of the 9 years", ""),
      i === 0 ? 70 : null, "70% needed by random alerts");
    bar(102, "Chance an alert contains an eruption", op.prob, op.prob + "%", null, null);

    el("text", { x: X0, y: 168, fill: "var(--fg)", "font-size": 15 }, "Seven eruptions. Filled is warned, hollow is missed, grey is not stated.");
    var step = BW / ERUPTIONS.length;
    ERUPTIONS.forEach(function (name, k) {
      var cx = X0 + step * (k + 0.5), s = op.st[k][0];
      var a = { cx: cx, cy: 192, r: 9, "stroke-width": 2 };
      if (s === "c") { a.fill = "var(--accent)"; a.stroke = "var(--accent)"; }
      else if (s === "m") { a.fill = "none"; a.stroke = "var(--fg)"; }
      else { a.fill = "none"; a.stroke = "var(--muted)"; a["stroke-dasharray"] = "3 3"; }
      el("circle", a);
      var parts = name.split(" ");
      el("text", { x: cx, y: 220, fill: "var(--fg)", "font-size": 14, "text-anchor": "middle" }, parts.slice(0, -1).join(" "));
      el("text", { x: cx, y: 236, fill: "var(--fg)", "font-size": 14, "text-anchor": "middle" }, parts[parts.length - 1]);
      var t = s === "c" ? op.st[k][1] : (s === "m" ? "missed" : "?");
      if (t) el("text", { x: cx, y: 254, fill: "var(--muted)", "font-size": 14, "text-anchor": "middle" }, t);
    });

    read.textContent = op.label + ". There were " + op.alerts + " alerts covering " + op.timeTxt +
      ", and " + op.prob + "% of them contained an eruption. Advance warning was given for " + op.caught + ".";
    note.textContent = op.note;
  }

  render(0);
})();
