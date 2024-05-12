/**
 * Created by MIRZOEV A. on 07.04.2024
 */

import {memo} from 'react';

interface ExtraElementsNumberProps {
    extraCount: number;
}

const ExtraElementsNumber = memo<ExtraElementsNumberProps>(({extraCount}) => {
    return (
        <span className="size-10 rounded-full bg-zinc-700 pt-1 text-center text-lg text-neutral-300 opacity-50">
            +{extraCount}
        </span>
    );
});

export default ExtraElementsNumber;
