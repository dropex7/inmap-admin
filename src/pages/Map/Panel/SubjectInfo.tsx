/**
 * Created by MIRZOEV A. on 08.01.2024
 */

import {memo} from 'react';
import type {GetSubjectsByIdQuery} from '@/generated/graphql.ts';
import {Carousel, Typography, Image} from 'antd';
import SubjectStatus from '@/pages/Map/Panel/SubjectStatus.tsx';
import noPhoto from '@/assets/no-photo-available.png';

interface SubjectInfoProps {
    subject: GetSubjectsByIdQuery['subject'];
}

const {Title} = Typography;

const SubjectInfo = memo<SubjectInfoProps>(({subject}) => {
    const {images} = subject;

    return (
        <div className="flex flex-col gap-3">
            <Title level={2}>{subject.name}</Title>
            <SubjectStatus />
            {images.length === 0 ? (
                <Image preview={false} height="250px" width="100%" className="object-cover" src={noPhoto} />
            ) : (
                <Carousel autoplay>
                    {images.map(url => (
                        <Image
                            key={url}
                            preview={false}
                            height="250px"
                            width="100%"
                            className="object-cover"
                            src={url}
                        />
                    ))}
                </Carousel>
            )}
        </div>
    );
});

export default SubjectInfo;
