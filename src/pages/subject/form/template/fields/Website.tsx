/**
 * Created by MIRZOEV A. on 21.11.2023
 */

import {Button, Form, Input, Space} from 'antd';
import {memo} from 'react';
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';

const {Item, List} = Form;

const Website = memo(() => {
    return (
        <Item labelAlign="left" label="Сайты">
            <List name="sites">
                {(fields, {add, remove}) => (
                    <div className="flex flex-col gap-2">
                        {fields.map(({key, name, ...restField}) => (
                            <Space align="baseline" key={key} style={{display: 'flex'}}>
                                <Item {...restField} name={[name, 'title']} rules={[{required: true}]}>
                                    <Input placeholder="Название" />
                                </Item>
                                <Item {...restField} name={[name, 'websiteUrl']}>
                                    <Input placeholder="Сайт" />
                                </Item>
                                <MinusCircleOutlined onClick={() => remove(name)} />
                            </Space>
                        ))}
                        <Item>
                            <Button block icon={<PlusOutlined />} onClick={() => add()} type="dashed">
                                Добавить сайт
                            </Button>
                        </Item>
                    </div>
                )}
            </List>
        </Item>
    );
});

export default Website;
