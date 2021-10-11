import React from 'react'
import './Pricing.css'
import Navbar from "./Navbar"
import Footer from './Footer';

const Pricing = () => {
  return (
    // <p>Under construction</p>
    <>
    <Navbar/>
      <div className='container'>
        <h1 id='heading1'>
          if you create online,you need <br /> a home online
        </h1>
        <div id='pricing'>
          <div id="price">
            <h3>Entrepreneur</h3>
            <p>
              Powerful features <br /> for scalling
            </p>
            <br />
            <h4>$10/Month</h4>
            <br />
            <button id='getstarted_button1' type='submit'>
              Sign Up
            </button>
          </div>
          <div className='content flex' id="card1">
            <h3>Creator</h3>
            {/* <br /> */}
            <p>
              Everything you need <br /> to get started
            </p>
            <br />
            <h4>Free</h4>
            <br />
            <button id='getstarted_button1' type='submit'>
              Sign Up
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
      <Footer/>
    </>
  )
}

export default Pricing
