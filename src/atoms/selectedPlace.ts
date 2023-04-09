import { atom } from "recoil";

export const placeAtom = atom<string | null>({
  key: "selectedPlace", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});
