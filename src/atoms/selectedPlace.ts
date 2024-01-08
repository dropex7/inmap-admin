import {atom} from 'recoil';

export const placeAtom = atom<string>({
    default: undefined, // default value (aka initial value)
    key: 'selectedPlace', // unique ID (with respect to other atoms/selectors)
});
