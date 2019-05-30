import { GET_COMMENTS } from "./actionTypes";

export function getComments(id) {
    return {
        type: GET_COMMENTS,
        payload: id
    };
}
