/**
 * Created by MIRZOEV A. on 22.11.2023
 */

import React, { memo } from "react";
import { Button, Form, Input, Select, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

interface PhonesFieldProps {}

const PhonesField = memo<PhonesFieldProps>(({}) => {
  return (
    <Form.List name="phones">
      {(fields, { add, remove }) => (
        <div className="flex flex-col gap-2">
          <strong>Телефоны</strong>
          {fields.map(({ key, name, ...restField }) => (
            <Space key={key} style={{ display: "flex" }} align="baseline">
              <Form.Item
                {...restField}
                name={[name, "phoneNumber"]}
                rules={[
                  {
                    required: true,
                    message: "Номер введен некорректно",
                    pattern: new RegExp(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/),
                  },
                ]}
              >
                <Input placeholder="Номер" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, "description"]}
                rules={[{ required: true }]}
              >
                <Input placeholder="Описание номера" />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
            >
              Добавить номер телефона
            </Button>
          </Form.Item>
        </div>
      )}
    </Form.List>
  );
});

export default PhonesField;
