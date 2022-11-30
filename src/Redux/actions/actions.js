import { GET_CATEGORY, GET_CATS, SET_CATEGORY_ID, SET_LOADING } from './../constants/constants';

export const actionCateogris = (categories_url) => ({
    type: GET_CATEGORY,
    payload: categories_url
})

export const actionGetCats = (cats_url) => ({
    type: GET_CATS,
    payload: cats_url
})

export const actionCategoryID = (id) => ({
    type: SET_CATEGORY_ID,
    payload: id
})

export const actionLoading = (loading) => ({
    type: SET_LOADING,
    payload: loading
})


