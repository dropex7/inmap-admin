/**
 * Created by MIRZOEV A. on 09.04.2024
 */

import {memo, useMemo} from 'react';
import {Select} from 'antd';
import type {DefaultOptionType} from 'antd/es/select';
import {useQuery} from '@apollo/client';
import type {GetPlansOfPlaceQuery} from '@/generated/graphql.ts';
import {GET_PLACE_PLANS} from '@/operations/place/query.ts';
import {useGetPlaceUuid} from '@/hooks/useGetPlaceUuid.ts';
import {useGetMap} from '@/hooks/useGetMap.ts';

interface PlanSelectProps {}

const PlanSelect = memo<PlanSelectProps>(() => {
    const placeUuid = useGetPlaceUuid();
    const {selectedPlanKey, setSelectedPlanKey} = useGetMap();

    const {data} = useQuery<GetPlansOfPlaceQuery>(GET_PLACE_PLANS, {
        variables: {
            placeUuid,
        },
    });

    const planOptions = useMemo<Array<DefaultOptionType>>(
        () => data?.plansOfPlace.map(({title, key}) => ({label: title, value: key})) ?? [],
        [data],
    );

    return (
        <>
            <Select value={selectedPlanKey} onChange={setSelectedPlanKey} options={planOptions} />
        </>
    );
});

export default PlanSelect;
