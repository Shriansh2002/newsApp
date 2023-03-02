import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	Footer,
	Header,
	NewsContainer,
	NewsPageHeroSection,
} from '../components';

import { data } from '../content/data.json';

import NotFoundPage from './NotFoundPage';

const NewsPage = () => {
	const { newsId } = useParams();
	const [isAvail, setIsAvail] = useState(false);

	useEffect(() => {
		let check = (obj) => obj.name.toLowerCase() === newsId.toLowerCase();
		setIsAvail(data.some(check));
	}, []);

	return (
		<div className="Newspage min-h-screen flex flex-col justify-between">
			<Header />

			{isAvail ? (
				<>
					<NewsPageHeroSection newsId={newsId} />
					<NewsContainer newsId={newsId} />
				</>
			) : (
				<NotFoundPage />
			)}
			<Footer />
		</div>
	);
};

export default NewsPage;
