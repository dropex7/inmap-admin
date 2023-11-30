/**
 * Created by MIRZOEV A. on 22.11.2023
 */

import {Form, Input} from 'antd';
import {memo} from 'react';

const {Item} = Form;

const TitleField = memo(() => {
    return (
        <Item label="Заголовок" name="text">
            <Input />
        </Item>
    );
});

export default TitleField;
