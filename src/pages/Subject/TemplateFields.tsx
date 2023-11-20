/**
 * Created by MIRZOEV A. on 20.11.2023
 */

import { memo } from "react";
import { Form, Input } from "antd";
import { createIndexWithZeros } from "./helper";

interface TemplateFieldProps {
  tabUuid: string;
  fields: Array<string>;
  index: number;
}

const { Item } = Form;

const TemplateFields = memo<TemplateFieldProps>(
  ({ tabUuid, fields, index: tabIndex }) => {
    return (
      <Form.List name="fields">
        {() =>
          fields.map((field, index) => {
            const key = `${createIndexWithZeros(
              tabIndex
            )}${tabUuid}&${createIndexWithZeros(index)}&${field}`;
            return (
              <Item name={key} key={key}>
                <Input />
              </Item>
            );
          })
        }
      </Form.List>
    );
  }
);

export default TemplateFields;
