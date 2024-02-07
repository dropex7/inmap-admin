/**
 * Created by MIRZOEV A. on 26.11.2023
 */
import {useQuery} from '@apollo/client';
import {Button, Descriptions, Typography} from 'antd';
import {useNavigate, useParams} from 'react-router-dom';

import type {GetSubjectsByIdQuery} from '@/generated/graphql';

import {GET_SUBJECTS_BY_ID} from '@/operations/subject/query';
import DeleteButton from './DeleteButton';
import {useCallback} from 'react';
import {useRecoilValue} from 'recoil';
import {placeAtom} from '@/atoms/selectedPlace';
import {LeftOutlined} from '@ant-design/icons';

const {Item} = Descriptions;
const {Title} = Typography;
export function Component() {
    const navigate = useNavigate();
    const placeUuid = useRecoilValue(placeAtom);
    const {subjectId} = useParams();

    const {data} = useQuery<GetSubjectsByIdQuery>(GET_SUBJECTS_BY_ID, {
        variables: {placeUuid, uuid: subjectId},
    });

    const toChangeSubject = useCallback(() => {
        navigate('change-subject');
    }, [navigate]);

    if (!data?.subject) {
        return <>Loading...</>;
    }

    const {subject} = data;

    return (
        <div className="flex flex-col gap-6 p-6">
            <div className="flex justify-between">
                <div className="flex items-center gap-3">
                    <Button icon={<LeftOutlined />} type="text" onClick={() => navigate('..')} />
                    <Title level={4} className="!m-0">
                        {subject.name ?? 'Объект'}
                    </Title>
                </div>

                <div className="flex gap-3">
                    <Button type="primary" onClick={toChangeSubject}>
                        Редактировать
                    </Button>
                    <DeleteButton placeUuid={placeUuid!} subjectId={subject.uuid} />
                </div>
            </div>
            <Descriptions column={1}>
                <Item label="Краткое описание">{subject.shortDescription ?? ''}</Item>
                <Item label="Этаж">{subject.layerName ?? ''}</Item>
            </Descriptions>
        </div>
    );
}
