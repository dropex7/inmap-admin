/**
 * Created by MIRZOEV A. on 23.07.2023
 */

import {Form, Input} from 'antd';
import {memo} from 'react';

interface Props {
    name: string;
}

const {Item} = Form;

const ExpandableText = memo<Props>(({name}) => {
    return (
        <Item labelAlign="left" label="Текст" name={name}>
            <Input />
        </Item>
    );
});

export default ExpandableText;
