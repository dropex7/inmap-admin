/**
 * Created by MIRZOEV A. on 04.06.2023
 */

import type {ButtonProps} from 'antd';
import type {PropsWithChildren} from 'react';

import {Button} from 'antd';
import {memo, useMemo} from 'react';

import type {SCHEDULE_DAYS, ScheduleOption} from './types';

import {DAY_TYPES} from './types';

interface ScheduleButtonProps extends Pick<ButtonProps, 'onClick'> {
    scheduleType: ScheduleOption['type'];
    selected: boolean;
    value: SCHEDULE_DAYS;
}

const ScheduleButton = memo<PropsWithChildren<ScheduleButtonProps>>(({scheduleType, selected, ...rest}) => {
    const className = useMemo(
        () =>
            selected
                ? 'bg-blue-100'
                : scheduleType === DAY_TYPES.WORKING
                  ? 'bg-green-500 text-white'
                  : scheduleType === DAY_TYPES.OFF
                    ? 'bg-gray-300'
                    : '',
        [selected, scheduleType],
    );

    return <Button {...rest} className={className} />;
});

export default ScheduleButton;
