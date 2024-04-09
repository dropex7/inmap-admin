/**
 * Created by MIRZOEV A. on 08.01.2024
 */

import {memo} from 'react';
import type {GetSubjectsByIdQuery} from '@/generated/graphql.ts';
import {Typography} from 'antd';
import SubjectStatus from '@/pages/Map/panel/card/SubjectStatus.tsx';

import ImageCarousel from '@/pages/Map/panel/card/ImageCarousel.tsx';

interface SubjectInfoProps {
    subject: GetSubjectsByIdQuery['subject'];
}

const {Title} = Typography;

const SubjectInfo = memo<SubjectInfoProps>(({subject}) => {
    const {images} = subject;

    return (
        <div className="flex flex-col gap-3">
            <Title level={2} className="self-center">
                {subject.name}
            </Title>
            <ImageCarousel images={images} />
            <SubjectStatus />
        </div>
    );
});

export default SubjectInfo;
