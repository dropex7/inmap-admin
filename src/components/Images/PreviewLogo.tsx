/**
 * Created by MIRZOEV A. on 11.04.2023
 */

import type {HTMLProps} from 'react';

import {memo} from 'react';

import type {SubjectLocalizedModel} from '@/generated/graphql';

interface PreviewLogoProps extends HTMLProps<HTMLImageElement> {
    alt: HTMLProps<HTMLImageElement>['alt'];
    logoUrl: SubjectLocalizedModel['logoUrl'];
}

const PreviewLogo = memo<PreviewLogoProps>(({alt, logoUrl, ...rest}) => {
    return <img {...rest} alt={alt} className={'h-9 w-80 max-w-full rounded-t-xl object-contain'} src={logoUrl} />;
});

export default PreviewLogo;
