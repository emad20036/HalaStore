import React from 'react'
import Navbar from "..//Nav/Navbar"
import Footer from '../Foot/Footer'
import './Contact.css'

const Contact = (cartItems) => {
  return (
    <div>
    <Navbar cartItems={cartItems}/>
      <div className="About-title">
        <h3>For More Info</h3>
        <h1>Contact Us</h1>
      </div>
      <div className="huge">
        <div className="about-text conta">
          <div className='contact-container'>
            <div className='cont'>
                <div className='kkk'>
                    <h2>In Person</h2>
                    <p>We are located in :</p>
                    <p>403-59 Glenforest Dr. <br/> Halifax, NS, B3M3M5</p>
                    <p>Our Operatin Hours are :</p>
                    <p>Monday - Friday <br/> From 9:00 AM to 10:00 PM</p>
                    <p><em>We Cannot Wait To See You</em></p>

                </div>
                <div className='kkk'>
                    <h2 className='headu'>Online Customer service</h2>
                    <p>Tel: <br/> 1-800-000-0000</p>
                    <p>Email<br/>Halabookstore@info.com</p>

                    

                </div>



            </div>
            <div className='contrac'>
                
                <input className='non' type="text" placeholder='Email'/>
                <input className='non' type="text" placeholder='Name'/>

            </div>
            <textarea name="" id="textar" cols="30" rows="10" placeholder='Type Your Message Here'></textarea>
            <div className="bttn"><button className='subtn'>Submit</button></div>
            



          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact