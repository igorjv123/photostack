import { call, put, all, takeLatest } from 'redux-saga/effects';
import { ADD_COMMENT, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILED} from "./actionTypes";

function* addComment(action) {  
    try {
       yield fetch('http://localhost:3001/api/comments',{
        headers:{
          "Content-Type" : "application/json"
        },
        method: 'post',
        body: JSON.stringify(action.payload)
        }).then(res => {
            return res.json();
        })
        const data = yield fetch(`http://localhost:3001/api/comments/${action.payload.imageId}`)
        .then(res => {
              return res.json();
        })

      yield put({
        type: ADD_COMMENT_SUCCESS,
        payload: data
      });
      
    } catch (err) {
      yield put({
        type: ADD_COMMENT_FAILED,
        payload: err.message
      });
    }
  }

export default function* addCommentSaga() {
    yield all([
      takeLatest(ADD_COMMENT, addComment)
    ])
  }