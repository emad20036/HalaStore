// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from 'react';
import BookStore from './components/Store/BookStore';
import About from './components/Aboutus/About';
import Contact from './components/contactus/Contact';
import Login from './components/log/Login';
import Register from './components/log/Register';
import FAQ from './components/Fasked/FAQ';
import Return from './components/Retur/Return';
import StorePlicy from './components/Retur/StorePlicy';
import CartPage from './components/Shoppingcart/CartPage'



function App() {


  

  return (
    <>
    
    <HashRouter base="/">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Replace the existing route with Gametable */}
          <Route exact path="/" element={<Home  />}/>
          <Route exact path="/bookstore" element={<BookStore />}  />
          <Route exact path="/about-us" element={<About  />}  />
          <Route exact path="/contact-us" element={<Contact />}  />
          <Route exact path="/login" element={<Login />}  />
          <Route exact path="/register" element={<Register />}  />
          <Route exact path="/frequently-asked-questions" element={<FAQ />}  />
          <Route exact path="/shippingpolicy" element={<Return />}  />
          <Route exact path="/storepolicy" element={<StorePlicy />}  />
          <Route exact path="/my-cart" element={<CartPage   />}/>



        </Routes>
      </Suspense>
    </HashRouter>
    
    </>
  )
}

export default App
