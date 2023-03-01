import {
	Header,
	BreakingNewsSection,
	NewsSection,
	FeaturedSection,
} from './components';

function App() {
	return (
		<div className="App">
			<Header />
			<BreakingNewsSection />
			<div className="container flex mx-auto gap-12">
				<div className="w-4/5">
					<NewsSection />
				</div>
				<div className="w-1/5">
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
					<FeaturedSection
						content={{
							title: 'Sports 🏅',
							apiTitle: 'Sports',
							count: 5,
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
