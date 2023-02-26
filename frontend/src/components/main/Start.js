import "./Start.css";
import React, {useState} from "react";
import checkLogin from "../common/checkLogin";
import {Register} from "../start/register";
import {Login} from "../start/login";

function Start() {

	const [login, setlogin] = useState(false);

	return (
		<div onLoad={checkLogin}>
		<button type="button" className="button" id="loginbutton" onClick={() => setlogin(!login)} >Login/Register</button>
		{login && <Register/>}
		{!login && <Login/>}
		</div>
	);
}

export default Start;