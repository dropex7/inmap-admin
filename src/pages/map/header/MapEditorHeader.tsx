/**
 * Created by MIRZOEV A. on 23.03.2024
 */

import {memo} from 'react';
import {Button} from 'antd';

import PlanSelect from '@/pages/map/header/PlanSelect.tsx';

import {useMap} from '@/hooks/useMap.ts';

import BlockerElement from '@/pages/map/header/BlockerElement.tsx';
import EditActions from '@/pages/map/header/EditActions.tsx';

const MapEditorHeader = memo(() => {
    const {isEditMode, toggleEditMode} = useMap();

    return (
        <div className="flex items-center justify-between border-b border-zinc-700 p-4">
            <PlanSelect />

            <BlockerElement />

            {isEditMode ? (
                <EditActions />
            ) : (
                <Button type="primary" onClick={toggleEditMode}>
                    Редактировать карту
                </Button>
            )}
        </div>
    );
});

export default MapEditorHeader;
