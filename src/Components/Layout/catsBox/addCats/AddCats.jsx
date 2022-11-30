import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Get_Data_Cats } from "../../../../api/api";
import { GET_CATS } from '../../../../Redux/constants/constants';
import styles from "./scss/addCats.module.scss";

const AddCats = () => {
    const dispatch = useDispatch();
    const categoryId = useSelector(state => state.categoryId);

    const handelAddCats = async () => {
        const newCats = await Get_Data_Cats(categoryId);
        dispatch({ type: GET_CATS, payload: newCats });

    };

    return <button className={styles.addCatsBtn} onClick={handelAddCats}>Add More</button>

};

export default AddCats;