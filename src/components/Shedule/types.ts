import type {Dayjs} from 'dayjs';

export enum SCHEDULE_DAYS {
    'sunday' = 'sunday',
    'monday' = 'monday',
    'tuesday' = 'tuesday',
    'friday' = 'friday',
    'wednesday' = 'wednesday',
    'thursday' = 'thursday',
    'saturday' = 'saturday',
}

export const scheduleText: Record<SCHEDULE_DAYS, string> = {
    [SCHEDULE_DAYS.friday]: 'Пятница',
    [SCHEDULE_DAYS.monday]: 'Понедельник',
    [SCHEDULE_DAYS.saturday]: 'Суббота',
    [SCHEDULE_DAYS.sunday]: 'Воскресенье',
    [SCHEDULE_DAYS.thursday]: 'Четверг',
    [SCHEDULE_DAYS.tuesday]: 'Вторник',
    [SCHEDULE_DAYS.wednesday]: 'Среда',
};

export enum DAY_TYPES {
    'ALL_DAY' = 'allDay',
    'OFF' = 'off',
    'WORKING' = 'working_intervals',
}

export interface ScheduleInterval {
    close: {
        hours: number;
        minutes: number;
    };
    open: {
        hours: number;
        minutes: number;
    };
}

export interface ScheduleIntervalsOption {
    intervals?: Array<ScheduleInterval>;

    type: DAY_TYPES;
}

export interface ScheduleFormInterval {
    type: DAY_TYPES;
    intervals?: Array<{interval: [Dayjs | undefined, Dayjs | undefined]}>;
}
