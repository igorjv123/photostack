import defaultState from "../defaultState";
import { ON_SEARCH } from "./actionTypes";

export default function searchBarReducer(state = defaultState.searchQuery, action) { 
    switch (action.type) {
        
        case ON_SEARCH:{
            state = action.payload;
            return state;
        }
        default: {
            return state;
        }
    }
}