/**
 * Created by MIRZOEV A. on 15.08.2023
 */

import {useQuery} from '@apollo/client';
import {memo} from 'react';
import {useParams} from 'react-router-dom';

import type {GetListOfPromosQuery} from '../../generated/graphql';

import {GET_PROMOS} from '../../operations/promo/query';
import ListItem from './ListItem';

const PromoList = memo(() => {
    const {id} = useParams();
    const {data} = useQuery<GetListOfPromosQuery>(GET_PROMOS, {
        variables: {placeUuid: id},
    });

    return (
        <div className="card flex flex-col gap-6 p-6">
            <span className="text-base font-bold">Действующие предложения и новости</span>
            <div className="grid grid-cols-[2fr_1fr_1fr] items-center">
                <div />
                <span className="text-center text-sm leading-none text-neutral-500">Дата</span>
                <span className="text-center text-sm leading-none text-neutral-500">Объекты</span>
            </div>
            {data?.promosOfPlace.map(promo => <ListItem key={promo.uuid} promo={promo} />)}
        </div>
    );
});

export default PromoList;
