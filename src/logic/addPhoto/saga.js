import { call, put, all, takeLatest } from 'redux-saga/effects';
import { ADD_PHOTO, ADD_PHOTO_SUCCESS, ADD_PHOTO_FAILED} from "./actionTypes";
function* AddNewPhoto(action) {
    try {
        yield fetch('http://localhost:3001/api/images',{
            headers:{
              "Content-Type" : "application/json"
            },
            method: 'post',
            body: JSON.stringify(action.payload)
        }).then(res => {
            return res.json();
        })
      
      yield put({
        type: ADD_PHOTO_SUCCESS,
      });
    } catch (err) {
      console.log(err)
      yield put({
        type: ADD_PHOTO_FAILED,
        payload: err.message
      });
    }
  }

export default function* addPhotoSaga() {
    yield all([
      takeLatest(ADD_PHOTO, AddNewPhoto)
    ])
  }