import {useContext} from 'react';
import {MapContext} from '@/pages/Map/MapContext.ts';

export function useGetMap() {
    return useContext(MapContext);
}
