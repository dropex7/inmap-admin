import {initializeApp} from 'firebase/app';
import {getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {useCallback, useMemo} from 'react';
import {useNavigate} from 'react-router-dom';

import {firebaseConfig} from '../firebase.config';

const app = initializeApp(firebaseConfig);

export function useAuth() {
    const auth = useMemo(() => getAuth(app), []);
    const navigate = useNavigate();

    const login = useCallback(
        async (email: string, password: string) => {
            try {
                await signInWithEmailAndPassword(auth, email, password);
                navigate('/');
            } catch (err) {
                // some logic
            }
        },
        [auth, navigate],
    );

    // const sendPasswordReset = async (email: string) => {
    //   try {
    //     await sendPasswordResetEmail(auth, email);
    //     alert("Password reset link sent!");
    //   } catch (err) {
    //     // some logic
    //   }
    // };

    const logout = useCallback(() => {
        signOut(auth);
    }, [auth]);

    return {auth, login, logout};
}
