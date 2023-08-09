import { atom } from "recoil";

export const placeAtom = atom<string | undefined>({
  key: "selectedPlace", // unique ID (with respect to other atoms/selectors)
  default: undefined, // default value (aka initial value)
});
