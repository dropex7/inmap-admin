/**
 * Created by MIRZOEV A. on 04.06.2023
 */

import { memo, useCallback, useEffect, useState } from "react";
import { Button, Checkbox, Form, Modal, TimePicker } from "antd";
import { DAY_TYPES, SCHEDULE_DAYS, ScheduleOption } from "./types";
import SelectDays from "./SelectDays";
import dayjs, { Dayjs } from "dayjs";
import { scheduleOptions } from "../../utils/utils";

const { Item, useFormInstance } = Form;
const { Group } = Checkbox;
const { RangePicker } = TimePicker;

type RangeTime = [Dayjs | null, Dayjs | null] | null;

const ScheduleField = memo(({}) => {
  const form = useFormInstance();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [schedule, setSchedule] =
    useState<Map<SCHEDULE_DAYS, ScheduleOption>>(scheduleOptions);

  const [selectedDays, setSelectedDays] = useState<Set<SCHEDULE_DAYS>>(
    new Set()
  );

  const [rangeTime, setRangeTime] = useState<RangeTime>([null, null]);

  const onChangeRange = useCallback((values: RangeTime) => {
    setRangeTime(values);
  }, []);

  const handleAddOffDays = useCallback(() => {
    const newMap = new Map(schedule);

    selectedDays.forEach((value) => {
      newMap.set(value, {
        type: DAY_TYPES.OFF,
      });
    });

    setSchedule(newMap);
    setSelectedDays(new Set());
  }, [schedule, setSchedule, selectedDays]);

  const handleSetTime = useCallback(() => {
    const newMap = new Map(schedule);

    selectedDays.forEach((value) => {
      newMap.set(value, {
        type: DAY_TYPES.WORKING,
        open: {
          hours: dayjs(rangeTime?.[0]).hour(),
          minutes: dayjs(rangeTime?.[0]).minute(),
        },
        close: {
          hours: dayjs(rangeTime?.[1]).hour(),
          minutes: dayjs(rangeTime?.[1]).minute(),
        },
      });
    });

    setSchedule(newMap);
    setRangeTime([null, null]);
    setSelectedDays(new Set());
    setIsModalOpen(false);
  }, [
    schedule,
    setSchedule,
    setRangeTime,
    setIsModalOpen,
    rangeTime,
    selectedDays,
  ]);

  const resetSchedule = useCallback(() => {
    setSelectedDays(new Set());
    setRangeTime([null, null]);
    setSchedule(scheduleOptions);
  }, [setSelectedDays, setRangeTime, setSchedule]);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    form.setFieldValue("schedule", schedule);
  }, [schedule]);

  return (
    <Item
      label="Рабочее время"
      name="schedule"
      rules={[
        ({ getFieldValue }) => ({
          validator(_, value) {
            const scheduleValues = getFieldValue("schedule") as Map<
              SCHEDULE_DAYS,
              ScheduleOption
            >;

            const emptyDay = Array.from(scheduleValues.values()).find(
              ({ type }) => type === null
            );

            if (emptyDay === undefined) {
              return Promise.resolve();
            }
            return Promise.reject(new Error("Не все дни заполнены"));
          },
          message: "Заполните все дни",
        }),
      ]}
    >
      <div className="flex flex-col gap-3">
        <SelectDays
          values={selectedDays}
          setValues={setSelectedDays}
          schedule={schedule}
        />
        <div className="flex gap-3">
          <Button
            disabled={selectedDays.size === 0}
            type="primary"
            onClick={showModal}
            size="small"
          >
            Установить время
          </Button>
          <Button
            size="small"
            disabled={selectedDays.size === 0}
            onClick={handleAddOffDays}
          >
            Установить выходным днем
          </Button>
          <Button
            size="small"
            disabled={selectedDays.size > 0}
            onClick={resetSchedule}
          >
            Сбросить
          </Button>
        </div>
      </div>

      <Modal
        title="Установите время"
        open={isModalOpen}
        onOk={handleSetTime}
        onCancel={handleCancel}
      >
        <RangePicker
          format="HH:mm"
          value={rangeTime}
          onChange={onChangeRange}
        />
      </Modal>
    </Item>
  );
});

export default ScheduleField;
