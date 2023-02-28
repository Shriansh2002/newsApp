import React from 'react';

const FeaturedSection = ({ content }) => {
	return (
		<div className="bg-white py-8">
			<div className="container mx-auto">
				<h2 className="text-xl font-bold mb-8 text-center">
					{content.title}
				</h2>
				<ul className="flex flex-col gap-2 text-gray-500 ml-4">
					{...Array(content.count)
						.fill()
						.map((_, idx) => (
							<li className="p-2 rounded-lg list-disc ">
								News 1 description
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};

export default FeaturedSection;
