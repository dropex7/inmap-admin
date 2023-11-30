/**
 * Created by MIRZOEV A. on 04.06.2023
 */

import {memo, useCallback} from 'react';

import type {ScheduleOption} from './types';

import ScheduleButton from './ScheduleButton';
import {SCHEDULE_DAYS} from './types';

interface Props {
    schedule: Map<SCHEDULE_DAYS, ScheduleOption>;
    setValues: (value: Set<SCHEDULE_DAYS>) => void;
    values: Set<SCHEDULE_DAYS>;
}

const options = [
    {label: 'Пн', value: SCHEDULE_DAYS.monday},
    {label: 'Вт', value: SCHEDULE_DAYS.tuesday},
    {label: 'Ср', value: SCHEDULE_DAYS.wednesday},
    {label: 'Чт', value: SCHEDULE_DAYS.thursday},
    {label: 'Пт', value: SCHEDULE_DAYS.friday},
    {label: 'Сб', value: SCHEDULE_DAYS.saturday},
    {label: 'Вс', value: SCHEDULE_DAYS.sunday},
];

const SelectDays = memo<Props>(({schedule, setValues, values}) => {
    const handleClick = useCallback(
        (value: SCHEDULE_DAYS) => {
            if (values.has(value)) {
                const tempSet = new Set(values);
                tempSet.delete(value);
                setValues(tempSet);
            } else {
                setValues(new Set(values).add(value));
            }
        },
        [setValues, values],
    );

    return (
        <div className="flex gap-1">
            {options.map(({label, value}) => {
                const scheduleValue = schedule.get(value);
                return (
                    <ScheduleButton
                        key={value}
                        onClick={() => handleClick(value)}
                        scheduleType={scheduleValue!.type}
                        selected={values.has(value)}
                        value={value}
                    >
                        {label}
                    </ScheduleButton>
                );
            })}
        </div>
    );
});

export default SelectDays;
