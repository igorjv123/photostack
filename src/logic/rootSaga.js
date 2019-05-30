import { all, fork } from "redux-saga/effects";
import getImagesSaga from "logic/cardContainer/saga"
import addPhotoSaga from 'logic/addPhoto/saga'
import getCommentsSaga from 'logic/commentsBar/saga'
import addCommentSaga from 'logic/addComment/saga'
import setMarkSaga from 'logic/openedPhotoContainer/saga'
export default function* rootSaga() {
    yield all([
        fork(getImagesSaga),
        fork(addPhotoSaga),
        fork(getCommentsSaga),
        fork(addCommentSaga),
        fork(setMarkSaga),
    ])
}