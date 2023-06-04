import {
  DAY_TYPES,
  SCHEDULE_DAYS,
  ScheduleOption,
} from "../components/FormFields/types";

const generatedSchedule = Object.keys(SCHEDULE_DAYS).map((day) => [
  day,
  {
    type: null,
  },
]);

export const dayText = {
  [SCHEDULE_DAYS.monday]: "Понедельник",
  [SCHEDULE_DAYS.tuesday]: "Вторник",
  [SCHEDULE_DAYS.wednesday]: "Среда",
  [SCHEDULE_DAYS.thursday]: "Четверг",
  [SCHEDULE_DAYS.friday]: "Пятница",
  [SCHEDULE_DAYS.saturday]: "Суббота",
  [SCHEDULE_DAYS.sunday]: "Воскресенье",
};

export const scheduleOptions = new Map<SCHEDULE_DAYS, ScheduleOption>(
  // @ts-ignore
  generatedSchedule
);
