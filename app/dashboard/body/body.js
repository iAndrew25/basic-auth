import {getUser} from '../../commons/utils/user-data';

export default class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState(nextProps);
	}

	render() {
		let {email, name} = this.state.user;
		
		return (
			<div>
				Hello, {name || 'unknown'}
			</div>
		)		
	}
}