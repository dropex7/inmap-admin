/**
 * Created by MIRZOEV A. on 25.09.2023
 */

import React, { memo, useCallback, useContext, useState } from "react";
import { ExtraFieldsContext } from "../ExtraFieldsContext";
import { Button, Form, Input, Space } from "antd";
import { EXTRA_FIELD_TYPES, IPhoneNumber } from "../types";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

interface PhoneNumbersProps {
  key: string;
  removeElement: () => void;
}

const { Item, useForm } = Form;

const PhoneNumbers = memo<PhoneNumbersProps>(({ key, removeElement }) => {
  const [form] = useForm();
  const { setter, fields } = useContext(ExtraFieldsContext);
  const [values, setValues] = useState<IPhoneNumber[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const onFinish = useCallback(
    (values: IPhoneNumber[]) => {
      setIsDisabled(true);
      setValues(values);

      setter([
        ...fields,
        {
          data: {
            phones: values,
          },
          type: EXTRA_FIELD_TYPES.PHONES,
        },
      ]);
    },
    [setter, fields]
  );

  return (
    <Form
      name={key}
      layout="vertical"
      form={form}
      className="flex flex-col gap-3 card p-6"
      onFinish={onFinish}
      // disabled={isDisabled}
    >
      <Form.List name="phones">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, "description"]}
                  rules={[{ required: true, message: "Missing first name" }]}
                >
                  <Input placeholder="Description" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "phoneNumber"]}
                  rules={[{ required: true, message: "Missing last name" }]}
                >
                  <Input placeholder="Phone number" />
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
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <div className="flex justify-end w-full gap-3">
        <Button onClick={removeElement} size="large" danger className="w-40">
          Удалить
        </Button>
        <Button
          onClick={() => form.submit()}
          type="primary"
          size="large"
          className="w-40"
        >
          Сохранить
        </Button>
      </div>
    </Form>
  );
});

export default PhoneNumbers;
