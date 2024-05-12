/**
 * Created by MIRZOEV A. on 07.02.2024
 */

import type {PropsWithChildren} from 'react';
import {memo} from 'react';
import {Typography} from 'antd';

interface ExtraTabProps {
    title: string;
}

const {Title} = Typography;

const ExtraTabWrapper = memo<PropsWithChildren<ExtraTabProps>>(({title, children}) => {
    return (
        <div className="flex flex-auto flex-col items-start p-6">
            <Title level={2}>{title}</Title>
            {children}
        </div>
    );
});

export default ExtraTabWrapper;
