// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer>
    <div className='foot' id='bigg'>
        <div className="col">
            <h1 className='hala'>HALA</h1>
            <p>403 - 59 Glenforest Drive,</p><p> Halifax, NS, CA</p>
            <p>902-568-0867</p>
            <a href="HalaStore@info.com">HalaStore@info.com</a>

        </div>
        <div className="col">
            <h1>Shop</h1>
            <Link to='/frequently-asked-questions'>FAQ</Link>
            <Link to='/shippingpolicy'>Shipping & Returns</Link>
            <Link to='/storepolicy'>Store Policy</Link>
            <Link to='/storepolicy'>Payments Methods</Link>
        </div>
        <div className="col">
            <h1>Socials</h1>
            <Link to=''>Facebook</Link>
            <Link to=''>X</Link>
            <Link to=''>Instagram</Link>
            <Link to=''>Pinterest</Link>
        </div>
        <div className="col">
            <h1 className='firs'>Be The First To Know</h1>
            <p>Sign up for our newsletter</p>
            <input type="text" placeholder='Enter Your Email' />
            <button>Subscribe</button>



        </div>
        







    </div>&copy | 2023 Made by Emad</footer>
  )
}

export default Footer