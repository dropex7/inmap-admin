/**
 * Created by MIRZOEV A. on 05.01.2024
 */

import {memo, useContext} from 'react';
import {Alert} from 'antd';
import {MapContext} from '../MapContext';

const SubjectStatus = memo(() => {
    const {selectedObject} = useContext(MapContext);

    const isPied = selectedObject?.originUuid && selectedObject.objectUuid;

    const alertMessage = isPied
        ? 'Для выбранной области на карте уже есть связанный объект'
        : 'Нужно связать объект с областью на плане';

    return <Alert description={alertMessage} message="Состояние выбранной области" type="info" showIcon />;
});

export default SubjectStatus;
