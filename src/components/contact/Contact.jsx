import React, {useRef} from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaWhatsapp} from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();


  const sendMail = (e)=>{
    e.preventDefault();


    emailjs.sendForm('service_h5uocro', 'template_52b2p45', form.current,'7REil9D_o9tY8Lved').then((result)=>{
      console.log(result.text);
    }, (error)=>{
      console.log(error.text);
    });


    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

<div className="container contact_container">

  <div className="contact_options">
    <article className='contact_option'>
      <HiOutlineMail className='contact_icon'/>
      <h4>Email</h4>
      <h5>agadap46@gmail.com</h5>
       <a href="mailto:agadap46@gmail.com">Send Mail</a>
    </article>


    <article className='contact_option'>
      <HiOutlineMail className='contact_icon'/>
      <h4>Email</h4>
      <h5>agadatech.solutions@gmail.com</h5>
       <a href="mailto:agadatech.solutions@gmail.com">Send Mail</a>
    </article>


    <article className='contact_option'>
      <FaWhatsapp className='contact_icon'/>
      <h4>Whatsapp</h4>
      <h5>+233201953361</h5>
       <a href="https://wa.me/233201953361" target='_blank'>Send Message</a>
    </article>


  </div>

  <form ref={form} onSubmit={sendMail}>
    <input type="text" name='name' placeholder='Full Name' required />
    <input type="email" name='email' placeholder='Enter Email' required />
    <textarea name="message"  rows="7" required placeholder='Message'></textarea>
    <button type='submit' className='btn btn-primary'>Send Message</button>
  </form>

</div>

    </section>
  )
}

export default Contact