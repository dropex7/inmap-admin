import {Outlet} from 'react-router-dom';
import {createBrowserRouter} from 'react-router-dom';

import App from '../App';
import PageError from './PageError';
const router = createBrowserRouter([
    {
        children: [
            {
                children: [
                    {
                        children: [
                            {
                                children: [
                                    {
                                        errorElement: <PageError />,
                                        index: true,
                                        lazy: () => import('../pages/Template/Page'),
                                    },
                                    {
                                        errorElement: <PageError />,
                                        lazy: () => import('../pages/Subject/form/Page'),
                                        path: ':templateId',
                                    },
                                ],
                                element: <Outlet />,
                                errorElement: <PageError />,
                                path: 'create-subject',
                            },
                            {
                                errorElement: <PageError />,
                                lazy: () => import('../pages/Subject/Item/Page'),
                                path: ':subjectId',
                            },
                            {
                                errorElement: <PageError />,
                                index: true,
                                lazy: () => import('../pages/Subject/PageList'),
                            },
                        ],
                        errorElement: <PageError />,
                        lazy: () => import('../components/PageWrapper'),
                        path: ':id',
                    },
                    {
                        index: true,
                        lazy: () => import('../pages/Place/GlobalSelectPlace'),
                    },
                ],
                element: <Outlet />,
                errorElement: <PageError />,
                path: 'subject',
            },
            {
                children: [
                    {
                        children: [
                            {
                                errorElement: <PageError />,
                                lazy: () => import('../pages/Promo/PromoForm'),
                                path: 'create-promo',
                            },
                            {
                                errorElement: <PageError />,
                                index: true,
                                lazy: () => import('../pages/Promo/Page'),
                            },
                        ],
                        errorElement: <PageError />,
                        lazy: () => import('../components/PageWrapper'),
                        path: ':id',
                    },
                    {
                        index: true,
                        lazy: () => import('../pages/Place/GlobalSelectPlace'),
                    },
                ],
                element: <Outlet />,
                errorElement: <PageError />,
                path: 'promo',
            },
            {
                children: [
                    {
                        children: [
                            {
                                errorElement: <PageError />,
                                index: true,
                                lazy: () => import('../pages/Home/Page'),
                            },
                        ],
                        errorElement: <PageError />,
                        lazy: () => import('../components/PageWrapper'),
                        path: ':id',
                    },
                    {
                        index: true,
                        lazy: () => import('../pages/Place/GlobalSelectPlace'),
                    },
                ],
                element: <Outlet />,
                errorElement: <PageError />,
                path: 'home',
            },
            {
                element: <div className="text-white">Нет такой странички бро</div>,
                path: '*',
            },
        ],
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
