import {useRecoilValue} from 'recoil';
import {placeAtom} from '@/atoms/selectedPlace.ts';

export function useGetPlaceUuid() {
    return useRecoilValue(placeAtom);
}
