// CartPage.js
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import Navbar from "..//Nav/Navbar"
import Footer from '../Foot/Footer'
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import LockIcon from '@mui/icons-material/Lock';
import { CartContext } from '../../CartContext';



const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext); // Use useContext to access cartItems and removeFromCart

  const subtotal = cartItems.reduce((total, item) => {
    // Remove the "$" sign and convert the price to a floating-point number
    const priceWithoutDollarSign = parseFloat(item.price);
    return total + priceWithoutDollarSign * item.quantity;
  }, 0);





  return (
    <>
        <Navbar />
    <div className="cart-page">
      
      <div>
        <h2>My Cart</h2>
      
        {cartItems.map((item) => (
          <div className="cartcontent" key={item.id}>

            <div className="one"><div><img className='carimg'  src={item.img} alt="" /></div>
            <div><h3>{item.title}</h3>
            
            <p>${item.price}</p></div>
            </div>
            <div className="twoo">
            <div className="quantity-control border">
                    <button
                     
                    >
                      <RemoveCircleOutlineIcon />
                    </button>
                    <button>
                      <ControlPointIcon />
                    </button>
                  </div>
              
              <button onClick={() => removeFromCart(item.title)}>Remove</button></div>
            
          </div>
        ))}
      </div>
      <div className="total">
        <h2>Order Summary</h2>
        <hr/>
        <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
        <h4>Tax 15%: ${(subtotal*15/100).toFixed(2)}</h4>
        <h4>Estimate Delivery: Unavailable</h4>
        <hr/>
        <h2>Total : {(subtotal+subtotal*15/100).toFixed(2)}$</h2>
        <button className='checkout'>Checkout</button>
        <p><LockIcon style={{height:13}}/>Secure Checkout</p>

      </div>
    </div>
    <Footer />
    
    </>
  );
};

export default CartPage;
