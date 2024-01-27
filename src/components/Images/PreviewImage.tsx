/**
 * Created by MIRZOEV A. on 11.04.2023
 */

import type {HTMLProps} from 'react';

import clsx from 'clsx';
import {memo} from 'react';

interface PreviewImageProps extends HTMLProps<HTMLImageElement> {
    url: string;
    className?: string;
}

const PreviewImage = memo<PreviewImageProps>(({alt, className = '', url, ...rest}) => {
    return <img {...rest} alt={alt} className={clsx('max-w-full object-cover', className)} src={url} />;
});

export default PreviewImage;
