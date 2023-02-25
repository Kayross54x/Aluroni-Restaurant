import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './DefaultPage.module.scss';
import themeStyles from 'styles/Theme.module.scss';

export default function DefaultPage({children}: {children?: React.ReactNode}) {

    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>A casa do código e da massa</div>
            </header>
            <div className={themeStyles.container}>
                <Outlet />
                {children}
            </div>
        </>
    );
}
