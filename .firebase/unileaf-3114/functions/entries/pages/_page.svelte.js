import { c as create_ssr_component, e as escape, d as each, f as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const css$5 = {
  code: ".title-bar.svelte-11l9a5s{width:100%;border:1px solid #000;border-radius:16px;box-shadow:#000 0px 4px;padding:8px;text-align:center;font-size:24px;font-weight:800;background-color:#F865B0;margin-bottom:12px}",
  map: null
};
const TitleBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$5);
  return `<div class="title-bar svelte-11l9a5s">${escape(title)} </div>`;
});
const css$4 = {
  code: ".leaderboard.svelte-e8qkic{width:100%;border:1px solid #000;border-radius:16px;box-shadow:#000 4px 4px;padding:8px}.lb.svelte-e8qkic{width:100%;display:flex;flex-direction:column;gap:8px}.lb-title-wrapper.svelte-e8qkic{width:100%;display:flex;align-items:center;justify-content:center}.lb-title.svelte-e8qkic{font-size:24px;font-weight:600}.lb-list.svelte-e8qkic{display:flex;flex-direction:column;gap:8px}.lb-person.svelte-e8qkic{display:inline-flex;align-items:center}.lb-profile.svelte-e8qkic{width:30px}.lb-name.svelte-e8qkic{width:40px}.lb-progbar.svelte-e8qkic{background:rgb(160,242,208);background:linear-gradient(90deg, rgba(160,242,208,1) 0%, rgba(28,235,90,1) 100%);height:18px;margin:4px;border-radius:8px}",
  map: null
};
const Leaderboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = [
    { name: "Arno", score: 19 },
    { name: "Temo", score: 14 },
    { name: "Juka", score: 10 }
  ];
  $$result.css.add(css$4);
  return `<div class="leaderboard svelte-e8qkic"><div class="lb svelte-e8qkic"><div class="lb-title-wrapper svelte-e8qkic" data-svelte-h="svelte-hql10k"><div class="lb-title svelte-e8qkic">Leading Today</div></div> <div class="lb-list svelte-e8qkic">${each(data, (person) => {
    return `<div class="lb-person svelte-e8qkic"><img class="lb-profile svelte-e8qkic" src="profile.svg"${add_attribute("alt", person.name, 0)}> <span class="lb-name svelte-e8qkic">${escape(person.name)}</span> <div class="lb-progbar svelte-e8qkic" style="${"width:" + escape(person.score / 0.25, true) + "%;"}"></div> <span>${escape(person.score)}</span> </div>`;
  })}</div></div> </div>`;
});
const css$3 = {
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
  $$result.css.add(css$3);
  count = Math.round(end - now);
  {
    if (count === 0)
      clearInterval(interval);
  }
  d = Math.floor(count / (1e3 * 60 * 60 * 24));
  return `<button class="event svelte-1mp3hio"><div class="poster svelte-1mp3hio" style="${"background: " + escape(color, true) + ";"}"></div> <div class="description svelte-1mp3hio"><div class="title svelte-1mp3hio">${escape(title)}</div> <div class="location">${escape(location)}</div> <a href="https://dataguild.fi/" class="see-more svelte-1mp3hio" data-svelte-h="svelte-8lt2x4">See More</a> <div class="time svelte-1mp3hio">${escape(d)}d left</div></div> </button>`;
});
const css$2 = {
  code: ".task.svelte-1pro0zg{width:100%;background:#FFF;border:1px solid #000;border-radius:16px;box-shadow:#000 4px 4px;height:125px;display:flex;flex-direction:column;padding:8px}.task.svelte-1pro0zg:active{box-shadow:none;transform:translate(4px, 4px)}.title.svelte-1pro0zg{width:100%;text-align:center;font-size:24px;font-weight:450}.icon.svelte-1pro0zg{width:100%;height:100%}img.svelte-1pro0zg{width:80px}",
  map: null
};
const Task = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { src } = $$props;
  let { handleClick = () => {
  } } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.handleClick === void 0 && $$bindings.handleClick && handleClick !== void 0)
    $$bindings.handleClick(handleClick);
  $$result.css.add(css$2);
  return `<button class="task svelte-1pro0zg"><div class="title svelte-1pro0zg">${escape(title)}</div> <div class="icon svelte-1pro0zg"><img${add_attribute("src", src, 0)}${add_attribute("alt", src, 0)} class="svelte-1pro0zg"></div> </button>`;
});
const css$1 = {
  code: ".overlay.svelte-4q865g{position:fixed;z-index:3;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center}.food-popup.svelte-4q865g{background-color:#FFF;border:1px solid #000;border-radius:16px;box-shadow:#000 4px 4px;padding:30px;display:flex;flex-direction:column;gap:6px;position:relative}.food-question.svelte-4q865g{font-size:20px;font-weight:600;margin-bottom:10px}.foodchoice.svelte-4q865g{display:flex;align-items:center;border:1px solid #000;background:#FFF;width:100%}.foodchoice.svelte-4q865g:active{background:#DAF8FF}.food-choice-text.svelte-4q865g{text-align:start;width:100%;padding:10px;border-left:1px solid #000;color:#000;font-size:18px;font-weight:450;line-height:27px}.close.svelte-4q865g{position:absolute;right:8px;top:8px}",
  map: null
};
const FoodPopup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { switchFoodCheck } = $$props;
  if ($$props.switchFoodCheck === void 0 && $$bindings.switchFoodCheck && switchFoodCheck !== void 0)
    $$bindings.switchFoodCheck(switchFoodCheck);
  $$result.css.add(css$1);
  return `<button class="overlay svelte-4q865g"><div class="food-popup svelte-4q865g"><button data-svelte-h="svelte-1s6chzn"><img class="close svelte-4q865g" src="x.svg" alt="X"></button> <div class="food-part"><div class="food-question svelte-4q865g" data-svelte-h="svelte-v92m4o">What kind of food did you eat?</div> <div class="food-choices"><button class="foodchoice svelte-4q865g" data-svelte-h="svelte-95i5xc"><div class="food-choice-text svelte-4q865g">Vegeterian</div></button> <button class="foodchoice svelte-4q865g" data-svelte-h="svelte-l6n6yl"><div class="food-choice-text svelte-4q865g">Non vegeterian</div></button></div></div></div> </button>`;
});
const css = {
  code: '.events.svelte-2sj34t{width:100%;display:inline-flex;justify-content:space-between;gap:12px;flex-wrap:wrap}.tasks.svelte-2sj34t{width:100%;display:grid;grid-template-columns:1fr 1fr;gap:12px}.overlay.svelte-2sj34t{position:fixed;z-index:3;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center}.food-popup.svelte-2sj34t{background-color:#FFF;border:1px solid #FFF;border-radius:16px;box-shadow:#000 4px 4px;padding:30px;display:flex;flex-direction:column;gap:6px;position:relative}.quiz-popup.svelte-2sj34t{background-color:#FFF;border:1px solid #FFF;border-radius:16px;box-shadow:#000 4px 4px;width:80%;padding:24px;display:flex;flex-direction:column;gap:12px;position:relative}.close.svelte-2sj34t{position:absolute;right:16px;top:16px}.quiz-part.svelte-2sj34t{display:flex;flex-direction:column;gap:16px\r\n	}.quiz-title.svelte-2sj34t{font-size:28px;font-weight:600}.food-question.svelte-2sj34t{font-size:20px;font-weight:600;margin-bottom:10px}.quiz-choices.svelte-2sj34t{text-align:start;display:flex;flex-direction:column}.foodchoice.svelte-2sj34t{display:flex;align-items:center;border:1px solid #000;background:#FFF;width:100%}.choice.svelte-2sj34t{display:flex;align-items:center;border:1px solid #000;background:#FFF;width:100%}.choice.svelte-2sj34t:active{background:#DAF8FF}.foodchoice.svelte-2sj34t:active{background:#DAF8FF}.question-choice-letter.svelte-2sj34t{display:flex;width:50px;padding:10px;flex-direction:column;justify-content:center;align-items:center;gap:10px;color:#000;font-family:"Inter";font-size:18px;font-style:normal;font-weight:450;line-height:27px}.food-choice-text.svelte-2sj34t{text-align:start;width:100%;padding:10px;border-left:1px solid #000;color:#000;font-size:18px;font-weight:450;line-height:27px}.question-choice-text.svelte-2sj34t{text-align:start;width:100%;padding:10px;border-left:1px solid #000;color:#000;font-size:18px;font-weight:450;line-height:27px}.close-food.svelte-2sj34t{position:absolute;top:8px;right:8px}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isQuizOpen = false;
  let isFoodCheckOpen = false;
  let isTransportationOpen = false;
  function disableScroll() {
    let x = document.getElementsByTagName("BODY")[0];
    x.style.overflow = isQuizOpen || isFoodCheckOpen || isTransportationOpen ? "hidden" : "auto";
  }
  function switchTransportation() {
    isTransportationOpen = !isTransportationOpen;
    disableScroll();
  }
  function switchFoodCheck() {
    isFoodCheckOpen = !isFoodCheckOpen;
    disableScroll();
  }
  function openQuiz() {
    isQuizOpen = !isQuizOpen;
    disableScroll();
  }
  $$result.css.add(css);
  return `${validate_component(Leaderboard, "Leaderboard").$$render($$result, {}, {}, {})} <div class="future-events">${validate_component(TitleBar, "TitleBar").$$render($$result, { title: "Future Events" }, {}, {})} <div class="events svelte-2sj34t">${validate_component(Event, "Event").$$render(
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
  )}</div></div> <div class="daily-tasks">${validate_component(TitleBar, "TitleBar").$$render($$result, { title: "Daily Tasks" }, {}, {})} <div class="tasks svelte-2sj34t">${validate_component(Task, "Task").$$render(
    $$result,
    {
      title: "Food",
      src: "fork.jpg",
      handleClick: switchFoodCheck
    },
    {},
    {}
  )} ${validate_component(Task, "Task").$$render($$result, { title: "Checkpoints", src: "map.svg" }, {}, {})} ${validate_component(Task, "Task").$$render(
    $$result,
    {
      title: "Transportation",
      src: "bus.svg",
      handleClick: switchTransportation
    },
    {},
    {}
  )} ${validate_component(Task, "Task").$$render(
    $$result,
    {
      title: "Quizzes",
      src: "quiz.svg",
      handleClick: openQuiz
    },
    {},
    {}
  )}</div></div> ${isQuizOpen ? `<button class="overlay svelte-2sj34t"><div class="quiz-popup svelte-2sj34t"><button data-svelte-h="svelte-170zpc7"><img class="close svelte-2sj34t" src="x.svg" alt="X"></button> <div class="quiz-title svelte-2sj34t" data-svelte-h="svelte-64rvth">Question</div> <div class="quiz-part svelte-2sj34t"><div class="quiz-question" data-svelte-h="svelte-1sa0ckp">What is the PRIMARY concern regarding the environmental impact of electric vehicles?</div> <div class="quiz-choices svelte-2sj34t"><button class="choice svelte-2sj34t" data-svelte-h="svelte-13y3wse"><div class="question-choice-letter svelte-2sj34t">A</div> <div class="question-choice-text svelte-2sj34t">Limited range</div></button> <button class="choice svelte-2sj34t" data-svelte-h="svelte-xl2nkb"><div class="question-choice-letter svelte-2sj34t">B</div> <div class="question-choice-text svelte-2sj34t">Disposal of used batteries</div></button> <button class="choice svelte-2sj34t" data-svelte-h="svelte-mg53tq"><div class="question-choice-letter svelte-2sj34t">C</div> <div class="question-choice-text svelte-2sj34t">Reliance on fossil fuels</div></button> <button class="choice svelte-2sj34t" data-svelte-h="svelte-169le01"><div class="question-choice-letter svelte-2sj34t">D</div> <div class="question-choice-text svelte-2sj34t">The eco-friendly nature</div></button></div></div></div></button>` : ``} ${isFoodCheckOpen ? `${validate_component(FoodPopup, "FoodPopup").$$render($$result, { switchFoodCheck }, {}, {})}` : ``} ${isTransportationOpen ? `<button class="overlay svelte-2sj34t"><div class="food-popup svelte-2sj34t"><button data-svelte-h="svelte-1910ccd"><img class="close-food svelte-2sj34t" src="x.svg" alt="X"></button> <div class="food-part"><div class="food-question svelte-2sj34t" data-svelte-h="svelte-1kymptt">How did you commute today?</div> <div class="quiz-choices svelte-2sj34t"><button class="foodchoice svelte-2sj34t" data-svelte-h="svelte-1f2uy62"><div class="food-choice-text svelte-2sj34t">Walking/Cycling</div></button> <button class="foodchoice svelte-2sj34t" data-svelte-h="svelte-1yh1fe2"><div class="food-choice-text svelte-2sj34t">Public transportation</div></button> <button class="foodchoice svelte-2sj34t" data-svelte-h="svelte-1tz9j13"><div class="food-choice-text svelte-2sj34t">Car</div></button></div></div></div></button>` : ``}`;
});
export {
  Page as default
};
