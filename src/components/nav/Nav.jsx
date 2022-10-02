import React from 'react'
import './Nav.css'
import {BiHomeCircle} from 'react-icons/bi'
import {HiOutlineInformationCircle} from 'react-icons/hi'
import {AiOutlineHistory} from 'react-icons/ai'
import {MdOutlineElectricalServices} from 'react-icons/md'
import {AiOutlineContacts} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  //Checking which nav is clicked 
  const [active,setActive ] = useState('home'); 

  return (
   <nav>
    <a href="#" onClick={()=> setActive('home')} className={active === 'home' ? 'active':''}><BiHomeCircle/></a>
    <a href="#about" onClick={()=> setActive('about')} className={active === 'about' ? 'active':''}><HiOutlineInformationCircle/></a>
    <a href="#experience" onClick={()=> setActive('experience')} className={active === 'experience' ? 'active':''}><AiOutlineHistory/></a>
    <a href="#services"  onClick={()=> setActive('services')} className={active === 'services' ? 'active':''}><MdOutlineElectricalServices/></a>
    <a href="#contact"  onClick={()=> setActive('contact')} className={active === 'contact' ? 'active':''}><AiOutlineContacts/></a>
   </nav>
  )
}

export default Nav