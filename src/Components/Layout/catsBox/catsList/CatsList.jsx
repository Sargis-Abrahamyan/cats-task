import { useState } from 'react';

import styles from "./scss/catsList.module.scss";

const CatsList = ({ cats }) => {
    const [fullScreenImg, setFullScreenImg] = useState("")

    return (
        <div className={styles.catsBlock}>
            <img src={cats.url} className={styles.catsList} alt={"cat"} onClick={() => setFullScreenImg(cats.url)} />

            {fullScreenImg && (
                <div className={styles.fullScreen}>
                    <div className={styles.fullScreenBlock}>
                        <img src={fullScreenImg} alt={"cat"} />
                        <button onClick={() => setFullScreenImg("")}>X</button>
                    </div>

                </div>
            )}
        </div>
    )
};

export default CatsList;