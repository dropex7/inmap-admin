/**
 * Created by MIRZOEV A. on 30.08.2023
 */

import {Button, DatePicker, Form, Input} from 'antd';
import {memo, useEffect} from 'react';

import type {ImageType} from '@/components/ImageLoader/ImageLoaderField';
import ImageLoaderField from '@/components/ImageLoader/ImageLoaderField';
import AutoComplete from '@/components/AutoComplete/AutoComplete.tsx';
import {GET_SUBJECTS_BY_PROMO, SUBJECTS_OF_PLACE} from '@/operations/subject/query.ts';
import type {GetSubjectsOfPlaceInputQuery, PromoLocalizedModel, SubjectLocalizedModel} from '@/generated/graphql.ts';
import {createFileFromUrl} from '@/pages/subject/form/prepareDataForForm.ts';
import dayjs from 'dayjs';
import {useQuery} from '@apollo/client';
import type {GetSubjectsByPromoQuery} from '@/generated/graphql.ts';
import {useGetPlaceUuid} from '@/hooks/useGetPlaceUuid.ts';

export interface IMainFormValues {
    largeImageUrl: Array<ImageType>;
    smallImageUrl: Array<ImageType>;
    subtitle: string;
    title: string;
    startDateTime: string;
    endDateTime: string;
    subjectsUuids: Array<SubjectLocalizedModel>;
}

interface Props {
    onFinish: (values: IMainFormValues) => void;
    initialValues?: IMainFormValues;
    promo?: Partial<PromoLocalizedModel>;
}

const {Item, useForm} = Form;

const PromoMainPart = memo<Props>(({promo, initialValues, onFinish}) => {
    const placeUuid = useGetPlaceUuid();
    const [form] = useForm();

    const {data} = useQuery<GetSubjectsByPromoQuery>(GET_SUBJECTS_BY_PROMO, {
        variables: {placeUuid, promoUuid: promo?.uuid},
        skip: !promo,
    });

    useEffect(() => {
        if (promo) {
            const {title, subtitle, startDateTime, endDateTime, smallImageUrl, largeImageUrl} = promo;

            form.setFieldsValue({
                title,
                subtitle,
                startDateTime: startDateTime ? dayjs(startDateTime) : undefined,
                endDateTime: endDateTime ? dayjs(endDateTime) : undefined,
                largeImageUrl: [createFileFromUrl(largeImageUrl!, 1)],
                smallImageUrl: [createFileFromUrl(smallImageUrl!, 0)],
                subjectsUuids: data?.subjectsLinkedToPromo,
            });
        }
    }, [data?.subjectsLinkedToPromo, form, promo]);

    return (
        <Form form={form} initialValues={initialValues} layout="vertical" onFinish={onFinish}>
            <div className="grid grid-cols-2 gap-x-10">
                <Item label="Заголовок" name="title" initialValue={promo?.title} rules={[{required: true}]}>
                    <Input />
                </Item>
                <Item label="Описание" name="subtitle" rules={[{required: true}]}>
                    <Input />
                </Item>

                <Item label="Дата начала акции" name="startDateTime">
                    <DatePicker className="w-full" />
                </Item>
                <Item label="Дата окончания акции" name="endDateTime">
                    <DatePicker className="w-full" />
                </Item>

                <ImageLoaderField countOfImages={1} fieldName="smallImageUrl" label="Добавьте изображения" />
                <ImageLoaderField
                    isCropped
                    countOfImages={1}
                    fieldName="largeImageUrl"
                    label="Добавьте миниатюру изображения"
                />

                <Item label="Участники акции" name="subjectsUuids" rules={[{type: 'array'}]}>
                    <AutoComplete<GetSubjectsOfPlaceInputQuery, SubjectLocalizedModel, true>
                        request={SUBJECTS_OF_PLACE}
                        mode="multiple"
                        renderItem={item => item.name}
                        // @ts-expect-error ошибка типизации
                        getItemFromQuery={queryResult => queryResult.subjectsOfPlace.items}
                    />
                </Item>
            </div>

            <Button htmlType="submit" type="primary">
                Перейти к описанию
            </Button>
        </Form>
    );
});

export default PromoMainPart;
