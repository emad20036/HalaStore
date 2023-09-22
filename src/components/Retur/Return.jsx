import React from 'react'
import Navbar from "..//Nav/Navbar"
import Footer from '../Foot/Footer'
import './Return.css'

const Return = (cartItems) => {
  return (
    <div>
      <Navbar cartItems={cartItems}/>
      <div className="About-title">
        <h3>HALA</h3>
        <h1>Shipping & Returns</h1>
      </div>
      <div className='return'>
        <div className="ret">
        <h2>Shipping & Returns</h2>
          <h3>Shipping Policy</h3>
          <p>
            Welcome to HALA, your trusted source for books. We're committed to
            providing you with a seamless shopping experience.
            <br /> Here's what you need to know about our shipping policy:
          </p>

          <h3>Shipping Methods</h3>
          <p>
            We offer various shipping methods to cater to your needs. Whether
            you prefer standard shipping, express delivery, <br />
            or international shipping, we've got you covered. Rest assured,
            <br /> we'll get your books to you as quickly and securely as
            possible.
          </p>

          <h3>Packaging</h3>
          <p>
            Your books will be packaged with care to ensure they arrive in
            perfect condition. We use environmentally-friendly <br />
            packaging materials whenever possible to minimize our impact on
            <br /> the planet.
          </p>

          <h3>Shipping Costs</h3>
          <p>
            Our shipping costs are transparent and reasonable. You'll see the
            shipping fee at checkout before finalizing your <br />
            purchase. Keep an eye out for occasional promotions with free
            <br /> shipping!
          </p>

          <h3>Questions</h3>
          <p>
            Questions about our shipping policy? Feel  free to reach out to our<br/>
            customer support team. We're here to help!
          </p>
          <h3>Return & Exchange Policy</h3>
          <p>
            At HALA, your satisfaction is our priority. We understand that
            sometimes you may change your mind about a purchase
            <br /> or encounter issues with a product. Here's our
            straightforward return & exchange policy:
          </p>

          <h3>Returns</h3>
          <p>
            If you're not completely satisfied with your purchase, you can
            return it within 30 days of receiving your order.
            <br /> The item must be in its original condition, and you'll
            receive a full refund.
          </p>

          <h3>Exchanges</h3>
          <p>
            Received the wrong book or changed your mind about your selection?
            No problem! Contact us, and we'll arrange an
            <br /> exchange for you. We want you to have the perfect book for
            your reading journey.
          </p>

          <h3>Our Commitment</h3>
          <p>
            We're dedicated to providing you with the best books and service. If
            you have any concerns or questions <br />
            about our policies, please don't hesitate to contact us. Your trust
            and
            <br /> confidence in HALA mean the world to us.
          </p>
          <p>Thank you for choosing HALA for your reading adventures!</p>



        </div>



      </div>

      <Footer />
    </div>
  );
}

export default Return