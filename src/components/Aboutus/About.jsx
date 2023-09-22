// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from "..//Nav/Navbar"
import Footer from '../Foot/Footer'
import './About.css'
import aboutimg from '../../assets/aboutim.jpg'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="About-title">
        <h3>Our</h3>
        <h1>Story</h1>
      </div>
      <div className="huge">
        <div className="about-img">
          <img className="imm" src={aboutimg} alt="" />
        </div>
        <div className="about-text">
          
          <p>
            Welcome to Hala – Your Bookstore Haven!
            <br />
            
            At Hala, we are passionate about books. <br /> Our shelves are stocked with
            an eclectic selection,<br /> from timeless classics to contemporary gems,<br />
            catering to every readers taste.
            <br />
            Our dedicated team is here to help you find your next<br /> literary
            adventure.
            </p>
            <p>
            Hala is more than a store; its a community of <br /> book lovers. Join us
            for author readings, <br />book clubs, and lively discussions.
            <br />
            Were here to kindle your love for reading<br /> and make every visit a
            memorable experience.
            <br />
            Discover the world of books at Hala<br /> – where stories come alive, and
            reading is celebrated.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About