export default function({email, name, handleChange, handleSignup, toggleDisplay}) {
	return(
		<div>
			<h1 className="center-text">Sign up</h1>
			<div className="form-group">
				<label htmlFor="display-name">Display Name</label>
				<input type="password" className="form-control" id="display-name" placeholder="Display Name" value={name} onChange={e => handleChange('name', e.target.value)}/>
			</div>
			<div className="form-group">
				<label htmlFor="signup-email">Email address</label>
				<input type="email" className="form-control" id="signup-email" placeholder="E-mail Address" value={email} onChange={e => handleChange('email', e.target.value)}/>
				<small className="form-text text-muted">We'll never share your email with anyone else.</small>
			</div>
			<button className="btn btn-primary btn-submit" onClick={() => handleSignup()}>Sign up</button>
			<div className="toggle-display" onClick={() => toggleDisplay()}>
				Got an account? Login Now!
			</div>
		</div>
	)
}