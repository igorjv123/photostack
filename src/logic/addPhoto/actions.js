import { ADD_PHOTO } from './actionTypes'

export const addPhoto = (payload) => {
    return{
        type: ADD_PHOTO,
        payload
    }
}