/**
 * Created by MIRZOEV A. on 09.08.2023
 */
import {Outlet} from 'react-router-dom';
import {useRecoilValue} from 'recoil';

import {placeAtom} from '../atoms/selectedPlace';
import {useQuery} from '@apollo/client';
import {GET_PLACE} from '../operations/place/query';
import type {GetPlaceQuery} from '../generated/graphql';
import {PlaceGlobalCtx} from '@/components/Place/PlaceGlobalCtx';

export function Component() {
    const placeId = useRecoilValue(placeAtom);

    const {
        data: placeResponse,
        error,
        loading,
    } = useQuery<GetPlaceQuery>(GET_PLACE, {
        variables: {uuid: placeId},
        skip: !placeId,
    });

    if (error) {
        return <div className="flex flex-auto flex-col items-center justify-center">Ошибка</div>;
    }

    if (!placeResponse || loading) {
        return <>Place is loading</>;
    }

    return (
        <PlaceGlobalCtx.Provider value={placeResponse.place}>
            <Outlet />
        </PlaceGlobalCtx.Provider>
    );
}
