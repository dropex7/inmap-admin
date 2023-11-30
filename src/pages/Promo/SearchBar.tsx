/**
 * Created by MIRZOEV A. on 15.08.2023
 */

import {SearchOutlined} from '@ant-design/icons';
import {Button, Input} from 'antd';
import {memo, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

const SearchBar = memo(() => {
    const navigate = useNavigate();

    const handleCreatePromo = useCallback(() => {
        navigate('create-promo');
    }, [navigate]);

    return (
        <div className="card flex justify-between p-6">
            <div className="flex items-center gap-3">
                <Input addonBefore={<SearchOutlined />} placeholder="Поиск объявления" size="large" />
            </div>

            <Button onClick={handleCreatePromo} shape="round" size="large" type="primary">
                Создать объявление
            </Button>
        </div>
    );
});

export default SearchBar;
