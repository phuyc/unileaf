import { c as create_ssr_component, e as escape, d as each, f as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const css$4 = {
  code: ".title-bar.svelte-11l9a5s{width:100%;border:1px solid #000;border-radius:16px;box-shadow:#000 0px 4px;padding:8px;text-align:center;font-size:24px;font-weight:800;background-color:#F865B0;margin-bottom:12px}",
  map: null
};
const TitleBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$4);
  return `<div class="title-bar svelte-11l9a5s">${escape(title)} </div>`;
});
const css$3 = {
  code: ".leaderboard.svelte-e8qkic{width:100%;border:1px solid #000;border-radius:16px;box-shadow:#000 4px 4px;padding:8px}.lb.svelte-e8qkic{width:100%;display:flex;flex-direction:column;gap:8px}.lb-title-wrapper.svelte-e8qkic{width:100%;display:flex;align-items:center;justify-content:center}.lb-title.svelte-e8qkic{font-size:24px;font-weight:600}.lb-list.svelte-e8qkic{display:flex;flex-direction:column;gap:8px}.lb-person.svelte-e8qkic{display:inline-flex;align-items:center}.lb-profile.svelte-e8qkic{width:30px}.lb-name.svelte-e8qkic{width:40px}.lb-progbar.svelte-e8qkic{background:rgb(160,242,208);background:linear-gradient(90deg, rgba(160,242,208,1) 0%, rgba(28,235,90,1) 100%);height:18px;margin:4px;border-radius:8px}",
  map: null
};
const Leaderboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = [
    { name: "Arno", score: 19 },
    { name: "Temo", score: 14 },
    { name: "Juka", score: 10 }
  ];
  $$result.css.add(css$3);
  return `<div class="leaderboard svelte-e8qkic"><div class="lb svelte-e8qkic"><div class="lb-title-wrapper svelte-e8qkic" data-svelte-h="svelte-hql10k"><div class="lb-title svelte-e8qkic">Leading Today</div></div> <div class="lb-list svelte-e8qkic">${each(data, (person) => {
    return `<div class="lb-person svelte-e8qkic"><img class="lb-profile svelte-e8qkic" src="profile.svg"${add_attribute("alt", person.name, 0)}> <span class="lb-name svelte-e8qkic">${escape(person.name)}</span> <div class="lb-progbar svelte-e8qkic" style="${"width:" + escape(person.score / 0.25, true) + "%;"}"></div> <span>${escape(person.score)}</span> </div>`;
  })}</div></div> </div>`;
});
const css$2 = {
  code: ".event.svelte-1mp3hio{width:calc(50% - 6px);height:160px;border:1px solid #000;border-radius:16px;box-shadow:#000 4px 4px;display:flex;flex-direction:column;overflow:hidden;position:relative}.event.svelte-1mp3hio:active{box-shadow:none;transform:translate(4px, 4px)}.poster.svelte-1mp3hio{height:40%;width:100%}.description.svelte-1mp3hio{padding:8px;display:flex;flex-direction:column;gap:4px;text-align:start}.title.svelte-1mp3hio{font-size:18px;font-weight:600}.see-more.svelte-1mp3hio{position:absolute;bottom:4px;left:10px;font-weight:600}.time.svelte-1mp3hio{position:absolute;bottom:4px;right:10px;font-weight:600}",
  map: null
};
const Event = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let count;
  let d;
  let { color } = $$props;
  let { end } = $$props;
  let { title } = $$props;
  let { location = "" } = $$props;
  let now = Date.now();
  let interval = setInterval(
    () => {
      now = Date.now();
    },
    1e3
  );
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0)
    $$bindings.end(end);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  $$result.css.add(css$2);
  count = Math.round(end - now);
  {
    if (count === 0)
      clearInterval(interval);
  }
  d = Math.floor(count / (1e3 * 60 * 60 * 24));
  return `<button class="event svelte-1mp3hio"><div class="poster svelte-1mp3hio" style="${"background: " + escape(color, true) + ";"}"></div> <div class="description svelte-1mp3hio"><div class="title svelte-1mp3hio">${escape(title)}</div> <div class="location">${escape(location)}</div> <a href="#" class="see-more svelte-1mp3hio" data-svelte-h="svelte-1r4pnuj">See More</a> <div class="time svelte-1mp3hio">${escape(d)}d left</div></div> </button>`;
});
const css$1 = {
  code: ".task.svelte-1e3yvka{width:100%;background:#FFF;border:1px solid #000;border-radius:16px;box-shadow:#000 4px 4px;height:125px;display:flex;flex-direction:column;padding:8px}.task.svelte-1e3yvka:active{box-shadow:none;transform:translate(4px, 4px)}.title.svelte-1e3yvka{width:100%;text-align:center;font-size:24px;font-weight:450}.icon.svelte-1e3yvka{width:100%;height:100%}img.svelte-1e3yvka{width:80px}",
  map: null
};
const Task = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { src } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  $$result.css.add(css$1);
  return `<button class="task svelte-1e3yvka"><div class="title svelte-1e3yvka">${escape(title)}</div> <div class="icon svelte-1e3yvka"><img${add_attribute("src", src, 0)}${add_attribute("alt", src, 0)} class="svelte-1e3yvka"></div> </button>`;
});
const css = {
  code: ".events.svelte-1udg384{width:100%;display:inline-flex;justify-content:space-between;gap:12px;flex-wrap:wrap}.tasks.svelte-1udg384{width:100%;display:grid;grid-template-columns:1fr 1fr;gap:12px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Leaderboard, "Leaderboard").$$render($$result, {}, {}, {})} <div class="future-events">${validate_component(TitleBar, "TitleBar").$$render($$result, { title: "Future Events" }, {}, {})} <div class="events svelte-1udg384">${validate_component(Event, "Event").$$render(
    $$result,
    {
      title: "Easter Sitsit",
      color: "linear-gradient(90deg, rgb(102, 226, 255), rgb(255, 102, 196))",
      end: (/* @__PURE__ */ new Date("Mar 25, 2024 00:00:00 GMT+02:00")).getTime(),
      location: "Otakaari 20"
    },
    {},
    {}
  )} ${validate_component(Event, "Event").$$render(
    $$result,
    {
      title: "Zero Waste",
      color: "linear-gradient(90deg, rgba(160,233,242,1) 0%, rgba(28,235,90,1) 100%)",
      end: (/* @__PURE__ */ new Date("Apr 7, 2024 00:00:00 GMT+02:00")).getTime(),
      location: "Undergraduate Center"
    },
    {},
    {}
  )}</div></div> <div class="daily-tasks">${validate_component(TitleBar, "TitleBar").$$render($$result, { title: "Daily Tasks" }, {}, {})} <div class="tasks svelte-1udg384">${validate_component(Task, "Task").$$render($$result, { title: "Food", src: "fork.jpg" }, {}, {})} ${validate_component(Task, "Task").$$render($$result, { title: "Checkpoints", src: "fork.jpg" }, {}, {})} ${validate_component(Task, "Task").$$render($$result, { title: "Transportaion", src: "fork.jpg" }, {}, {})} ${validate_component(Task, "Task").$$render($$result, { title: "Quizzes", src: "fork.jpg" }, {}, {})}</div> </div>`;
});
export {
  Page as default
};
