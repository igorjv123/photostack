import { getComments } from 'logic/commentsBar/actions'

export function mapStateToProps(state, ownProps) {
    const { comments, newComment} = state;
    return { comments: comments , newComment: newComment};
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        loadComments(imageId) {
            dispatch(getComments(imageId));
        }
    }
};
