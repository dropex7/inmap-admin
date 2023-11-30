/**
 * Created by MIRZOEV A. on 22.11.2023
 */

import type {PropsWithChildren} from 'react';

import {Form} from 'antd';
import {memo} from 'react';

interface FieldWrapperProps {
    name: string;
}

const FieldWrapper = memo<PropsWithChildren<FieldWrapperProps>>(({children, name}) => {
    return <Form.List name={name}>{() => children}</Form.List>;
});

export default FieldWrapper;
