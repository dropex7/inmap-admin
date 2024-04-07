/**
 * Created by MIRZOEV A. on 16.03.2024
 */

import {memo} from 'react';
import View from '@/pages/Subject/card/View.tsx';
import clsx from 'clsx';
import type {GetSubjectsOfPlaceInputQuery} from '@/generated/graphql.ts';

type Props = {
    data: GetSubjectsOfPlaceInputQuery;
    selectedObjectId?: string;
    setSelectedObjectId: (value: string) => void;
};

const SubjectList = memo<Props>(({data, selectedObjectId, setSelectedObjectId}) => {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            {data.subjectsOfPlace.items.map(sub => (
                <div
                    key={sub.uuid}
                    className={clsx('rounded-xl', selectedObjectId === sub.uuid && 'outline outline-zinc-500')}
                    onClick={() => setSelectedObjectId(sub.uuid)}
                >
                    <View subject={sub} />
                </div>
            ))}
        </div>
    );
});

export default SubjectList;
