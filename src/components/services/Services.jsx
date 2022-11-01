import React from 'react'
import './Services.css'
import { TbChecks} from 'react-icons/tb'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service_container">
       

        {/* Mobile development */}
        <article className='service'>
          <div className="service_head">
            <h3>Mobile Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <TbChecks className='service_icon'/>
              <p>Full App Creation</p>
            </li>

            <li>
              <TbChecks  className='service_icon'/>
              <p>App Customization</p>
            </li>

            <li>
              <TbChecks  className='service_icon'/>
              <p>Convert Site to App</p>
            </li>


            <li>
              <TbChecks  className='service_icon'/>
              <p>Bug Fix</p>
            </li>


            <li>
              <TbChecks  className='service_icon'/>
              <p>Help/Consultation</p>
            </li>
          </ul>
        </article>


         {/* Web development */}
         <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <TbChecks className='service_icon'/>
              <p>Web Portal Development</p>
            </li>

            <li>
              <TbChecks className='service_icon'/>
              <p>Website / Web App Development</p>
            </li>

            <li>
              <TbChecks className='service_icon'/>
              <p>Ecommerce Site Development</p>
            </li>


            <li>
              <TbChecks className='service_icon'/>
              <p>Application Programming Interface Development </p>
            </li>


            <li>
              <TbChecks className='service_icon'/>
              <p>Help/Consultation</p>
            </li>
          </ul>
        </article>



         
      </div>
    </section>
  )
}

export default services