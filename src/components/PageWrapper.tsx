/**
 * Created by MIRZOEV A. on 09.08.2023
 */
import {LoadingOutlined} from '@ant-design/icons';
import {useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import {useRecoilState} from 'recoil';

import {placeAtom} from '../atoms/selectedPlace';
import {PlaceGlobalCtx} from '../pages/Place/PlaceGlobalCtx';
import {useQuery} from '@apollo/client';
import type {GetListOfPlacesQuery} from '../generated/graphql';
import {GET_PLACES} from '../operations/place/query';

export function Component() {
    const [placeId, setPlaceId] = useRecoilState(placeAtom);
    const {data, error, loading} = useQuery<GetListOfPlacesQuery>(GET_PLACES);

    useEffect(() => {
        if (!placeId && data) {
            setPlaceId(data.places[0].uuid);
        }
    }, [data, placeId, setPlaceId]);

    if (loading) {
        return (
            <div className="flex flex-auto flex-col items-center justify-center">
                <LoadingOutlined />
            </div>
        );
    }

    if (error) {
        return <div className="flex flex-auto flex-col items-center justify-center">Ошибка</div>;
    }

    return (
        <PlaceGlobalCtx.Provider value={placeId}>
            <Outlet />
        </PlaceGlobalCtx.Provider>
    );
}
