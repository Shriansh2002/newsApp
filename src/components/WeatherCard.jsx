import React from 'react';

const WeatherCard = ({ city, temperature, weatherIcon, description }) => {
	return (
		<div className="bg-gray-100 rounded-lg shadow-md p-4">
			<h2 className="text-lg font-medium mb-2">{city}</h2>
			<div className="flex items-center mb-4">
				<img
					src={weatherIcon}
					alt={description}
					className="w-12 h-12 mr-4"
				/>
				<div>
					<span className="text-2xl font-semibold">
						{temperature}°C
					</span>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};
export default WeatherCard;
