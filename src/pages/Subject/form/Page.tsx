/**
 * Created by MIRZOEV A. on 11.04.2023
 */
import {Button, Typography} from 'antd';
import {useNavigate, useParams} from 'react-router-dom';

import type {TemplateById} from './FormSubject';
import FormSubject from './FormSubject';
import {useQuery} from '@apollo/client';
import type {GetSubjectsByIdQuery} from '@/generated/graphql';
import {GET_SUBJECTS_BY_ID} from '@/operations/subject/query';
import {useRecoilValue} from 'recoil';
import {placeAtom} from '@/atoms/selectedPlace';
import {GET_TEMPLATE_BY_ID} from '@/operations/template/query.ts';
import {LeftOutlined} from '@ant-design/icons';

const {Title} = Typography;

export function Component() {
    const {subjectId, templateId} = useParams();
    const navigate = useNavigate();
    const placeUuid = useRecoilValue(placeAtom);

    const isCreate = !subjectId;

    const {data: subjectResponse, loading} = useQuery<GetSubjectsByIdQuery>(GET_SUBJECTS_BY_ID, {
        variables: {placeUuid, uuid: subjectId},
        skip: isCreate,
    });

    const {data: templateResponse} = useQuery<TemplateById>(GET_TEMPLATE_BY_ID, {
        variables: {uuid: isCreate ? templateId! : subjectResponse?.subject?.content?.templateUuid},
        skip: isCreate ? false : !subjectResponse?.subject?.content?.templateUuid,
    });

    return (
        <div className="card -m-5 flex flex-col divide-y divide-gray-700">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                    <Button
                        icon={<LeftOutlined />}
                        type="text"
                        onClick={() => navigate(isCreate ? '/subject' : '..')}
                    />
                    {templateResponse && (
                        <Title level={4} className="!m-0">
                            {isCreate ? templateResponse.template.name : 'Редактирование объекта'}
                        </Title>
                    )}
                </div>
                <Button type="primary" form="subjectForm" htmlType="submit">
                    Сохранить
                </Button>
            </div>

            {isCreate ? <FormSubject /> : loading ? <>Загрузка...</> : <FormSubject item={subjectResponse?.subject} />}
        </div>
    );
}
