import { NewsPageCard } from '../';

const NewsContainer = () => {
	// Logic to fetch news from API goes here

	return (
		<section className="py-10">
			<div className="container mx-auto px-6 py-3">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
					{...Array(10).fill(<NewsPageCard />)}
				</div>
			</div>
		</section>
	);
};

export default NewsContainer;
