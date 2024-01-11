/**
 * Created by MIRZOEV A. on 10.12.2023
 */

import {memo, useCallback} from 'react';

import {SCHEDULE_DAYS} from './types';
import ScheduleItem from './ScheduleItem';
import {Button, Form, Modal} from 'antd';
import useOpen from '@/hooks/useOpen';

const items = Object.keys(SCHEDULE_DAYS).map(key => (
    <Form.List key={key} name={key}>
        {() => <ScheduleItem name={key} />}
    </Form.List>
));

const ScheduleFields = memo(() => {
    const {open, onClose, onOpen} = useOpen();

    const handleSaveSchedule = useCallback(() => {
        // TODO: валидация дат
        onClose();
    }, [onClose]);

    return (
        <>
            <Button onClick={onOpen}>Настройка расписания</Button>
            <Modal
                width={1000}
                title="Настройка расписания работы"
                open={open}
                closable={false}
                maskClosable={false}
                footer={[
                    <Button key="back" onClick={handleSaveSchedule} type="primary">
                        Сохранить
                    </Button>,
                ]}
            >
                <Form.List name="schedule">{() => <div className="grid grid-cols-2 gap-6 p-6">{items}</div>}</Form.List>
            </Modal>
        </>
    );
});

export default ScheduleFields;
