// 로그인 미들웨어 함수
import {authActions} from '../reduce/authReducer'

function login(id, password, auth) {
    console.log("미들웨어", id, password, auth)
    return (dispatch, getState) => {

        // dispatch({type: 'LOGIN', payload: {id, password, auth}});

        dispatch(authActions.Login(id,password,auth));
    }
}

function logout(auth) {
    return (dispatch, getState) => {

        // dispatch({type: 'LOGOUT', payload: {auth}});

        dispatch(authActions.Logout(auth));
    }
}

export const authAction = {login, logout}