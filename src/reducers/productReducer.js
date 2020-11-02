import { 
    GET_SEARCH_PRODUCT,
    SEARCH_PRODUCT, ADD_VIEW_PRODUCT} from "../actions/type"


const initialState = {
    searchedProducts : [],
    viewProduct : ""
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case SEARCH_PRODUCT:
            return {
                ...state,
                searchedProducts : action.payload
        }
        case ADD_VIEW_PRODUCT:
            return {
                ...state,
                viewProduct : action.payload
        }
        case GET_SEARCH_PRODUCT:
            return {
                ...state
        }
        default:
            return state
    }
}

