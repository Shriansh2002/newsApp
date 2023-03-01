import {
	Header,
	BreakingNewsSection,
	NewsSection,
	FeaturedSection,
	Footer,
} from './components';

function App() {
	return (
		<div className="App">
			<Header />
			<BreakingNewsSection />
			<div className="container flex flex-col md:flex-row mx-auto gap-12">
				<div className="w-full md:w-4/5">
					<NewsSection />
				</div>
				<div className="w-full md:w-1/5">
					<FeaturedSection
						content={{
							title: 'Business 💼',
							apiTitle: 'business',
							count: 5,
						}}
					/>
					<FeaturedSection
						content={{
							title: 'Bollywood 🎥',
							apiTitle: 'Bollywood',
							count: 5,
						}}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
