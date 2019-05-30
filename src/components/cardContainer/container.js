import {getImages} from 'logic/cardContainer/actions'

export function mapStateToProps(state, ownProps) {
    const { images, filter, searchQuery } = state;
    return {images: images, filters:filter, search:searchQuery};
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        getImagesSubmit(data) {
            dispatch(getImages(data));
        }
    }
};
