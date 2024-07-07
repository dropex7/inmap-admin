import OtherIcon from '@assets/other.svg?react';
import MapIcon from '@assets/map.svg?react';
import NewsIcon from '@assets/news.svg?react';
import {CarOutlined, HomeOutlined, LineChartOutlined, TranslationOutlined} from '@ant-design/icons';

export const navLinks = [
    {
        icon: <HomeOutlined style={{fontSize: '20px'}} />,
        path: 'home',
        title: 'Главная',
    },
    {
        icon: <MapIcon />,
        path: 'map',
        title: 'Карта',
    },
    {
        icon: <OtherIcon />,
        path: 'subject',
        title: 'Объекты',
    },
    {
        icon: <NewsIcon />,
        path: 'promo',
        title: 'Новости и акции',
    },
    {
        icon: <CarOutlined style={{fontSize: '20px'}} />,
        path: 'parking',
        title: 'Парковка',
    },
    {
        icon: <TranslationOutlined style={{fontSize: '20px'}} />,
        path: 'locale',
        title: 'Локализация',
    },
    {
        icon: <LineChartOutlined style={{fontSize: '20px'}} />,
        path: 'analytic',
        title: 'Аналитика',
    },
];
