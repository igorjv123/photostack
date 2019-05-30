import {onSearch} from 'logic/searchBar/actions'

export function mapStateToProps(state, ownProps) {
    const { images, filter } = state;
    return {images: images, filters:filter};
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        onHandleSearch(query) {
            dispatch(onSearch(query));
        }
    }
};
