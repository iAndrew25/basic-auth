export const setToken = (name, value, days = 30) => {
	let date = new Date();
	date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	let expires = '; expires=' + date.toGMTString();

	document.cookie = name + '=' + value + expires + '; path=/';
}

export const getToken = name => {
	let pair = document.cookie.split(';').find(c => c.contains(`${name}=`));
	return pair ? pair.split('=')[1] : null;
}

export const removeToken = name => setToken(name, '', -1);
export const isTokenSet = name => Boolean(getToken(name))