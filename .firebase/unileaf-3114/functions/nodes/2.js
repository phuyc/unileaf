

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CUfDQt5m.js","_app/immutable/chunks/scheduler.D9xsQs6S.js","_app/immutable/chunks/index.d5LiOp4I.js","_app/immutable/chunks/stores.DDrl30Yo.js","_app/immutable/chunks/index.CUt9P6Im.js"];
export const stylesheets = ["_app/immutable/assets/2.D9RrjK1f.css"];
export const fonts = [];
