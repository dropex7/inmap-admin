/**
 * Created by MIRZOEV A. on 09.05.2024
 */

import {memo, useCallback} from 'react';
import {App, Button, Popconfirm} from 'antd';
import {LinkOutlined} from '@ant-design/icons';
import {useMap} from '@/hooks/useMap.ts';
import {connectObjectWithPlace} from '@/utils/widgetMessages.ts';

type Props = {
    originUuid: string;
};

const {useApp} = App;

const MapPieButton = memo<Props>(({originUuid}) => {
    const {ref, selectedObject, resetSelectedObject} = useMap();
    const {message} = useApp();

    const handlePieObjectToMap = useCallback(() => {
        if (ref?.current?.contentWindow) {
            ref.current.contentWindow.postMessage(connectObjectWithPlace(selectedObject?.objectUuid, originUuid), '*');
        }
        resetSelectedObject();
        message.success('Объект привязан к области');
    }, [message, originUuid, ref, resetSelectedObject, selectedObject?.objectUuid]);

    return (
        <Popconfirm
            title="Привязка объекта к области"
            description="Вы уверены, что хотите привязать этот объект к выбранной области?"
            onConfirm={handlePieObjectToMap}
            okText="Да"
            cancelText="Нет"
        >
            <Button icon={<LinkOutlined />} />
        </Popconfirm>
    );
});

export default MapPieButton;
