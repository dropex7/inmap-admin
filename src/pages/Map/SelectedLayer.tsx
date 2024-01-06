/**
 * Created by MIRZOEV A. on 04.01.2024
 */

import {memo, useCallback, useContext, useState} from 'react';
import {useRecoilValue} from 'recoil';
import {placeAtom} from '../../atoms/selectedPlace';
import {useQuery} from '@apollo/client';
import type {GetPlaceLayersQuery} from '../../generated/graphql';
import {GET_PLACE_LAYERS} from '../../operations/place/query';
import {Radio, Space} from 'antd';
import {MapContext} from './MapContext';
import {getSelectLayerMessage} from '../../utils/widgetMessages';

const {Group, Button} = Radio;

const SelectedLayer = memo(() => {
    const {ref} = useContext(MapContext);
    const [selectedLayer, setSelectedLayer] = useState<string>();
    const placeId = useRecoilValue(placeAtom);
    const {data} = useQuery<GetPlaceLayersQuery>(GET_PLACE_LAYERS, {variables: {placeUuid: placeId!}});

    const handleSelectLayer = useCallback(
        (layerUuid: string) => {
            setSelectedLayer(layerUuid);
            if (ref?.current?.contentWindow) {
                ref.current.contentWindow.postMessage(getSelectLayerMessage(layerUuid), '*');
            }
        },
        [ref],
    );

    return (
        <Group size="large" value={selectedLayer}>
            <Space direction="vertical">
                {data?.placeLayers.map(({fullName, uuid}) => (
                    <Button value={uuid} key={uuid} onClick={() => handleSelectLayer(uuid)}>
                        {fullName}
                    </Button>
                ))}
            </Space>
        </Group>
    );
});

export default SelectedLayer;
