/**
 * Created by MIRZOEV A. on 09.05.2024
 */

import {memo, useCallback} from 'react';
import {NodeIndexOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import {useMap} from '@/hooks/useMap.ts';
import {selectObjectByOriginUuid} from '@/utils/widgetMessages.ts';

interface SelectObjectButtonProps {
    originUuid: string;
}

const SelectObjectButton = memo<SelectObjectButtonProps>(({originUuid}) => {
    const {ref} = useMap();

    const handleSelectObject = useCallback(() => {
        if (ref?.current?.contentWindow) {
            ref.current.contentWindow.postMessage(selectObjectByOriginUuid(originUuid), '*');
        }
    }, [originUuid, ref]);

    return <Button icon={<NodeIndexOutlined />} onClick={handleSelectObject} />;
});

export default SelectObjectButton;
