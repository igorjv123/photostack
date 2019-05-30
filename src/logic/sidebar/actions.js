import { CHANGE_FILTER } from "./actionTypes";

export function changeFilter(payload) {
    return {
        type: CHANGE_FILTER,
        payload
    };
}
