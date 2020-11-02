import { 
    GET_SEARCH_PRODUCT,
    SEARCH_PRODUCT } from "../actions/type"


const initialState = {
    searchedProducts : []
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case SEARCH_PRODUCT:
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

