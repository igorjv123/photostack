import defaultState from "../defaultState";
import { REGISTRATION } from "./actionTypes";

export default function registrationReducer(state = defaultState.registration, action) { 
    switch (action.type) {
        case REGISTRATION: {
            console.log(action)
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