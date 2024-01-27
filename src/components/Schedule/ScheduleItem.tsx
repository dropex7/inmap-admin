/**
 * Created by MIRZOEV A. on 20.01.2024
 */

import {memo, useCallback} from 'react';

import type {FormScheduleInterval} from '@/components/Schedule/types.ts';
import {DAY_TYPES} from '@/components/Schedule/types.ts';
import {Button, Form, Radio, TimePicker, Tooltip} from 'antd';
import {scheduleOptions} from '@/components/Schedule/helper.ts';
import {ONLY_TIME_WITHOUT_SECONDS} from '@/utils/dateFormats.ts';
import {CopyOutlined, DeleteOutlined} from '@ant-design/icons';

interface NewScheduleItemProps {
    name: string;
    setCopyInterval: (value: Array<FormScheduleInterval>) => void;
    copyInterval?: Array<FormScheduleInterval>;
}

const {Item, useWatch, useFormInstance} = Form;
const {RangePicker} = TimePicker;

const ScheduleItem = memo<NewScheduleItemProps>(({name, setCopyInterval, copyInterval}) => {
    const form = useFormInstance();
    const intervals = useWatch(['schedule', name, 'intervals'], form);
    const type = useWatch(['schedule', name, 'type'], form);
    const showAddingIntervals = type === DAY_TYPES.WORKING;

    const handleCopy = useCallback(() => {
        setCopyInterval(intervals);
    }, [intervals, setCopyInterval]);

    const handlePut = useCallback(() => {
        form.setFieldValue(['schedule', name, 'intervals'], copyInterval);
    }, [copyInterval, form, name]);

    return (
        <div className="flex flex-col gap-2">
            <Item name={[name, 'type']} rules={[{required: true}]}>
                <Radio.Group optionType="button" options={scheduleOptions} />
            </Item>
            <Form.List name={[name, 'intervals']}>
                {(fields, {add, remove}) => {
                    return (
                        <>
                            {fields.map(({key, name}) => (
                                <div key={key} className="flex items-start gap-6">
                                    <Item name={[name, 'interval']} rules={[{required: true}]}>
                                        <RangePicker className="w-80" format={ONLY_TIME_WITHOUT_SECONDS} />
                                    </Item>
                                    <Button danger icon={<DeleteOutlined />} onClick={() => remove(name)} />
                                </div>
                            ))}

                            {showAddingIntervals && (
                                <div className="flex items-center justify-between">
                                    <Button onClick={() => add()}>Добавьте рабочий интервал</Button>

                                    <div className="flex items-center gap-2">
                                        <Button disabled={!copyInterval} onClick={handlePut}>
                                            Вставить
                                        </Button>
                                        <Tooltip title="Скопировать">
                                            <Button icon={<CopyOutlined />} type="link" onClick={handleCopy} />
                                        </Tooltip>
                                    </div>
                                </div>
                            )}
                        </>
                    );
                }}
            </Form.List>
        </div>
    );
});

export default ScheduleItem;
