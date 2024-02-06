/**
 * Created by MIRZOEV A. on 15.11.2023
 */

import {memo} from 'react';

import type {TemplateLocalizedModel} from '@/generated/graphql.ts';
import TemplateItem from '@/pages/Subject/template/TemplateItem.tsx';

interface TemplateListProps {
    selectedTemplate?: string;
    data: Array<TemplateLocalizedModel>;
    setTemplate: (uuid: string) => void;
}

const TemplateList = memo<TemplateListProps>(({data, selectedTemplate, setTemplate}) => {
    return (
        <section className="grid grid-cols-2 gap-6 py-3">
            {data.map(({name, uuid, tabs}) => (
                <TemplateItem
                    key={uuid}
                    uuid={uuid}
                    tabs={tabs}
                    name={name}
                    setTemplate={setTemplate}
                    selectedTemplate={selectedTemplate}
                />
            ))}
        </section>
    );
});

export default TemplateList;
