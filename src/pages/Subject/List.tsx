/**
 * Created by MIRZOEV A. on 11.04.2023
 */

import {memo} from 'react';

import type {SearchSubjectsOfPlaceQuery} from '@/generated/graphql';

import SubjectCard from './SubjectCard';

interface ListProps {
    data: SearchSubjectsOfPlaceQuery;
}

const List = memo<ListProps>(({data}) => {
    return (
        <div className="flex flex-wrap justify-center gap-6 rounded-lg">
            {data.searchSubjects.items.map(sub => (
                <SubjectCard key={sub.uuid} subject={sub} />
            ))}
        </div>
    );
});

export default List;
