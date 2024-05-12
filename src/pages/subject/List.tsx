/**
 * Created by MIRZOEV A. on 11.04.2023
 */

import {memo, useState} from 'react';

import SubjectCard from './card/SubjectCard.tsx';
import type {GetSubjectsOfPlaceInputQuery} from '@/generated/graphql';

interface ListProps {
    data: GetSubjectsOfPlaceInputQuery;
}

const List = memo<ListProps>(({data}) => {
    const [selectedListItem, setSelectedListItem] = useState<string>();

    return (
        <div className="flex flex-wrap justify-center gap-6">
            {data.subjectsOfPlace.items.map(sub => (
                <SubjectCard
                    key={sub.uuid}
                    subject={sub}
                    setSelectedListItem={setSelectedListItem}
                    selectedObjectUuid={selectedListItem}
                />
            ))}
        </div>
    );
});

export default List;
