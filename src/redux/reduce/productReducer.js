let initialState = {
    product: [],
    detailProduct: null
}

function productReducer(state=initialState, action) {
    let {type, payload} = action

    switch (type) {
        case "GET_PRODUCT_SUCCESS":
            return {...state, product: payload.data}
        case "GET_DETAIL_PRODUCT_SUCCESS":
            return {...state, detailProduct: payload.data}
        default: 
            return {...state}
    }
}

export default productReducer