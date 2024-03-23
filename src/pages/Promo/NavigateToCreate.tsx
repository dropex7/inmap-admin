/**
 * Created by MIRZOEV A. on 10.12.2023
 */

import {Button} from 'antd';
import {memo, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

const NavigateToCreate = memo(() => {
    const navigate = useNavigate();

    const handleCreatePromo = useCallback(() => {
        navigate('create-promo');
    }, [navigate]);

    return (
        <Button onClick={handleCreatePromo} size="large" type="primary">
            Создать объявление
        </Button>
    );
});

export default NavigateToCreate;
