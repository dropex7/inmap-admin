/**
 * Created by MIRZOEV A. on 07.07.2024
 */

import {memo} from 'react';
import {Form, Input} from 'antd';
import ImageLoaderField from '@/components/ImageLoader/ImageLoaderField.tsx';

interface MenuFieldProps {
    fieldIndex: number;
    tabIndex: number;
}
2;

const {Item} = Form;

const MenuField = memo<MenuFieldProps>(({tabIndex, fieldIndex}) => {
    return (
        <>
            <Item labelAlign="left" label="Заголовок" name="title">
                <Input />
            </Item>
            <ImageLoaderField
                countOfImages={5}
                fieldName={['tabs', tabIndex, 'fields', fieldIndex, 'imagesUrls']}
                isRequired={false}
                label="Фотографии"
                name="imagesUrls"
            />
        </>
    );
});

export default MenuField;
