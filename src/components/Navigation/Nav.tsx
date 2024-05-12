/**
 * Created by MIRZOEV A. on 07.08.2023
 */

import clsx from 'clsx';
import {memo, useCallback, useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import CollapseButton from './CollapseButton';
import LinksView from './LinksView';

const Nav = memo(() => {
    const {pathname} = useLocation();

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true);

    const toggle = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    useEffect(() => {
        if (pathname === '/') {
            navigate('subject', {replace: true});
        }
    }, [navigate, pathname]);

    return (
        <aside className={clsx('flex h-full flex-col justify-between bg-zinc-950', isOpen ? 'w-[250px]' : 'w-auto')}>
            <LinksView isOpen={isOpen} />

            <CollapseButton isOpen={isOpen} toggle={toggle} />
        </aside>
    );
});

export default Nav;
