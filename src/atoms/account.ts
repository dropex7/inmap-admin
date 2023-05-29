import { atom } from "recoil";
import firebase from "firebase/compat";
import UserCredential = firebase.auth.UserCredential;

export const accountAtom = atom<UserCredential | null>({
  key: "account", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});
