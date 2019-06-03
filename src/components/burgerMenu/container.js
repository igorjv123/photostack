import { setFilters } from 'logic/dropDown/actions'
import { changeFilter } from '../../logic/sidebar/actions';


export function mapStateToProps(state, ownProps) {
    const {tags, radio} = state
    console.log(radio)
    return {tags:tags, radio:radio}
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        handleItemSubmit(item) {
            dispatch(setFilters(item));
        },
        handleChangeFilter(filter) {
            dispatch(changeFilter(filter));
        }
    }
};
