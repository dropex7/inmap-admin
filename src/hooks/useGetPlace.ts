import {useContext} from 'react';
import {PlaceGlobalCtx} from '@/components/Place/PlaceGlobalCtx.ts';

export function useGetPlace() {
    return useContext(PlaceGlobalCtx);
}
