export default class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayName: 'John'
		}
	}

	render() {
		return (
			<div>
				Hello, {this.state.displayName}
			</div>
		)		
	}
}