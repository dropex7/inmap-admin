import {DAY_TYPES} from '@/components/Schedule/types.ts';

export const scheduleOptionsLabels = {
    [DAY_TYPES.ALL_DAY]: 'Круглосуточно',
    [DAY_TYPES.WORKING]: 'С интервалами',
    [DAY_TYPES.OFF]: 'Выходной',
};

export const scheduleOptions = [
    {label: scheduleOptionsLabels[DAY_TYPES.ALL_DAY], value: DAY_TYPES.ALL_DAY},
    {label: scheduleOptionsLabels[DAY_TYPES.WORKING], value: DAY_TYPES.WORKING},
];
