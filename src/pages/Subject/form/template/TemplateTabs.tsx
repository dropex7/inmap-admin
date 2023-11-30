/**
 * Created by MIRZOEV A. on 20.11.2023
 */

import {Form} from 'antd';
import {memo} from 'react';

import type {LocalizedTemplateTabModel} from '../../../../generated/graphql';

import {createIndexWithZeros} from '../helper';
import FieldByType from './FieldByType';

interface TabsProps {
    data: Array<LocalizedTemplateTabModel>;
}

const TemplateTabs = memo<TabsProps>(({data}) => {
    return (
        <>
            {data.map(({fields, name, uuid}, tabIndex) => {
                const tabName = `${createIndexWithZeros(tabIndex)}${uuid}`;
                return (
                    <Form.List key={tabName} name={tabName}>
                        {() => (
                            <div className="card p-6" key={uuid}>
                                <h3>{name}</h3>
                                {fields.map((field, fieldIndex) => {
                                    const name = `${createIndexWithZeros(fieldIndex)}&${field}`;

                                    return <FieldByType field={field} key={name} name={name} tabUuid={tabName} />;
                                })}
                            </div>
                        )}
                    </Form.List>
                );
            })}
        </>
    );
});

export default TemplateTabs;
