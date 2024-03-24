export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["aaltoMap.png","bus.svg","favicon.ico","favicon.jpg","fire.svg","fork.jpg","happy.svg","home.svg","leaderboard.svg","map.svg","Menu.svg","profile.svg","quiz.svg","robots.txt","social_sharing_image.jpg","tree.svg","x.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.Be0Y5c5v.js","app":"_app/immutable/entry/app.BTj9If-m.js","imports":["_app/immutable/entry/start.Be0Y5c5v.js","_app/immutable/chunks/entry.nHnfVeHA.js","_app/immutable/chunks/scheduler.D9xsQs6S.js","_app/immutable/chunks/index.CUt9P6Im.js","_app/immutable/entry/app.BTj9If-m.js","_app/immutable/chunks/scheduler.D9xsQs6S.js","_app/immutable/chunks/index.d5LiOp4I.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
