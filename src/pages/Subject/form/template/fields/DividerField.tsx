/**
 * Created by MIRZOEV A. on 22.11.2023
 */

import { memo } from "react";
import { Form } from "antd";

interface DividerFieldProps {
  name: string;
  type: string;
}

const { Item } = Form;

const DividerField = memo<DividerFieldProps>(({ name, type }) => {
  const k = name + type;
  return <Item name={name} noStyle initialValue={{}} />;
});

export default DividerField;
