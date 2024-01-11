/**
 * Created by MIRZOEV A. on 05.01.2024
 */

import type {PropsWithChildren} from 'react';
import {memo, useEffect, useRef, useState} from 'react';
import type {SelectedObjectFromFlutter} from './MapContext';
import {MapContext} from './MapContext';
import {FLUTTER_MESSAGE} from '@/components/Map/types';
import {useGetMessageFromMap} from '@/hooks/useGetMessageFromMap';

const MapWrapper = memo<PropsWithChildren>(({children}) => {
    const {message} = useGetMessageFromMap();
    const ref = useRef<HTMLIFrameElement>(null);
    const [selectedObject, setSelectedObject] = useState<SelectedObjectFromFlutter>();

    useEffect(() => {
        if (message?.type === FLUTTER_MESSAGE.objectSelected) {
            setSelectedObject(message.data);
        }
    }, [message]);

    return <MapContext.Provider value={{ref, selectedObject}}>{children}</MapContext.Provider>;
});

export default MapWrapper;
