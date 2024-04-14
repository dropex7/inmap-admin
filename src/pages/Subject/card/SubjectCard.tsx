/**
 * Created by MIRZOEV A. on 11.04.2023
 */

import type {CSSProperties} from 'react';
import {memo, useCallback, useMemo} from 'react';

import type {SubjectLocalizedModel} from '@/generated/graphql.ts';

import type {MenuProps} from 'antd';
import {Dropdown, Modal} from 'antd';
import {useNavigate} from 'react-router-dom';
import View from '@/pages/Subject/card/View.tsx';
import {useMutation} from '@apollo/client';
import {DELETE_SUBJECT} from '@/operations/subject/mutation.ts';
import {SUBJECTS_OF_PLACE} from '@/operations/subject/query.ts';
import {useGetPlaceUuid} from '@/hooks/useGetPlaceUuid.ts';
import {DeleteOutlined} from '@ant-design/icons';

interface SubjectCardProps {
    subject: Partial<SubjectLocalizedModel>;
}

const items: MenuProps['items'] = [
    {
        key: 'change',
        label: 'Редактировать',
    },
    {
        key: 'delete',
        danger: true,
        label: 'Удалить',
    },
];

const overlayStyle: CSSProperties = {
    borderRadius: '8px',
    outline: 'solid',
    outlineColor: 'rgba(255, 255, 255, 0.3)',
};

const SubjectCard = memo<SubjectCardProps>(({subject}) => {
    const placeUuid = useGetPlaceUuid();
    const [deleteSubject] = useMutation(DELETE_SUBJECT);
    const {uuid} = subject;
    const navigate = useNavigate();

    const [modal, contextHolder] = Modal.useModal();

    const handleDelete = useCallback(() => {
        deleteSubject({
            refetchQueries: [SUBJECTS_OF_PLACE, 'GetSubjectsOfPlace'],
            variables: {placeUuid, uuid},
        });
    }, [deleteSubject, placeUuid, uuid]);

    // @ts-expect-error ошибка типизации
    const handleMenuClick = useCallback<MenuProps['onClick']>(
        ({key}) => {
            switch (key) {
                case 'change':
                    navigate(uuid!);
                    break;
                case 'delete':
                    modal.confirm({
                        title: 'Удаление объекта',
                        icon: <DeleteOutlined />,
                        content: 'Вы уверены, что хотите удалить объект?',
                        okText: 'Удалить',
                        cancelText: 'Отмена',
                        onOk: handleDelete,
                        okButtonProps: {danger: true},
                    });
                    break;
            }
        },
        [handleDelete, modal, navigate, uuid],
    );

    const menuProps = useMemo<MenuProps>(
        () => ({
            items,
            onClick: handleMenuClick,
        }),
        [handleMenuClick],
    );

    return (
        <>
            <Dropdown overlayStyle={overlayStyle} placement="top" trigger={['click']} menu={menuProps}>
                <View subject={subject} />
            </Dropdown>
            {contextHolder}
        </>
    );
});

export default SubjectCard;
