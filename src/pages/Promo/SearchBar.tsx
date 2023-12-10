/**
 * Created by MIRZOEV A. on 15.08.2023
 */

import {SearchOutlined} from '@ant-design/icons';
import {Input} from 'antd';
import {memo} from 'react';

const SearchBar = memo(() => {
    return (
        <div className="card flex justify-between p-6">
            <div className="flex items-center gap-3">
                <Input addonBefore={<SearchOutlined />} placeholder="Поиск объявления" size="large" />
            </div>
        </div>
    );
});

export default SearchBar;
