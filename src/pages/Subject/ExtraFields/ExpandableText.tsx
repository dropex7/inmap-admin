/**
 * Created by MIRZOEV A. on 23.07.2023
 */

import React, { memo, useCallback, useContext, useState } from "react";
import { Button, Form, Input } from "antd";
import { ExtraFieldsContext } from "../ExtraFieldsContext";
import { EXTRA_FIELD_TYPES, IExpandableText } from "../types";

interface ExpandableTextProps {
  key: string;
  removeElement: () => void;
}

const { Item, useForm } = Form;

const ExpandableText = memo<ExpandableTextProps>(({ key, removeElement }) => {
  const [form] = useForm();
  const { setter, fields } = useContext(ExtraFieldsContext);
  const [values, setValues] = useState<IExpandableText>();
  const [isDisabled, setIsDisabled] = useState(false);

  const onFinish = useCallback(
    ({ title, description }: IExpandableText) => {
      setIsDisabled(true);
      setValues({
        title,
        description,
      });

      setter([
        ...fields,
        {
          data: {
            title,
            description,
          },
          type: EXTRA_FIELD_TYPES.EXPANDABLE,
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
      <Item name="title" label="Заголовок">
        <Input disabled={isDisabled} />
      </Item>
      <Item name="description" label="Описание">
        <Input disabled={isDisabled} />
      </Item>

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

export default ExpandableText;
