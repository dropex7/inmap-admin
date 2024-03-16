/**
 * Created by MIRZOEV A. on 11.04.2023
 */

import {memo} from 'react';

import type {SearchSubjectsOfPlaceQuery} from '@/generated/graphql';

import SubjectCard from './SubjectCard';
import {useNavigate} from 'react-router-dom';

interface ListProps {
    data: SearchSubjectsOfPlaceQuery;
}

const List = memo<ListProps>(({data}) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-wrap justify-center gap-6">
            {data.searchSubjects.items.map(sub => (
                <SubjectCard onClick={() => navigate(sub.uuid)} key={sub.uuid} subject={sub} />
            ))}
        </div>
    );
});

export default List;
