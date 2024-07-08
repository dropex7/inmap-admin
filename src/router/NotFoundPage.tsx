/**
 * Created by MIRZOEV A. on 08.07.2024
 */
import {Button, Result} from 'antd';
import {useNavigate} from 'react-router-dom';
import {useCallback} from 'react';

export function Component() {
    const navigate = useNavigate();

    const handleClickBack = useCallback(() => {
        navigate('/');
    }, [navigate]);
    return (
        <Result
            status="404"
            title="404"
            subTitle="Страница не найдена"
            extra={
                <Button onClick={handleClickBack} type="primary">
                    Вернуться на главную
                </Button>
            }
        />
    );
}
