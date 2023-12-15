/**
 * Created by MIRZOEV A. on 15.12.2023
 */

import {memo} from 'react';
import {navLinks} from './navLinks';
import {NavLink} from 'react-router-dom';
import clsx from 'clsx';

interface LinksViewProps {
    isOpen: boolean;
}

const LinksView = memo<LinksViewProps>(({isOpen}) => {
    return (
        <nav className={clsx('flex flex-col gap-6 py-5', !isOpen && 'items-center')}>
            {navLinks.map(({icon, path, title}) => (
                <NavLink
                    className={({isActive}) =>
                        clsx(
                            'flex gap-3 px-4 leading-none no-underline',
                            isActive ? 'fill-lime-400 font-bold text-lime-400' : 'fill-neutral-500 text-neutral-500',
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
    );
});

export default LinksView;
