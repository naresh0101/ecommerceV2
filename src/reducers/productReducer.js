import { 
    GET_SEARCH_PRODUCT,
    SEARCH_PRODUCT } from "../actions/type"


const initialState = {
    basketNumber : 0,
    products : [],
    TotalBasketPice : 0,
    TotalMrpprice : 0,
    searchedProducts : null
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case SEARCH_PRODUCT:
            console.log('====================================');
            console.log(action.payload);
            console.log('====================================');
            return {
                ...state,
                searchedProducts : action.payload
        }
        case GET_SEARCH_PRODUCT:
            return {
                ...state
        }
        default:
            return state
    }
}

