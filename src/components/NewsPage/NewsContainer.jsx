import axios from 'axios';
import { useEffect, useState } from 'react';
import { NewsPageCard } from '../';

const NewsContainer = ({ newsId }) => {
	const [newsData, setNewsData] = useState([]);

	useEffect(() => {
		axios
			.get(`https://inshorts.deta.dev/news?category=${newsId}`)
			.then((res) => {
				setNewsData(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<section className="py-10">
			<div className="container mx-auto px-6 py-3">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{newsData.map((news, _idx) => (
						<NewsPageCard key={_idx} news={news} />
					))}
				</div>
			</div>
		</section>
	);
};

export default NewsContainer;
