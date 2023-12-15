/**
 * Created by MIRZOEV A. on 30.08.2023
 */

import type {Sources} from 'quill';
import type {UnprivilegedEditor} from 'react-quill';

import {Button, Form} from 'antd';
import {memo, useCallback} from 'react';

import QuillWrapper from '../../../components/Quill/QuillWrapper';

interface PromoDescriptionProps {
    onFinish: (values: any) => void;
    toPrev: () => void;
}

const {Item, useForm} = Form;

const PromoDescription = memo<PromoDescriptionProps>(({onFinish, toPrev}) => {
    const [form] = useForm();
    const onChange = useCallback(
        (value: string, delta: unknown, source: Sources, editor: UnprivilegedEditor) => {
            form.setFieldValue('content', editor.getContents());
        },
        [form],
    );

    return (
        <Form form={form} onFinish={onFinish}>
            <Item name="content" rules={[{message: 'Обязательное поле!', required: true}]}>
                <QuillWrapper onChange={onChange} />
            </Item>
            <div style={{marginTop: 65}}>
                <Button onClick={toPrev} style={{margin: '0 8px'}}>
                    Вернуться
                </Button>
                <Button htmlType="submit" type="primary">
                    Сохранить
                </Button>
            </div>
        </Form>
    );
});

export default PromoDescription;
