import Authentication from '../../authentication/authentication';
import {isTokenSet, removeToken} from './tokens';
import {Redirect} from 'react-router-dom';

export const isLogged = () => isTokenSet() ? <Redirect to="/dashboard" /> : <Authentication />;
export const privateRoute = component => isTokenSet() ? component : <Redirect to="/" />

export const logout = () => {
	console.log('token removed');
	removeToken();
	return <Redirect to="/" />
}