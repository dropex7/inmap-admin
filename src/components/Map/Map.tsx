/**
 * Created by MIRZOEV A. on 04.11.2023
 */

import type {PropsWithChildren} from 'react';
import {memo, useContext, useEffect} from 'react';
import {useGetMessageFromMap} from '@/hooks/useGetMessageFromMap';
import {MapContext} from '@/pages/Map/MapContext';
import {useRecoilValue} from 'recoil';
import {placeAtom} from '@/atoms/selectedPlace';
import {getLoadPlanMessage} from '@/utils/widgetMessages';
import {PlaceGlobalCtx} from '@/components/Place/PlaceGlobalCtx';

const Map = memo<PropsWithChildren>(() => {
    const {ref} = useContext(MapContext);
    const placeUuid = useRecoilValue(placeAtom);
    const place = useContext(PlaceGlobalCtx);

    const {isReady} = useGetMessageFromMap();

    useEffect(() => {
        if (ref?.current?.contentWindow && isReady) {
            ref.current.contentWindow.postMessage(getLoadPlanMessage(placeUuid, place.selectedPlan?.key), '*'); // '*' означает, что сообщение будет отправлено всем окнам.
        }
    }, [ref, isReady, placeUuid, place.selectedPlan?.key]);

    return (
        <div className="flex h-full w-full flex-col gap-y-4">
            <iframe
                className="rounded-r-xl"
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
