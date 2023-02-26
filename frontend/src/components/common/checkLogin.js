import { useNavigate } from "react-router-dom";

function checkLogin() {
	const navigate = useNavigate();

	if (window.localStorage.getItem('login')) {
		console.log("Already Logged In")
		navigate('/profile');
	}
}

export default checkLogin;