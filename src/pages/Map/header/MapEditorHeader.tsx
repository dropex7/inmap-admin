/**
 * Created by MIRZOEV A. on 23.03.2024
 */

import {memo, useCallback} from 'react';
import {Button} from 'antd';
import {getSyncPlanMessage} from '@/utils/widgetMessages.ts';

import PlanSelect from '@/pages/Map/header/PlanSelect.tsx';
import {useGetPlaceUuid} from '@/hooks/useGetPlaceUuid.ts';
import {useGetMap} from '@/hooks/useGetMap.ts';

const MapEditorHeader = memo(() => {
    const {ref, isEditMode, toggleEditMode} = useGetMap();
    const placeUuid = useGetPlaceUuid();
    const {selectedPlanKey} = useGetMap();

    const handleSavePlan = useCallback(() => {
        if (ref?.current?.contentWindow) {
            ref.current.contentWindow.postMessage(getSyncPlanMessage(placeUuid, selectedPlanKey), '*');
        }
        toggleEditMode();
    }, [selectedPlanKey, placeUuid, ref, toggleEditMode]);

    return (
        <div className="flex items-center justify-between border-b border-zinc-700 p-4">
            <PlanSelect />
            {isEditMode ? (
                <Button type="primary" onClick={handleSavePlan}>
                    Сохранить изменения
                </Button>
            ) : (
                <Button onClick={toggleEditMode}>Редактировать карту</Button>
            )}
        </div>
    );
});

export default MapEditorHeader;
