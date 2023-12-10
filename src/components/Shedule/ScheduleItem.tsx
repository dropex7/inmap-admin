/**
 * Created by MIRZOEV A. on 10.12.2023
 */

import {PlusOutlined} from '@ant-design/icons';
import {Button, Form, Radio, TimePicker} from 'antd';
import {memo} from 'react';
import type {SCHEDULE_DAYS} from './types';
import {DAY_TYPES, scheduleText} from './types';
import {ONLY_TIME_WITHOUT_SECONDS} from '../../utils/dateFormats';

interface ScheduleItemProps {
    name: string;
}

const {RangePicker} = TimePicker;
const {Item, useWatch, useFormInstance} = Form;

const options = [
    {label: 'Выходной день', value: DAY_TYPES.OFF},
    {label: 'Рабочий день', value: DAY_TYPES.WORKING},
    {label: 'Без перерывов', value: DAY_TYPES.ALL_DAY},
];

const ScheduleItem = memo<ScheduleItemProps>(({name}) => {
    const form = useFormInstance();
    const type = useWatch(['schedule', name, 'type'], form);
    const showAddingIntervals = type === DAY_TYPES.WORKING;

    return (
        <div className="flex flex-col gap-2">
            <h3>{scheduleText[name as SCHEDULE_DAYS]}</h3>
            <Item initialValue={DAY_TYPES.OFF} name="type" rules={[{required: true}]}>
                <Radio.Group optionType="button" options={options} />
            </Item>
            <Form.List name="intervals">
                {(fields, {add, remove}) => {
                    return (
                        <>
                            {fields.map(({key, name}) => (
                                <div key={key} className="flex items-start gap-6">
                                    <Item name={[name, 'interval']} rules={[{required: true}]}>
                                        <RangePicker format={ONLY_TIME_WITHOUT_SECONDS} />
                                    </Item>
                                    <Button danger onClick={() => remove(name)}>
                                        Удалить
                                    </Button>
                                </div>
                            ))}

                            <div>
                                <Button
                                    disabled={!showAddingIntervals}
                                    icon={<PlusOutlined />}
                                    onClick={() => add()}
                                    type="dashed"
                                >
                                    Добавьте рабочий интервал
                                </Button>
                            </div>
                        </>
                    );
                }}
            </Form.List>
        </div>
    );
});

export default ScheduleItem;
