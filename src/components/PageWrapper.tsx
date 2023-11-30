/**
 * Created by MIRZOEV A. on 09.08.2023
 */
import {LoadingOutlined} from '@ant-design/icons';
import {useEffect} from 'react';
import {Outlet, useParams} from 'react-router-dom';
import {useRecoilState} from 'recoil';

import {placeAtom} from '../atoms/selectedPlace';
import {PlaceGlobalCtx} from '../pages/Place/PlaceGlobalCtx';

export function Component() {
    const {id} = useParams<{id: string}>();
    const [placeId, setPlaceId] = useRecoilState(placeAtom);

    const hasPlace = !!placeId && placeId === id;

    useEffect(() => {
        if (!hasPlace && id) {
            setPlaceId(id);
        }
    }, [id, setPlaceId, hasPlace]);

    if (!hasPlace)
        return (
            <div className="flex flex-auto flex-col items-center justify-center">
                <LoadingOutlined />
            </div>
        );

    return (
        <PlaceGlobalCtx.Provider value={placeId}>
            <Outlet />
        </PlaceGlobalCtx.Provider>
    );
}
