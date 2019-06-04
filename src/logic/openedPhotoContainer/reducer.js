import defaultState from "../defaultState";
import { SET_MARK, SET_MARK_SUCCESS, SET_MARK_FAILED, GET_MARK_SUCCESS, DELETE_PHOTO_SUCCESS,  DELETE_PHOTO_FAILED }  from "./actionTypes";

export function getMarkReducer(state = defaultState.mark, action) { 
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
export function deletePhotoReducer(state = defaultState.deletePhoto, action) { 
    switch (action.type) {
        case DELETE_PHOTO_SUCCESS:{
            return{
                ...action.payload
            };
        }
        default: {
            return state;
        }
    }
}