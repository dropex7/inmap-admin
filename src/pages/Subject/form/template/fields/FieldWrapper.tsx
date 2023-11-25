/**
 * Created by MIRZOEV A. on 22.11.2023
 */

import React, { memo, PropsWithChildren } from "react";
import { Form } from "antd";

interface FieldWrapperProps {
  name: string;
}

const FieldWrapper = memo<PropsWithChildren<FieldWrapperProps>>(
  ({ name, children }) => {
    return <Form.List name={name}>{() => children}</Form.List>;
  }
);

export default FieldWrapper;
