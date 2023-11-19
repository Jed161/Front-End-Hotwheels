import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<nav>
			<h1>
				<Link to='/hotwheels'>Hotwheels</Link>
			</h1>
			<button>
				<Link to='/hotwheels/new'>New Hotwheel</Link>
			</button>
		</nav>
	);
}
