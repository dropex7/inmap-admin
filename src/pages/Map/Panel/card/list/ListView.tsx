/**
 * Created by MIRZOEV A. on 09.05.2024
 */

import {memo} from 'react';
import {Avatar, Button, List} from 'antd';
import {NodeIndexOutlined} from '@ant-design/icons';
import type {SubjectLocalizedModel} from '@/generated/graphql.ts';
import {useMap} from '@/hooks/useMap.ts';
import MapPieButton from '@/pages/Map/panel/card/list/MapPieButton.tsx';

interface ListViewProps {
    subjectsOfPlace: Array<Partial<SubjectLocalizedModel>>;
    previousSubjectsOfPlace: Array<Partial<SubjectLocalizedModel>>;
    loading: boolean;
}

const ListView = memo<ListViewProps>(({subjectsOfPlace, loading, previousSubjectsOfPlace}) => {
    const {isEditMode} = useMap();

    return (
        <List
            loading={loading}
            dataSource={subjectsOfPlace ?? previousSubjectsOfPlace}
            renderItem={item => (
                <List.Item key={item.uuid}>
                    <List.Item.Meta
                        avatar={<Avatar src={item.logoUrl} />}
                        title={item.name}
                        description={item.shortDescription}
                    />
                    {isEditMode ? <MapPieButton /> : <Button icon={<NodeIndexOutlined />} />}
                </List.Item>
            )}
        />
    );
});

export default ListView;
