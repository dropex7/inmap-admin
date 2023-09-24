/**
 * Created by MIRZOEV A. on 30.08.2023
 */

import React, { memo, useCallback, useState } from "react";
import { Button, Form } from "antd";
import QuillWrapper from "../../components/QuillWrapper";
import { Sources } from "quill";
import { UnprivilegedEditor } from "react-quill";

interface PromoDescriptionProps {
  onFinish: (values: any) => void;
  toPrev: () => void;
}

const { Item, useForm } = Form;

const PromoDescription = memo<PromoDescriptionProps>(({ onFinish, toPrev }) => {
  const [, setValue] = useState<Record<string, any>>();
  const [form] = useForm();
  const onChange = useCallback(
    (
      value: string,
      delta: unknown,
      source: Sources,
      editor: UnprivilegedEditor
    ) => {
      form.setFieldValue("content", editor.getContents());
    },
    [setValue, form]
  );

  return (
    <Form form={form} onFinish={onFinish}>
      <Item
        name="content"
        rules={[{ required: true, message: "Обязательное поле!" }]}
      >
        <QuillWrapper onChange={onChange} />
      </Item>
      <div style={{ marginTop: 65 }}>
        <Button style={{ margin: "0 8px" }} onClick={toPrev}>
          Вернуться
        </Button>
        <Button type="primary" htmlType="submit">
          Сохранить
        </Button>
      </div>
    </Form>
  );
});

export default PromoDescription;
