/**
 * Created by MIRZOEV A. on 25.11.2023
 */

import {Form, Input} from 'antd';
import {memo} from 'react';

const {Item} = Form;

const EmailAddress = memo(() => {
    return (
        <Item labelAlign="left" label="Электронная почта" name="emailAddress">
            <Input />
        </Item>
    );
});

export default EmailAddress;
