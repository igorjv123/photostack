import { call, put, all, takeLatest } from 'redux-saga/effects';
import { SET_MARK, 
        GET_MARK_SUCCESS, GET_MARK_FAILED, GET_MARK, 
        DELETE_PHOTO, DELETE_PHOTO_SUCCESS,  DELETE_PHOTO_FAILED  } 
      from "./actionTypes";

function* setMark(action) {  
    try {
    let data = yield fetch(`http://localhost:3001/api/marks/by`, {
        headers: {
          "Content-Type": "application/json"
        },
        method:'post',
        body:JSON.stringify(action.payload)
      })
      
      let newMark = yield fetch(`http://localhost:3001/api/marks/image/${action.payload.imageId}`)
          .then((response)=>{
          return response.json()
        })
      console.log(newMark)
      yield put({
        type: GET_MARK_SUCCESS,
        payload: newMark
      });
      
    } catch (err) {
      console.log(err)
      yield put({
        
        type: GET_MARK_FAILED
      });
    }
  }

  function* getMark(action) {  
    try {
      let newMark = yield fetch(`http://localhost:3001/api/marks/image/${action.payload}`)
          .then((response)=>{
          return response.json()
        })
      yield put({
        type: GET_MARK_SUCCESS,
        payload: newMark
      });
      
    } catch (err) {
      console.log(err)
      yield put({
        
        type: GET_MARK_FAILED
      });
    }
  }
  function* deletePhoto(action) {  
    try {
      let res = yield fetch(`http://localhost:3001/api/images/${action.payload}`,{
        method:'delete'
      })
      console.log(res)
      yield put({
        type: DELETE_PHOTO_SUCCESS,
        payload: res
      });
      
    } catch (err) {
      console.log(err)
      yield put({
        
        type: DELETE_PHOTO_FAILED
      });
    }
  }

export default function* setMarkSaga() {
    yield all([
      takeLatest(SET_MARK, setMark),
      takeLatest(GET_MARK, getMark),
      takeLatest(DELETE_PHOTO, deletePhoto)

    ])
  }