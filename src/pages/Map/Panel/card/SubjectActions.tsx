/**
 * Created by MIRZOEV A. on 09.05.2024
 */

import {memo, useCallback} from 'react';
import {App, Button} from 'antd';
import {useNavigate} from 'react-router-dom';
import {useMap} from '@/hooks/useMap.ts';
import {connectObjectWithPlace} from '@/utils/widgetMessages.ts';

const {useApp} = App;

const SubjectActions = memo(() => {
    const navigate = useNavigate();
    const {ref, selectedObject, isEditMode, resetSelectedObject} = useMap();

    const {message} = useApp();

    const handleUnpieObjectToMap = useCallback(() => {
        if (ref?.current?.contentWindow) {
            ref.current.contentWindow.postMessage(connectObjectWithPlace(selectedObject?.objectUuid), '*');
        }
        resetSelectedObject();
        message.success('Объект отвязан от области');
    }, [message, ref, resetSelectedObject, selectedObject?.objectUuid]);

    const handleEditButton = useCallback(() => {
        navigate(`/subject/${selectedObject?.originUuid}`);
    }, [navigate, selectedObject?.originUuid]);

    return (
        <div className="flex flex-col gap-3 rounded-xl bg-zinc-800 p-6">
            {isEditMode ? (
                <Button size="large" onClick={handleUnpieObjectToMap}>
                    Отвязать
                </Button>
            ) : (
                <Button size="large" onClick={handleEditButton}>
                    Изменить объект
                </Button>
            )}
        </div>
    );
});

export default SubjectActions;
