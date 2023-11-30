/**
 * Created by MIRZOEV A. on 22.11.2023
 */

import {Form} from 'antd';
import {memo} from 'react';

interface DividerFieldProps {
    name: string;
    type: string;
}

const {Item} = Form;

const DividerField = memo<DividerFieldProps>(({name}) => {
    return <Item initialValue={{}} name={name} noStyle />;
});

export default DividerField;
