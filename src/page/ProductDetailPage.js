import React from 'react'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Container, Row, Col, Dropdown} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {productAction} from '../redux/actions/productAction'


const ProductDetailPage = () => {
  const dispatch = useDispatch()
  const product = useSelector(state=>state.product.detailProduct)
  let {id} = useParams()

  const getProductDetail = async () => {
    dispatch(productAction.getDetailProduct(id))
  }

  useEffect(() => {
    getProductDetail()
  },[])

  return (
    <Container className='product-detail-container'>
      <Row>
        <Col className='product-img'><img src={product?.img} /></Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div className='product-choice'>{product?.choice === true ? "Concious choice" : ""}</div>
          <div className='product-new'>{product?.new === true ? "신제품" : ""}</div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant='secondary' id="dropdown">사이즈</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>S</Dropdown.Item>
                <Dropdown.Item>M</Dropdown.Item>
                <Dropdown.Item>L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <button className='add-item-btn'>추가</button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetailPage
