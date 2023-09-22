import React from 'react'
import Navbar from "..//Nav/Navbar"
import Footer from '../Foot/Footer'
import './Return.css'

const StorePlicy = (cartItems) => {
  return (
    <div>
      <Navbar cartItems={cartItems}/>
      <div className="About-title">
        <h3>HALA</h3>
        <h1>Shipping & Returns</h1>
      </div>
      <div className="return">
        <div className="ret">
          <h2>Shipping & Returns</h2>
          <h3>Customer Care</h3>
          <p>
            Welcome to HALA, where customer care is at the heart of our service.
            We're here to provide you with <br/> exceptional support and assistance.
            Whether you have questions about our books, need help with an order, <br/>
            or want to share your feedback, we're just a click away.
          </p>

          <h3>Privacy & Safety</h3>
          <p>
            At HALA, we take your privacy and safety seriously. We want you to
            feel secure while shopping with us. <br/>Here's how we handle your
            personal information and ensure your safety:
          </p>

          <h3>Data Protection</h3>
          <p>
            We use industry-standard practices to protect your personal
            information. Your data is securely <br/> stored and never shared with
            unauthorized parties.
          </p>

          <h3>Payment Security</h3>
          <p>
            We utilize third-party banking services to verify payments, ensuring
            the highest level of payment security <br/>for your transactions.
          </p>

          <h3>Contact After Purchase</h3>
          <p>
            HALA will only contact you after a successful purchase to provide
            essential order-related information. <br/>We respect your privacy and
            won't inundate your inbox with unnecessary messages.
          </p>
          <h3>Payment Methods</h3>
          <ul>
            <li>Credit / Debit Cards</li>
            <li>PAYPAL</li>
            <li>Offline Payments</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default StorePlicy