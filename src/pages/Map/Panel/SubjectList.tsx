/**
 * Created by MIRZOEV A. on 16.03.2024
 */

import {memo} from 'react';
import type {SearchSubjectsOfPlaceQuery} from '@/generated/graphql.ts';
import SubjectCard from '@/pages/Subject/SubjectCard.tsx';

type Props = {
    data: SearchSubjectsOfPlaceQuery;
    selectedObjectId?: string;
    setSelectedObjectId: (value: string) => void;
};

const SubjectList = memo<Props>(({data, selectedObjectId, setSelectedObjectId}) => {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            {data.searchSubjects.items.map(sub => (
                <SubjectCard
                    key={sub.uuid}
                    className={selectedObjectId === sub.uuid ? 'outline outline-zinc-500' : undefined}
                    onClick={() => setSelectedObjectId(sub.uuid)}
                    subject={sub}
                />
            ))}
        </div>
    );
});

export default SubjectList;
