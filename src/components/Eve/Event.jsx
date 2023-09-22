import React from 'react'
import './Event.css'

const Event = (eve) => {


  return (
    <section id='upcoming-events'>
    <div>
      {" "}
      <div className="det">
        <p>Coming Up</p>
        <h1>BOOK LAUNCH</h1>
      </div>
      <div className="contain">
        <div className="event-info">
          <h4>Introducing {eve.title}</h4>
          <p>By {eve.author}</p>
          <p>When</p> <hr />
          <p>{eve.date}</p>
          <p>Where</p>
          <hr />
          <p>{eve.place}</p>
          <button className='Now'>RSVP NOW</button>
        </div>
        <div className="event-img">
          <img className="bookimg" src={eve.img} alt="" />
        </div>
      </div>
    </div></section>
  );
}

export default Event