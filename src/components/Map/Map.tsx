/**
 * Created by MIRZOEV A. on 04.11.2023
 */

import type {PropsWithChildren} from 'react';
import {memo, useContext, useEffect} from 'react';
import {useGetMessageFromMap} from '../../hooks/useGetMessageFromMap';
import {MapContext} from '../../pages/Map/MapContext';
import {useRecoilValue} from 'recoil';
import {placeAtom} from '../../atoms/selectedPlace';
import {useQuery} from '@apollo/client';
import {GET_PLACE} from '../../operations/place/query';
import type {GetPlaceQuery} from '../../generated/graphql';
import {getLoadPlanMessage} from '../../utils/widgetMessages';

const Map = memo<PropsWithChildren>(() => {
    const {ref} = useContext(MapContext);
    const placeUuid = useRecoilValue(placeAtom);

    const {data} = useQuery<GetPlaceQuery>(GET_PLACE, {
        variables: {uuid: placeUuid},
    });

    const {isReady} = useGetMessageFromMap();

    useEffect(() => {
        if (ref?.current?.contentWindow && isReady && data?.place.selectedPlanKey) {
            ref.current.contentWindow.postMessage(getLoadPlanMessage(placeUuid!, data.place.selectedPlanKey), '*'); // '*' означает, что сообщение будет отправлено всем окнам.
        }
    }, [ref, isReady, data, placeUuid]);

    return (
        <div className="flex h-full w-full flex-col gap-y-4 rounded-lg bg-white">
            <iframe
                width="100%"
                height="100%"
                ref={ref}
                src="https://inmap-interactive-map-embed.web.app/"
                title="Flutter App"
            />
        </div>
    );
});

export default Map;
