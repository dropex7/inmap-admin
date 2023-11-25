/**
 * Created by MIRZOEV A. on 22.11.2023
 */

import { Button, Form, Input, Select, Space } from "antd";
import React, { memo } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

interface SocialMediaFieldProps {}

enum SocialMediaTypes {
  facebook = "facebook",
  ok = "ok",
  vk = "vk",
  twitter = "twitter",
  reddit = "reddit",
  flickr = "flickr",
  foursquare = "foursquare",
  instagram = "instagram",
  pinterest = "pinterest",
  youtube = "youtube",
  telegram = "telegram",
  tiktok = "tiktok",
  whatsapp = "whatsapp",
  zen = "zen",
  viber = "viber",
  linkedin = "linkedin",
  wechat = "wechat",
}

const options = Object.entries(SocialMediaTypes).map(([key, value]) => ({
  value,
  label: value,
}));

const SocialMediaField = memo<SocialMediaFieldProps>(({}) => {
  return (
    <Form.List name="socialMediaList">
      {(fields, { add, remove }) => (
        <div className="flex flex-col gap-2">
          <strong>Социальные сети</strong>
          {fields.map(({ key, name, ...restField }) => (
            <Space key={key} style={{ display: "flex" }} align="baseline">
              <Form.Item
                {...restField}
                name={[name, "type"]}
                rules={[{ required: true, message: "Выберите тип" }]}
              >
                <Select
                  style={{ width: 200 }}
                  placeholder="Тип социальной сети"
                  options={options}
                />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, "url"]}
                rules={[{ required: true, message: "Введите ссылку" }]}
              >
                <Input placeholder="Ссылка" />
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
              Добавить социальную сеть
            </Button>
          </Form.Item>
        </div>
      )}
    </Form.List>
  );
});

export default SocialMediaField;
