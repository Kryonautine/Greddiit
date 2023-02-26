import React from "react";

export const Login = () => {

	return (
		<form className="form" id="loginform">
			<label htmlFor="name" className="field">
				Full Name: <input refs="name" type="text" className="input" id="name" placeholder="Name" />
			</label><br />
			<label htmlFor="pass" className="field">
				Password: <input refs="pass" type="text" className="input" id="pass" placeholder="Password" />
			</label><br />
			<button type="submit" className="button">Submit</button>
		</form>
	);
}