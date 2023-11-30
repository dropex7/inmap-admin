/**
 * Created by MIRZOEV A. on 11.04.2023
 */

import type {HTMLProps} from 'react';

import {memo, useMemo} from 'react';

import type {SubjectLocalizedModel} from '../../generated/graphql';

interface PreviewLogoProps extends HTMLProps<HTMLImageElement> {
    alt: HTMLProps<HTMLImageElement>['alt'];
    backgroundColor: SubjectLocalizedModel['logoBackgroundColor'];
    logoUrl: SubjectLocalizedModel['logoUrl'];
}

const PreviewLogo = memo<PreviewLogoProps>(({alt, backgroundColor, logoUrl, ...rest}) => {
    const colorStyle = useMemo(() => ({background: `#${backgroundColor.slice(2, 8)}`}), [backgroundColor]);
    return (
        <img
            alt={alt}
            className={'h-9 w-80 max-w-full rounded-t-xl object-contain'}
            src={logoUrl}
            style={colorStyle}
            {...rest}
        />
    );
});

export default PreviewLogo;
