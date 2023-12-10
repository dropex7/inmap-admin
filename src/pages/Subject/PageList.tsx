import {useLazyQuery} from '@apollo/client';
import {Spin} from 'antd';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import type {PaginationParams} from '../../components/Pagination/types';
import type {SearchSubjectsOfPlaceQuery} from '../../generated/graphql';

import SearchBar from '../../components/SearchBar';
import usePaginationFilter from '../../hooks/pagination/usePaginationFilter';
import usePaginationParams from '../../hooks/pagination/usePaginationParams';
import {SEARCH_SUBJECTS} from '../../operations/subject/query';
import LinkToCreate from './LinkToCreate';
import List from './List';

const url = SEARCH_SUBJECTS.loc?.source.body ?? 'url';

export function Component() {
    const {id} = useParams();
    // TODO Сделать пагинацию
    const [pageParams] = usePaginationParams(url);
    const [filter] = usePaginationFilter<PaginationParams>(url);

    const [loadList, {data, error, loading}] = useLazyQuery<SearchSubjectsOfPlaceQuery>(SEARCH_SUBJECTS, {
        variables: {searchSubjectsInput: {...pageParams, ...filter, placeUuid: id}},
    });

    useEffect(() => {
        loadList({variables: {searchSubjectsInput: {...pageParams, ...filter, placeUuid: id}}});
    }, [filter, id, loadList, pageParams]);

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
                <div className="card flex-col gap-6">{data && <List data={data} />}</div>
            </Spin>
        </section>
    );
}
