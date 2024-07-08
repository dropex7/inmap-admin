import {useLazyQuery} from '@apollo/client';
import {Empty, Pagination, Spin} from 'antd';
import {useCallback, useEffect} from 'react';
import EmptyIcon from '@/assets/empty.svg?react';

import usePaginationFilter from '@/hooks/pagination/usePaginationFilter';
import usePaginationParams from '@/hooks/pagination/usePaginationParams';
import {SUBJECTS_OF_PLACE} from '@/operations/subject/query';
import List from './List';
import type {PaginationFilter} from '@/components/Pagination/types';
import type {GetSubjectsOfPlaceInputQuery} from '@/generated/graphql';
import {useGetPlaceUuid} from '@/hooks/useGetPlaceUuid.ts';
import {SUBJECTS_OF_PLACE_KEY} from '@/utils/queryFilterKeys.ts';
import Filter from '@/pages/subject/Filter.tsx';

export function Component() {
    const placeUuid = useGetPlaceUuid();
    const [pageParams, setParams] = usePaginationParams(SUBJECTS_OF_PLACE_KEY);
    const [filter] = usePaginationFilter<PaginationFilter>(SUBJECTS_OF_PLACE_KEY);

    const [loadList, {data, error, loading}] = useLazyQuery<GetSubjectsOfPlaceInputQuery>(SUBJECTS_OF_PLACE, {
        variables: {input: {...pageParams, ...filter, placeUuid}},
    });

    const changePage = useCallback(
        (newPage: number) => {
            setParams({...pageParams, offset: (newPage - 1) * pageParams.limit});
        },
        [pageParams, setParams],
    );

    useEffect(() => {
        setParams({limit: 20});
    }, [setParams]);

    useEffect(() => {
        loadList({variables: {input: {...pageParams, ...filter, placeUuid}}});
    }, [filter, placeUuid, loadList, pageParams]);

    if (error) {
        return <>{error.message}</>;
    }

    return (
        <section className="flex flex-col divide-y divide-zinc-800 rounded-lg bg-zinc-900">
            <div className="flex justify-between px-6 py-3">
                <Pagination
                    current={pageParams.offset / pageParams.limit + 1}
                    onChange={changePage}
                    defaultPageSize={pageParams.limit}
                    total={data?.subjectsOfPlace.total ?? 0}
                    showSizeChanger={false}
                />

                <Filter />
            </div>

            <Spin tip="Загрузка..." size="large" spinning={loading}>
                {data && data.subjectsOfPlace.total !== 0 ? (
                    <div className="p-6">
                        <List data={data} />
                    </div>
                ) : (
                    <Empty
                        className="flex h-[50vh] flex-col justify-center"
                        image={<EmptyIcon />}
                        description={
                            <span className="text-neutral-700">
                                {(filter.query?.length ?? 0) > 0 ? 'Ничего не найдено' : 'Создайте первый объект'}
                            </span>
                        }
                    />
                )}
            </Spin>
        </section>
    );
}
