/**
 * Created by MIRZOEV A. on 11.04.2023
 */
import {Button, Typography} from 'antd';
import {useNavigate, useParams} from 'react-router-dom';

import FormSubject from './FormSubject';
import {useQuery} from '@apollo/client';
import type {GetSubjectsByIdQuery} from '../../../generated/graphql';
import {GET_SUBJECTS_BY_ID} from '../../../operations/subject/query';
import {useRecoilValue} from 'recoil';
import {placeAtom} from '../../../atoms/selectedPlace';

const {Title} = Typography;

export function Component() {
    const navigate = useNavigate();
    const placeUuid = useRecoilValue(placeAtom);
    const {subjectId} = useParams();
    const isCreate = !subjectId;

    const {data: subjectResponse, loading} = useQuery<GetSubjectsByIdQuery>(GET_SUBJECTS_BY_ID, {
        variables: {placeUuid, uuid: subjectId},
        skip: isCreate,
    });

    return (
        <div className="p-6">
            <div className="flex justify-between pb-3">
                <Title level={3}>Создание объекта</Title>
                <Button onClick={() => navigate('..')}>
                    {isCreate ? 'Вернуться к шаблонам' : 'Вернуться в карточку'}
                </Button>
            </div>

            {isCreate ? <FormSubject /> : loading ? <>Загрузка...</> : <FormSubject item={subjectResponse?.subject} />}
        </div>
    );
}
