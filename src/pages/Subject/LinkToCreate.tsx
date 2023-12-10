/**
 * Created by MIRZOEV A. on 10.12.2023
 */

import {Button} from 'antd';
import {memo, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

const LinkToCreate = memo(() => {
    const navigate = useNavigate();

    const handleCreateObject = useCallback(() => {
        navigate('create-subject');
    }, [navigate]);

    return (
        <Button onClick={handleCreateObject} shape="round" size="large" type="primary">
            Создать новый объект
        </Button>
    );
});

export default LinkToCreate;
