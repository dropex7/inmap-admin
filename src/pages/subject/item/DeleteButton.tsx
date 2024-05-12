/**
 * Created by MIRZOEV A. on 30.11.2023
 */

import {useMutation} from '@apollo/client';
import {Button, Popconfirm} from 'antd';
import {memo, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import {DELETE_SUBJECT} from '@/operations/subject/mutation';
import {SUBJECTS_OF_PLACE} from '@/operations/subject/query.ts';

interface DeleteButtonProps {
    placeUuid: string;
    subjectId: string;
}

const DeleteButton = memo<DeleteButtonProps>(({placeUuid, subjectId}) => {
    const [deleteSubject, {data, error}] = useMutation(DELETE_SUBJECT);
    const navigate = useNavigate();
    const handleDelete = () => {
        deleteSubject({
            refetchQueries: [SUBJECTS_OF_PLACE, 'GetSubjectsOfPlace'],
            variables: {placeUuid: placeUuid, uuid: subjectId},
        });

        if (data) {
            navigate('..');
        }
    };

    useEffect(() => {
        if (error) {
            alert(error.message);
        }
    }, [error]);

    return (
        <Popconfirm
            cancelText="Отмена"
            destroyTooltipOnHide
            okButtonProps={{danger: true}}
            okText="Удалить"
            onConfirm={handleDelete}
            title="Вы уверены, что хотите удалить объект?"
        >
            <Button danger>Удалить</Button>
        </Popconfirm>
    );
});

export default DeleteButton;
