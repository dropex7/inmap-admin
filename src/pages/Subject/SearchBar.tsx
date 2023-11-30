/**
 * Created by MIRZOEV A. on 09.08.2023
 */

import {SearchOutlined} from '@ant-design/icons';
import {Button, Input} from 'antd';
import {memo, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

const SearchBar = memo(() => {
    const navigate = useNavigate();

    const handleCreateObject = useCallback(() => {
        navigate('create-subject');
    }, [navigate]);

    return (
        <div className="card flex justify-between p-6">
            <div className="flex items-center gap-3">
                <Button size="large">Фильтры</Button>
                <Input addonBefore={<SearchOutlined />} placeholder="Поиск объекта" size="large" />
            </div>

            <Button onClick={handleCreateObject} shape="round" size="large" type="primary">
                Создать новый объект
            </Button>
        </div>
    );
});

export default SearchBar;
