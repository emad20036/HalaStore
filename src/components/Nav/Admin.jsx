import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css'
import { useState } from 'react';
import ShoppingCart from '../Shoppingcart/Shopping';
import { CSSTransition } from 'react-transition-group';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useParams } from 'react-router-dom';
import { useEffect} from 'react';
import axios from 'axios';




const Admin = ({ cartItems, removeFromCart, itemQuantities, updateQuantity, itemQuantitiesState}) => {

  const [userName, setUserName] = useState('');

  const { id } = useParams();

useEffect(() => {
  // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint.
  fetch(`http://localhost:3000/api/users/${id}`)
    .then((response) => response.json())
    .then((data) => {
      // Assuming the API response contains a 'fname' field.
      setUserName(data.firstName);
    })
    .catch((error) => {
      console.error('Error fetching user data:', error);
    });
}, [id]);



  const [see, setSee] = useState(false);

  const showCart = () => {
    setSee(!see);
  };




  const availableItemCount = cartItems.length;




  return (
    <nav>
      <div className="logo">
        <div className="ol">
          <p>HALA.</p>
        </div>
        <div className="lo">
          <p>Store</p>
        </div>
      </div>
      <div className="Second">
        <a className="nav-link" href="/">
          Home
        </a>
        <a className="nav-link" href="/bookstore">
          BookStore
        </a>
        <a className="nav-link" href="/#upcoming-events">
          Events
        </a>
        <a className="nav-link" href="about-us">
          About
        </a>
        <a className="nav-link" href="/contact-us">
          Contact
        </a>
        <a className="nav-link" href="/profile">
            <PersonOutlineIcon/>
            {userName}
        </a>
        <div>
          <div className="cartit">
            <button className="nav-link ico" onClick={showCart}>
              <ShoppingCartIcon />
              {availableItemCount > 0 && (
                <span className="item-count">{availableItemCount}</span>
              )}
            </button>
            <CSSTransition
              in={see}
              timeout={300}
              classNames="slide"
              unmountOnExit
            >
              <div className={`cartvisi shopping-cart`}>
                <ShoppingCart
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                  itemQuantities={itemQuantities}
                  updateQuantity={updateQuantity} 
                  itemQuantitiesState={itemQuantitiesState}
                  showCart={showCart}
                />
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Admin