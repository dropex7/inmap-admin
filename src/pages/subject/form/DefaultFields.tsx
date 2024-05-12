/**
 * Created by MIRZOEV A. on 14.11.2023
 */

import {memo} from 'react';

import ImageLoaderField from '@/components/ImageLoader/ImageLoaderField';

const DefaultFields = memo(() => {
    return (
        <div className="grid grid-cols-2 divide-x py-6">
            <div className="flex flex-col gap-3 px-6">
                <ImageLoaderField isCropped countOfImages={1} fieldName="logo" label="Добавьте логотип объекта" />
                <ImageLoaderField countOfImages={10} fieldName="images" label="Добавьте изображения" />
            </div>
        </div>
    );
});

export default DefaultFields;
