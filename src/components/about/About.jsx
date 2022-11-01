import React from 'react'
import './About.css'
import PIC from  '../../assets/profile_img.png'
import {FaAward} from 'react-icons/fa'
import {SiGooglemybusiness} from 'react-icons/si'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
  return (
  <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">

      <div className="about__pic">

        <div className="about__pic-image">

          <img src={PIC} alt="Profile Picture"/>
        </div>

      </div>

      <div className="about__contents">
        <div className="about__cards">
          {/* Experiecne Card */}
          <article className='about__card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>5+ Years Working</small>

          </article>

          {/* Client Card */}
          <article className='about__card'>
            <SiGooglemybusiness className='about_icon'/>
            <h5>Clients</h5>
            <small>5 World Wide</small>

          </article>

          {/*Projects Card */}
          <article className='about__card'>
            <VscFolderActive className='about_icon'/>
            <h5>Projects</h5>
            <small>10 Projects Completed</small>

          </article>
        </div>


        <p>
        I am a solutions-oriented software engineer with 6+ years of experience in full stack development with a specialty in java applications including 3+ years’ experience with Firebase and Google cloud platforms. 
        </p>


        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>

    </div>
  </section>
  )
}

export default About