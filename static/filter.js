(() => {
  const q = document.getElementById("q");
  const chips = [...document.querySelectorAll(".chip")];
  const items = [...document.querySelectorAll("li.paper")];
  const groups = [...document.querySelectorAll(".yeargroup")];
  let topic = "";
  function apply() {
    const terms = q.value.toLowerCase().split(/\s+/).filter(Boolean);
    for (const li of items) {
      const okTopic = !topic || li.dataset.topics.split(" ").includes(topic);
      const okText = terms.every(t => li.dataset.text.includes(t));
      li.hidden = !(okTopic && okText);
    }
    for (const g of groups) g.hidden = ![...g.querySelectorAll("li.paper")].some(li => !li.hidden);
  }
  q.addEventListener("input", apply);
  for (const c of chips) c.addEventListener("click", () => {
    topic = c.dataset.topic;
    chips.forEach(x => { x.classList.toggle("on", x === c); x.setAttribute("aria-pressed", x === c); });
    apply();
  });
})();
