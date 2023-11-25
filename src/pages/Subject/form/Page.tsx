/**
 * Created by MIRZOEV A. on 11.04.2023
 */
import { Button, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import FormSubject from "./FormSubject";

const { Title } = Typography;

export function Component() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="flex justify-between pb-3">
        <Title level={3}>Создание объекта</Title>
        <Button onClick={() => navigate("..")}>Вернуться к шаблонам</Button>
      </div>

      <FormSubject />
    </div>
  );
}
