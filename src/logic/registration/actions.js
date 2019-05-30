import { REGISTRATION } from "./actionTypes";

export function registrationSubmit(payload) {
    return {
        type: REGISTRATION,
        payload
    };
}
