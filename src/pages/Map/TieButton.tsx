/**
 * Created by MIRZOEV A. on 05.01.2024
 */

import {memo, useContext} from 'react';
import {Button} from 'antd';
import {MapContext} from './MapContext';

interface TieButtonProps {
    openDrawer: () => void;
}

const TieButton = memo<TieButtonProps>(({openDrawer}) => {
    const {selectedObject} = useContext(MapContext);

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
