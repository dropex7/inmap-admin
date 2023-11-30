/**
 * Created by MIRZOEV A. on 10.08.2023
 */

import {memo} from 'react';

interface SubjectInfoViewProps {
    count: number;
    max: number;
    title: string;
}

const SubjectInfoView = memo<SubjectInfoViewProps>(({count, max, title}) => {
    return (
        <div className="card flex flex-col gap-1 p-5">
            <div>{title}</div>
            <div className="flex items-center justify-center gap-1">
                <strong className="text-2xl text-blue-100">{count}</strong>
                <span>из {max}</span>
            </div>
        </div>
    );
});

export default SubjectInfoView;
