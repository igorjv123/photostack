import {getImages} from 'logic/cardContainer/actions'

export function mapStateToProps(state, ownProps) {
    const { images, filter, searchQuery, deletePhoto } = state;
    return {images: images, filters:filter, search:searchQuery, deletePhoto:deletePhoto};
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        getImagesSubmit(data) {
            dispatch(getImages(data));
        }
    }
};
