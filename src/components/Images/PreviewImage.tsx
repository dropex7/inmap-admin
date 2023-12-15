/**
 * Created by MIRZOEV A. on 11.04.2023
 */

import type {HTMLProps} from 'react';

import clsx from 'clsx';
import {memo} from 'react';

interface PreviewImageProps extends HTMLProps<HTMLImageElement> {
    rounded?: boolean;
    url: string;
}

const PreviewImage = memo<PreviewImageProps>(({alt, rounded = false, url, ...rest}) => {
    return <img {...rest} alt={alt} className={clsx('max-w-full object-cover', rounded && 'rounded-md')} src={url} />;
});

export default PreviewImage;
