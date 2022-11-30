import React from 'react';
import styles from "./scss/catsList.module.scss";

const CatsList = ({ cats }) => {
    return (
        <div className={styles.catsBlock}>
            <img src={cats.url} className={styles.catsList} alt={"cat"} />
        </div>
    )
};

export default CatsList;