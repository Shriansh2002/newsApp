import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

// Pages
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/news/:newsId',
		element: <NewsPage />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<Fragment>
		<RouterProvider router={router} />
	</Fragment>
);
