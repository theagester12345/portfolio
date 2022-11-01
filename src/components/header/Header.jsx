import React from 'react'
import './Header.css'
import ActionButtons from './ActionButtons'
import ProfilePic from '../../assets/profile_img.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   <header>
     <div className="container header__container">
      <h5>Hi, I'am</h5>
      <h1>Peter Agada</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <ActionButtons/>


      <HeaderSocials/>

      <div className="profile__pic">
        <img src={ProfilePic}  alt="ProfilePic" />
      </div>


      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header