import { setMark, getMark, deletePhoto  } from 'logic/openedPhotoContainer/actions'

export function mapStateToProps(state, ownProps) {
    const { mark } = state;
    return { mark: mark };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        handleMarkChange(imageId) {
            dispatch(setMark(imageId));
        },
        getMarkInfo(data){
            dispatch(getMark(data))
        },
        deletePhotoSubmit(id){
            dispatch(deletePhoto(id))
        }
    }
};
