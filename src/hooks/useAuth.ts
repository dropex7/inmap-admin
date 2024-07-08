import {initializeApp} from 'firebase/app';
import {getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {useCallback, useMemo, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {firebaseConfig} from '../firebase.config';

const app = initializeApp(firebaseConfig);

export function useAuth() {
    const auth = useMemo(() => getAuth(app), []);
    const navigate = useNavigate();
    const [isError, setIsError] = useState(false);

    const login = useCallback(
        async (email: string, password: string) => {
            try {
                await signInWithEmailAndPassword(auth, email, password);
                navigate('/');
            } catch (err) {
                setIsError(true);
            }
        },
        [auth, navigate],
    );

    const logout = useCallback(() => {
        signOut(auth);
    }, [auth]);

    return {auth, login, logout, isError};
}
