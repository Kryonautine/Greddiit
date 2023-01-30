import {Route, Routes} from "react-router-dom";
import "./Views.css";
import React, {useState} from "react";

// Missing


function RedirectProfile() {

	// const navigate = useNavigate();

	var name = document.getElementById("name").value;
	var pass = document.getElementById("pass").value;
	console.log(name);
	console.log(pass);
	if (name=="admin" && pass=="admin") {
		window.location.href("http://localhost:3000/profile");
		// navigate("/profile");
	}
}

function ChangeForm(login, setlogin) {
	if (login) {
		setlogin(false);
	}
	else {
		setlogin(true);
	}
}

function Login (login) {
	if (login) {
		return (
		<form className="form" id="loginform" onSubmit={RedirectProfile}>
			<label htmlFor="name" className="field">
				Full Name: <input type="text" className="input" id="name" placeholder="Name" />
			</label><br />
			<label htmlFor="pass" className="field">
				Password: <input type="text" className="input" id="pass" placeholder="Password" />
			</label><br />
			<button type="submit" className="button" >Submit</button>
		</form>
		);
	}
	return (
	<form className="form" id="registerform" onSubmit={RedirectProfile}>
		<label htmlFor="firstname" className="field">
			First name: <input type="text" className="input" id="firstname" placeholder="First Name" />
		</label><br />
		<label htmlFor="lastname" className="field">
			Last name: <input type="text" className="input" id="lastname" placeholder="Last Name" />
		</label><br />
		<label htmlFor="name" className="field">
			Username: <input type="text" className="input" id="name" placeholder="Username" />
		</label><br />
		<label htmlFor="pass" className="field">
			Password: <input type="text" className="input" id="pass" placeholder="Password" />
		</label><br />
		<label htmlFor="email" className="field">
			E-mail: <input type="text" className="input" id="email" placeholder="name@email.com" />
		</label><br />
		<label htmlFor="age" className="field">
			Age: <input type="text" className="input" id="age" placeholder="22" />
		</label><br />
		<label htmlFor="phone" className="field">
			Phone Number: <input type="text" className="input" id="phone" placeholder="123456789" />
		</label><br />
		<button type="submit" className="button" >Submit</button>
	</form>
	);
}

function Views() {

	const [login, setlogin] = useState(true);

	return (
        <Routes>
          <Route
		  	path="/profile"
			element={
				<>
				<p> Name : Admin </p><br />
				<p> Password : Admin </p><br />
				<p> Email : Admin@admin.com </p><br />
				</>
			}
		  />
          <Route
		  	index
			element=
				{
					<>
					<button type="button" className="button" id="loginbutton" onClick={() => ChangeForm(login, setlogin)} >Login/Register</button>
					<Login login={login} />
					</>
				}
		  />
        </Routes>
	);
}

export default Views;