/**
 * Created by MIRZOEV A. on 11.04.2023
 */

import type {HTMLProps} from 'react';

import {memo} from 'react';

import type {SubjectLocalizedModel} from '@/generated/graphql';
import clsx from 'clsx';

interface PreviewLogoProps extends HTMLProps<HTMLImageElement> {
    alt: HTMLProps<HTMLImageElement>['alt'];
    logoUrl: SubjectLocalizedModel['logoUrl'];
    className?: string;
}

const PreviewLogo = memo<PreviewLogoProps>(({className = '', alt, logoUrl, ...rest}) => {
    return <img {...rest} alt={alt} className={clsx('max-w-full object-contain', className)} src={logoUrl} />;
});

export default PreviewLogo;
