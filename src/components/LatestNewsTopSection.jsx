const LatestNewsTopSection = () => {
	return (
		<div className="bg-white  shadow pb-2 overflow-hidden">
			<div className="h-64 bg-gray-200 overflow-hidden">
				<img
					src="https://picsum.photos/200/300"
					alt="news"
					className="w-full h-full object-cover object-center transition duration-300 hover:opacity-75"
				/>
			</div>
			<div className="px-4 py-2">
				<h2 className="text-lg font-bold mb-2">Lorem lore</h2>
				<p className="text-gray-700 text-sm mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Minima deserunt ratione perspiciatis. Temporibus delectus
					voluptas quo fuga officia cumque velit enim veritatis!
					Placeat hic temporibus, ea nostrum veritatis impedit, minima
					dignissimos quod reprehenderit eum dolorem. Accusantium,
					modi, cumque animi similique hic accusamus ex voluptas
					voluptatem porro ducimus voluptatum unde nisi recusandae ut
					voluptatibus inventore non ipsam incidunt repellat corporis
					exercitationem obcaecati? Nulla dignissimos inventore, eum
					nisi quos veritatis fuga id!
				</p>
				<a
					href="/"
					target="_blank"
					rel="noopener noreferrer"
					className="bg-blue-700 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-600"
				>
					Read More
				</a>
			</div>
		</div>
	);
};

export default LatestNewsTopSection;
