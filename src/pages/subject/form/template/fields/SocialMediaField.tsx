/**
 * Created by MIRZOEV A. on 22.11.2023
 */

import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import {Button, Form, Input, Select, Space} from 'antd';
import {memo} from 'react';

const {Item, List} = Form;

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
        <Item labelAlign="left" label="Социальные сети">
            <List name="socials">
                {(fields, {add, remove}) => (
                    <div className="flex flex-col gap-2">
                        {fields.map(({key, name, ...restField}) => (
                            <Space align="baseline" key={key} style={{display: 'flex'}}>
                                <Item
                                    {...restField}
                                    name={[name, 'type']}
                                    rules={[{message: 'Выберите тип', required: true}]}
                                >
                                    <Select options={options} placeholder="Тип социальной сети" style={{width: 200}} />
                                </Item>
                                <Item
                                    {...restField}
                                    name={[name, 'url']}
                                    rules={[{message: 'Введите ссылку', required: true}]}
                                >
                                    <Input placeholder="Ссылка" />
                                </Item>
                                <MinusCircleOutlined onClick={() => remove(name)} />
                            </Space>
                        ))}
                        <Item>
                            <Button block icon={<PlusOutlined />} onClick={() => add()} type="dashed">
                                Добавить социальную сеть
                            </Button>
                        </Item>
                    </div>
                )}
            </List>
        </Item>
    );
});

export default SocialMediaField;
