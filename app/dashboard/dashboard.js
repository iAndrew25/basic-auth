import {Redirect} from 'react-router-dom';
import Header from './header/header';
import Body from './body/body';
import {logoutRedirect} from './../commons/utils/auth';

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'Dashboard',
			forceLogout: false
		}
	}

	render() {
		const {forceLogout} = this.state;

    	if(forceLogout) return <Redirect to='/' />

		return (
			<div>
				<Header logout={() => logoutRedirect(() => this.setState({forceLogout: true}))} />
				<Body />
			</div>
		)
	}
}