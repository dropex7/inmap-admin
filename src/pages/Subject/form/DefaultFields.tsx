/**
 * Created by MIRZOEV A. on 14.11.2023
 */

import {useQuery} from '@apollo/client';
import {Form, Input, Select} from 'antd';
import {memo} from 'react';
import {useRecoilValue} from 'recoil';

import type {GetPlaceLayersQuery} from '@/generated/graphql';

import {placeAtom} from '@/atoms/selectedPlace';
import ImageLoaderField from '@/components/ImageLoader/ImageLoaderField';
import {GET_PLACE_LAYERS} from '@/operations/place/query';
import ScheduleFields from '@/components/Schedule/ScheduleFields.tsx';

const {Item} = Form;

const DefaultFields = memo(() => {
    const placeId = useRecoilValue(placeAtom);

    const {data} = useQuery<GetPlaceLayersQuery>(GET_PLACE_LAYERS, {variables: {placeUuid: placeId!}});

    return (
        <div className="grid grid-cols-2 divide-x py-6">
            <div className="flex flex-col gap-3 px-6">
                <Item
                    className="m-0"
                    label="Название"
                    name="name"
                    rules={[{message: 'Введите название!', required: true}]}
                >
                    <Input />
                </Item>

                <Item
                    className="m-0"
                    label="Краткое описание"
                    name="shortDescription"
                    rules={[{message: 'Введите краткое описание!', required: true}]}
                >
                    <Input />
                </Item>

                <Item label="Этаж" name="layerUuid" rules={[{message: 'Выберите этаж!', required: true}]}>
                    <Select
                        allowClear
                        options={data?.placeLayers.map(({fullName, uuid}) => ({
                            label: fullName,
                            value: uuid,
                        }))}
                        placeholder="Выберите этаж"
                    />
                </Item>
                <div>
                    <ScheduleFields />
                </div>
            </div>
            <div className="flex flex-col gap-3 px-6">
                <ImageLoaderField isCropped countOfImages={1} fieldName="logo" label="Добавьте логотип объекта" />
                <ImageLoaderField countOfImages={10} fieldName="images" label="Добавьте изображения" />
            </div>
        </div>
    );
});

export default DefaultFields;
