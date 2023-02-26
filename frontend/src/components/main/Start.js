import "./Start.css";
import React, {useState} from "react";
import {Register} from "../start/register";
import {Login} from "../start/login";

function Start() {

	const [login, setlogin] = useState(false);

	return (
		<>
		<button type="button" className="button" id="loginbutton" onClick={() => setlogin(!login)} >Login/Register</button>
		{login && <Register/>}
		{!login && <Login/>}
		</>
	);
}

export default Start;