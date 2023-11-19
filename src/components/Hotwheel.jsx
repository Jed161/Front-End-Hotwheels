/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export default function Hotwheel({ hotwheel }) {
	return (
		<div className='hotwheel'>
			<h3>{hotwheel.name}</h3>

			<Link to={`/hotwheels/${hotwheel.id}`}>
				<img src={hotwheel.img_url} alt={hotwheel.name} width='170px' />
			</Link>
		</div>
	);
}
