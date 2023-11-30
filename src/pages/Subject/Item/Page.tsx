/**
 * Created by MIRZOEV A. on 26.11.2023
 */
import {useQuery} from '@apollo/client';
import {Button, Descriptions} from 'antd';
import {useParams} from 'react-router-dom';

import type {GetSubjectsByIdQuery} from '../../../generated/graphql';

import {GET_SUBJECTS_BY_ID} from '../../../operations/subject/query';
import DeleteButton from './DeleteButton';

const {Item} = Descriptions;
export function Component() {
    const {id, subjectId} = useParams();

    const {data} = useQuery<GetSubjectsByIdQuery>(GET_SUBJECTS_BY_ID, {
        variables: {placeUuid: id, uuid: subjectId},
    });

    if (!data?.subject) {
        return <>Loading...</>;
    }

    const {subject} = data;

    return (
        <div className="card flex flex-col gap-6 p-6">
            <div className="flex justify-between">
                <h3>{subject.name ?? 'Объект'}</h3>
                <div className="flex gap-3">
                    <Button type="primary">Редактировать</Button>
                    <DeleteButton placeUuid={id!} subjectId={subject.uuid} />
                </div>
            </div>
            <Descriptions column={1}>
                <Item label="Краткое описание">{subject.shortDescription ?? ''}</Item>
                <Item label="Этаж">{subject.layerName ?? ''}</Item>
            </Descriptions>
        </div>
    );
}
