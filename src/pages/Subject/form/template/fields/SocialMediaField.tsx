/**
 * Created by MIRZOEV A. on 22.11.2023
 */

import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import {Button, Form, Input, Select, Space} from 'antd';
import {memo} from 'react';

enum SocialMediaTypes {
    facebook = 'facebook',
    flickr = 'flickr',
    foursquare = 'foursquare',
    instagram = 'instagram',
    linkedin = 'linkedin',
    ok = 'ok',
    pinterest = 'pinterest',
    reddit = 'reddit',
    telegram = 'telegram',
    tiktok = 'tiktok',
    twitter = 'twitter',
    viber = 'viber',
    vk = 'vk',
    wechat = 'wechat',
    whatsapp = 'whatsapp',
    youtube = 'youtube',
    zen = 'zen',
}

const options = Object.entries(SocialMediaTypes).map(([_, value]) => ({
    label: value,
    value,
}));

const SocialMediaField = memo(() => {
    return (
        <Form.List name="socialMediaList">
            {(fields, {add, remove}) => (
                <div className="flex flex-col gap-2">
                    <strong>Социальные сети</strong>
                    {fields.map(({key, name, ...restField}) => (
                        <Space align="baseline" key={key} style={{display: 'flex'}}>
                            <Form.Item
                                {...restField}
                                name={[name, 'type']}
                                rules={[{message: 'Выберите тип', required: true}]}
                            >
                                <Select options={options} placeholder="Тип социальной сети" style={{width: 200}} />
                            </Form.Item>
                            <Form.Item
                                {...restField}
                                name={[name, 'url']}
                                rules={[{message: 'Введите ссылку', required: true}]}
                            >
                                <Input placeholder="Ссылка" />
                            </Form.Item>
                            <MinusCircleOutlined onClick={() => remove(name)} />
                        </Space>
                    ))}
                    <Form.Item>
                        <Button block icon={<PlusOutlined />} onClick={() => add()} type="dashed">
                            Добавить социальную сеть
                        </Button>
                    </Form.Item>
                </div>
            )}
        </Form.List>
    );
});

export default SocialMediaField;
