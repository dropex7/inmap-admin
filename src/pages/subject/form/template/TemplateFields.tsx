/**
 * Created by MIRZOEV A. on 08.01.2024
 */

import {memo, useEffect} from 'react';
import {Form} from 'antd';
import FieldByType from './FieldByType.tsx';
import FieldWrapper from './fields/FieldWrapper.tsx';
interface TemplateFieldsProps {
    tabIndex: number;
    name: string;
    templateTabUuid: string;
    fields: Array<string>;
}

const {useFormInstance} = Form;

const TemplateFields = memo<TemplateFieldsProps>(({tabIndex, fields, templateTabUuid}) => {
    const form = useFormInstance();

    useEffect(() => {
        form.setFieldValue(['tabs', tabIndex, 'templateTabUuid'], templateTabUuid);
    }, [form, tabIndex, templateTabUuid]);

    return (
        <div className="flex w-full flex-col">
            <Form.Item name={['tabs', tabIndex, 'templateTabUuid']} noStyle />

            <Form.List name={['tabs', tabIndex, 'fields']}>
                {() =>
                    fields.map((field, index) => (
                        <FieldWrapper fieldIndex={index} key={field + index} fieldType={field}>
                            <FieldByType tabIndex={tabIndex} fieldType={field} fieldIndex={index} />
                        </FieldWrapper>
                    ))
                }
            </Form.List>
        </div>
    );
});

export default TemplateFields;
