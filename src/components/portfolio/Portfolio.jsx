import React from 'react'
import './Portfolio.css'
import GhanaDictionaryIMG from '../../assets/ghana-dictionary.PNG'
import ChatAppIMG from '../../assets/chat-app.PNG'
import ERecruitIMG from '../../assets/e-recruit.PNG'
import Firstline24IMG from '../../assets/firstline24.PNG'
import PatientPortalIMG from '../../assets/patient-portal.PNG'
import LoopIMG from '../../assets/loop.PNG'

//Data Set for Portfolio

const data = [
  {
    id: 1,
    image: GhanaDictionaryIMG,
    title: 'Ghana Dictionary - Translations From English to Twi',
    github: 'https://github.com/theagester12345/Ghana-Dictionary',
    demo:  'https://ghana-dictionary.herokuapp.com/'
  },


  {
    id: 2,
    image: ChatAppIMG,
    title: 'Simple Chat Application - Personal Project',
    github: 'https://github.com/theagester12345/peter-chat-app',
    demo:  'https://peter-chat-app-client.herokuapp.com/'
  }, 

  {
    id: 3,
    image: ERecruitIMG,
    title: 'E-Recruit - Recruitment System ',
    github: 'https://github.com/theagester12345/E-Recruit',
    demo:  'https://e-recruit-ghana.herokuapp.com'
  } ,

  {
    id: 4,
    image: Firstline24IMG,
    title: 'Firstline24 HMS - Hospital Management System ',
    demo:  'https://firstline24.com/',
    github: null
  } , 

  {
    id: 5,
    image: PatientPortalIMG,
    title: 'Firstline24 Patient Portal - Patient Health Management System ',
    demo:  'http://app.firstline24.com:3002/',
    github: null
  } ,


  {
    id: 6,
    image: LoopIMG,
    title: 'Firstline24 LoopRx - Pharmacy e-commerce System ',
    demo:  'https://loop-portal-web-app.herokuapp.com/',
    github: null
  } ,



]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">

        {
          data.map(({id,image,title,github,demo,type})=>{
            return(
              <article key={id} className='portfolio_item'>
              <div className="portfolio_image_container">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item_cta">
                { github!=null ?
                (
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                ):(
                  <a href="#" className='btn' >Private</a>
                )}
              
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
      
              </article>
            )
          })
        }
       


       
      </div>



    </section>
  )
}

export default Portfolio