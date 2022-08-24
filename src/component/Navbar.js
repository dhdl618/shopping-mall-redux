import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authAction } from '../redux/actions/authAction'

const Navbar = () => {
    const menuList = ['Man','Woman','Kids','Unisex','Sale','Acc']
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let auth = useSelector(state=> state.auth.auth)
    
    const goLogin = () => {
      if(auth === false) {
        navigate('/login')
      } else if(auth === true) {
        
        dispatch(authAction.logout(auth))  // 미들웨어로 로그아웃 요청
        console.log("로그인버튼 클릭", auth)
      }
    }

    const goHome = () => {
      navigate('/')
    }

    const search = (e) => {
      if(e.key === "Enter") {
        let keyword = e.target.value
        
        navigate(`/?q=${keyword}`)   //url 바꾸는 코드
      }
    }

  return (
    <div>
      <div>
        <div className="login-area"  onClick={goLogin}>
            <FontAwesomeIcon className='icon' icon={faUser}/>
            <button className='login-btn'>{auth === true ? "Logout" : "Login" }</button>
        </div>
      </div>
      <div className='logo-area'>
        <img className='logo' onClick={goHome} width="200px" src='https://cdn.logo.com/hotlink-ok/logo-social.png'></img>
      </div>
      <div className='menu-container'>
        <ul className='menu'>
            {menuList.map((item)=>(
                <li>{item}</li>
            ))}
        </ul>
        <div className='search-container'>
            <FontAwesomeIcon icon={faSearch} />
            <input onKeyPress={(e)=>search(e)} className='input' placeholder='Search Product'></input>
        </div>
      </div>
    </div>
  )
}

export default Navbar
