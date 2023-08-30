/**
 * Created by MIRZOEV A. on 30.08.2023
 */

import React, { memo } from "react";
import { Input, Form, DatePicker } from "antd";
import ImageLoaderField from "../../components/FormFields/ImageLoaderField";

interface PromoFormProps {}

const { Item } = Form;

const PromoMainPart = memo<PromoFormProps>(({}) => {
  return (
    <>
      <Item name="title" label="Заголовок">
        <Input />
      </Item>
      <Item name="subtitle" label="Описание">
        <Input />
      </Item>
      <ImageLoaderField
        fieldName="baseEncodedImage"
        countOfImages={1}
        label="Добавьте изображения"
      />
    </>
  );
});

export default PromoMainPart;
