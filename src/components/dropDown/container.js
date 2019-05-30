import { setFilters } from 'logic/dropDown/actions'

export function mapStateToProps(state, ownProps) {
    const {tags} = state
    return {tags:tags}
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        handleItemSubmit(item) {
            dispatch(setFilters(item));
        }
    }
};
