/**
 * Created by MIRZOEV A. on 01.06.2023
 */

import { memo } from "react";
import { Form, Input } from "antd";

const { Item } = Form;

const BaseFields = memo(({}) => {
  return (
    <div className="card flex flex-col gap-3 p-6">
      <Item
        label="Название"
        name="name"
        className="m-0"
        rules={[{ required: true, message: "Введите название!" }]}
      >
        <Input />
      </Item>

      <Item
        className="m-0"
        label="Краткое описание"
        name="shortDescription"
        rules={[{ required: true, message: "Введите краткое описание!" }]}
      >
        <Input />
      </Item>
    </div>
  );
});

export default BaseFields;
