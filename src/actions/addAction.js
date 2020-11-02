import { ADD_PRODUCT_BASKET, SEARCH_PRODUCT } from "./type";

export const addBasket = (product)=>{
    return (dispatch)=>{
        dispatch({
            type : ADD_PRODUCT_BASKET,
            payload : product
        })
    }
}


export const searchProduct = (product)=>{
    return (dispatch)=>{
        dispatch({
            type : SEARCH_PRODUCT,
            payload : product
        })
    }
}