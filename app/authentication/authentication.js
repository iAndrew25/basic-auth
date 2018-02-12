import Login from './log-in/log-in';
import Signup from './sign-up/sign-up';
import {login, signup} from './authentication-service';
import {Redirect} from 'react-router-dom';
import {loginRedirect} from '../commons/utils/auth';

export default class Authentication extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayLogin: false,
			email: '',
			password: '',
			name: '',
			forceLogin: false
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
		// signup(email, name).then(data => {
		// 	console.log('signup', data)
		// 	inlineNotify.success(data.message);
		// });
	}

	handleLogin() {
		let {email, password} = this.state;
		//loginRedirect('token', () => this.setState({forceLogin: true}));
		login(email, password).then(data => {
			console.log('login', data);
			//setToken(data.token);
			//setUser(data.user);
			//this.setState({toLogin: data.success});
		});
	}

	handleChange(key, value) {
		this.setState({[key]: value});
	}

	render() {
		let {email, name, password, toggleDisplay, displayLogin, forceLogin} = this.state;

		if(forceLogin) return <Redirect to='/' />

		return(
			<div className="card border-primary authenticate-box">
				<div className="card-body text-primary">
					{displayLogin ? 
						<Login 
							email={email}
							password={password}
							toggleDisplay={this.toggleDisplay}
							handleLogin={this.handleLogin}
							handleChange={this.handleChange} /> : 
						<Signup 
							email={email}
							name={name}
							toggleDisplay={this.toggleDisplay}
							handleSignup={this.handleSignup}
							handleChange={this.handleChange} />}

					{this.state.toLogin ? <Redirect to="/dashboard" /> : ''}
				</div>
			</div>
		)		
	}
}