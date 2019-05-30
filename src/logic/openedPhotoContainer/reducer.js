import defaultState from "../defaultState";
import { SET_MARK, SET_MARK_SUCCESS, SET_MARK_FAILED, GET_MARK_SUCCESS }  from "./actionTypes";

export default function getMarkReducer(state = defaultState.mark, action) { 
    switch (action.type) {
        case GET_MARK_SUCCESS:{
            return {
                ...action.payload
            };
        }
        default: {
            return state;
        }
    }
}