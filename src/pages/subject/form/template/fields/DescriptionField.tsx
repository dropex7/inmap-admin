/**
 * Created by MIRZOEV A. on 22.11.2023
 */

import {Form, Input} from 'antd';
import {memo} from 'react';

const {Item, List} = Form;

const DescriptionField = memo(() => {
    return (
        <List name={['description']}>
            {() => (
                <Item labelAlign="left" label="Описание" name="description">
                    <Input />
                </Item>
            )}
        </List>
    );
});

export default DescriptionField;
