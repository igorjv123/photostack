import { loginSubmit } from "logic/login/actions";

export function mapStateToProps(state, ownProps) {
    const { login } = state;
    return {
        ...login
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        handleLoginSubmit(userData) {
            console.log(userData)
            dispatch(loginSubmit(userData));
        }
    };
}