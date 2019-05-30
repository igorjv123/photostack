import defaultState from "../defaultState";
import { LOGIN } from "./actionTypes";

export default function loginReducer(state = defaultState.login, action) { //state = defaultState.login,
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                ...action.payload

            };
        }

        default: {
            return state;
        }
    }
}