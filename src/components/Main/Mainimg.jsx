import React from 'react';
import image from '../../assets/Mainimg.png';
import './Mainimg.css'; // Import the CSS file for styling

const Mainimg = () => {
  return (
    <section className="mainimg-container"> {/* Add a container around the image */}
      <div>
        <img className='mainimg' src={image} alt="" />
      </div>
    </section>
  )
}

export default Mainimg