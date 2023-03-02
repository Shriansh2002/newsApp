import React from 'react';

const NewsPageCard = ({ news }) => {
	return (
		<>
			<div className="rounded overflow-hidden shadow-lg">
				<img
					className="w-full h-64"
					src={news.imageUrl}
					alt="Sunset in the mountains"
				/>
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">{news.title}</div>
					<p className="text-gray-700 text-base">{news.content}</p>
				</div>
			</div>
		</>
	);
};

export default NewsPageCard;
