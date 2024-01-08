/**
 * Created by MIRZOEV A. on 08.01.2024
 */

import {memo} from 'react';
import {Card, Form} from 'antd';
import FieldByType from './template/FieldByType';
import FieldWrapper from './template/fields/FieldWrapper';
interface TemplateFieldsProps {
    tabIndex: number;
    name: string;
    templateTabUuid: string;
    fields: Array<string>;
}

const TemplateFields = memo<TemplateFieldsProps>(({tabIndex, name, fields, templateTabUuid}) => {
    return (
        <Card size="small" title={name}>
            <Form.Item name={[tabIndex, 'templateTabUuid']} initialValue={templateTabUuid} noStyle />
            <Form.Item label="Fields">
                <Form.List name={[tabIndex, 'fields']}>
                    {() => (
                        <>
                            {fields.map((field, index) => (
                                <FieldWrapper fieldIndex={index} key={field + index} fieldType={field}>
                                    <FieldByType tabIndex={tabIndex} fieldType={field} fieldIndex={index} />
                                </FieldWrapper>
                            ))}
                        </>
                    )}
                </Form.List>
            </Form.Item>
        </Card>
    );
});

export default TemplateFields;
