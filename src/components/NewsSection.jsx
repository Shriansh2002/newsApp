import axios from 'axios';
import { useEffect, useState } from 'react';
import { LatestNewsTopSection, NewsCard } from './';

const NewsSection = () => {
	const [newsData, setNewsData] = useState([]);

	useEffect(() => {
		axios
			.get('https://inshorts.deta.dev/news?category=national')
			.then((res) => {
				setNewsData(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="bg-white py-4">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold mb-8">Latest News</h2>
				<LatestNewsTopSection />
				<div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
					{newsData.map((article, _idx) => (
						<NewsCard article={article} key={_idx} />
					))}
				</div>
			</div>
		</div>
	);
};

export default NewsSection;
