import "./Start.css";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {Register} from "../start/register";
import {Login} from "../start/login";

function checkLogin() {
	const navigate = useNavigate();

	if (window.localStorage.getItem('login')) {
		console.log("Already Logged In")
		navigate('/profile');
	}
}

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