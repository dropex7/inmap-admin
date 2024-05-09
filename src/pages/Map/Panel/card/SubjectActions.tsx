/**
 * Created by MIRZOEV A. on 09.05.2024
 */

import {memo, useCallback} from 'react';
import {Button} from 'antd';
import {useNavigate} from 'react-router-dom';
import {useMap} from '@/hooks/useMap.ts';

const SubjectActions = memo(() => {
    const navigate = useNavigate();
    const {selectedObject, isEditMode} = useMap();

    const handleEditButton = useCallback(() => {
        navigate(`/subject/${selectedObject?.objectUuid}`);
    }, [navigate, selectedObject?.objectUuid]);

    return (
        <div className="flex flex-col gap-3 rounded-xl bg-zinc-800 p-6">
            {isEditMode ? (
                <Button size="large">Отвязать</Button>
            ) : (
                <Button size="large" onClick={handleEditButton}>
                    Изменить объект
                </Button>
            )}
        </div>
    );
});

export default SubjectActions;
