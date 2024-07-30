import type {Color} from 'antd/es/color-picker';
import type {RcFile} from 'antd/es/upload';

import type {ScheduleInterval, ScheduleIntervalsOption, ScheduleFormInterval} from '@/components/Schedule/types';

import {DAY_TYPES} from '@/components/Schedule/types';
import type {Dayjs} from 'dayjs';
import dayjs from 'dayjs';

export const prepareSchedule = (
    schedule: Record<string, ScheduleFormInterval>,
): Record<string, ScheduleIntervalsOption> => {
    const preparedScheduleValue: Record<string, ScheduleIntervalsOption> = {};
    for (const dayKey in schedule) {
        if (schedule[dayKey].type === DAY_TYPES.WORKING) {
            preparedScheduleValue[dayKey] = {
                type: schedule[dayKey].type,
                intervals: schedule[dayKey].intervals?.map(({interval}) => prepareScheduleInterval(interval)),
            };
        }
        if (schedule[dayKey].type === DAY_TYPES.ALL_DAY) {
            preparedScheduleValue[dayKey] = {
                type: schedule[dayKey].type,
            };
        } else {
            preparedScheduleValue[dayKey] = schedule[dayKey] as ScheduleIntervalsOption;
        }
    }
    return preparedScheduleValue;
};

export const prepareScheduleInterval = (interval: [Dayjs | undefined, Dayjs | undefined]): ScheduleInterval => {
    const [start, end] = interval;

    return {
        close: {
            hours: end ? end.hour() : dayjs().hour(),
            minutes: end ? end.minute() : dayjs().minute(),
        },
        open: {
            hours: start ? start.hour() : dayjs().hour(),
            minutes: start ? start.minute() : dayjs().minute(),
        },
    };
};

const isObjectColor = (c: Color | string): c is Color => typeof c !== 'string';

function addAlphaToStart(color: string) {
    const alpha = color.slice(6);
    return `#${alpha ? alpha : 'ff'}${color.slice(0, 6)}`;
}

export function prepareColor(color: Color | string) {
    return isObjectColor(color) ? addAlphaToStart(color.toHex()) : color;
}

export const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });
