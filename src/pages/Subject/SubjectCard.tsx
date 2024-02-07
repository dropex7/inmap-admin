/**
 * Created by MIRZOEV A. on 11.04.2023
 */

import {memo, useMemo} from 'react';
import {useNavigate} from 'react-router-dom';

import type {SubjectSearchModel} from '@/generated/graphql';

import noPhoto from '@/assets/no-photo-available.png';
import PreviewImage from '@/components/Images/PreviewImage';
import PreviewLogo from '@/components/Images/PreviewLogo';

interface SubjectCardProps {
    subject: Partial<SubjectSearchModel>;
}

const SubjectCard = memo<SubjectCardProps>(({subject}) => {
    const {images, logoUrl, name, shortDescription, uuid} = subject;
    const navigate = useNavigate();

    const backgroundImage = useMemo(() => {
        return images?.[0];
    }, [images]);

    return (
        <div className="card flex w-60 flex-col rounded-xl bg-zinc-800 bg-opacity-80" onClick={() => navigate(uuid!)}>
            <div className="relative flex flex-col">
                {logoUrl && (
                    <div className="absolute -bottom-2 left-2 z-10 rounded-lg border border-zinc-900 bg-white">
                        <PreviewLogo alt="image" logoUrl={logoUrl} className="h-10 w-10 rounded-lg" />
                    </div>
                )}
                <div className="absolute right-3 top-3 flex items-center justify-center rounded-3xl bg-zinc-800 bg-opacity-85 px-2 py-1">
                    <span className="self-end text-xs text-white">НЕТ ЭТАЖА</span>
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

export default SubjectCard;
