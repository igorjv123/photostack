import { addComment } from 'logic/addComment/actions'

export function mapStateToProps(state){
    return {}
}
export function mapDispatchToProps(dispatch, ownProps) {
    return {
        addCommentSumbit(comment) {
            dispatch(addComment(comment));
        }
    }
};
