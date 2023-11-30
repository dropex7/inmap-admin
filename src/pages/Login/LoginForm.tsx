/**
 * Created by MIRZOEV A. on 10.04.2023
 */

import {Button, Form, Input} from 'antd';
import {memo, useCallback} from 'react';

import {useAuth} from '../../hooks/useAuth';

interface LoginValues {
    email: string;
    password: string;
}

const {Item, useForm} = Form;
const {Password} = Input;

const LoginForm = memo(() => {
    const [form] = useForm();
    const {login} = useAuth();

    const handleLogin = useCallback(
        async ({email, password}: LoginValues) => {
            await login(email, password);
        },
        [login],
    );

    return (
        <Form form={form} layout="vertical" onFinish={handleLogin} requiredMark={false} size="large">
            <Item name="email" rules={[{required: true, whitespace: true}]}>
                <Input autoComplete="email" placeholder="Почта" />
            </Item>

            <Item name="password" rules={[{required: true, whitespace: true}]}>
                <Password autoComplete="current-password" placeholder="Пароль" />
            </Item>

            <div className="flex items-center justify-between">
                <Button htmlType="submit" type="primary">
                    Войти
                </Button>
            </div>
        </Form>
    );
});

export default LoginForm;
