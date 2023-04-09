/**
 * Created by MIRZOEV A.on 09.04.2023
 */

import {memo} from 'react';
import {Link} from 'react-router-dom';

import Nav from './Nav';

const Header = memo((): JSX.Element | null => {

    return (
        <header className="flex h-header items-center gap-x-6 bg-gray-900 px-6">
            <Link to="/">
                <img src="/white-among-us.svg" width={45} height={32} alt="Pulse Core" />
            </Link>

            <Nav />

            <span className="flex-auto" />
        </header>
    );
});

export default Header;
