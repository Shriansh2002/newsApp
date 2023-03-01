import React from 'react';

const WeatherCard = ({ city, temperature, weatherIcon, description }) => {
	return (
		<div className="bg-gray-100 rounded-lg w-64 p-4 cursor-pointer hover:bg-gray-200 hover:text-gray-700 shadow-xl">
			<h2 className="text-lg mb-2 text-center font-bold text-gray-700 uppercase">
				{city}
			</h2>
			<div className="flex items-center mb-4 justify-evenly">
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
