/**
 * Created by MIRZOEV A. on 30.08.2023
 */

import React, { memo, useState } from "react";
import { Input, Form, Button } from "antd";
import ImageLoaderField from "../../components/FormFields/ImageLoaderField";
import { IMainFormValues } from "./PromoForm";

interface Props {
  initialValues?: IMainFormValues;
  onFinish: (values: IMainFormValues) => void;
}

const { Item } = Form;

const PromoMainPart = memo<Props>(({ onFinish, initialValues }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Form
      labelCol={{ span: 6 }}
      initialValues={initialValues}
      onFinish={onFinish}
    >
      <Item name="title" label="Заголовок">
        <Input />
      </Item>
      <Item name="subtitle" label="Описание">
        <Input />
      </Item>
      <ImageLoaderField
        setIsImageLoading={setIsLoading}
        fieldName="imageUrl"
        countOfImages={1}
        label="Добавьте изображения"
      />
      <Button type="primary" htmlType="submit" disabled={isLoading}>
        Перейти к описанию
      </Button>
    </Form>
  );
});

export default PromoMainPart;
