/**
 * Created by MIRZOEV A. on 04.11.2023
 */

import type {PropsWithChildren} from 'react';
import {memo, useEffect} from 'react';
import {useGetMessageFromMap} from '@/hooks/useGetMessageFromMap';
import {getLoadPlanMessage} from '@/utils/widgetMessages';
import {useGetPlaceUuid} from '@/hooks/useGetPlaceUuid.ts';
import {useGetMap} from '@/hooks/useGetMap.ts';

const Map = memo<PropsWithChildren>(() => {
    const {ref} = useGetMap();
    const placeUuid = useGetPlaceUuid();
    const {selectedPlanKey} = useGetMap();

    const {isReady} = useGetMessageFromMap();

    useEffect(() => {
        if (ref?.current?.contentWindow && isReady) {
            // TODO сбрасывать этаж при загрузке плана
            ref.current.contentWindow.postMessage(getLoadPlanMessage(placeUuid, selectedPlanKey), '*'); // '*' означает, что сообщение будет отправлено всем окнам.
        }
    }, [ref, isReady, placeUuid, selectedPlanKey]);

    return (
        <div className="flex size-full flex-col gap-y-4">
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
