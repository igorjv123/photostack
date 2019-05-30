import { GET_IMAGES } from "./actionTypes";

export function getImages(payload) {
    return {
        type: GET_IMAGES,
        payload
    };
}
