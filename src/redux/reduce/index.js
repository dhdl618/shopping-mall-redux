// 리듀서들을 합치는 파일

import { combineReducers } from 'redux'
import authReducer from './authReducer'
import productReducer from './productReducer'


export default combineReducers({
    auth: authReducer,
    product: productReducer
})