import React from 'react';

import styles from "./scss/loading.module.scss";

const Loading = () => {

    return (
        <div className={styles.spinner}>
            <span className={styles.spinnerInner1}></span>
            <span className={styles.spinnerInner2}></span>
            <span className={styles.spinnerInner3}></span>
        </div>
    )

};

export default Loading