import {ReactComponent as HomeIcon} from '../../assets/home.svg';
import {ReactComponent as OtherIcon} from '../../assets/other.svg';

export const navLinks = [
    {
        icon: <HomeIcon style={{minWidth: '20px'}} />,
        path: 'home',
        title: 'Главная',
    },
    {
        icon: <OtherIcon style={{minWidth: '20px'}} />,
        path: 'subject',
        title: 'Объекты',
    },
    {
        icon: <OtherIcon style={{minWidth: '20px'}} />,
        path: 'promo',
        title: 'Новости и акции',
    },
];
