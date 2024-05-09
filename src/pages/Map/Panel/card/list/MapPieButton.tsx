/**
 * Created by MIRZOEV A. on 09.05.2024
 */

import {memo} from 'react';
import {Button, Popconfirm} from 'antd';
import {ApiOutlined} from '@ant-design/icons';

const MapPieButton = memo(() => {
    return (
        <Popconfirm
            title="Привязка объекта к области"
            description="Вы уверены, что хотите привязать этот объект к выбранной области?"
            // TODO Добавить привязку объекта
            onConfirm={() => {}}
            okText="Да"
            cancelText="Нет"
        >
            <Button icon={<ApiOutlined />} />
        </Popconfirm>
    );
});

export default MapPieButton;
