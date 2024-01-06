/**
 * Created by MIRZOEV A. on 05.01.2024
 */

import {memo, useContext} from 'react';
import {Alert} from 'antd';
import {MapContext} from './MapContext';

const SelectedObjectStatus = memo(() => {
    const {selectedObject} = useContext(MapContext);

    const alertMessage = selectedObject
        ? selectedObject.originUuid
            ? 'Объект привязан'
            : 'Нужно привязать объект'
        : 'Выберите объект';

    return <Alert message={alertMessage} type="info" showIcon />;
});

export default SelectedObjectStatus;
