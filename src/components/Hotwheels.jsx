import { useState, useEffect } from 'react';

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
		<div>
			{hotwheels.map((hotwheel) => (
				<>
					<h2>{hotwheel.name}</h2>
					<img src={hotwheel.img_url} alt={hotwheel.name} width='250' />
				</>
			))}
		</div>
	);
}
