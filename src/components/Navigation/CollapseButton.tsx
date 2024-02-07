/**
 * Created by MIRZOEV A. on 15.12.2023
 */

import {memo} from 'react';
import {Button} from 'antd';

interface CollapseButtonProps {
    isOpen: boolean;
    toggle: () => void;
}

const CollapseButton = memo<CollapseButtonProps>(({isOpen, toggle}) => {
    return (
        <Button
            className="inline-flex items-center justify-center gap-2.5 border-t-zinc-800 p-5 "
            onClick={toggle}
            type="text"
        >
            <img alt="collapse" height={20} src={isOpen ? '/icons/collapse.svg' : '/icons/expand.svg'} width={20} />
            {isOpen && <div className="text-sm font-semibold leading-none text-neutral-500">Свернуть</div>}
        </Button>
    );
});

export default CollapseButton;
