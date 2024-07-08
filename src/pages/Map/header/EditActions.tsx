/**
 * Created by MIRZOEV A. on 12.05.2024
 */

import {memo, useCallback} from 'react';
import {Button} from 'antd';
import {RedoOutlined, UndoOutlined} from '@ant-design/icons';
import {getSyncPlanMessage, redoChanges, undoChanges} from '@/utils/widgetMessages.ts';
import {useMap} from '@/hooks/useMap.ts';
import {useGetPlaceUuid} from '@/hooks/useGetPlaceUuid.ts';

const EditActions = memo(() => {
    const {ref, toggleEditMode, planState} = useMap();

    const placeUuid = useGetPlaceUuid();
    const {selectedPlanKey} = useMap();

    const handleSavePlan = useCallback(() => {
        if (ref?.current?.contentWindow) {
            ref.current.contentWindow.postMessage(getSyncPlanMessage(placeUuid, selectedPlanKey), '*');
        }
        toggleEditMode();
    }, [selectedPlanKey, placeUuid, ref, toggleEditMode]);

    const handleRedo = useCallback(() => {
        if (ref?.current?.contentWindow) {
            ref.current.contentWindow.postMessage(redoChanges(), '*');
        }
    }, [ref]);

    const handleUndo = useCallback(() => {
        if (ref?.current?.contentWindow) {
            ref.current.contentWindow.postMessage(undoChanges(), '*');
        }
    }, [ref]);

    return (
        <div className="flex gap-3">
            <Button type="text" icon={<UndoOutlined />} disabled={!planState?.canUndo} onClick={handleUndo} />
            <Button type="text" icon={<RedoOutlined />} disabled={!planState?.canRedo} onClick={handleRedo} />

            {/*TODO НУЖЕН СБРОС ИЗМЕНЕНИЙ НА КАРТЕ*/}
            <Button onClick={toggleEditMode}>Отменить изменения</Button>
            <Button type="primary" onClick={handleSavePlan}>
                Сохранить изменения
            </Button>
        </div>
    );
});

export default EditActions;
