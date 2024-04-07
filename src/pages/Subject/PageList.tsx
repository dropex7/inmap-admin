import {useLazyQuery} from '@apollo/client';
import {Empty, Pagination, Spin} from 'antd';
import {useCallback, useEffect} from 'react';
import EmptyIcon from '@/assets/empty.svg?react';

import SearchBar from '@/components/SearchBar';
import usePaginationFilter from '@/hooks/pagination/usePaginationFilter';
import usePaginationParams from '@/hooks/pagination/usePaginationParams';
import {SUBJECTS_OF_PLACE} from '@/operations/subject/query';
import CreatingTemplateModal from './template/CreatingTemplateModal.tsx';
import List from './List';
import {useRecoilValue} from 'recoil';
import {placeAtom} from '@/atoms/selectedPlace';
import type {PaginationFilter} from '@/components/Pagination/types';
import type {GetSubjectsOfPlaceInputQuery} from '@/generated/graphql';

const url = SUBJECTS_OF_PLACE.loc?.source.body ?? 'url';

export function Component() {
    const placeUuid = useRecoilValue(placeAtom);
    const [pageParams, setParams] = usePaginationParams(url);
    const [filter] = usePaginationFilter<PaginationFilter>(url);

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
                    defaultCurrent={pageParams.offset / pageParams.limit + 1}
                    onChange={changePage}
                    defaultPageSize={pageParams.limit}
                    total={data?.subjectsOfPlace.total ?? 0}
                    showSizeChanger={false}
                />

                <div className="flex items-center gap-3">
                    <SearchBar placeholder="Поиск объектов" url={url} />
                    <CreatingTemplateModal />
                </div>
            </div>

            <Spin tip="Loading" size="large" spinning={loading}>
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
