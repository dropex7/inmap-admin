/**
 * Created by MIRZOEV A. on 10.04.2023
 */

import { memo, useCallback } from "react";
import { Button, Form, Input } from "antd";
import { useAuth } from "../../hooks/useAuth";

interface LoginValues {
  email: string;
  password: string;
}

const { Item, useForm } = Form;
const { Password } = Input;

const LoginForm = memo(() => {
  const [form] = useForm();
  const { login } = useAuth();

  const handleLogin = useCallback(async ({ email, password }: LoginValues) => {
    await login(email, password);
  }, []);

  return (
    <Form
      form={form}
      layout="vertical"
      requiredMark={false}
      onFinish={handleLogin}
      size="large"
    >
      <Item name="email" rules={[{ required: true, whitespace: true }]}>
        <Input placeholder="Почта" autoComplete="email" />
      </Item>

      <Item name="password" rules={[{ required: true, whitespace: true }]}>
        <Password placeholder="Пароль" autoComplete="current-password" />
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
