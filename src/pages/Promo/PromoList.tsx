/**
 * Created by MIRZOEV A. on 15.08.2023
 */

import {useLazyQuery} from '@apollo/client';
import {memo, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import type {PaginationParams} from '../../components/Pagination/types';
import type {SearchPromosQuery} from '../../generated/graphql';

import usePaginationFilter from '../../hooks/pagination/usePaginationFilter';
import usePaginationParams from '../../hooks/pagination/usePaginationParams';
import {SEARCH_PROMOS} from '../../operations/promo/query';
import ListItem from './ListItem';

interface PromoListProps {
    url: string;
}

const PromoList = memo<PromoListProps>(({url}) => {
    const {id} = useParams();
    // TODO Сделать пагинацию
    const [pageParams] = usePaginationParams(url);
    const [filter] = usePaginationFilter<PaginationParams>(url);

    const [loadList, {data, error}] = useLazyQuery<SearchPromosQuery>(SEARCH_PROMOS, {
        variables: {searchPromosInput: {...pageParams, ...filter, placeUuid: id}},
    });

    useEffect(() => {
        loadList({variables: {searchSubjectsInput: {...pageParams, ...filter, placeUuid: id}}});
    }, [filter, id, loadList, pageParams]);

    if (error) {
        return <>{error.message}</>;
    }

    return (
        <div className="card flex flex-col gap-6 p-6">
            <span className="text-base font-bold">Действующие предложения и новости</span>
            <div className="grid grid-cols-[2fr_1fr_1fr] items-center">
                <div />
                <span className="text-center text-sm leading-none text-neutral-500">Дата</span>
                <span className="text-center text-sm leading-none text-neutral-500">Объекты</span>
            </div>
            {data?.searchPromos.map(promo => <ListItem key={promo.uuid} promo={promo} />)}
        </div>
    );
});

export default PromoList;
