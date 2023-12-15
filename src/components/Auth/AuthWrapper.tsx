/**
 * Created by MIRZOEV A. on 15.12.2023
 */

import {memo, useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import Layout from '../Layout/Layout';
import {useAuth} from '../../hooks/useAuth';
import {onAuthStateChanged} from 'firebase/auth';

const AuthWrapper = memo(() => {
    const navigate = useNavigate();
    const {auth} = useAuth();

    const isAuthorized = !!localStorage.getItem('token');

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                user.getIdToken().then(data => {
                    localStorage.setItem('token', data);
                });
            } else {
                localStorage.clear();
                // User is signed out
                navigate('/login');
            }
        });
    }, [auth, navigate]);

    return (
        <>
            {isAuthorized && <Layout />}
            {!isAuthorized && <Outlet />}
        </>
    );
});

export default AuthWrapper;
