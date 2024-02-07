/**
 * Created by MIRZOEV A. on 21.11.2023
 */

import {Form, Input} from 'antd';
import {memo} from 'react';

const {Item} = Form;

const Website = memo(() => {
    return (
        <Item labelAlign="left" label="Название сайта" name="websiteUrl">
            <Input />
        </Item>
    );
});

export default Website;
