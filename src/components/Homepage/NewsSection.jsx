import axios from 'axios';
import { useEffect, useState } from 'react';
import { LatestNewsTopSection, Loader, NewsCard } from '..';

const NewsSection = () => {
	const [newsData, setNewsData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get('https://inshorts.deta.dev/news?category=')
			.then((res) => {
				setNewsData(res.data.data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="bg-white p-4">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold mb-8">Latest News</h2>
				<LatestNewsTopSection />
				{isLoading ? (
					<Loader />
				) : (
					<div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
						{newsData.map((article, _idx) => (
							<NewsCard article={article} key={_idx} />
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default NewsSection;
