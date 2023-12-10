/**
 * Created by MIRZOEV A. on 10.12.2023
 */

import {memo, useCallback} from 'react';

import FieldWrapper from '../../pages/Subject/form/template/fields/FieldWrapper';
import {SCHEDULE_DAYS} from './types';
import ScheduleItem from './ScheduleItem';
import {Button, Modal} from 'antd';
import useOpen from '../../hooks/useOpen';

const items = Object.keys(SCHEDULE_DAYS).map(key => (
    <FieldWrapper key={key} name={key}>
        <ScheduleItem name={key} />
    </FieldWrapper>
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
                <FieldWrapper name="schedule">
                    <div className="grid grid-cols-2 gap-6 p-6">{items}</div>
                </FieldWrapper>
            </Modal>
        </>
    );
});

export default ScheduleFields;
