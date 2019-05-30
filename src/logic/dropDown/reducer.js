import defaultState from "../defaultState";
import { SET_FILTERS } from "./actionTypes";

export default function dropDownReducer(state = defaultState.filter.tags, action) { 
    switch (action.type) {
        case SET_FILTERS:{
            return [...action.payload]
        }
        default: {
            return state;
        }
    }
}