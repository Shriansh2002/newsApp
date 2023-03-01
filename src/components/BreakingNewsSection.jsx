import React from 'react';
import { WeatherCard } from './';

function BreakingNewsSection() {
	const city = 'Greater Noida';
	const temperature = '24';
	const weather = 'Cloudy';
	const icon = 'http://openweathermap.org/img/wn/03d@2x.png';

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
				<WeatherCard
					city={city}
					temperature={temperature}
					weather={weather}
					icon={icon}
				/>
			</div>
		</section>
	);
}

export default BreakingNewsSection;
