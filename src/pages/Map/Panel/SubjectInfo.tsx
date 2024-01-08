/**
 * Created by MIRZOEV A. on 08.01.2024
 */

import {memo} from 'react';

interface SubjectInfoProps {
    subject: any;
}

const SubjectInfo = memo<SubjectInfoProps>(({subject}) => {
    return (
        <div>
            <h3 className="m-0">{subject.name}</h3>
        </div>
    );
});

export default SubjectInfo;
