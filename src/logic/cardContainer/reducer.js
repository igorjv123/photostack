import defaultState from "../defaultState";
import { GET_IMAGES_SUCCESS, GET_IMAGES_FAILED} from "./actionTypes";

export default function cardContainerReducer(state = defaultState.images, action) { 
    switch (action.type) {
        case GET_IMAGES_SUCCESS:{
            return {
                data: action.payload.data,
                dataLength: action.payload.dataLength
            };
        }
        default: {
            return state;
        }
    }
}