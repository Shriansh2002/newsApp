import React from 'react';

const WeatherCard = ({ city, temperature, weather, icon }) => {
	return (
		<div className="bg-white rounded-lg shadow-lg p-4">
			<div className="flex items-center justify-between gap-4 mb-4">
				<h3 className="font-bold text-lg">{city}</h3>
				<div className="flex items-center">
					<div className="text-gray-700">{weather}</div>
				</div>
			</div>
			<div className="flex items-center justify-between">
				<p className="text-3xl font-bold">{temperature}&deg;</p>
				<img src={icon} alt={weather} className="w-10 h-10" />
			</div>
		</div>
	);
};

export default WeatherCard;
