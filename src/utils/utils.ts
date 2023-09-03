import { SCHEDULE_DAYS, ScheduleOption } from "../components/FormFields/types";
import { Color } from "antd/es/color-picker";
import { RcFile } from "antd/es/upload";

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

const isObjectColor = (c: Color | string): c is Color => typeof c !== "string";

function addAlphaToStart(color: string) {
  const alpha = color.slice(6);
  return `#${alpha ? alpha : "ff"}${color.slice(0, 6)}`;
}

export function prepareColor(color: Color | string) {
  return isObjectColor(color) ? addAlphaToStart(color.toHex()) : color;
}

export const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
