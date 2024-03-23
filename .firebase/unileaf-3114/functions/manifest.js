export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bus.svg","favicon.png","fire.svg","fork.jpg","happy.svg","home.svg","leaderboard.svg","map.svg","Menu.svg","profile.svg","quiz.svg","robots.txt","tree.svg","x.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.DMPF7Nnx.js","app":"_app/immutable/entry/app.BwVTrZ52.js","imports":["_app/immutable/entry/start.DMPF7Nnx.js","_app/immutable/chunks/entry.BB3snuxn.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/entry/app.BwVTrZ52.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.snAqb81S.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
