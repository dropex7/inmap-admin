/**
 * Created by MIRZOEV A. on 15.11.2023
 */

import {memo} from 'react';
import {useNavigate} from 'react-router-dom';

import type {TemplateLocalizedModel} from '@/generated/graphql';

interface TemplateListProps {
    data: Array<TemplateLocalizedModel>;
}

const TemplateList = memo<TemplateListProps>(({data}) => {
    const navigate = useNavigate();

    const handleSelectTemplate = (id: string) => {
        navigate(id);
    };

    return (
        <section className="card flex gap-6 p-6">
            {data.map(({imageUrl, name, uuid}) => (
                <div
                    className=" card flex flex-col gap-3 p-3  text-center"
                    key={uuid + name}
                    onClick={() => handleSelectTemplate(uuid)}
                >
                    <img alt="name" src={imageUrl} width="150px" />
                    <span>{name}</span>
                </div>
            ))}
        </section>
    );
});

export default TemplateList;
