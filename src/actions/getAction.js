import { GET_NUMBERS_BASKET, GET_SEARCH_PRODUCT } from "./type";

export const getNumbers = ()=>{
    return (dispatch)=>{
        dispatch({
            type : GET_NUMBERS_BASKET,
        })
    }
}

export const getSearchProduct = ()=>{
    return (dispatch)=>{
        dispatch({
            type : GET_SEARCH_PRODUCT
    })
    }
}