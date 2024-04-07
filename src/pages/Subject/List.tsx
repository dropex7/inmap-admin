/**
 * Created by MIRZOEV A. on 11.04.2023
 */

import {memo} from 'react';

import SubjectCard from './card/SubjectCard.tsx';
import type {GetSubjectsOfPlaceInputQuery} from '@/generated/graphql';

interface ListProps {
    data: GetSubjectsOfPlaceInputQuery;
}

const List = memo<ListProps>(({data}) => {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            {data.subjectsOfPlace.items.map(sub => (
                <SubjectCard key={sub.uuid} subject={sub} />
            ))}
        </div>
    );
});

export default List;
