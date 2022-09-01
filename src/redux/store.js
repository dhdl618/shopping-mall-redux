import { configureStore } from "@reduxjs/toolkit";   // createStore 안 씀

// 이 4줄을 configureStore 하나로 대체 가능
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";   // 미들웨어 셋팅
import rootReducer from "./reduce"
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './reduce/authReducer'
import productReducer from './reduce/productReducer'

// rootReducer은 combinedReducer이다.
// thunk 사용, DevTools 사용해야 했다.

// configureStore은 combinedReducer, thunk, Devtools 자동으로 들어가 있음

// let store = createStore(rootReducer, 
//     composeWithDevTools(applyMiddleware(thunk))  // 미들웨어 추가
//     )   

const store = configureStore({
        reducer: {
            auth: authReducer,
            product: productReducer
        }
    })

export default store

/** 
 * thunk 란? 
 *  
 *  리덕스 미들웨어 라이브러리 중 하나, (redux-saga도 있음)
 *  
 *  1. 사용법: applyMiddleware 함수를 import 하여 인자로 thunk를 추가
 *  2. 사용하는 이유?: redux는 동기적인 실행만 가능하지만 thunk를 통해
 *                    비동기 실행이 가능해진다.
 *  */ 

/** 
 * Devtools 이란?
 *  
 *  리덕스 개발자 도구 이용 (dispatch의 상태 정보 실시간 제공 등)
*/

/** 
 *  applyMiddleware 란?
 *   
 */

/** 
 *  configureStore 이란?
 *  
 *  createStore 함수를 추상화한 것, 리덕스의 번거러운 기본 설정 과정을
 *  자동화 해주는 툴킷
 */