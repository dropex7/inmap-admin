/**
 * Created by MIRZOEV A. on 23.03.2024
 */

import {memo, useCallback, useContext, useMemo} from 'react';
import {Button, Select} from 'antd';
import {MapContext} from '@/pages/Map/MapContext.ts';
import {getSyncPlanMessage} from '@/utils/widgetMessages.ts';
import {useRecoilValue} from 'recoil';
import {placeAtom} from '@/atoms/selectedPlace.ts';
import {useQuery} from '@apollo/client';
import {GET_PLACE_PLANS} from '@/operations/place/query.ts';
import type {GetPlansOfPlaceQuery} from '@/generated/graphql.ts';
import type {DefaultOptionType} from 'antd/es/select';

const MapEditorHeader = memo(() => {
    const {ref, isEditMode, toggleEditMode} = useContext(MapContext);
    const placeUuid = useRecoilValue(placeAtom);
    const {selectedPlanKey, setSelectedPlanKey} = useContext(MapContext);

    const {data} = useQuery<GetPlansOfPlaceQuery>(GET_PLACE_PLANS, {
        variables: {
            placeUuid,
        },
    });

    const planOptions = useMemo<Array<DefaultOptionType>>(
        () => data?.plansOfPlace.map(({title, key}) => ({label: title, value: key})) ?? [],
        [data],
    );

    const handleSavePlan = useCallback(() => {
        if (ref?.current?.contentWindow) {
            ref.current.contentWindow.postMessage(getSyncPlanMessage(placeUuid, selectedPlanKey), '*');
        }
        toggleEditMode();
    }, [selectedPlanKey, placeUuid, ref, toggleEditMode]);

    return (
        <div className="flex items-center justify-between border-b border-zinc-700 p-4">
            <Select value={selectedPlanKey} onChange={setSelectedPlanKey} options={planOptions} />
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
