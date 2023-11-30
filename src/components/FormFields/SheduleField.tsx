/**
 * Created by MIRZOEV A. on 04.06.2023
 */

import type {Dayjs} from 'dayjs';

import {Button, Form, Modal, TimePicker} from 'antd';
import dayjs from 'dayjs';
import {memo, useCallback, useEffect, useState} from 'react';

import type {SCHEDULE_DAYS, ScheduleOption} from './types';

import {scheduleOptions} from '../../utils/utils';
import SelectDays from './SelectDays';
import {DAY_TYPES} from './types';

const {Item, useFormInstance} = Form;
const {RangePicker} = TimePicker;

type RangeTime = [Dayjs | null, Dayjs | null] | null;

const ScheduleField = memo(() => {
    const form = useFormInstance();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [schedule, setSchedule] = useState<Map<SCHEDULE_DAYS, ScheduleOption>>(scheduleOptions);

    const [selectedDays, setSelectedDays] = useState<Set<SCHEDULE_DAYS>>(new Set());

    const [rangeTime, setRangeTime] = useState<RangeTime>([null, null]);

    const onChangeRange = useCallback((values: RangeTime) => {
        setRangeTime(values);
    }, []);

    const handleAddOffDays = useCallback(() => {
        const newMap = new Map(schedule);

        selectedDays.forEach(value => {
            newMap.set(value, {
                type: DAY_TYPES.OFF,
            });
        });

        setSchedule(newMap);
        setSelectedDays(new Set());
    }, [schedule, setSchedule, selectedDays]);

    const handleSetTime = useCallback(() => {
        const newMap = new Map(schedule);

        selectedDays.forEach(value => {
            newMap.set(value, {
                close: {
                    hours: dayjs(rangeTime?.[1]).hour(),
                    minutes: dayjs(rangeTime?.[1]).minute(),
                },
                open: {
                    hours: dayjs(rangeTime?.[0]).hour(),
                    minutes: dayjs(rangeTime?.[0]).minute(),
                },
                type: DAY_TYPES.WORKING,
            });
        });

        setSchedule(newMap);
        setRangeTime([null, null]);
        setSelectedDays(new Set());
        setIsModalOpen(false);
    }, [schedule, setSchedule, setRangeTime, setIsModalOpen, rangeTime, selectedDays]);

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
        form.setFieldValue('schedule', schedule);
    }, [form, schedule]);

    return (
        <Item
            label="Рабочее время"
            name="schedule"
            rules={[
                ({getFieldValue}) => ({
                    message: 'Заполните все дни',
                    validator() {
                        const scheduleValues = getFieldValue('schedule') as Map<SCHEDULE_DAYS, ScheduleOption>;

                        const emptyDay = Array.from(scheduleValues.values()).find(({type}) => type === null);

                        if (emptyDay === undefined) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('Не все дни заполнены'));
                    },
                }),
            ]}
        >
            <div className="flex flex-col gap-3">
                <SelectDays schedule={schedule} setValues={setSelectedDays} values={selectedDays} />
                <div className="flex gap-3">
                    <Button disabled={selectedDays.size === 0} onClick={showModal} size="small" type="primary">
                        Установить время
                    </Button>
                    <Button disabled={selectedDays.size === 0} onClick={handleAddOffDays} size="small">
                        Установить выходным днем
                    </Button>
                    <Button disabled={selectedDays.size > 0} onClick={resetSchedule} size="small">
                        Сбросить
                    </Button>
                </div>
            </div>

            <Modal onCancel={handleCancel} onOk={handleSetTime} open={isModalOpen} title="Установите время">
                <RangePicker format="HH:mm" onChange={onChangeRange} value={rangeTime} />
            </Modal>
        </Item>
    );
});

export default ScheduleField;
