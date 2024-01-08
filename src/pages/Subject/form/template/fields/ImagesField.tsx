/**
 * Created by MIRZOEV A. on 22.11.2023
 */

import {Form, Input} from 'antd';
import {memo} from 'react';

import ImageLoaderField from '../../../../../components/ImageLoader/ImageLoaderField';

interface ImagesFieldProps {
    fieldIndex: number;
    tabIndex: number;
}

const {Item} = Form;

const ImagesField = memo<ImagesFieldProps>(({fieldIndex, tabIndex}) => {
    return (
        <>
            <Item label="Заголовок над фотографиями" name="title">
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

export default ImagesField;
