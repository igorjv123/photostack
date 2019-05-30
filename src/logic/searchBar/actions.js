import { ON_SEARCH } from "./actionTypes";

export function onSearch(payload) {
    return {
        type: ON_SEARCH,
        payload: payload
    };
}
