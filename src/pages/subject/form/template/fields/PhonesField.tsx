/**
 * Created by MIRZOEV A. on 22.11.2023
 */

import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import {Button, Form, Input, Space} from 'antd';
import {memo} from 'react';

const PhonesField = memo(() => {
    return (
        <Form.Item labelAlign="left" label="Телефоны">
            <Form.List name="phones">
                {(fields, {add, remove}) => (
                    <div className="flex flex-col gap-2">
                        {fields.map(({key, name, ...restField}) => (
                            <Space align="baseline" key={key} style={{display: 'flex'}}>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'phoneNumber']}
                                    rules={[
                                        {
                                            message: 'Номер введен некорректно',
                                            pattern: new RegExp(/^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/),
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input placeholder="Номер" />
                                </Form.Item>
                                <Form.Item {...restField} name={[name, 'description']} rules={[{required: true}]}>
                                    <Input placeholder="Описание номера" />
                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(name)} />
                            </Space>
                        ))}
                        <Form.Item>
                            <Button block icon={<PlusOutlined />} onClick={() => add()} type="dashed">
                                Добавить номер телефона
                            </Button>
                        </Form.Item>
                    </div>
                )}
            </Form.List>
        </Form.Item>
    );
});

export default PhonesField;
