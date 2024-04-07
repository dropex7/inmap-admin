/**
 * Created by MIRZOEV A. on 07.04.2024
 */

import {memo} from 'react';
import {DATE_WITHOUT_TIME} from '@/utils/dateFormats.ts';
import {dateFormatter} from '@/components/Date/helper.ts';

interface DateViewProps {
    date: Parameters<typeof dateFormatter>[0];
    format?: string;
}

const DateView = memo<DateViewProps>(({date, format = DATE_WITHOUT_TIME}) => {
    return dateFormatter(date, format);
});

export default DateView;
