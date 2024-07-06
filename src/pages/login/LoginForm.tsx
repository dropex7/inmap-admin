/**
 * Created by MIRZOEV A. on 10.04.2023
 */

import {Button, Form, Input, Typography} from 'antd';
import {memo, useCallback} from 'react';

import {useAuth} from '@/hooks/useAuth';

interface LoginValues {
    email: string;
    password: string;
}

const {Item, useForm} = Form;
const {Password} = Input;
const {Title} = Typography;

const LoginForm = memo(() => {
    const [form] = useForm();
    const {login, isError} = useAuth();

    const handleLogin = useCallback(
        async ({email, password}: LoginValues) => {
            await login(email, password);
        },
        [login],
    );

    return (
        <Form form={form} layout="vertical" onFinish={handleLogin} requiredMark={false}>
            <Title level={2}>Вход</Title>
            <Item name="email" rules={[{required: true, whitespace: true}]}>
                <Input autoComplete="email" placeholder="Почта или телефон" />
            </Item>

            <Item name="password" className="mb-3" rules={[{required: true, whitespace: true}]}>
                <Password autoComplete="current-password" placeholder="Пароль" />
            </Item>

            {isError && <span className="text-xs text-red-400">Неправильно введен логин или пароль</span>}

            <div className="flex items-center justify-end pt-4">
                <Button htmlType="submit" type="primary">
                    Войти
                </Button>
            </div>
        </Form>
    );
});

export default LoginForm;
