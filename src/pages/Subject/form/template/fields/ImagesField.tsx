/**
 * Created by MIRZOEV A. on 22.11.2023
 */

import {Form, Input} from 'antd';
import {memo} from 'react';

import ImageLoaderField from '../../../../../components/ImageLoader/ImageLoaderField';

interface ImageFieldProps {
    fieldName: string;
    tabUuid: string;
}

const {Item} = Form;

const ImagesField = memo<ImageFieldProps>(({fieldName, tabUuid}) => {
    return (
        <>
            <Item label="Заголовок над фотографиями" name="title">
                <Input />
            </Item>
            <ImageLoaderField
                countOfImages={5}
                fieldName={['tabs', tabUuid, fieldName, 'imagesUrls']}
                isRequired={false}
                label="Фотографии"
                name="imagesUrls"
            />
        </>
    );
});

export default ImagesField;
