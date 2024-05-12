import type {GetSubjectsOfPlaceInputQuery} from '@/generated/graphql.ts';
import {useMap} from '@/hooks/useMap.ts';
import {useMemo} from 'react';

export function useFilterSubjectsByLayer(data?: GetSubjectsOfPlaceInputQuery): Array<any> {
    const {planState, selectedLayerUuid, isEditMode} = useMap();

    const res = useMemo(() => {
        if (planState && selectedLayerUuid && data) {
            const layerObjects = planState.linkedLayers.find(({layerUuid}) => layerUuid === selectedLayerUuid);

            if (layerObjects) {
                return data.subjectsOfPlace.items.filter(({uuid}) => {
                    const obj = layerObjects.linkedObjects.find(({originUuid}) => originUuid === uuid);
                    return isEditMode ? !obj : !!obj;
                });
            }

            return [];
        }

        return [];
    }, [data, isEditMode, planState, selectedLayerUuid]);

    return res;
}
