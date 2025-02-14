/**
 * Created by MIRZOEV A. on 07.08.2023
 */

import {memo} from 'react';
import {Outlet} from 'react-router-dom';

import Header from './Header';
import Nav from '../Navigation/Nav';

const Layout = memo(() => {
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <div className="flex">
                <Nav />
                <div className="h-[calc(100vh-64px)] w-full bg-zinc-900 md:overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
});

export default Layout;
