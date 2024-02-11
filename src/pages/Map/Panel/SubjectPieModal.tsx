/**
 * Created by MIRZOEV A. on 11.02.2024
 */

import {memo} from 'react';
import {Button, Modal} from 'antd';
import useOpen from '@/hooks/useOpen.ts';

interface SubjectPieModalProps {}

const SubjectPieModal = memo<SubjectPieModalProps>(() => {
    const {open, onOpen, onClose} = useOpen();

    return (
        <>
            <Button onClick={onOpen}>Привязать</Button>
            <Modal title="Выбор шаблона" open={open} okText="Выбрать" onCancel={onClose}>
                {/*    */}
            </Modal>
        </>
    );
});

export default SubjectPieModal;
