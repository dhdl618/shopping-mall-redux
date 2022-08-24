// 미들웨어 함수를 만드는 곳


// 제품 가져오는 함수
function getProducts(searchQuery) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/dhdl618/shopping-mall-react/products?q=${searchQuery}`
        let response = await fetch(url)
        let data = await response.json()
        
        dispatch({type: "GET_PRODUCT_SUCCESS", payload: {data}})
    }
}

function getDetailProduct(id) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/dhdl618/shopping-mall-react/products/${id}`
        let response = await fetch(url)
        let data = await response.json()

        dispatch({type: "GET_DETAIL_PRODUCT_SUCCESS", payload: {data}})
    }
}

export const productAction = {getProducts, getDetailProduct}