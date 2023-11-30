import firebase from 'firebase/compat';
import {atom} from 'recoil';

import UserCredential = firebase.auth.UserCredential;

export const accountAtom = atom<UserCredential | null>({
    default: null, // default value (aka initial value)
    key: 'account', // unique ID (with respect to other atoms/selectors)
});
