import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import styles from './Admin.module.scss';
import themeStyle from 'styles/Theme.module.scss';

export default function Admin() {
    const { state } = useLocation();
    const navigate = useNavigate();

    if(!(state?.name === "Kayque" && state?.password === "1337")){
        return <Navigate to="/" />;
    }

    return (
        <div className={styles.container}>
            <h1 className={themeStyle.title}>
                Parabéns, você foi autenticado como admin!
            </h1>

            <div className={styles.back}>
                <button onClick={() => navigate('/')}>
                    {'Ir para Home >'}
                </button>
            </div>
        </div>
    );
}
