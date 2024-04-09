/**
 * Created by MIRZOEV A. on 11.04.2023
 */

import {memo, useCallback, useMemo} from 'react';

import type {SubjectLocalizedModel} from '@/generated/graphql.ts';

import type {MenuProps} from 'antd';
import {Dropdown} from 'antd';
import {useNavigate} from 'react-router-dom';
import View from '@/pages/Subject/card/View.tsx';
import {useMutation} from '@apollo/client';
import {DELETE_SUBJECT} from '@/operations/subject/mutation.ts';
import {SUBJECTS_OF_PLACE} from '@/operations/subject/query.ts';
import {useGetPlaceUuid} from '@/hooks/useGetPlaceUuid.ts';

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

const SubjectCard = memo<SubjectCardProps>(({subject}) => {
    const placeUuid = useGetPlaceUuid();
    const [deleteSubject] = useMutation(DELETE_SUBJECT);
    const {uuid} = subject;
    const navigate = useNavigate();

    // @ts-expect-error ошибка типизации
    const handleMenuClick = useCallback<MenuProps['onClick']>(
        ({key}) => {
            switch (key) {
                case 'change':
                    navigate(uuid!);
                    break;
                case 'delete':
                    deleteSubject({
                        refetchQueries: [SUBJECTS_OF_PLACE, 'GetSubjectsOfPlace'],
                        variables: {placeUuid, uuid},
                    });
                    break;
            }
        },
        [deleteSubject, navigate, placeUuid, uuid],
    );

    const menuProps = useMemo<MenuProps>(
        () => ({
            items,
            onClick: handleMenuClick,
        }),
        [handleMenuClick],
    );

    return (
        <Dropdown destroyPopupOnHide placement="top" trigger={['click']} menu={menuProps}>
            <View subject={subject} />
        </Dropdown>
    );
});

export default SubjectCard;
