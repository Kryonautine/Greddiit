import React from "react";
import { Link } from "react-router-dom";

function Dashboard () {
	return (
		<header>
			<div className= "NavContainer">
				<Link to="/profile">
					<h1>Profile</h1>
				</Link>
				<ul>
					<li><Link to="/profile">My Profile</Link></li>
					<li><Link to="/subgreddiits">My Subgreddiits</Link></li>
					<li><Link to="/all">All Subgreddiits</Link></li>
					<li><Link to="/saved">My Saved Posts</Link></li>
				</ul>
			</div>
		</header>
	);
}

export default Dashboard;