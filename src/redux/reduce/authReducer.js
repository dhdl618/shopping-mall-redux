import {createSlice} from '@reduxjs/toolkit'

let initialState = {
    id:"",
    password: "",
    auth: false
}

// function authReducer(state=initialState ,action) {
//     let {type, payload} = action

//     switch (type) {
//         case "LOGIN":
//             return {...state, 
//                 id: payload.id, 
//                 password: payload.password, 
//                 auth: true}

//         case "LOGOUT":
//             return {...state,
//                 id: state.id,
//                 password: state.password, 
//                 auth: false}

//         default: 
//             return {...state}
//     }
// }

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        Login(state, action) {
            state.id = action.payload.id
            state.password = action.payload.password
            state.auth = true
        },

        Logout(state, action) {
            state.id = ""
            state.password = ""
            state.auth = false
        }
    }
})

export default authSlice.reducer
export const authActions = authSlice.actions