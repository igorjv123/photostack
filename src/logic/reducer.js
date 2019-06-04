import { combineReducers } from 'redux'
import loginReducer from './login/reducer'
import registrationReducer from './registration/reducer'
import cardContainerReducer from './cardContainer/reducer';
import filterReducer from './sidebar/reducer'
import commentsReducer from './commentsBar/reducer'
import searchBarReducer from './searchBar/reducer'
import {getMarkReducer,deletePhotoReducer} from './openedPhotoContainer/reducer';
import defaultTagsReducer from './defaultTags'
const reducer = combineReducers({
    login:loginReducer,
    registration:registrationReducer,
    images: cardContainerReducer,
    filter: filterReducer,
    comments: commentsReducer,
    searchQuery: searchBarReducer,
    mark: getMarkReducer,
    tags:defaultTagsReducer,
    deletePhoto: deletePhotoReducer,
    // newComment: addCommentReducer,
    // images: addPhotoReducer
})
export default reducer;
