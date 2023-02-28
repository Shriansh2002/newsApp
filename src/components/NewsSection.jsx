import { useState } from 'react';

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
	]);

	return (
		<div className="bg-white py-8">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold mb-8">Latest News</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{newsData.map((article, _idx) => (
						<NewsCard article={article} key={_idx} />
					))}
				</div>
			</div>
		</div>
	);
};

export default NewsSection;

const NewsCard = ({ article }) => {
	return (
		<div className="p-2 bg-white rounded-lg border border-b-2 overflow-hidden">
			<div className="h-40 w-full bg-gray-200 overflow-hidden hover:scale-110 transition duration-400">
				<img
					src={article.image}
					alt={article.title}
					className="w-full h-full object-cover object-center transition duration-300 hover:opacity-75"
				/>
			</div>
			<div className="p-4">
				<h3 className="text-md font-bold mb-2">{article.title}</h3>
				<p className="text-sm text-gray-500 text-justify">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Veniam error reprehenderit laboriosam suscipit est totam
					dolore ducimus, a eius tenetur voluptates magnam omnis
					debitis cum! Officia ab debitis asperiores aspernatur ad,
					voluptatum quibusdam culpa recusandae eaque accusamus nulla
					ut aperiam?
				</p>
			</div>
		</div>
	);
};
