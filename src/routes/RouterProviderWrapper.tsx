/**
 * Created by VIATKIN A.A. on 03.04.2023
 */

import {memo} from 'react';
import {RouterProvider} from 'react-router-dom';

import getRouter from './router';

const RouterProviderWrapper = memo((): JSX.Element => {
    return <RouterProvider router={getRouter()} />;
});

export default RouterProviderWrapper;
