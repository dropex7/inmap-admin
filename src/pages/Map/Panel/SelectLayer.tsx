/**
 * Created by MIRZOEV A. on 04.01.2024
 */

import {memo, useCallback, useContext, useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import type {GetPlaceLayersQuery} from '@/generated/graphql';
import {GET_PLACE_LAYERS} from '@/operations/place/query';
import {getSelectLayerMessage} from '@/utils/widgetMessages';
import {PlaceGlobalCtx} from '@/components/Place/PlaceGlobalCtx.ts';
import clsx from 'clsx';
import {useGetPlaceUuid} from '@/hooks/useGetPlaceUuid.ts';
import {useGetMap} from '@/hooks/useGetMap.ts';

const SelectLayer = memo(() => {
    const {ref} = useGetMap();
    const {initialLayerUuid} = useContext(PlaceGlobalCtx);
    const [selectedLayer, setSelectedLayer] = useState<string>();
    const placeUuid = useGetPlaceUuid();
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
        <div className="flex  flex-col divide-y divide-zinc-700 border border-zinc-700 bg-zinc-900">
            <span className="bg-zinc-700 p-3 text-center text-white">№ этажа</span>
            {data?.placeLayers.map(({shortName, uuid}) => {
                const isSelected = selectedLayer === uuid;

                return (
                    <div
                        key={uuid}
                        onClick={isSelected ? undefined : () => handleSelectLayer(uuid)}
                        className={clsx(
                            'flex items-center justify-center p-3 text-white text-opacity-80 hover:cursor-pointer',
                            isSelected && 'bg-zinc-800',
                        )}
                    >
                        {shortName}
                    </div>
                );
            })}
        </div>
    );
});

export default SelectLayer;
