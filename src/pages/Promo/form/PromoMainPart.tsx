/**
 * Created by MIRZOEV A. on 30.08.2023
 */

import {Button, Form, Input} from 'antd';
import {memo, useState} from 'react';

import type {IMainFormValues} from './PromoForm';

import ImageLoaderField from '../../../components/ImageLoader/ImageLoaderField';

interface Props {
    initialValues?: IMainFormValues;
    onFinish: (values: IMainFormValues) => void;
}

const {Item} = Form;

const PromoMainPart = memo<Props>(({initialValues, onFinish}) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Form initialValues={initialValues} labelCol={{span: 6}} onFinish={onFinish}>
            <Item label="Заголовок" name="title">
                <Input />
            </Item>
            <Item label="Описание" name="subtitle">
                <Input />
            </Item>
            <ImageLoaderField
                countOfImages={1}
                fieldName="imageUrl"
                label="Добавьте изображения"
                setIsImageLoading={setIsLoading}
            />
            <Button disabled={isLoading} htmlType="submit" type="primary">
                Перейти к описанию
            </Button>
        </Form>
    );
});

export default PromoMainPart;
