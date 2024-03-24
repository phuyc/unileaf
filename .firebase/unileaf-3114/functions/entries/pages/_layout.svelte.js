import { c as create_ssr_component, a as subscribe, e as escape } from "../../chunks/ssr.js";
import { s as streak, p as points } from "../../chunks/stores.js";
const css = {
  code: ".container.svelte-xfez0u.svelte-xfez0u{width:100%;height:100%;position:relative}.nav.svelte-xfez0u.svelte-xfez0u{display:flex;justify-content:space-between;align-items:center;width:100%;padding:12px 8px}.nav-start.svelte-xfez0u.svelte-xfez0u{display:inline-flex;align-items:center;gap:8px}.nav-end.svelte-xfez0u.svelte-xfez0u{display:inline-flex;align-items:center;gap:8px}.streak-points.svelte-xfez0u.svelte-xfez0u{display:inline-flex;gap:12px}.streak.svelte-xfez0u.svelte-xfez0u,.points.svelte-xfez0u.svelte-xfez0u{display:inline-flex;align-items:center;gap:4px}.streak.svelte-xfez0u p.svelte-xfez0u,.points.svelte-xfez0u p.svelte-xfez0u{font-size:24px;font-weight:bold}.streak.svelte-xfez0u img.svelte-xfez0u{width:26px}.main-part.svelte-xfez0u.svelte-xfez0u{display:flex;flex-direction:column;padding:0 16px;gap:20px;margin-bottom:128px;width:100%}.lower-nav.svelte-xfez0u.svelte-xfez0u{position:fixed;border:1px solid #000;background-color:#FFF;border-radius:16px;box-shadow:#000 0 4px;left:16px;bottom:24px;display:inline-flex;align-items:center;justify-content:space-evenly;width:calc(100% - 32px);height:64px;padding:12px 8px;z-index:2}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $streak, $$unsubscribe_streak;
  let $points, $$unsubscribe_points;
  $$unsubscribe_streak = subscribe(streak, (value) => $streak = value);
  $$unsubscribe_points = subscribe(points, (value) => $points = value);
  $$result.css.add(css);
  $$unsubscribe_streak();
  $$unsubscribe_points();
  return `<div class="container svelte-xfez0u"><div class="nav svelte-xfez0u"><div class="nav-start svelte-xfez0u" data-svelte-h="svelte-1via3vp"><div class="icon"><img src="happy.svg" alt="My Happy SVG"></div> <div class="nav-text"><div class="nav-name">Janna</div> <div class="nav-level">Lvl 20</div></div></div> <div class="nav-end svelte-xfez0u"><div class="streak-points svelte-xfez0u"><div class="streak svelte-xfez0u"><img src="/fire.svg" alt="Current Streak" class="svelte-xfez0u"> <p class="svelte-xfez0u">${escape($streak)}</p></div> <div class="points svelte-xfez0u"><img src="/tree.svg" alt="tree"> <p class="svelte-xfez0u">${escape($points)}</p></div></div> <button data-svelte-h="svelte-7vdh56"><img src="/Menu.svg" alt="Menu"></button></div></div> <div class="main-part svelte-xfez0u">${slots.default ? slots.default({}) : ``}</div> <div class="lower-nav svelte-xfez0u" data-svelte-h="svelte-118jnl7"><div class="home"><img src="home.svg" alt="Home"></div> <div class="leaderboard"><img src="leaderboard.svg" alt="Leaderboard"></div> <div class="profile"><img src="profile.svg" alt="Profile"></div></div> </div>`;
});
export {
  Layout as default
};
