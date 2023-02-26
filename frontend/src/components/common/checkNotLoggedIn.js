import { useNavigate } from "react-router-dom";

function checkNotLoggedIn() {
	const navigate = useNavigate();

	if (window.localStorage.getItem('login')) {
		console.log("Not Logged In")
		navigate('/');
	}
}

export default checkNotLoggedIn;