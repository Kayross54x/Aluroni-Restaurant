import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from 'assets/logo.svg';

import styles from './MenuLogo.module.scss';

export default function MenuLogo() {
    const routes = [
        {label: 'Início', to: '/'},
        {label: 'Cardápio', to: '/menu'},
        {label: 'Sobre', to: '/about'}
    ];

    return (
		<nav className={styles.menu}>
            <Logo />

            <ul className={styles.menu__list}>
                {routes.map((route, index) => 
                    <li key={index} className={styles.menu__link}>
                        <Link to={route.to}>
                            {route.label}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}
