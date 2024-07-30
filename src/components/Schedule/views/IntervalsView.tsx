/**
 * Created by MIRZOEV A. on 09.07.2024
 */

import {memo} from 'react';
import type {FormScheduleInterval} from '@/components/Schedule/types.ts';
import dayjs from 'dayjs';

interface IntervalsViewProps {
    intervals: Array<FormScheduleInterval>;
}

const IntervalsView = memo<IntervalsViewProps>(({intervals}) => {
    return (
        <div className="flex flex-col gap-3">
            {intervals.map(({interval}: any, index) => {
                const intervalText = `${dayjs(interval[0]).format('HH:mm')} — ${dayjs(interval[1]).format('HH:mm')}`;
                return (
                    <div key={`${index}_${JSON.stringify(interval[0])}`}>
                        <span className="text-sm">{intervalText}</span>
                    </div>
                );
            })}
        </div>
    );
});

export default IntervalsView;
