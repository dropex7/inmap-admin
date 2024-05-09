/**
 * Created by MIRZOEV A. on 23.03.2024
 */

import {memo, useMemo} from 'react';
import clsx from 'clsx';
import PreviewLogo from '@/components/Images/PreviewLogo.tsx';
import PreviewImage from '@/components/Images/PreviewImage.tsx';
import noPhoto from '@/assets/no-photo-available.png';
import type {SubjectLocalizedModel} from '@/generated/graphql.ts';
import {useGetLayerByIUuid} from '@/hooks/useGetLayerByIUuid.ts';

interface ViewProps {
    subject: Partial<SubjectLocalizedModel>;
    className?: string;
}

const View = memo<ViewProps>(({subject, className, ...props}) => {
    const {images, logoUrl, name, shortDescription} = subject;
    const layer = useGetLayerByIUuid(subject?.layerUuid);

    const backgroundImage = useMemo(() => {
        return images?.[0];
    }, [images]);

    return (
        <div
            {...props}
            className={clsx(
                'card flex w-60 flex-col rounded-xl bg-zinc-800 bg-opacity-80 hover:cursor-pointer',
                className,
            )}
        >
            <div className="relative flex flex-col">
                {logoUrl && (
                    <div className="absolute -bottom-2 left-2 z-10 rounded-lg border border-zinc-900 bg-white">
                        <PreviewLogo alt="image" logoUrl={logoUrl} className="size-12 rounded-lg" />
                    </div>
                )}
                <div className="absolute right-3 top-3 flex items-center justify-center rounded-3xl bg-zinc-800 bg-opacity-90 px-2 py-1">
                    <span className="self-end text-xs text-white">{layer?.fullName ?? 'НЕТ ЭТАЖА'}</span>
                </div>

                <PreviewImage alt="image" height="120px" className="rounded-t-lg" url={backgroundImage ?? noPhoto} />
            </div>

            <div className="flex flex-col gap-3 px-2 py-6">
                <strong className="w-full self-start truncate text-lg text-white">{name}</strong>
                <span className="self-start text-xs leading-none text-white">{shortDescription}</span>
            </div>
        </div>
    );
});

export default View;
