import { call, put, all, takeLatest } from 'redux-saga/effects';
import { GET_COMMENTS, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILED} from "./actionTypes";

function* getComments(action) {  
    try {
      
      let data = yield fetch(`http://localhost:3001/api/comments/${action.payload}`)
        .then((response)=>{
          return response.json()
        })

      console.log('get com',action ,data)
      yield put({
        type: GET_COMMENTS_SUCCESS,
        payload: data
      });
      
    } catch (err) {
      yield put({
        type: GET_COMMENTS_FAILED,
        payload: err.message
      });
    }
  }

export default function* getCommentsSaga() {
    yield all([
      takeLatest(GET_COMMENTS, getComments)
    ])
  }