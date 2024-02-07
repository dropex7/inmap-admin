/**
 * Created by MIRZOEV A. on 15.12.2023
 */

import {memo} from 'react';
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
    // {
    //     title: 'Картинка',
    //     key: 'imageUrl',
    //     render: ({smallImageUrl}) => (
    //         <PreviewImage
    //             alt="image"
    //             height="100px"
    //             className="rounded-lg"
    //             url={smallImageUrl ?? noPhoto}
    //             width="100px"
    //         />
    //     ),
    // },
];

const PromoTable = memo<PromoTableProps>(({data, ...rest}) => {
    return (
        <Table rowKey={({title, subtitle}) => `${title}_${subtitle}`} columns={columns} dataSource={data} {...rest} />
    );
});

export default PromoTable;
