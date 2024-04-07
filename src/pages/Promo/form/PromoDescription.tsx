/**
 * Created by MIRZOEV A. on 30.08.2023
 */

import type {Sources} from 'quill';
import type {UnprivilegedEditor} from 'react-quill';

import {Button, Form} from 'antd';
import {memo, useCallback, useEffect} from 'react';

import QuillWrapper from '@/components/Quill/QuillWrapper';
import type {PromoLocalizedModel} from '@/generated/graphql.ts';

interface PromoDescriptionProps {
    onFinish: (values: any) => void;
    toPrev: () => void;
    promo?: Partial<PromoLocalizedModel>;
}

const {Item, useForm, useWatch} = Form;

const PromoDescription = memo<PromoDescriptionProps>(({onFinish, toPrev, promo}) => {
    const [form] = useForm();

    const contentValue = useWatch('content', form);

    const onChange = useCallback(
        (_: string, __: unknown, ___: Sources, editor: UnprivilegedEditor) => {
            form.setFieldValue('content', editor.getContents());
        },
        [form],
    );

    useEffect(() => {
        if (promo) {
            form.setFieldValue('content', (promo?.content as Array<any>)[0]);
        }
    }, [form, promo]);

    return (
        <Form form={form} onFinish={onFinish}>
            <Item name="content" rules={[{message: 'Обязательное поле!', required: true}]}>
                <QuillWrapper value={contentValue} onChange={onChange} />
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
