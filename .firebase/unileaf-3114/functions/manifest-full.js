export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fire.svg","fork.jpg","happy.svg","home.svg","leaderboard.svg","Menu.svg","profile.svg","robots.txt","tree.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.Bkup0aR0.js","app":"_app/immutable/entry/app.ksaJKq08.js","imports":["_app/immutable/entry/start.Bkup0aR0.js","_app/immutable/chunks/entry.CWGuXhzB.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/entry/app.ksaJKq08.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.CERtv3XG.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
