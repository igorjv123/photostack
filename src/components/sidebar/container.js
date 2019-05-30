import { changeFilter } from '../../logic/sidebar/actions';

export function mapStateToProps(state, ownProps) {
    const { images, tags, filter } = state;
    return {images: images, tags:tags, filter};
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        handleChangeFilter(filter) {
            dispatch(changeFilter(filter));
        }
        }
    };
