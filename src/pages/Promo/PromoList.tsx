/**
 * Created by MIRZOEV A. on 15.08.2023
 */

import {useLazyQuery} from '@apollo/client';
import {memo, useCallback, useEffect, useMemo} from 'react';

import type {PaginationParams} from '../../components/Pagination/types';
import type {SearchPromosQuery} from '../../generated/graphql';

import usePaginationFilter from '../../hooks/pagination/usePaginationFilter';
import usePaginationParams from '../../hooks/pagination/usePaginationParams';
import {SEARCH_PROMOS} from '../../operations/promo/query';
import PromoTable from './PromoTable';
import {useRecoilValue} from 'recoil';
import {placeAtom} from '../../atoms/selectedPlace';

interface PromoListProps {
    url: string;
}

const PromoList = memo<PromoListProps>(({url}) => {
    const placeUuid = useRecoilValue(placeAtom);
    const [pageParams, setParams] = usePaginationParams(url);
    const [filter] = usePaginationFilter<PaginationParams>(url);

    const [loadList, {data, error}] = useLazyQuery<SearchPromosQuery>(SEARCH_PROMOS, {
        variables: {searchPromosInput: {...pageParams, ...filter, placeUuid}},
    });

    const changePage = useCallback(
        (newPage: number) => {
            setParams({...pageParams, offset: (newPage - 1) * pageParams.limit});
        },
        [pageParams, setParams],
    );

    const paginationSettings = useMemo(
        () => ({
            defaultPageSize: pageParams.limit,
            total: data?.searchPromos.total,
            showSizeChanger: false,
            onChange: changePage,
        }),
        [changePage, data?.searchPromos.total, pageParams.limit],
    );

    useEffect(() => {
        loadList({variables: {searchSubjectsInput: {...pageParams, ...filter, placeUuid}}});
    }, [filter, placeUuid, loadList, pageParams]);

    if (error) {
        return <>{error.message}</>;
    }

    if (!data) {
        return null;
    }

    return <PromoTable pagination={paginationSettings} data={data.searchPromos.items} />;
});

export default PromoList;
