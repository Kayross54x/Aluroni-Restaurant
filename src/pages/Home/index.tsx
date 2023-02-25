import React from 'react';
import { useNavigate } from 'react-router-dom';

import menu from 'data/menu.json';

import ourHome from 'assets/nossa_casa.png';
import { IPlate } from 'types/Plate';

import styles from './Home.module.scss';
import themeStyles from 'styles/Theme.module.scss';

export default function Home() {
    const navigate = useNavigate();
    let recommendedPlates = [...menu]; //crio um array auxiliar para não alterar o array original

    recommendedPlates = recommendedPlates.sort(() => 0.5 - Math.random()).splice(0, 3);

    function redirectToPlate(plate: IPlate) {
        navigate(`/plate/${plate.id}`, {replace: true});
    }

    return (
        <section>
            <h3 className={themeStyles.title}>Recomendações da Cozinha</h3>

            <div className={styles.recommendeds}>
                {recommendedPlates.map((item) => 
                    <div key={item.id} className={styles.recommended}>
                        <div className={styles.recommended__image}>
                            <img src={item.photo} alt={item.title} />

                            <button 
                                className={styles.recommended__button}
                                onClick={() => redirectToPlate(item)}
                            >
                                    Ver mais
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <h3 className={themeStyles.title}>Nossa Casa</h3>
            <div className={styles.ourHome}>
                <img src={ourHome} alt="Home" />
                <div className={styles.ourHome__address}>
                    Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
                </div>
            </div>

            <div>
                <button 
                    className={styles.secret_button} 
                    onClick={() => navigate('/admin', {state: {name: "Kayque", password: "1337"}})}
                >
                    EasterEgg
                </button>
            </div>
        </section>
    );
}