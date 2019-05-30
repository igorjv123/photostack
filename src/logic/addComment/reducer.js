import defaultState from "../defaultState";
import { ADD_COMMENT, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILED} from "./actionTypes";

export default function addCommentReducer(state = defaultState.newComment, action) {
    switch (action.type) {
        case ADD_COMMENT_SUCCESS: {
            return [
                ...action.payload
            ];
        }
        default: {
            return state;
        }
    }
}