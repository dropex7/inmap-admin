/**
 * Created by MIRZOEV A. on 30.11.2023
 */

import {useMutation} from '@apollo/client';
import {Button, Popconfirm} from 'antd';
import {memo} from 'react';
import {useNavigate} from 'react-router-dom';

import {DELETE_SUBJECT} from '../../../operations/subject/mutation';

interface DeleteButtonProps {
    placeUuid: string;
    subjectId: string;
}

const DeleteButton = memo<DeleteButtonProps>(({placeUuid, subjectId}) => {
    const [deleteSubject, {error}] = useMutation(DELETE_SUBJECT);
    const navigate = useNavigate();
    const handleDelete = () => {
        deleteSubject({
            variables: {placeUuid: placeUuid, uuid: subjectId},
        });
        if (!error) {
            navigate('..');
        }
    };
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
