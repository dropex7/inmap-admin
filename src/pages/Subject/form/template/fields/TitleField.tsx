/**
 * Created by MIRZOEV A. on 22.11.2023
 */

import React, { memo } from "react";
import { Form, Input } from "antd";

const { Item } = Form;

const TitleField = memo(() => {
  return (
    <Item label="Заголовок" name="title">
      <Input />
    </Item>
  );
});

export default TitleField;
