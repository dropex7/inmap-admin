/**
 * Created by MIRZOEV A. on 15.12.2023
 */

import {memo} from 'react';
import type {ColumnsType, TableProps} from 'antd/es/table';
import {Table} from 'antd';
import type {PromoLocalizedModel} from '@/generated/graphql';
import PreviewImage from '@/components/Images/PreviewImage.tsx';
import PromoTextView from '@/pages/Promo/PromoTextView.tsx';
import noPhoto from '@/assets/no-photo-available.png';
import DateView from '@/components/Date/DateView.tsx';
import {DATE_WITHOUT_TIME} from '@/utils/dateFormats.ts';

type PartialPromo = Partial<PromoLocalizedModel>;

interface PromoTableProps extends TableProps<PartialPromo> {
    data: Array<PartialPromo>;
}

const columns: ColumnsType<PartialPromo> = [
    {
        key: 'imageUrl',
        render: ({smallImageUrl}) => (
            <PreviewImage
                alt="image"
                height="100px"
                className="rounded-lg"
                url={smallImageUrl ?? noPhoto}
                width="100px"
            />
        ),
        width: 150,
    },
    {
        render: ({title, subtitle}) => <PromoTextView title={title} subtitle={subtitle} />,
    },
    {
        title: 'Начало акции',
        width: 150,
        render: ({startDateTime}) => <DateView date={startDateTime} format={DATE_WITHOUT_TIME} />,
    },
    {
        title: 'Конец акции',
        width: 150,
        render: ({endDateTime}) => <DateView date={endDateTime} format={DATE_WITHOUT_TIME} />,
    },
];

const PromoTable = memo<PromoTableProps>(({data, ...rest}) => {
    return (
        <Table rowKey={({title, subtitle}) => `${title}_${subtitle}`} columns={columns} dataSource={data} {...rest} />
    );
});

export default PromoTable;
