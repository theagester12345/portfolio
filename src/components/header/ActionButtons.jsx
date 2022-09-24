import React from 'react'
import Resume from '../../assets/Resume.pdf'


const ActionButtons = () => {
  return (
    <div className='actionButtons'>
        <a href={Resume} className='btn' download>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default ActionButtons