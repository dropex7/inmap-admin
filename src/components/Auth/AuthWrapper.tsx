/**
 * Created by MIRZOEV A. on 15.12.2023
 */

import {memo, useEffect, useState} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import Layout from '../Layout/Layout';
import {useAuth} from '@/hooks/useAuth';
import {onAuthStateChanged} from 'firebase/auth';

const AuthWrapper = memo(() => {
    const navigate = useNavigate();
    const {auth} = useAuth();
    const [isAuthorized, setIsAuthorized] = useState(!!localStorage.getItem('token'));

    useEffect(() => {
        onAuthStateChanged(auth, async user => {
            if (user) {
                const token = await user.getIdToken();
                setIsAuthorized(true);
                localStorage.setItem('token', token);
            } else {
                setIsAuthorized(false);
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
