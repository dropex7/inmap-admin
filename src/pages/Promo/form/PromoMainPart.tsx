/**
 * Created by MIRZOEV A. on 30.08.2023
 */

import {Button, DatePicker, Form, Input} from 'antd';
import {memo} from 'react';

import type {IMainFormValues} from './PromoForm';

import ImageLoaderField from '@/components/ImageLoader/ImageLoaderField';
import AutoComplete from '@/components/AutoComplete/AutoComplete.tsx';
import {SUBJECTS_OF_PLACE} from '@/operations/subject/query.ts';
import type {SearchSubjectsOfPlaceQuery} from '@/generated/graphql.ts';

interface Props {
    initialValues?: IMainFormValues;
    onFinish: (values: IMainFormValues) => void;
}

const {Item} = Form;

const PromoMainPart = memo<Props>(({initialValues, onFinish}) => {
    return (
        <Form layout="vertical" initialValues={initialValues} onFinish={onFinish}>
            <div className="flex flex-col gap-6">
                <Item label="Заголовок" className="w-80" name="title" rules={[{required: true}]}>
                    <Input />
                </Item>
                <Item label="Описание" className="w-80" name="subtitle" rules={[{required: true}]}>
                    <Input />
                </Item>

                <div className="flex w-full items-center gap-6">
                    <Item label="Начало" name="startDateTime">
                        <DatePicker className="w-80" />
                    </Item>
                    <Item label="Конец" name="endDateTime">
                        <DatePicker className="w-80" />
                    </Item>
                </div>

                <div>
                    <ImageLoaderField countOfImages={1} fieldName="smallImageUrl" label="Добавьте изображения" />
                    <ImageLoaderField
                        isCropped
                        countOfImages={1}
                        fieldName="largeImageUrl"
                        label="Добавьте миниатюру изображения"
                    />
                </div>

                <Item label="Участники акции" name="subjectsUuids" rules={[{type: 'array'}]}>
                    <AutoComplete<SearchSubjectsOfPlaceQuery>
                        request={SUBJECTS_OF_PLACE}
                        mode="multiple"
                        renderOptions={queryResult =>
                            queryResult.searchSubjects.items.map(({uuid, name}) => ({value: uuid, label: name}))
                        }
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
