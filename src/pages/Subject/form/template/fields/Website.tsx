/**
 * Created by MIRZOEV A. on 21.11.2023
 */

import React, { memo } from "react";
import { Form, Input } from "antd";

const { useFormInstance, Item } = Form;

const Website = memo(() => {
  return (
    <Item label="Название сайта" name="websiteUrl">
      <Input />
    </Item>
  );
});

export default Website;
