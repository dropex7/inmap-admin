import {useLazyQuery} from '@apollo/client';
import {Pagination, Spin} from 'antd';
import {useCallback, useEffect} from 'react';

import type {PaginationParams} from '@/components/Pagination/types';
import type {SearchSubjectsOfPlaceQuery} from '@/generated/graphql';

import SearchBar from '@/components/SearchBar';
import usePaginationFilter from '@/hooks/pagination/usePaginationFilter';
import usePaginationParams from '@/hooks/pagination/usePaginationParams';
import {SEARCH_SUBJECTS} from '@/operations/subject/query';
import LinkToCreate from './LinkToCreate';
import List from './List';
import {useRecoilValue} from 'recoil';
import {placeAtom} from '@/atoms/selectedPlace';

const url = SEARCH_SUBJECTS.loc?.source.body ?? 'url';

export function Component() {
    const placeUuid = useRecoilValue(placeAtom);
    const [pageParams, setParams] = usePaginationParams(url);
    const [filter] = usePaginationFilter<PaginationParams>(url);

    const [loadList, {data, error, loading}] = useLazyQuery<SearchSubjectsOfPlaceQuery>(SEARCH_SUBJECTS, {
        variables: {searchSubjectsInput: {...pageParams, ...filter, placeUuid}},
    });

    const changePage = useCallback(
        (newPage: number) => {
            setParams({...pageParams, offset: (newPage - 1) * pageParams.limit});
        },
        [pageParams, setParams],
    );

    useEffect(() => {
        loadList({variables: {searchSubjectsInput: {...pageParams, ...filter, placeUuid}}});
    }, [filter, placeUuid, loadList, pageParams]);

    if (error) {
        return <>{error.message}</>;
    }

    return (
        <section className="flex flex-col gap-4">
            <div className="card flex justify-between p-6">
                <SearchBar placeholder="Поиск объектов" url={url} />
                <LinkToCreate />
            </div>

            <Spin size="large" spinning={loading} tip="Loading">
                <div className="card flex flex-col gap-6 p-6">
                    {data && (
                        <>
                            <Pagination
                                defaultCurrent={pageParams.offset / pageParams.limit + 1}
                                onChange={changePage}
                                defaultPageSize={pageParams.limit}
                                total={data.searchSubjects.total}
                                showSizeChanger={false}
                            />
                            <List data={data} />
                        </>
                    )}
                </div>
            </Spin>
        </section>
    );
}
