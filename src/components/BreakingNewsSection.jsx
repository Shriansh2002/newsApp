import React, { useEffect, useState } from 'react';
import { WeatherCard } from './';

function BreakingNewsSection() {
	const city = '42.3478, -71.0466';
	const [weatherData, setWeatherData] = useState(null);

	useEffect(() => {
		const fetchWeatherData = async () => {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${
					city.split(',')[0]
				}&lon=${city.split(',')[1]}&units=imperial&appid=${
					process.env.REACT_APP_WEATHER_API_KEY
				}`
			);
			const data = await response.json();
			console.log(data);
		};

		fetchWeatherData();
	}, []);

	// console.log(weatherData);

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
					<p>Loading...</p>
				)}
			</div>
		</section>
	);
}

export default BreakingNewsSection;
