import React, { useContext, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css';
import ShoppingCart from '../Shoppingcart/Shopping';
import { CSSTransition } from 'react-transition-group';
import { CartContext } from '../../CartContext';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [see, setSee] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const showCart = () => {
    setSee(!see);
  };

  const toggleNavLinks = () => {
    setShowLinks(!showLinks);
  };

  const availableItemCount = cartItems.length;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navvv">
      <div className="d-flex align-items-center">
        <div className="logo navbar-brand">
          <Link className="nav-link" to="/">
            <div className="ol">
              <p>HALA.</p>
            </div>
            <div className="lo">
              <p>Store</p>
            </div>
          </Link>
        </div>
        <button className="nav-link ico" onClick={showCart}>
          <ShoppingCartIcon />
          {availableItemCount > 0 && (
            <span className="item-count">{availableItemCount}</span>
          )}
        </button>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/bookstore">
              BookStore
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/#upcoming-events">
              Events
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/about-us">
              About
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/contact-us">
              Contact
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/login">
              Log In
            </Link>
          </li>
        </ul>
      </div>

      <CSSTransition
        in={see}
        timeout={300}
        classNames="slide"
        unmountOnExit
      >
        <div className={`cartvisi shopping-cart`}>
          <ShoppingCart showCart={showCart} />
        </div>
      </CSSTransition>
    </nav>
  );
};

export default Navbar;