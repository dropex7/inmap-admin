import PageError from './PageError';
import {Outlet} from 'react-router-dom';

export const authorizedAppRoutes = [
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
                element: <Outlet />,
                path: ':subjectId',
                children: [
                    {
                        errorElement: <PageError />,
                        lazy: () => import('../pages/Subject/form/Page'),
                        path: 'change-subject',
                    },
                    {
                        errorElement: <PageError />,
                        index: true,
                        lazy: () => import('../pages/Subject/Item/Page'),
                    },
                ],
            },
            {
                errorElement: <PageError />,
                index: true,
                lazy: () => import('../pages/Subject/PageList'),
            },
        ],
        lazy: () => import('../components/PageWrapper'),
        errorElement: <PageError />,
        path: 'subject',
    },
    {
        children: [
            {
                errorElement: <PageError />,
                lazy: () => import('../pages/Promo/form/PromoForm'),
                path: 'create-promo',
            },
            {
                errorElement: <PageError />,
                index: true,
                lazy: () => import('../pages/Promo/Page'),
            },
        ],
        lazy: () => import('../components/PageWrapper'),
        errorElement: <PageError />,
        path: 'promo',
    },
    {
        children: [
            {
                errorElement: <PageError />,
                index: true,
                lazy: () => import('../pages/Home/Page'),
            },
        ],
        lazy: () => import('../components/PageWrapper'),
        errorElement: <PageError />,
        path: 'home',
    },
    {
        element: <div className="text-white">Нет такой странички бро</div>,
        path: '*',
    },
];
