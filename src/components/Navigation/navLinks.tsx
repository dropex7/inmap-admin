import OtherIcon from '@assets/other.svg?react';
import MapIcon from '@assets/map.svg?react';
import NewsIcon from '@assets/news.svg?react';

export const navLinks = [
    {
        icon: <MapIcon style={{minWidth: '20px'}} />,
        path: 'map',
        title: 'Карта',
    },
    {
        icon: <OtherIcon style={{minWidth: '20px'}} />,
        path: 'subject',
        title: 'Объекты',
    },
    {
        icon: <NewsIcon style={{minWidth: '20px'}} />,
        path: 'promo',
        title: 'Новости и акции',
    },
];
