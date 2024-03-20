/**
 * Created by MIRZOEV A. on 15.08.2023
 */

import {useMutation} from '@apollo/client';
import {Steps} from 'antd';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useRecoilValue} from 'recoil';

import {placeAtom} from '@/atoms/selectedPlace';
import {CREATE_PROMO} from '@/operations/promo/mutation';
import PromoDescription from './PromoDescription';
import PromoMainPart from './PromoMainPart';
import type {ImageType} from '@/components/ImageLoader/ImageLoaderField.tsx';
import {GET_PROMOS} from '@/operations/promo/query.ts';

export interface IMainFormValues {
    largeImageUrl: Array<ImageType>;
    smallImageUrl: Array<ImageType>;
    subtitle: string;
    title: string;
    startDateTime: string;
    endDateTime: string;
    subjectsUuids: Array<string>;
}

export interface IFullFormValues {
    content: Record<string, any>;
}

export function Component() {
    const placeUuid = useRecoilValue(placeAtom);
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);
    const [mainFormValues, setMainFormValues] = useState<IMainFormValues>();
    const [createPromo] = useMutation<IFullFormValues>(CREATE_PROMO);

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
                largeImageUrl: mainFormValues?.largeImageUrl?.[0].originFileObj.url,
                smallImageUrl: mainFormValues?.smallImageUrl?.[0].originFileObj.url,
            },
        };

        await createPromo({
            onCompleted: () => {
                navigate('..');
            },
            refetchQueries: [GET_PROMOS, 'GetListOfPromosQuery'],
            variables: {
                createPromoInput: {...fullFormValues, placeUuid},
            },
        });
    };

    const steps = [
        {
            content: <PromoMainPart initialValues={mainFormValues} onFinish={onFinishMainPart} />,
            title: 'Основная информация',
        },
        {
            content: <PromoDescription onFinish={onFinish} toPrev={prev} />,
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
