import { useState } from 'react';
import { LatestNewsTopSection, NewsCard } from './';

const NewsSection = () => {
	const [newsData, setNewsData] = useState([
		{
			id: 1,
			title: 'News 1',
			summary: 'News 1 description',
			image: 'https://picsum.photos/200/300',
		},
		{
			id: 2,
			title: 'News 2',
			summary: 'News 2 description',
			image: 'https://picsum.photos/200/300',
		},
		{
			id: 3,
			title: 'News 3',
			summary: 'News 3 description',
			image: 'https://picsum.photos/200/300',
		},
		{
			id: 4,
			title: 'News 4',
			summary: 'News 4 description',
			image: 'https://picsum.photos/200/300',
		},
		{
			id: 1,
			title: 'News 1',
			summary: 'News 1 description',
			image: 'https://picsum.photos/200/300',
		},
		{
			id: 2,
			title: 'News 2',
			summary: 'News 2 description',
			image: 'https://picsum.photos/200/300',
		},
		{
			id: 3,
			title: 'News 3',
			summary: 'News 3 description',
			image: 'https://picsum.photos/200/300',
		},
		{
			id: 4,
			title: 'News 4',
			summary: 'News 4 description',
			image: 'https://picsum.photos/200/300',
		},

		{
			id: 1,
			title: 'News 1',
			summary: 'News 1 description',
			image: 'https://picsum.photos/200/300',
		},
		{
			id: 2,
			title: 'News 2',
			summary: 'News 2 description',
			image: 'https://picsum.photos/200/300',
		},
		{
			id: 3,
			title: 'News 3',
			summary: 'News 3 description',
			image: 'https://picsum.photos/200/300',
		},
		{
			id: 4,
			title: 'News 4',
			summary: 'News 4 description',
			image: 'https://picsum.photos/200/300',
		},
		{
			id: 1,
			title: 'News 1',
			summary: 'News 1 description',
			image: 'https://picsum.photos/200/300',
		},
		{
			id: 2,
			title: 'News 2',
			summary: 'News 2 description',
			image: 'https://picsum.photos/200/300',
		},
		{
			id: 3,
			title: 'News 3',
			summary: 'News 3 description',
			image: 'https://picsum.photos/200/300',
		},
		{
			id: 4,
			title: 'News 4',
			summary: 'News 4 description',
			image: 'https://picsum.photos/200/300',
		},
	]);

	return (
		<div className="bg-white py-4">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold mb-8">Latest News</h2>
				<LatestNewsTopSection />
				<div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
					{newsData.map((article, _idx) => (
						<NewsCard article={article} key={_idx} />
					))}
				</div>
			</div>
		</div>
	);
};

export default NewsSection;
