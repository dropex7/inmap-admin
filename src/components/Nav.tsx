/**
 * Created by MIRZOEV A. on 07.08.2023
 */

import {Button} from 'antd';
import clsx from 'clsx';
import {memo, useEffect, useState} from 'react';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';

import {ReactComponent as HomeIcon} from '../assets/home.svg';
import {ReactComponent as OtherIcon} from '../assets/other.svg';

const links = [
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

const Nav = memo(() => {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        if (pathname === '/') {
            navigate('subject', {replace: true});
        }
    }, [navigate, pathname]);

    return (
        <aside className={clsx('flex h-full flex-col justify-between bg-zinc-900', isOpen ? 'w-[15%]' : 'w-auto')}>
            <nav className={clsx('flex flex-col gap-6 py-5', !isOpen && 'items-center')}>
                {links.map(({icon, path, title}) => (
                    <NavLink
                        className={({isActive}) =>
                            clsx(
                                'flex gap-3 px-4 leading-none no-underline',
                                isActive
                                    ? 'fill-lime-400 font-bold text-lime-400'
                                    : 'fill-neutral-500 text-neutral-500',
                            )
                        }
                        key={path}
                        to={path}
                    >
                        <div className="flex items-center gap-3 hover:fill-lime-300 hover:text-lime-300">
                            {icon}
                            {isOpen && <span>{title}</span>}
                        </div>
                    </NavLink>
                ))}
            </nav>
            <Button
                className="inline-flex items-center justify-center gap-2.5 border-t border-zinc-800 p-5"
                onClick={() => setIsOpen(prev => !prev)}
                type="text"
            >
                <img alt="collapse" height={20} src={isOpen ? '/icons/collapse.svg' : '/icons/expand.svg'} width={20} />
                <div className="text-sm font-semibold leading-none text-neutral-500">{isOpen ? 'Свернуть' : null}</div>
            </Button>
        </aside>
    );
});

export default Nav;
