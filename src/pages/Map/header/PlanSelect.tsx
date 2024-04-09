/**
 * Created by MIRZOEV A. on 09.04.2024
 */

import {memo, useCallback, useEffect, useMemo} from 'react';
import {Button, Select} from 'antd';
import type {DefaultOptionType} from 'antd/es/select';
import {useMutation, useQuery} from '@apollo/client';
import type {GetPlansOfPlaceQuery} from '@/generated/graphql.ts';
import {GET_PLACE_PLANS} from '@/operations/place/query.ts';
import {useGetPlaceUuid} from '@/hooks/useGetPlaceUuid.ts';
import {useGetMap} from '@/hooks/useGetMap.ts';
import {UPDATE_PLACE_PLAN} from '@/operations/place/mutation.ts';

interface PlanSelectProps {}

const PlanSelect = memo<PlanSelectProps>(() => {
    const placeUuid = useGetPlaceUuid();
    const {selectedPlanKey, setSelectedPlanKey} = useGetMap();
    const [updatePlacePlan, {error}] = useMutation(UPDATE_PLACE_PLAN);

    const {data} = useQuery<GetPlansOfPlaceQuery>(GET_PLACE_PLANS, {
        variables: {
            placeUuid,
        },
    });

    const planOptions = useMemo<Array<DefaultOptionType>>(
        () => data?.plansOfPlace.map(({title, key}) => ({label: title, value: key})) ?? [],
        [data],
    );

    const handleChangeActualPlan = useCallback(() => {
        updatePlacePlan({variables: {updatePlaceInput: {uuid: placeUuid, selectedPlanKey}}});
    }, [placeUuid, selectedPlanKey, updatePlacePlan]);

    useEffect(() => {
        if (error) {
            alert(error.message);
        }
    }, [error]);

    return (
        <div className="flex items-center gap-3">
            <Select value={selectedPlanKey} onChange={setSelectedPlanKey} options={planOptions} />
            <Button type="primary" onClick={handleChangeActualPlan}>
                Сделать основной
            </Button>
        </div>
    );
});

export default PlanSelect;
