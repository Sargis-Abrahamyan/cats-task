import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { actionCategoryID, actionLoading } from '../../../Redux/actions/actions';
import styles from "./scss/categores.module.scss";

const Categories = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const { categories, categoryId } = state;

  const changeCategoryis = (id) => {
    dispatch(actionCategoryID(id));
    dispatch(actionLoading(true));

  };

  return (
    <ul className={styles.categoryBlock}>
      {categories && categories.map((category) => {

        return (
          <li key={category.id} className={styles.categoryItems}>

            <Link to={`${category.name}`}
              className={category?.id === categoryId[0] ? styles.active : styles.link}
              onClick={() => changeCategoryis(category?.id)}>
              {category.name}
            </Link>

          </li>
        )
      })}

    </ul>
  )
}

export default Categories;