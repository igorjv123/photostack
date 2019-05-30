import defaultState from "../defaultState";
import { GET_COMMENTS, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILED} from "./actionTypes";
import {ADD_COMMENT_SUCCESS} from '../addComment/actionTypes'

export default function commentsBarReducer(state = defaultState.comments, action) { 
    switch (action.type) {
        case GET_COMMENTS_SUCCESS:{
            if(action.payload.length>0){
                return [
                    ...action.payload
                ];
            }
            return []
        }
        case ADD_COMMENT_SUCCESS: {
            console.log('reducer', action, state)
        
            return [
                ...action.payload
            ];
        }
        default: {
            return state;
        }
    }
}