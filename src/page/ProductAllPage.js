import React from 'react'
import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../component/ProductCard'
import {useSearchParams} from 'react-router-dom'
import {productAction} from '../redux/actions/productAction'
import { useDispatch,useSelector} from 'react-redux'

const ProductAllPage = () => {
  const product = useSelector(state=>state.product.product)
  const [query, setQuery] = useSearchParams()
  const dispatch = useDispatch()

  const getProducts = () => {   // 미들웨어를 불러야 함
    let searchQuery = query.get('q') || "" // q로 시작하는 쿼리 가져온다는 의미
    dispatch(productAction.getProducts(searchQuery))
  }

  useEffect(()=> {
    getProducts()
  },[query])

  return (
    <div>
      <Container>
        <Row>
          {product?.map((menu)=>(
          <Col lg={3}>
            <ProductCard item={menu}/>
          </Col>))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAllPage
