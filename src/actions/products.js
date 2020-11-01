import { SEARCH_PRODUCT,getSearchProduct } from "./type";

export const searchProduct = (product)=>{
    return (dispatch)=>{
        dispatch({
            type : SEARCH_PRODUCT,
            payload : product
        })
    }
}

export const getSearchProduct = ()=>{
    return (dispatch)=>{
        dispatch({
            type : SEARCH_PRODUCT
    })
    }
}