import React from 'react';
import { useSelector } from 'react-redux';
import uniqid from 'uniqid';

import CatsList from './catsList/CatsList';
import AddCats from './addCats/AddCats';
import styles from "./scss/cats.module.scss";

const Cats = () => {
  const cats = useSelector(state => state.cats);

  return (
    <div className={styles.container}>

      <div className={styles.catsListBlock}>
        {cats.map((cat) => <CatsList key={uniqid()} cats={cat} />)}

      </div>

      <AddCats />
    </div>
  )
};

export default Cats;