import { 
    ADD_PRODUCT_BASKET,
    GET_NUMBERS_BASKET } from "../actions/type"


const initialState = {
    basketNumber : 0,
    products : [],
    TotalBasketPice : 0,
    TotalMrpprice : 0
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case ADD_PRODUCT_BASKET:
            state.products.push(action.payload)
            return {
                ...state,
                basketNumber : state.basketNumber + 1,
                TotalBasketPice : state.TotalBasketPice + Number(action.payload.price),
                TotalMrpprice : state.TotalMrpprice + Number(action.payload.mrp)
        }
        case GET_NUMBERS_BASKET:
            return {
                ...state
        }
        default:
            return state
    }
}

