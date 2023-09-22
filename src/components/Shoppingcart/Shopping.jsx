// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import "./Shopping.css";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { CartContext } from "../../CartContext";


// eslint-disable-next-line react/prop-types
const ShoppingCart = ({showCart}) => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const subtotal = cartItems.reduce((total, item) => {
    // Remove the "$" sign and convert the price to a floating-point number
    const priceWithoutDollarSign = parseFloat(item.price);
    return total + priceWithoutDollarSign * item.quantity;
  }, 0);

const [qu, setQu]= useState(0)
  const increaseQuan = (item) => {
    // Find the index of the item in cartItems
    const itemIndex = cartItems.find((cartItem) => cartItem.id === item);
    qu
    const updateitemIndex = itemIndex.quantity++
 
    return setQu(updateitemIndex)
   
  };

  const decreaseQuan = (item) => {
    // Find the index of the item in cartItems
    const itemIn = cartItems.find((cartItem) => cartItem.id === item);
if (itemIn.quantity >= 1) {
    const upt = itemIn.quantity--;


    return setQu(upt)}


  }


  


  return (
    <>
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <button className="close" onClick={showCart}>
          <ArrowForwardIosIcon />
        </button>
        <div>
          {cartItems &&
            cartItems.length > 0 &&
            cartItems.map((item, index) => (
              <div className="cart-content" key={index}>
                <div className="cartimg">
                  <img className="cart-im" src={item.img} alt="" />
                </div>
                <div className="cartinfo">
                  <h4>{item.title}</h4>
                  <h5>$ {item.price}</h5>
                  <div className="quantity-control">
                    <button onClick={()=>  decreaseQuan(item.id) } disabled={item.quantity === 1}>
                      <RemoveCircleOutlineIcon />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={()=>  increaseQuan(item.id)}>
                      <ControlPointIcon />
                    </button>
                  </div>
                </div>
                <div className="cartbtn">
                  <button onClick={() => removeFromCart(item.title)}>
                    {" "}
                    <HighlightOffOutlinedIcon />
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className="price">
          <h3>Subtotal</h3>
          <h3>$ {subtotal.toFixed(2)}</h3>
        </div>
        <div className="viewcart">
          <Link to="/my-cart" className="bttnn">
            View Cart
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
