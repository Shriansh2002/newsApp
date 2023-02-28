import React from 'react';

function BreakingNewsSection() {
	return (
		<section className="py-20">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold mb-2">Breaking News</h2>
				<h3 className="text-2xl mb-8">
					Stay up-to-date with the latest news from around the world.
				</h3>
				<a
					href="/"
					className="bg-blue-700 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-600"
				>
					Read More
				</a>
			</div>
		</section>
	);
}

export default BreakingNewsSection;
