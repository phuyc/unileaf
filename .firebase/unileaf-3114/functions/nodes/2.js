

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Cytp-qpz.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.CERtv3XG.js"];
export const stylesheets = ["_app/immutable/assets/2.DEAEioZZ.css"];
export const fonts = [];
