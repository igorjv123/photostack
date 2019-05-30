import { SET_FILTERS } from "./actionTypes";

export function setFilters(payload) {
    console.log(111, payload)
    return {
        type: SET_FILTERS,
        payload: payload
    };
}
