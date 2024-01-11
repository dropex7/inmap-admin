/**
 * Created by MIRZOEV A. on 15.11.2023
 */
import {useQuery} from '@apollo/client';
import {Typography} from 'antd';

import type {TemplateLocalizedModel} from '@/generated/graphql';

import {GET_TEMPLATES} from '@/operations/template/query';
import TemplateList from './TemplateList';

const {Title} = Typography;
export function Component() {
    const {data} = useQuery<{
        templates: Array<TemplateLocalizedModel>;
    }>(GET_TEMPLATES);

    return (
        <div className="p-6">
            <div className="flex justify-between pb-3">
                <Title level={3}>Выбор шаблона</Title>
            </div>

            <TemplateList data={data?.templates ?? []} />
        </div>
    );
}
