const NewsCard = ({ article }) => {
	return (
		<a href={article?.readMoreUrl} target="_blank">
			<div className="p-2 h-20 bg-white flex gap-1 justify-between border overflow-hidden">
				<div className="flex flex-col">
					<h3 className="text-xs font-medium">{article.title}</h3>
				</div>
				<div className="bg-gray-200 transition duration-400">
					<img
						src={article.imageUrl}
						alt={article.title}
						className="w-36 transition duration-300 hover:opacity-75 object-cover"
					/>
				</div>
			</div>
		</a>
	);
};

export default NewsCard;
