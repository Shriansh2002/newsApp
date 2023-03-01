import React, { useEffect, useState } from 'react';
import { WeatherCard } from './';

function BreakingNewsSection() {
	const [weatherData, setWeatherData] = useState(null);

	// useEffect(() => {
	// 	const fetchWeatherData = async () => {
	// 		let API_KEY = '';

	// 		let weeklyWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=28.704060&lon=77.102493&appid=${API_KEY}`;

	// 		await fetch(weeklyWeatherUrl).then((response) =>
	// 			console.log(response.json())
	// 		);
	// 	};

	// 	fetchWeatherData();
	// }, []);

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
