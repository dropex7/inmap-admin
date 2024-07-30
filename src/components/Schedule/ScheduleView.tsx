/**
 * Created by MIRZOEV A. on 09.07.2024
 */

import {memo} from 'react';
import {scheduleOptionsLabels, scheduleValues} from '@/components/Schedule/helper.ts';
import type {DAY_TYPES} from '@/components/Schedule/types.ts';
import {scheduleText} from '@/components/Schedule/types.ts';
import IntervalsView from '@/components/Schedule/views/IntervalsView.tsx';
import {Card} from 'antd';

interface ScheduleViewProps {
    schedule: any;
}

const ScheduleView = memo<ScheduleViewProps>(({schedule}) => {
    return (
        <div className="mt-3 flex flex-wrap gap-3">
            {scheduleValues.map(key => {
                const type = schedule?.[key]?.type;
                const intervals = schedule?.[key]?.intervals ?? [];
                const dateIntervals = intervals.filter((value: any) => !!value);
                const isHaveIntervals = dateIntervals.length > 0;

                return (
                    <Card
                        key={key}
                        size="small"
                        title={
                            <div className="flex items-center justify-between">
                                <span>{scheduleText[key]}</span>
                                <span className="text-xs">{scheduleOptionsLabels[type as DAY_TYPES]}</span>
                            </div>
                        }
                        style={{width: 300}}
                    >
                        <div className="flex gap-3">
                            {isHaveIntervals ? (
                                <IntervalsView intervals={dateIntervals} />
                            ) : (
                                <span className="text-xs">Нет интервалов</span>
                            )}
                        </div>
                    </Card>
                );
            })}
        </div>
    );
});

export default ScheduleView;
