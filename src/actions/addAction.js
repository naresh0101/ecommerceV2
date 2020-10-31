import { ADD_PRODUCT_BASKET } from "./type";

export const addBasket = (product)=>{
    return (dispatch)=>{
        dispatch({
            type : ADD_PRODUCT_BASKET,
            payload : product
        })
    }
}