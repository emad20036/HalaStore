import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './CartContext'; // Import your CartProvider
import { HashRouter, HashRouter as Router } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <CartProvider>
    <App />
    </CartProvider>
  </HashRouter>,
)
