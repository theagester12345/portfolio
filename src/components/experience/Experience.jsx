import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>My Experience</h2>


      <div className="container container_experience">
        <div className="container_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_detail'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>

            </article>

            <article className='experience_detail'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>


            <article className='experience_detail'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>SASS</h4>
              <small className='text-light'>Intermediate</small>
              </div>  
            </article>



            <article className='experience_detail'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
           

            </article>


            <article className='experience_detail'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>BootStrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
              
            </article>


            <article className='experience_detail'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>


            <article className='experience_detail'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>Vue JS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_detail'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>Angular</h4>
              <small className='text-light'>Beginner</small>
              </div> 
            </article>
          </div>

        </div>
        <div className="container_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
          <article className='experience_detail'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
              </div>
            
            </article>



            <article className='experience_detail'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              
            </article>


            <article className='experience_detail'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>


            <article className='experience_detail'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>


            <article className='experience_detail'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>


            <article className='experience_detail'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>


            <article className='experience_detail'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>Postgress</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_detail'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>FireStore</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience