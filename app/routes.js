import {Switch, Route} from 'react-router-dom';
import {isLogged, privateRoute, logout} from 'utils/auth';
import Authentication from './authentication/authentication';
import Dashboard from './dashboard/dashboard';

export default function() {
	console.log('routes');
	return(
		<Switch>
			<Route exact path='/' component={() => isLogged()}/>
			<Route exact path='/logout' component={() => logout()}/>
			<Route exact path='/dashboard' component={() => privateRoute(<Dashboard />)}/>
			<Route component={() => (<div>404 - GTFO</div>)}/>
		</Switch>
	)
}