import {Link} from 'react-router-dom'

const Navbar = () => {
	return (
		<header>
			<div className= "NavContainer">
				<Link to="/profile">
					<h1>Profile</h1>
				</Link>
			</div>
		</header>
	)
}

export default Navbar;