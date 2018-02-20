import {Redirect} from 'react-router-dom';
import Header from './header/header';
import Body from './body/body';
import {logoutRedirect} from './../commons/utils/auth';

import {isTokenSet} from './../commons/utils/tokens';
import {getUser} from './../commons/utils/user-data';
import {getUserData} from './../commons/utils/user-service';

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'Dashboard',
			forceLogout: false
		}
	}

	componentDidMount() {
		if(isTokenSet()) {
			if(!getUser()) {
				console.log('Request, bring user data!');
				getUserData().then(({payload}) => this.setState({user: payload}));
				// Implement service
			}
		}		
	}

	render() {
		const {forceLogout} = this.state;

    	if(forceLogout) return <Redirect to='/' />

		return (
			<div>
				<Header logout={() => logoutRedirect(() => this.setState({forceLogout: true}))} />
				<Body user={this.state.user} />
			</div>
		)
	}
}