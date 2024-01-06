import {ReactComponent as OtherIcon} from '../../assets/other.svg';
import {ReactComponent as MapIcon} from '../../assets/map.svg';
import {ReactComponent as NewsIcon} from '../../assets/news.svg';

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
