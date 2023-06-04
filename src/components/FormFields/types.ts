export enum SCHEDULE_DAYS {
  "monday" = "monday",
  "tuesday" = "tuesday",
  "wednesday" = "wednesday",
  "thursday" = "thursday",
  "friday" = "friday",
  "saturday" = "saturday",
  "sunday" = "sunday",
}

export enum DAY_TYPES {
  "WORKING" = "working",
  "OFF" = "off",
  "ALL_DAY" = "allDay",
}

export interface ScheduleOption {
  type: DAY_TYPES | null;
  open?: {
    hours: number;
    minutes: number;
  };
  close?: {
    hours: number;
    minutes: number;
  };
}
