import dayjs from 'dayjs';
import {DATE_WITH_TIME} from '@/utils/dateFormats.ts';

export function dateFormatter(date: Parameters<typeof dayjs>[0], format = DATE_WITH_TIME): string {
    if (!date) return '-';

    const dateDayjs = dayjs(date);

    if (!dateDayjs.isValid()) return '-';

    return dateDayjs.format(format);
}
