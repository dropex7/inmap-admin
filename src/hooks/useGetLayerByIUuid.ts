import {useGetPlaceUuid} from '@/hooks/useGetPlaceUuid.ts';
import {useQuery} from '@apollo/client';
import type {GetPlaceLayersQuery} from '@/generated/graphql.ts';
import {GET_PLACE_LAYERS} from '@/operations/place/query.ts';

export function useGetLayerByIUuid(layerUuid?: string) {
    const placeUuid = useGetPlaceUuid();
    const {data} = useQuery<GetPlaceLayersQuery>(GET_PLACE_LAYERS, {variables: {placeUuid}});

    if (!data || !layerUuid) {
        return null;
    }

    return data.placeLayers.find(({uuid}) => uuid === layerUuid);
}
