import {useContext} from 'react';
import {MapContext} from '@/pages/Map/MapContext.ts';

export function useMap() {
    return useContext(MapContext);
}
