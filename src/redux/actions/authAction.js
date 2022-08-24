// 로그인 미들웨어 함수
function login(id, password, auth) {
    console.log("미들웨어", id, password, auth)
    return (dispatch, getState) => {
        dispatch({type: 'LOGIN', payload: {id, password, auth}});
    }
}

function logout(auth) {
    return (dispatch, getState) => {
        dispatch({type: 'LOGOUT', payload: {auth}});
    }
}

export const authAction = {login, logout}