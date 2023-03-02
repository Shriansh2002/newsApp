import { useParams } from 'react-router-dom';
import {
	Header,
	BreakingNewsSection,
	NewsSection,
	FeaturedSection,
	Footer,
} from '../components';

const NewsPage = () => {
	const { newsId } = useParams();

	return (
		<div className="Newspage">
			<Header />
		</div>
	);
};

export default NewsPage;
