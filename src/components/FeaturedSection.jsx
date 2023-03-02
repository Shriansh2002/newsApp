import { useEffect, useState } from 'react';

const FeaturedSection = ({ content }) => {
	const [newsTitles, setNewsTitles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(
				`https://inshorts.deta.dev/news?category=${content.apiTitle.toLowerCase()}`
			);
			const data = await res.json();
			setNewsTitles(data.data);
			setIsLoading(false);
		};
		fetchData();
	}, []);

	newsTitles.length = content.count;

	return (
		<div className="bg-white py-8">
			<>
				{isLoading ? (
					<p className="text-center text-gray-500">Loading...</p>
				) : (
					<>
						{newsTitles.length === 0 ? null : (
							<div className="container mx-auto">
								<h2 className="text-xl font-bold mb-8 text-center">
									{content.title}
								</h2>
								<ul className="flex flex-col gap-2 text-gray-500 ml-4">
									{newsTitles.map((item, _idx) => (
										<a
											href={item.readMoreUrl}
											target="_blank"
											key={_idx}
											className="p-2 text-xs rounded-lg list-disc hover:underline"
										>
											{item.title}
										</a>
									))}
								</ul>
							</div>
						)}
					</>
				)}
			</>
		</div>
	);
};

export default FeaturedSection;
