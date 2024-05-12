import {useCallback, useEffect, useState} from 'react';
import type {FlutterMessage} from '@/components/Map/types';
import {FLUTTER_MESSAGE} from '@/components/Map/types';
import type {SelectedObjectFromFlutter} from '@/pages/map/MapContext.ts';

export function useGetMessageFromMap() {
    const [isReady, setIsReady] = useState(false);
    const [selectedObjectOnMap, setSelectedObjectOnMap] = useState<SelectedObjectFromFlutter>();

    const resetSelectedObject = useCallback(() => {
        setSelectedObjectOnMap(undefined);
    }, []);

    // This hook is listening an event that came from the Iframe
    useEffect(() => {
        const handler = (ev: MessageEvent<FlutterMessage>) => {
            switch (ev.data.type) {
                case FLUTTER_MESSAGE.ready: {
                    setIsReady(true);
                    break;
                }
                case FLUTTER_MESSAGE.objectSelected: {
                    setSelectedObjectOnMap(ev.data.data);
                    break;
                }
            }
        };

        window.addEventListener('message', handler);

        // Don't forget to remove addEventListener
        return () => {
            setSelectedObjectOnMap(undefined);
            window.removeEventListener('message', handler);
        };
    }, []);

    return {isReady, selectedObjectOnMap, resetSelectedObject};
}
