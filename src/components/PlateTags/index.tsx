import React from 'react';

import classNames from 'classnames';
import { IPlate } from 'types/Plate';

import styles from './PlateTags.module.scss';

export default function PlateTags({category, size, serving, price}: IPlate) {
    return (
        <div className={styles.tags}>
            <div className={classNames({
                [styles.tags__type]: true,
                [styles[`tags__type__${category.label.toLowerCase()}`]]: true,

            })}>
                {category.label}
            </div>

            <div className={styles.tags__portion}>
                {size}
            </div>

            <div className={styles.tags__amountPeople}>
                Serve {serving} pessoa{serving === 1 ? '' : 's'}
            </div>

            <div className={styles.tags__value}>
                R$ {price.toFixed(2)}
            </div>
        </div>
    );
}
