const NewsCard = ({ article }) => {
	return (
		<div className="p-2 bg-white flex gap-1 justify-between border overflow-hidden">
			<h3 className="text-sm font-medium">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Aperiam, perferendis.
			</h3>
			<div className="bg-gray-200 overflow-hidden transition duration-400">
				<img
					src={article.image}
					alt={article.title}
					className="w-36 object-cover object-center transition duration-300 hover:opacity-75"
				/>
			</div>
		</div>
	);
};

export default NewsCard;
