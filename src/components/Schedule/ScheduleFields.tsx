/**
 * Created by MIRZOEV A. on 20.01.2024
 */

import {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {Button, Collapse, Form, Modal, Switch} from 'antd';
import useOpen from '@/hooks/useOpen.ts';
import type {FormScheduleInterval} from '@/components/Schedule/types.ts';
import {DAY_TYPES, SCHEDULE_DAYS} from '@/components/Schedule/types.ts';
import ScheduleItem from '@/components/Schedule/ScheduleItem.tsx';
import DayInfoView from '@/components/Schedule/DayInfoView.tsx';
import {validateSchedule} from '@/pages/subject/form/tabs/helper.ts';

type CollapseItems = string | Array<string>;

const {useFormInstance, useWatch} = Form;

const scheduleValues = Object.values(SCHEDULE_DAYS);

const ScheduleFields = memo(() => {
    const form = useFormInstance();
    const schedule = useWatch('schedule', form);
    const [oldState, setOldState] = useState(form.getFieldValue('schedule'));
    const [isInvalid, setIsInvalid] = useState(false);
    const {open, onClose, onOpen} = useOpen();
    const [copyIntervals, setCopyIntervals] = useState<Array<FormScheduleInterval>>();

    const onOpenModal = useCallback(() => {
        setOldState(schedule);
        onOpen();
    }, [onOpen, schedule]);

    const onCancelChanges = useCallback(() => {
        form.setFieldValue('schedule', oldState);
        onClose();
    }, [form, oldState, onClose]);

    const [activeElements, setActiveElements] = useState<CollapseItems>([]);

    const handleChangeCollapse = useCallback((values: CollapseItems) => {
        setActiveElements(values);
    }, []);

    const scheduleItems = useMemo(
        () =>
            scheduleValues.map(key => {
                const type = schedule?.[key]?.type;
                const intervals = schedule?.[key]?.intervals ?? [];
                const isChecked = type !== DAY_TYPES.OFF;
                const onSwitchChange = (checked: boolean) => {
                    form.setFieldValue(['schedule', key, 'type'], checked ? DAY_TYPES.ALL_DAY : DAY_TYPES.OFF);
                    if (checked && !activeElements.includes(key)) {
                        setActiveElements(prev => [...prev, key]);
                    }
                };

                return {
                    key,
                    label: (
                        <div className="flex gap-3">
                            <Switch onChange={onSwitchChange} checked={isChecked} />
                            <DayInfoView intervals={intervals} day={key} type={type} />
                        </div>
                    ),
                    children: isChecked ? (
                        <ScheduleItem copyInterval={copyIntervals} setCopyInterval={setCopyIntervals} name={key} />
                    ) : (
                        <div>Выходной день</div>
                    ),
                };
            }),
        [activeElements, copyIntervals, form, schedule],
    );

    const handleSaveSchedule = useCallback(() => {
        if (isInvalid) {
            return;
        }
        onClose();
    }, [isInvalid, onClose]);

    useEffect(() => {
        if (schedule) {
            setIsInvalid(validateSchedule(schedule));
        }
    }, [schedule]);

    return (
        <>
            <Button onClick={onOpenModal}>Настройка расписания</Button>
            <Modal
                forceRender
                width={500}
                title="График работы"
                open={open}
                closable={false}
                maskClosable={false}
                footer={[
                    <Button key="cancel" onClick={onCancelChanges}>
                        Отменить
                    </Button>,
                    <Button key="save" disabled={isInvalid} onClick={handleSaveSchedule} type="primary">
                        Сохранить
                    </Button>,
                ]}
            >
                <Form.List name="schedule">
                    {() => (
                        <div className="flex flex-col gap-3">
                            <Collapse
                                activeKey={activeElements}
                                onChange={handleChangeCollapse}
                                collapsible="icon"
                                expandIconPosition="end"
                                items={scheduleItems}
                            />
                            {isInvalid && <span className="text-sm text-red-300">Не заполнены интервалы</span>}
                        </div>
                    )}
                </Form.List>
            </Modal>
        </>
    );
});

export default ScheduleFields;
