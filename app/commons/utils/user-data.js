let user = {};

export const setUser = userData => {
	console.log('setUser', userData);
	user = userData;

}
export const getUser = _ => {
	console.log('getUser', user);
	return Object.keys(user).length ? user : null;
}