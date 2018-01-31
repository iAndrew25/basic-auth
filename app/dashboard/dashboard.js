import Header from './header/header';
import Body from './body/body';
import {logout} from './../commons/utils/auth';

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'Dashboard'
		}
	}

	render() {
		return (
			<div>
				<Header logout={logout} />
				<Body />
			</div>
		)
	}
}