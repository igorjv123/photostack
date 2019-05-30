import { registrationSubmit } from "logic/registration/actions";

export function mapStateToProps(state, ownProps) {
    const { login } = state;
    return {
        ...login
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        handleRegistrationSubmit(userData) {
            console.log(userData)
            dispatch(registrationSubmit(userData));
        }
    };
}