import Login from './log-in/log-in';
import Signup from './sign-up/sign-up';
import {setToken} from 'utils/auth';
import {login, signup} from './authentication-service';
import {Redirect} from 'react-router-dom';

import {getUser, setUser} from 'utils/user';

let notify, inlineNotify;

export default class Authentication extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayLogin: false,
			email: '',
			password: '',
			name: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.toggleDisplay = this.toggleDisplay.bind(this);
		this.handleSignup = this.handleSignup.bind(this)
		this.handleLogin = this.handleLogin.bind(this)
	}

	toggleDisplay() {
		this.setState(state => ({displayLogin: !state.displayLogin}));
	}

	handleSignup() {
		let {email, name} = this.state;
		signup(email, name).then(data => {
			console.log('signup', data)
			inlineNotify.success(data.message);
		});
	}

	handleLogin() {
		let {email, password} = this.state;
		login(email, password).then(data => {
			console.log('login', data);
			setToken(data.token);
			setUser(data.user);
			this.setState({toLogin: data.success});
		});
	}

	handleChange(key, value) {
		this.setState({[key]: value});
	}

	render() {
		let {email, name, password, toggleDisplay, displayLogin} = this.state;

		return(
			<div className="authenticate-box">
				{displayLogin ? 
					<Login 
						email={email}
						password={password}
						handleLogin={this.handleLogin}
						handleChange={this.handleChange} /> : 
					<Signup 
						email={email}
						name={name}
						handleSignup={this.handleSignup}
						handleChange={this.handleChange} />}

				{this.state.toLogin ? <Redirect to="/dashboard" /> : ''}

				{displayLogin ? 
					<div className="sign-up-now">Don't have an account yet? 
						<span onClick={() => this.toggleDisplay()}> Signup Now</span>
					</div> : 
					<div className="sign-up-now">Got an account? 
						<span onClick={() => this.toggleDisplay()}> Login Now</span>
					</div>}
			</div>
		)		
	}
}