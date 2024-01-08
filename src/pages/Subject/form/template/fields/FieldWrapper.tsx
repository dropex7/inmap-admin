/**
 * Created by MIRZOEV A. on 22.11.2023
 */

import type {PropsWithChildren} from 'react';

import {Form} from 'antd';
import {memo} from 'react';

interface FieldWrapperProps {
    fieldType: string;
    fieldIndex: number;
}

const FieldWrapper = memo<PropsWithChildren<FieldWrapperProps>>(({children, fieldType, fieldIndex}) => {
    return (
        <>
            <Form.Item name={[fieldIndex, 'type']} initialValue={fieldType} noStyle />
            <Form.List name={[fieldIndex, 'data']}>{() => <>{children}</>}</Form.List>
        </>
    );
});

export default FieldWrapper;
