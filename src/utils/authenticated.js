
function requireAuth(nextState, replace) {
	console.log(localStorage)
	const key = Object.keys(localStorage).find(e => e.match(/firebase:host/))
	const data = JSON.parse(localStorage.getItem(key));
	if (!data.uid) {
		replace({
			pathname: '/login',
			state: {
				nextPathname: nextState.location.pathname,
			},
		});
	}
}

export default requireAuth
