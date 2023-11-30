export enum SCHEDULE_DAYS {
    'friday' = 'friday',
    'monday' = 'monday',
    'saturday' = 'saturday',
    'sunday' = 'sunday',
    'thursday' = 'thursday',
    'tuesday' = 'tuesday',
    'wednesday' = 'wednesday',
}

export enum DAY_TYPES {
    'ALL_DAY' = 'allDay',
    'OFF' = 'off',
    'WORKING' = 'working',
}

export interface ScheduleOption {
    close?: {
        hours: number;
        minutes: number;
    };
    open?: {
        hours: number;
        minutes: number;
    };
    type: DAY_TYPES | null;
}
