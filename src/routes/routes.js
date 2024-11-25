import DashboardPage from '../pages/DashboardPage';
import ArticlesPage from '../pages/ArticlesPage';
import LoginPage from '../pages/LoginPage';
import Profile from '../pages/Profile';
import NotFound from '../pages/404';
import Unauthorized from '../pages/403';

const routes = [
	{
		path: '/',
		element: <DashboardPage />,
		private: true,
	},
	{
		path: '/articles',
		element: <ArticlesPage />,
		private: true,
	},
	{
		path: '/profile',
		element: <Profile />,
		private: true,
	},
	{
		path: '/login',
		element: <LoginPage />,
		private: false,
	},
	{
		path: '/403',
		element: <Unauthorized />,
		private: false,
	},
	{
		path: '*',
		element: <NotFound />,
		private: false,
	},
];

export default routes;
