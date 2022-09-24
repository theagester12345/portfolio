import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="socials">
        <a href="https://www.linkedin.com/in/peter-adoyi-agada-771346187" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/theagester12345" target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials