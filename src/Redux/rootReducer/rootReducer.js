import { GET_CATEGORY, GET_CATS, SET_CATEGORY_ID, SET_LOADING } from "../constants/constants";

const initialState = {
    categoryId: 1,
    categories: [],
    cats: [],
    loading: true
}

export const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_CATEGORY: {
            return {
                ...state,
                categories: [...action.payload]
            }
        }

        case GET_CATS: {
            return {
                ...state,
                cats: [...state.cats, ...action.payload]
            }
        }

        case SET_CATEGORY_ID: {
            return {
                ...state,
                cats: [],
                categoryId: [action.payload]
            }
        }

        case SET_LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }

        default: return state

    }

}