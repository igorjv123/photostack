import { SET_MARK, GET_MARK } from "./actionTypes";

export function setMark(payload) {
    return {
        type: SET_MARK,
        payload:payload
    };
}
export function getMark(payload) {
    return {
        type: GET_MARK,
        payload:payload
    };
}
