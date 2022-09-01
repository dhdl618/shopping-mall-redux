import { createSlice } from '@reduxjs/toolkit'   // 리덕스 툴킷

let initialState = {
    product: [],
    detailProduct: null
}

// function productReducer(state=initialState, action) {
//     let {type, payload} = action

//     switch (type) {
//         case "GET_PRODUCT_SUCCESS":
//             return {...state, product: payload.data}
//         case "GET_DETAIL_PRODUCT_SUCCESS":
//             return {...state, detailProduct: payload.data}
//         default: 
//             return {...state}
//     }
// }

// export default productReducer


const productSlice = createSlice({
    name: "product",         // 반드시 3개의 필드를 적어야 함
    initialState,
    reducers: {
        getAllProducts(state, action) {    // 2개의 매개변수를 받음
            state.product = action.payload.data // return, ...state 생략
        },
        
        getDetailProduct(state, action) {
            state.detailProduct = action.payload.data
        }
    }
})

export default productSlice.reducer
export const productActions = productSlice.actions