import defaultState from "../defaultState";
import { ADD_PHOTO, ADD_PHOTO_SUCCESS, ADD_PHOTO_FAILED} from "./actionTypes";

export default function addPhotoReducer(state = defaultState.images, action) {
    switch (action.type) {
        case ADD_PHOTO_SUCCESS: {
            
            return [
                ...state
            ];
        }
        default: {
            return state;
        }
    }
}