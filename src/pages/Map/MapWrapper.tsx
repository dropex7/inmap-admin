/**
 * Created by MIRZOEV A. on 05.01.2024
 */

import type {PropsWithChildren} from 'react';
import {memo, useCallback, useContext, useEffect, useRef, useState} from 'react';
import type {SelectedObjectFromFlutter} from './MapContext';
import {MapContext} from './MapContext';
import {FLUTTER_MESSAGE} from '@/components/Map/types';
import {useGetMessageFromMap} from '@/hooks/useGetMessageFromMap';
import {PlaceGlobalCtx} from '@/components/Place/PlaceGlobalCtx.ts';

const MapWrapper = memo<PropsWithChildren>(({children}) => {
    const {message} = useGetMessageFromMap();
    const {selectedPlan} = useContext(PlaceGlobalCtx);
    const ref = useRef<HTMLIFrameElement>(null);
    const [selectedObject, setSelectedObject] = useState<SelectedObjectFromFlutter>();
    const [selectedPlanKey, setSelectedPlanKey] = useState<string>(selectedPlan?.key ?? '');
    const [isEditMode, setIsEditMode] = useState(false);

    const toggleEditMode = useCallback(() => {
        setIsEditMode(prev => !prev);
    }, []);

    useEffect(() => {
        if (message?.type === FLUTTER_MESSAGE.objectSelected) {
            setSelectedObject(message.data);
        }
    }, [message]);

    return (
        <MapContext.Provider
            value={{ref, selectedObject, isEditMode, toggleEditMode, selectedPlanKey, setSelectedPlanKey}}
        >
            {children}
        </MapContext.Provider>
    );
});

export default MapWrapper;
