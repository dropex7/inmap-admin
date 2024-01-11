/**
 * Created by MIRZOEV A. on 15.12.2023
 */

import {memo} from 'react';
import noPhoto from '../../assets/no-photo-available.png';
import PreviewImage from '../../components/Images/PreviewImage';
import type {ColumnsType, TableProps} from 'antd/es/table';
import {Table} from 'antd';
import type {PromoSearchModel} from '@/generated/graphql';

interface PromoTableProps extends TableProps<PromoSearchModel> {
    data: Array<PromoSearchModel>;
}

const columns: ColumnsType<PromoSearchModel> = [
    {
        title: 'Заголовок',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Описание',
        dataIndex: 'subtitle',
        key: 'subtitle',
    },
    {
        title: 'Картинка',
        key: 'imageUrl',
        render: ({imageUrl}) => (
            <PreviewImage alt="image" height="100px" rounded url={imageUrl ?? noPhoto} width="100px" />
        ),
    },
];

const PromoTable = memo<PromoTableProps>(({data, ...rest}) => {
    return <Table columns={columns} dataSource={data} {...rest} />;
});

export default PromoTable;
