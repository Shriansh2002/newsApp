import { useParams } from 'react-router-dom';
import { Header, NewsPageHeroSection } from '../components';

const NewsPage = () => {
	const { newsId } = useParams();

	return (
		<div className="Newspage">
			<Header />
			<NewsPageHeroSection newsId={newsId} />
		</div>
	);
};

export default NewsPage;
