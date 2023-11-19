import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Hotwheel from './Hotwheel';

const API = import.meta.env.VITE_API_URL;

export default function Hotwheels() {
	const [hotwheels, setHotwheels] = useState([]);

	useEffect(() => {
		fetch(`${API}/hotwheels`)
			.then((response) => response.json())
			.then((responseJSON) => {
				console.log(responseJSON);
				setHotwheels(responseJSON.data.payload);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className='hotwheels'>
			<h2>Hotwheels</h2>
			<section>
				{hotwheels.map((hotwheel) => {
					return <Hotwheel key={uuidv4()} hotwheel={hotwheel} />;
				})}
			</section>
		</div>
	);
}
