/**
 * Created by MIRZOEV A. on 11.04.2023
 */
import { Button, ColorPicker, Form, Input, Typography } from "antd";
import BaseFields from "./BaseFields";
import ImageLoaderField from "../../components/FormFields/ImageLoaderField";
import React from "react";
import ScheduleField from "../../components/FormFields/SheduleField";

const { Item } = Form;
const { Title } = Typography;

export function Component() {
  const onFinish = (values: any) => {
    // TODO: Сделать запрос на бек

    console.log("Success:", values);
  };

  return (
    <div className="p-6">
      <Title level={3}>Создание объекта</Title>

      <Form
        name="subjectForm"
        layout="vertical"
        className="flex flex-col gap-3"
        onFieldsChange={onFinish}
        onFinish={onFinish}
      >
        <BaseFields />

        <div className="grid grid-cols-[1fr_2fr] gap-3">
          <div className="flex card flex-col p-6">
            <ImageLoaderField
              fieldName="logo"
              countOfImages={1}
              label="Добавьте логотип объекта"
            />
            <Item
              label="Цвет фона логотипа"
              name="logoBackgroundColor"
              rules={[
                { required: true, message: "Выберите цвет фона логотипа!" },
              ]}
            >
              <ColorPicker />
            </Item>
          </div>
          <div className="card p-6">
            <ImageLoaderField
              fieldName="images"
              countOfImages={10}
              label="Добавьте изображения"
            />
          </div>
        </div>

        <div className="card p-6">
          <ScheduleField />

          <Item
            label="Официальный сайт"
            name="site"
            rules={[{ required: true, message: "Введите сайт!" }]}
          >
            <Input addonBefore="https://" />
          </Item>
        </div>

        <Item>
          <Button type="primary" size="large" htmlType="submit">
            Создать объект
          </Button>
        </Item>
      </Form>
    </div>
  );
}
