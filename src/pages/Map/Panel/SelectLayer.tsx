/**
 * Created by MIRZOEV A. on 04.01.2024
 */

import {memo, useCallback, useContext, useEffect, useState} from 'react';
import {useRecoilValue} from 'recoil';
import {placeAtom} from '@/atoms/selectedPlace';
import {useQuery} from '@apollo/client';
import type {GetPlaceLayersQuery} from '@/generated/graphql';
import {GET_PLACE_LAYERS} from '@/operations/place/query';
import {Radio, Space} from 'antd';
import {MapContext} from '../MapContext';
import {getSelectLayerMessage} from '@/utils/widgetMessages';
import {PlaceGlobalCtx} from '@/components/Place/PlaceGlobalCtx.ts';

const {Group, Button} = Radio;

const SelectLayer = memo(() => {
    const {ref} = useContext(MapContext);
    const {initialLayerUuid} = useContext(PlaceGlobalCtx);
    const [selectedLayer, setSelectedLayer] = useState<string>();
    const placeUuid = useRecoilValue(placeAtom);
    const {data} = useQuery<GetPlaceLayersQuery>(GET_PLACE_LAYERS, {variables: {placeUuid}});

    const handleSelectLayer = useCallback(
        (layerUuid: string) => {
            setSelectedLayer(layerUuid);
            if (ref?.current?.contentWindow) {
                ref.current.contentWindow.postMessage(getSelectLayerMessage(layerUuid), '*');
            }
        },
        [ref],
    );

    useEffect(() => {
        if (initialLayerUuid) {
            handleSelectLayer(initialLayerUuid);
        } else if (data) {
            handleSelectLayer(data.placeLayers[0].uuid);
        }
    }, [data, handleSelectLayer, initialLayerUuid]);

    return (
        <Group className="flex w-40 justify-center bg-zinc-700 p-3" value={selectedLayer}>
            <Space direction="vertical" size="large">
                {data?.placeLayers.map(({fullName, uuid}) => (
                    <Button type="primary" value={uuid} key={uuid} onClick={() => handleSelectLayer(uuid)}>
                        {fullName}
                    </Button>
                ))}
            </Space>
        </Group>
    );
});

export default SelectLayer;
