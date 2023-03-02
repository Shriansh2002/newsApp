import React from 'react';

const HeroSection = ({ newsId }) => {
	let newsTitle = newsId.charAt(0).toUpperCase() + newsId.slice(1);

	return (
		<section className="py-10">
			<div className="container mx-auto px-6 py-3">
				<div>
					<h2 className="text-4xl font-bold mb-2 text-center">
						Trending News in {newsTitle} Category
					</h2>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
