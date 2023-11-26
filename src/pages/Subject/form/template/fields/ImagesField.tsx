/**
 * Created by MIRZOEV A. on 22.11.2023
 */

import React, { memo } from "react";
import { Form, Input } from "antd";
import ImageLoaderField from "../../../../../components/FormFields/ImageLoaderField";

interface ImageFieldProps {
  fieldName: string;
  tabUuid: string;
}

const { Item } = Form;

const ImagesField = memo<ImageFieldProps>(({ fieldName, tabUuid }) => {
  return (
    <>
      <Item label="Заголовок над фотографиями" name="title">
        <Input />
      </Item>
      <ImageLoaderField
        isRequired={false}
        label="Фотографии"
        name="imagesUrls"
        fieldName={["tabs", tabUuid, fieldName, "imagesUrls"]}
        countOfImages={5}
      />
    </>
  );
});

export default ImagesField;
