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
                        lazy: () => import('@/pages/subject/form/Page'),
                        path: ':templateId',
                    },
                ],
            },
            {
                errorElement: <PageError />,
                lazy: () => import('@/pages/subject/form/Page'),
                path: ':subjectId',
            },
            {
                errorElement: <PageError />,
                index: true,
                lazy: () => import('@/pages/subject/PageList'),
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
                lazy: () => import('@/pages/promo/form/PromoForm'),
                path: 'create-promo',
            },
            {
                errorElement: <PageError />,
                lazy: () => import('@/pages/promo/form/PromoForm'),
                path: ':promoId',
            },
            {
                errorElement: <PageError />,
                index: true,
                lazy: () => import('@/pages/promo/Page'),
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
                lazy: () => import('@/pages/map/Page'),
            },
        ],
        lazy: () => import('../components/PageWrapper'),
        errorElement: <PageError />,
        path: 'map',
    },
    {
        lazy: () => import('@/router/NotFoundPage'),
        path: '*',
    },
];
