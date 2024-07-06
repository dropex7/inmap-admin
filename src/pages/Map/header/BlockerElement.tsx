/**
 * Created by MIRZOEV A. on 12.05.2024
 */

import {memo} from 'react';
import {Button, Modal} from 'antd';
import {useBlocker} from 'react-router-dom';
import {useMap} from '@/hooks/useMap.ts';

const BlockerElement = memo(() => {
    const {isEditMode, planState} = useMap();

    const blocker = useBlocker(
        ({currentLocation, nextLocation}) =>
            isEditMode && !!planState?.isEdited && currentLocation.pathname !== nextLocation.pathname,
    );

    return (
        <Modal
            title="Все несохраненные данные будут потеряны, продолжить переход?"
            open={blocker.state === 'blocked'}
            destroyOnClose
            closable={false}
            footer={
                <div className="flex justify-end gap-3">
                    <Button onClick={blocker.reset}>Отменить</Button>
                    <Button onClick={blocker.proceed}>Продолжить переход</Button>
                </div>
            }
        />
    );
});

export default BlockerElement;
