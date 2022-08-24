import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {authAction} from '../redux/actions/authAction'

const LoginPage = () => {
  const auth = useSelector(state=>state.auth.auth)
  const nav = useNavigate()
  const dispatch = useDispatch()
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

  const loginUser = (event) => {
    // 클릭시, 리프레쉬를 막는 이벤트 (form은 리프레쉬를 한다.)
    event.preventDefault()
    console.log("login", auth)
    
    dispatch(authAction.login(id, password, auth))  // 미들웨어로 로그인 요청

    nav('/')
  }
  return (
    <div>
      <div className='login-container'>
        <div className='login-sec-container'>
          <div className='login-info'>
            <input className='login-input' placeholder='ID' onChange={(e)=>{setId(e.target.value)}}></input>
          </div>
          <div className='login-info'>
            <input className='login-input' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}></input>
          </div>
          <form onSubmit={(event)=>loginUser(event)}>
            <button className='do-login' type='submit'>로그인</button>
          </form>
        </div>
      </div>
      <div className='login-footer'>
        <p className='footer-func'>회원 가입</p>
        <p className='footer-func func2'>아이디 찾기</p>
        <p className='footer-func'>비밀번호 찾기</p>
      </div>
    </div>
  )
}

export default LoginPage
