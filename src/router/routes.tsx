import PageError from './PageError';
import {Outlet} from 'react-router-dom';

export const authorizedAppRoutes = [
    {
        children: [
            {
                element: <Outlet />,
                errorElement: <PageError />,
                path: 'create-subject',
                children: [
                    {
                        errorElement: <PageError />,
                        lazy: () => import('../pages/Subject/form/Page'),
                        path: ':templateId',
                    },
                ],
            },
            {
                errorElement: <PageError />,
                lazy: () => import('../pages/Subject/form/Page'),
                path: ':subjectId',
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
                lazy: () => import('../pages/Promo/form/PromoForm'),
                path: ':promoId',
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
                lazy: () => import('../pages/Map/Page'),
            },
        ],
        lazy: () => import('../components/PageWrapper'),
        errorElement: <PageError />,
        path: 'map',
    },
    {
        element: <div className="text-white">Нет такой странички бро</div>,
        path: '*',
    },
];
