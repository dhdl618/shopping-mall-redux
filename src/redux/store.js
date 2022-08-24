import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";   // 미들웨어 셋팅
import rootReducer from "./reduce"
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))   // 미들웨어 추가

export default store