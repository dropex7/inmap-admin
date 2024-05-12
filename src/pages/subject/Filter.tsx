/**
 * Created by MIRZOEV A. on 10.05.2024
 */

import {memo, useCallback} from 'react';
import SearchBar from '@/components/SearchBar.tsx';
import {SUBJECTS_OF_PLACE_KEY} from '@/utils/queryFilterKeys.ts';
import CreatingTemplateModal from '@/pages/subject/template/CreatingTemplateModal.tsx';
import {useGetPlaceUuid} from '@/hooks/useGetPlaceUuid.ts';
import {useQuery} from '@apollo/client';
import type {GetPlaceLayersQuery} from '@/generated/graphql.ts';
import {GET_PLACE_LAYERS} from '@/operations/place/query.ts';
import {Select} from 'antd';
import usePaginationFilter from '@/hooks/pagination/usePaginationFilter.ts';
import type {PaginationFilter} from '@/components/Pagination/types.ts';

interface SubjectListFilter extends PaginationFilter {
    layerUuid?: string;
}

const Filter = memo(() => {
    const placeUuid = useGetPlaceUuid();
    const [filter, setFilter] = usePaginationFilter<SubjectListFilter>(SUBJECTS_OF_PLACE_KEY);
    const {data} = useQuery<GetPlaceLayersQuery>(GET_PLACE_LAYERS, {variables: {placeUuid}});

    const onChangeSelect = useCallback(
        (layerUuid: string) => {
            setFilter({...filter, layerUuid: layerUuid});
        },
        [filter, setFilter],
    );

    return (
        <div className="flex items-center gap-3">
            <Select
                className="w-60"
                size="large"
                allowClear
                value={filter.layerUuid}
                options={data?.placeLayers.map(({fullName, uuid}) => ({
                    label: fullName,
                    value: uuid,
                }))}
                onChange={onChangeSelect}
                placeholder="Выберите этаж"
            />
            <SearchBar placeholder="Поиск объектов" url={SUBJECTS_OF_PLACE_KEY} />
            <CreatingTemplateModal />
        </div>
    );
});

export default Filter;
