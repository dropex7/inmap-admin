/**
 * Created by MIRZOEV A. on 14.11.2023
 */

import React, { memo } from "react";
import BaseFields from "./BaseFields";
import ImageLoaderField from "../../components/FormFields/ImageLoaderField";
import { Button, ColorPicker, Form } from "antd";

const { Item } = Form;

const DefaultSubjectTemplate = memo(() => {
  return (
    <>
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
            rules={
              [
                // { required: true, message: "Выберите цвет фона логотипа!" },
              ]
            }
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
      <Item>
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          className="w-full"
        >
          Создать
        </Button>
      </Item>
    </>
  );
});

export default DefaultSubjectTemplate;
