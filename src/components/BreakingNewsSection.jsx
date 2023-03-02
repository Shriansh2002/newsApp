import React, { useEffect, useState } from 'react';
import { Loader, WeatherCard } from './';

function BreakingNewsSection() {
	const [weatherData, setWeatherData] = useState(null);

	useEffect(() => {
		fetch(
			'https://api.weatherapi.com/v1/current.json?key=cc26a7593b0e429389791432230103&q=Noida'
		)
			.then((res) => res.json())
			.then((data) => {
				setWeatherData({
					city: data.location.name,
					temperature: data.current.temp_c,
					weatherIcon: data.current.condition.icon,
					description: data.current.condition.text,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<section className="py-20">
			<div className="container flex items-center justify-between mx-auto px-6 py-3">
				<div>
					<h2 className="text-4xl font-bold mb-2">Breaking News</h2>
					<h3 className="text-2xl mb-8">
						Stay up-to-date with the latest news from around the
						world.
					</h3>
					<a
						href="/"
						className="bg-blue-700 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-600"
					>
						Read More
					</a>
				</div>
				{weatherData ? (
					<WeatherCard
						city={weatherData.city}
						temperature={weatherData.temperature}
						weatherIcon={weatherData.weatherIcon}
						description={weatherData.description}
					/>
				) : (
					<Loader />
				)}
			</div>
		</section>
	);
}

export default BreakingNewsSection;
