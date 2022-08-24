let initialState = {
    id:"",
    password: "",
    auth: false
}

function authReducer(state=initialState ,action) {
    let {type, payload} = action

    switch (type) {
        case "LOGIN":
            return {...state, 
                id: payload.id, 
                password: payload.password, 
                auth: true}

        case "LOGOUT":
            return {...state,
                id: state.id,
                password: state.password, 
                auth: false}

        default: 
            return {...state}
    }
}

export default authReducer