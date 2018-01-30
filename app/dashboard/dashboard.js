import Header from './header/header';
import Body from './body/body';
import {removeToken} from './../commons/utils/auth';

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
				<Header logout={removeToken} />
				<Body />
			</div>
		)
	}
}