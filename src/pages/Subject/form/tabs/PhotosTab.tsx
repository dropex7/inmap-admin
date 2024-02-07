/**
 * Created by MIRZOEV A. on 07.02.2024
 */

import {memo} from 'react';
import ImageLoaderField from '@/components/ImageLoader/ImageLoaderField.tsx';
import {Typography} from 'antd';

const {Title} = Typography;

const PhotosTab = memo(() => {
    return (
        <div className="flex flex-col items-start p-6">
            <Title level={2}>Фотографии</Title>
            <ImageLoaderField countOfImages={10} fieldName="images" />
        </div>
    );
});

export default PhotosTab;
