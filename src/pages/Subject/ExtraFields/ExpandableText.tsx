/**
 * Created by MIRZOEV A. on 23.07.2023
 */

import { memo } from "react";
import { Button, Form, Input } from "antd";

interface ExpandableTextProps {
  removeElement: () => void;
}

const { Item } = Form;

const ExpandableText = memo<ExpandableTextProps>(({ removeElement }) => {
  return (
    <div className="card p-6 relative">
      <Button danger className="absolute top-2 right-6" onClick={removeElement}>
        Удалить
      </Button>
      <Item name="extra1" label="Заголовок">
        <Input />
      </Item>
      <Item name="extra1" label="Описание">
        <Input />
      </Item>
    </div>
  );
});

export default ExpandableText;
