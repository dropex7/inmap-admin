/**
 * Created by MIRZOEV A. on 11.04.2023
 */

import {memo, useCallback, useMemo} from 'react';

import type {SubjectLocalizedModel} from '@/generated/graphql.ts';

import type {MenuProps} from 'antd';
import {Dropdown, Modal} from 'antd';
import {useNavigate} from 'react-router-dom';
import View from '@/pages/subject/card/View.tsx';
import {useMutation} from '@apollo/client';
import {DELETE_SUBJECT} from '@/operations/subject/mutation.ts';
import {SUBJECTS_OF_PLACE} from '@/operations/subject/query.ts';
import {useGetPlaceUuid} from '@/hooks/useGetPlaceUuid.ts';
import {DeleteOutlined} from '@ant-design/icons';

interface SubjectCardProps {
    subject: Partial<SubjectLocalizedModel>;
    selectedObjectUuid?: string;
    setSelectedListItem: (uuid?: string) => void;
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

const SubjectCard = memo<SubjectCardProps>(({subject, selectedObjectUuid, setSelectedListItem}) => {
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

    const onOpenChange = useCallback(
        (value: boolean) => {
            if (value) {
                setSelectedListItem(uuid!);
            } else {
                setSelectedListItem(undefined);
            }
        },
        [setSelectedListItem, uuid],
    );

    return (
        <>
            <Dropdown onOpenChange={onOpenChange} placement="bottom" trigger={['click']} menu={menuProps}>
                <View
                    subject={subject}
                    className={
                        selectedObjectUuid ? (selectedObjectUuid === uuid ? undefined : 'opacity-30') : undefined
                    }
                />
            </Dropdown>
            {contextHolder}
        </>
    );
});

export default SubjectCard;
