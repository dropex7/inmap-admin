/**
 * Created by MIRZOEV A. on 23.03.2024
 */

import {memo, useCallback, useContext} from 'react';
import {Button} from 'antd';
import {MapContext} from '@/pages/Map/MapContext.ts';
import {getSyncPlanMessage} from '@/utils/widgetMessages.ts';
import {PlaceGlobalCtx} from '@/components/Place/PlaceGlobalCtx.ts';
import {useRecoilValue} from 'recoil';
import {placeAtom} from '@/atoms/selectedPlace.ts';

const MapEditorHeader = memo(() => {
    const {ref, isEditMode, toggleEditMode} = useContext(MapContext);
    const place = useContext(PlaceGlobalCtx);
    const placeUuid = useRecoilValue(placeAtom);

    const handleSavePlan = useCallback(() => {
        if (ref?.current?.contentWindow) {
            ref.current.contentWindow.postMessage(getSyncPlanMessage(placeUuid, place.selectedPlan?.key), '*');
        }
        toggleEditMode();
    }, [place.selectedPlan?.key, placeUuid, ref, toggleEditMode]);

    return (
        <div className="flex items-center justify-end border-b border-zinc-700 p-4">
            {isEditMode ? (
                <Button size="large" type="primary" onClick={handleSavePlan}>
                    Сохранить изменения
                </Button>
            ) : (
                <Button size="large" onClick={toggleEditMode}>
                    Редактировать карту
                </Button>
            )}
        </div>
    );
});

export default MapEditorHeader;
