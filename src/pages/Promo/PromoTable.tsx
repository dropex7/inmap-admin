/**
 * Created by MIRZOEV A. on 15.12.2023
 */

import {memo} from 'react';
import type {ColumnsType, TableProps} from 'antd/es/table';
import {Table} from 'antd';
import type {PromoLocalizedModel} from '@/generated/graphql';
import PreviewImage from '@/components/Images/PreviewImage.tsx';
import PromoTextView from '@/pages/Promo/views/PromoTextView.tsx';
import noPhoto from '@/assets/no-photo-available.png';
import DateView from '@/components/Date/DateView.tsx';
import {DATE_WITHOUT_TIME} from '@/utils/dateFormats.ts';
import PromoSubjectsView from '@/pages/Promo/views/PromoSubjectsView.tsx';
import {useNavigate} from 'react-router-dom';

type PartialPromo = Partial<PromoLocalizedModel>;

interface PromoTableProps extends TableProps<PartialPromo> {
    data: Array<PartialPromo>;
}

const columns: ColumnsType<PartialPromo> = [
    {
        key: 'imageUrl',
        align: 'center',
        render: ({smallImageUrl}) => (
            <PreviewImage
                alt="image"
                height="60px"
                className="rounded-lg"
                url={smallImageUrl ?? noPhoto}
                width="60px"
            />
        ),
        width: 100,
    },
    {
        render: ({title, subtitle}) => <PromoTextView title={title} subtitle={subtitle} />,
    },
    {
        title: 'Начало акции',
        align: 'center',
        render: ({startDateTime}) => <DateView date={startDateTime} format={DATE_WITHOUT_TIME} />,
        width: 150,
    },
    {
        title: 'Конец акции',
        align: 'center',
        render: ({endDateTime}) => <DateView date={endDateTime} format={DATE_WITHOUT_TIME} />,
        width: 150,
    },
    {
        title: 'Объекты',
        align: 'center',
        render: ({uuid}) => <PromoSubjectsView promoUuid={uuid} />,
        width: 300,
    },
];

const PromoTable = memo<PromoTableProps>(({data, ...rest}) => {
    const navigate = useNavigate();

    return (
        <Table
            {...rest}
            onRow={({uuid}) => {
                return {
                    onClick: () => {
                        navigate(uuid!);
                    },
                };
            }}
            rowKey={({title, subtitle}) => `${title}_${subtitle}`}
            columns={columns}
            dataSource={data}
        />
    );
});

export default PromoTable;
