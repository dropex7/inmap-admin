/**
 * Created by MIRZOEV A. on 11.04.2023
 */

import {memo, useMemo} from 'react';
import {useNavigate} from 'react-router-dom';

import type {SubjectSearchModel} from '../../generated/graphql';

import noPhoto from '../../assets/no-photo-available.png';
import PreviewImage from '../../components/Images/PreviewImage';
import PreviewLogo from '../../components/Images/PreviewLogo';

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
        <div className="card flex w-80 flex-col rounded-xl" onClick={() => navigate(uuid!)}>
            {logoUrl && <PreviewLogo alt="image" logoUrl={logoUrl} />}

            <PreviewImage alt="image" height="200px" url={backgroundImage ?? noPhoto} />

            <div className="flex flex-col gap-3 p-3">
                <span className="self-end text-sm text-gray-500">НЕТ ЭТАЖА</span>
                <strong className="self-start">{name}</strong>
                <span className="self-start text-sm text-gray-500">{shortDescription}</span>
            </div>
        </div>
    );
});

export default SubjectCard;
