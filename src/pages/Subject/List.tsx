/**
 * Created by MIRZOEV A. on 11.04.2023
 */

import {memo} from 'react';

import type {GetSubjectsOfPlaceQuery} from '../../generated/graphql';

import SubjectCard from './SubjectCard';
import SubjectInfoView from './SubjectInfoView';

interface ListProps {
    data: GetSubjectsOfPlaceQuery;
}

const List = memo<ListProps>(({data}) => {
    return (
        <>
            <div className="flex justify-end gap-6 p-3">
                <SubjectInfoView count={20} max={70} title="Создано объектов" />
                <SubjectInfoView count={17} max={20} title="Сейчас работают" />
                <SubjectInfoView count={3} max={20} title="Приостановлено" />
            </div>
            <div className="flex flex-wrap justify-center gap-4 rounded-lg py-3">
                {data.subjectsOfPlace.map(sub => (
                    <SubjectCard key={sub.uuid} subject={sub} />
                ))}
            </div>
        </>
    );
});

export default List;
