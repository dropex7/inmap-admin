/**
 * Created by MIRZOEV A. on 07.02.2024
 */

import {memo} from 'react';
import {Form, Input, Select, Typography} from 'antd';
import ScheduleFields from '@/components/Schedule/ScheduleFields.tsx';
import {useQuery} from '@apollo/client';
import type {GetPlaceLayersQuery} from '@/generated/graphql.ts';
import {GET_PLACE_LAYERS} from '@/operations/place/query.ts';
import ImageLoaderField from '@/components/ImageLoader/ImageLoaderField.tsx';
import {useGetPlaceUuid} from '@/hooks/useGetPlaceUuid.ts';

const {Item} = Form;
const {Title} = Typography;

const MainTab = memo(() => {
    const placeId = useGetPlaceUuid();

    const {data} = useQuery<GetPlaceLayersQuery>(GET_PLACE_LAYERS, {variables: {placeUuid: placeId!}});

    return (
        <div className="flex flex-col divide-y divide-zinc-700">
            <div className="p-6">
                <Title level={2}>Основная информация</Title>

                <div className="grid grid-cols-[2fr_1fr]">
                    <div>
                        <Item
                            labelAlign="left"
                            label="Название"
                            name="name"
                            rules={[{message: 'Введите название!', required: true}]}
                        >
                            <Input />
                        </Item>

                        <Item
                            labelAlign="left"
                            label="Краткое описание"
                            name="shortDescription"
                            rules={[{message: 'Введите краткое описание!', required: true}]}
                        >
                            <Input />
                        </Item>

                        <Item
                            labelAlign="left"
                            label="Этаж"
                            name="layerUuid"
                            rules={[{message: 'Выберите этаж!', required: true}]}
                        >
                            <Select
                                allowClear
                                options={data?.placeLayers.map(({fullName, uuid}) => ({
                                    label: fullName,
                                    value: uuid,
                                }))}
                                placeholder="Выберите этаж"
                            />
                        </Item>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center gap-3">
                            <span>Логотип объекта</span>
                            <ImageLoaderField isCropped countOfImages={1} fieldName="logo" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <Title level={4}>Режим работы</Title>
                <ScheduleFields />
            </div>
        </div>
    );
});

export default MainTab;
