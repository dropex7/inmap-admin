/**
 * Created by MIRZOEV A. on 06.02.2024
 */

import {memo, useMemo} from 'react';
import clsx from 'clsx';
import type {TemplateLocalizedModel} from '@/generated/graphql.ts';

interface TemplateItemProps {
    uuid: string;
    name: string;
    tabs: TemplateLocalizedModel['tabs'];
    selectedTemplate?: string;
    setTemplate: (uuid: string) => void;
}

const TemplateItem = memo<TemplateItemProps>(({uuid, tabs, name, selectedTemplate, setTemplate}) => {
    const extraClassName = useMemo(
        () => (selectedTemplate === uuid ? 'outline outline-amber-100' : 'hover:outline hover:outline-amber-100'),
        [selectedTemplate, uuid],
    );

    const description = useMemo(
        () =>
            tabs
                .map(({name}) => name)
                .join(', ')
                .toLowerCase(),
        [tabs],
    );

    return (
        <div
            className={clsx('card flex flex-col rounded-xl p-4 outline-1 hover:cursor-pointer', extraClassName)}
            key={uuid + name}
            onClick={() => setTemplate(uuid)}
        >
            <span>{name}</span>
            <span className="text-xs text-gray-400 text-opacity-70">{description}</span>
        </div>
    );
});

export default TemplateItem;
