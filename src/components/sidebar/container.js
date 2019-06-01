import { changeFilter } from '../../logic/sidebar/actions';

export function mapStateToProps(state, ownProps) {
    const { images, tags, filter, searchQuery } = state;
    return {images: images, tags:tags, filter, search:searchQuery};
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        handleChangeFilter(filter) {
            dispatch(changeFilter(filter));
        }
        }
    };
