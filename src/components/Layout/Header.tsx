/**
 * Created by MIRZOEV A.on 09.04.2023
 */

import {useQuery} from '@apollo/client';
import {Button} from 'antd';
import {memo} from 'react';
import {Link} from 'react-router-dom';

import type {GetListOfPlacesQuery} from '../../generated/graphql';

import {useAuth} from '../../hooks/useAuth';
import {GET_PLACES} from '../../operations/place/query';
import PlaceSelect from '../../pages/Place/PlaceSelect';

const Header = memo(() => {
    const {logout} = useAuth();
    const {data} = useQuery<GetListOfPlacesQuery>(GET_PLACES);

    return (
        <header className="flex h-header items-center justify-between gap-x-6 border-b border-gray-300 border-opacity-20 bg-zinc-900 p-6">
            <Link to="/">
                <img alt="inMap" height={30} src="/inmap.svg" width={83} />
            </Link>

            <div className="flex gap-5">
                <PlaceSelect places={data?.places ?? []} />
                <Button onClick={() => logout()}>Log out</Button>
            </div>
        </header>
    );
});

export default Header;
