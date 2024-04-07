/**
 * Created by MIRZOEV A. on 15.08.2023
 */

import {useMutation, useQuery} from '@apollo/client';
import {Steps} from 'antd';
import {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useRecoilValue} from 'recoil';

import {placeAtom} from '@/atoms/selectedPlace';
import {CREATE_PROMO, UPDATE_PROMO} from '@/operations/promo/mutation';
import PromoDescription from './PromoDescription';
import type {IMainFormValues} from './PromoMainPart';
import PromoMainPart from './PromoMainPart';
import {GET_PROMO_BY_ID, GET_PROMOS} from '@/operations/promo/query.ts';
import type {GetPromoByIdQuery} from '@/generated/graphql.ts';

export interface IFullFormValues {
    content: Record<string, any>;
}

export function Component() {
    const placeUuid = useRecoilValue(placeAtom);
    const {promoId} = useParams();
    const isCreate = !promoId;
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);
    const [mainFormValues, setMainFormValues] = useState<IMainFormValues>();
    const [createPromo] = useMutation<IFullFormValues>(CREATE_PROMO);
    const [updatePromo] = useMutation<IFullFormValues>(UPDATE_PROMO);

    const {data} = useQuery<GetPromoByIdQuery>(GET_PROMO_BY_ID, {
        variables: {uuid: promoId!},
        skip: isCreate,
    });

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const onFinishMainPart = (values: any) => {
        setMainFormValues(values);
        next();
    };

    const onFinish = async (values: IFullFormValues) => {
        const fullFormValues: any = {
            ...values,
            ...{
                ...mainFormValues,
                subjectsUuids: mainFormValues?.subjectsUuids.map(({uuid}) => uuid),
                largeImageUrl: mainFormValues?.largeImageUrl?.[0].originFileObj.url,
                smallImageUrl: mainFormValues?.smallImageUrl?.[0].originFileObj.url,
            },
        };

        if (isCreate) {
            await createPromo({
                onCompleted: () => {
                    navigate('..');
                },
                refetchQueries: [GET_PROMOS, 'GetListOfPromosQuery'],
                variables: {
                    createPromoInput: {...fullFormValues, placeUuid},
                },
            });
        } else {
            await updatePromo({
                onCompleted: () => {
                    navigate('..');
                },
                refetchQueries: [GET_PROMOS, 'GetListOfPromosQuery'],
                variables: {
                    updatePromoInput: {...fullFormValues, placeUuid, uuid: promoId},
                },
            });
        }
    };

    const steps = [
        {
            content: <PromoMainPart initialValues={mainFormValues} promo={data?.promo} onFinish={onFinishMainPart} />,
            title: 'Основная информация',
        },
        {
            content: <PromoDescription promo={data?.promo} onFinish={onFinish} toPrev={prev} />,
            title: 'Описание',
        },
    ];

    const items = steps.map(item => ({key: item.title, title: item.title}));

    return (
        <div className="card p-6">
            <Steps current={current} items={items} />
            <div className="py-10">{steps[current].content}</div>
        </div>
    );
}
