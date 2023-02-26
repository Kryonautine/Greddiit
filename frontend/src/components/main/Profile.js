import React from "react";
import { useNavigate } from "react-router-dom";

function Profile () {

	const navigate = useNavigate();

	const Logout = async () => {
		window.localStorage.setItem('login', '')
		console.log("Logged out")
		navigate('/')
	}

	return (
		<>
		<p>Name = admin</p><br />
		<p>Password = admin</p><br />
		<p>Email = admin@mail.com</p><br />
		<button onClick={Logout} >Logout</button>
		</>
	);
}

export default Profile;