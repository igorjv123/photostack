import { addPhoto } from '../../logic/addPhoto/actions';

export function mapStateToProps(state) {
    let {tags} = state
    return {tags:tags};
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        addNewPhoto(photo) {
            dispatch(addPhoto(photo));
        }
    }
};
