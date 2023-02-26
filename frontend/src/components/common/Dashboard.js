import {Link} from 'react-router-dom'
import './Dashboard.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SourceIcon from '@mui/icons-material/Source';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import StarRateIcon from '@mui/icons-material/StarRate';

const Dashboard = () => {
	return (
		<header>
			<div id="container">
				<Link to="/profile"><AccountBoxIcon />My Profile</Link>
				<Link to="/mysubgreddiits"><SourceIcon />My Subgreddiits</Link>
				<Link to="/all"><LeaderboardIcon />All Subgreddiits</Link>
				<Link to="/saved"><StarRateIcon />My Saved Posts</Link>
			</div>
		</header>
	);
}

export default Dashboard;