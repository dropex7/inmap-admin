/**
 * Created by MIRZOEV A. on 23.03.2024
 */

import {memo, useCallback} from 'react';
import {Button} from 'antd';
import {getSyncPlanMessage} from '@/utils/widgetMessages.ts';

import PlanSelect from '@/pages/map/header/PlanSelect.tsx';
import {useGetPlaceUuid} from '@/hooks/useGetPlaceUuid.ts';
import {useMap} from '@/hooks/useMap.ts';
import {StepBackwardOutlined, StepForwardOutlined} from '@ant-design/icons';

const MapEditorHeader = memo(() => {
    const {ref, isEditMode, toggleEditMode} = useMap();
    const placeUuid = useGetPlaceUuid();
    const {selectedPlanKey} = useMap();

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
                <div className="flex gap-3">
                    {/*TODO ДВИЖЕНИЕ ПО ИСТОРИИ ИЗМЕНЕНИЙ*/}
                    <Button type="text" icon={<StepBackwardOutlined />} />
                    <Button type="text" icon={<StepForwardOutlined />} />

                    {/*TODO НУЖЕН СБРОС ИЗМЕНЕНИЙ НА КАРТЕ*/}
                    <Button onClick={toggleEditMode}>Отменить изменения</Button>
                    <Button type="primary" onClick={handleSavePlan}>
                        Сохранить изменения
                    </Button>
                </div>
            ) : (
                <Button onClick={toggleEditMode}>Редактировать карту</Button>
            )}
        </div>
    );
});

export default MapEditorHeader;
