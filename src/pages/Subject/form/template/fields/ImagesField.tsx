/**
 * Created by MIRZOEV A. on 22.11.2023
 */

import React, { memo } from "react";
import { Form, Input } from "antd";
import ImageLoaderField from "../../../../../components/FormFields/ImageLoaderField";

interface ImageFieldProps {
  fieldName: string;
}

const { Item } = Form;

const ImagesField = memo<ImageFieldProps>(({ fieldName }) => {
  return (
    <Form.List name={fieldName}>
      {(fields, operation, meta) => {
        // console.log(fields);
        // console.log(operation);
        // console.log(meta);

        return (
          <>
            <Item label="Заголовок над фотографиями" name="title">
              <Input />
            </Item>
            <ImageLoaderField
              isRequired={false}
              label="Фотографии"
              fieldName={[fieldName, "images"]}
              countOfImages={5}
            />
          </>
        );
      }}
    </Form.List>
  );
});

export default ImagesField;
