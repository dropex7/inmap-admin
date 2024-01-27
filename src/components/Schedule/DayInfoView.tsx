/**
 * Created by MIRZOEV A. on 27.01.2024
 */

import {memo} from 'react';
import type {DAY_TYPES, SCHEDULE_DAYS, FormScheduleInterval} from '@/components/Schedule/types.ts';
import {scheduleText} from '@/components/Schedule/types.ts';
import {scheduleOptionsLabels} from '@/components/Schedule/helper.ts';

interface DayInfoViewProps {
    day: SCHEDULE_DAYS;
    type: DAY_TYPES;
    intervals: Array<FormScheduleInterval>;
}

const DayInfoView = memo<DayInfoViewProps>(({day, type}) => {
    return (
        <div className="flex items-center gap-3">
            <span>{scheduleText[day]}</span>
            <span className="text-xs lowercase text-white text-opacity-50">
                {type ? scheduleOptionsLabels[type as DAY_TYPES] : ''}
            </span>
        </div>
    );
});

export default DayInfoView;
