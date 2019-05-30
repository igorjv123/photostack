import { call, put, all, takeLatest } from 'redux-saga/effects';
import { GET_IMAGES, GET_IMAGES_SUCCESS, GET_IMAGES_FAILED} from "./actionTypes";

function* getImages(action) {  
    try {
      let {page, amount} = action.payload
      let data = yield fetch(`http://localhost:3001/api/images/filters?page=${page}&amount=${amount}`,{
        headers: { "Content-Type" : "application/json" },
        method:'post',
        body: JSON.stringify({
          filters: (action.payload.filters),
          search: (action.payload.search)
        })
        
      })
        .then((response)=>{
          return response.json()
        })

      yield put({
        type: GET_IMAGES_SUCCESS,
        payload: data
      });
      
    } catch (err) {
      yield put({
        type: GET_IMAGES_FAILED,
        payload: err.message
      });
    }
  }

export default function* getImagesSaga() {
    yield all([
      takeLatest(GET_IMAGES, getImages)
    ])
  }