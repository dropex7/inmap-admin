/**
 * Created by MIRZOEV A. on 05.01.2024
 */

import type {PropsWithChildren} from 'react';
import {memo, useCallback, useRef, useState} from 'react';
import {MapContext} from './MapContext';
import {useGetMessageFromMap} from '@/hooks/useGetMessageFromMap';
import {useGetPlace} from '@/hooks/useGetPlace.ts';

const MapProvider = memo<PropsWithChildren>(({children}) => {
    const {resetSelectedObject, selectedObjectOnMap} = useGetMessageFromMap();
    const {selectedPlan, initialLayerUuid} = useGetPlace();
    const ref = useRef<HTMLIFrameElement>(null);
    const [selectedPlanKey, setSelectedPlanKey] = useState<string>(selectedPlan?.key ?? '');
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedLayerUuid, setSelectedLayerUuid] = useState(initialLayerUuid);

    const toggleEditMode = useCallback(() => {
        setIsEditMode(prev => !prev);
    }, []);

    return (
        <MapContext.Provider
            value={{
                ref,
                selectedObject: selectedObjectOnMap,
                isEditMode,
                toggleEditMode,
                selectedPlanKey,
                setSelectedPlanKey,
                selectedLayerUuid,
                setSelectedLayerUuid,
                resetSelectedObject,
            }}
        >
            {children}
        </MapContext.Provider>
    );
});

export default MapProvider;
