/**
 * Created by MIRZOEV A. on 08.01.2024
 */

import {Form} from 'antd';
import {memo} from 'react';
import type {LocalizedTemplateTabModel} from '@/generated/graphql';
import TemplateFields from '../TemplateFields';

interface NewTemplateProps {
    data: Array<LocalizedTemplateTabModel>;
}

const TemplateTabs = memo<NewTemplateProps>(({data}) => {
    return (
        <Form.List name="tabs">
            {() => (
                <div style={{display: 'flex', rowGap: 16, flexDirection: 'column'}}>
                    {data.map(({uuid, name, fields}, index) => (
                        <TemplateFields
                            templateTabUuid={uuid}
                            fields={fields}
                            key={uuid}
                            name={name}
                            tabIndex={index}
                        />
                    ))}
                </div>
            )}
        </Form.List>
    );
});

export default TemplateTabs;
