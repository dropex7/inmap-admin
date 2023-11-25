/**
 * Created by MIRZOEV A. on 25.11.2023
 */

import React, { memo } from "react";
import { Form, Input } from "antd";

const { Item } = Form;

const EmailAddress = memo(() => {
  return (
    <Item label="Электронная почта" name="emailAddress">
      <Input />
    </Item>
  );
});

export default EmailAddress;
