/**
 * Created by MIRZOEV A. on 23.07.2023
 */

import React, { memo } from "react";
import { Form, Input } from "antd";

interface Props {
  name: string;
}

const { Item } = Form;

const ExpandableText = memo<Props>(({ name }) => {
  return (
    <Item label="Текст" name={name}>
      <Input />
    </Item>
  );
});

export default ExpandableText;
