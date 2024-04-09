/**
 * Created by MIRZOEV A. on 05.01.2024
 */

import {memo} from 'react';
import {Button} from 'antd';
import {useGetMap} from '@/hooks/useGetMap.ts';

interface TieButtonProps {
    openDrawer: () => void;
}

const TieButton = memo<TieButtonProps>(({openDrawer}) => {
    const {selectedObject} = useGetMap();

    if (!selectedObject) {
        return null;
    }

    return (
        <Button type="primary" onClick={openDrawer}>
            Привязать
        </Button>
    );
});

export default TieButton;
