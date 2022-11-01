import React from 'react'
import './Footer.css'
import {TbBrandTwitter} from 'react-icons/tb'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'



const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer_logo'>AGADA</a>

    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>


    <div className="footer_socials">
      <a href="https://web.facebook.com/peter.adoyiagada/" target='_blank'><FaFacebookF/></a>
      <a href="https://www.instagram.com/theagester1/" target='_blank'><BsInstagram/></a>
      <a href="https://twitter.com/adoyiagada" target='_blank'><TbBrandTwitter/></a>
    </div>


    <div className="copy_right">
      <small>&copy; Peter Agada. All rights reserved </small>
    </div>
   </footer>
  )
}

export default Footer