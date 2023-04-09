/**
 * Created by MIRZOEV A. on 09.04.2023
 */

import clsx from 'clsx';
import {memo} from 'react';
import {NavLink} from 'react-router-dom';

import additional from '../routes/routes';

const Nav = memo((): JSX.Element | null => {
    return (
        <nav className="flex items-center self-stretch">
            {additional.map(({path, handle}) => (
                <NavLink
                    key={path || '.'}
                    to={path || '.'}
                    className={({isActive}) => clsx('px-4', isActive ? 'text-blue-500' : 'text-white/70')}
                >
                    {handle?.title}
                </NavLink>
            ))}
        </nav>
    );
});

export default Nav;
