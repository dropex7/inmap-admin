import {createBrowserRouter} from 'react-router-dom';

import App from '../App';
import PageError from './PageError';
import {authorizedAppRoutes} from './routes';
const router = createBrowserRouter([
    {
        children: authorizedAppRoutes,
        element: <App />,
        errorElement: <PageError />,
        path: '/',
    },
    {
        errorElement: <PageError />,
        lazy: () => import('../pages/Login/Page'),
        path: 'login',
    },
]);

export {router};
