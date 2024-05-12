import {useContext} from 'react';
import {MapContext} from '@/pages/map/MapContext.ts';

export function useMap() {
    return useContext(MapContext);
}
