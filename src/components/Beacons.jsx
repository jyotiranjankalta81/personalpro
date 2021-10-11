import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Beacons.css'
import Navbar from "./Navbar"
import Footer from './Footer';

const Beacons = () => {
  return (
    <div style={{backgroundColor:"white"}}>
    <Navbar/>
      <div id='section1'>
        <div className='card' id='word_card'>
          <div className='card-body'>
            <h1>
              A website that
              <br /> can keep up with <br /> your content.
            </h1>
          </div>
          <button id='getstarted_button1' type='submit'>
            Get Started
          </button>
        </div>
        <div className='card' id='img_card'>
          <img src='...' className='card-img-top' alt='...' />
        </div>
      </div>
      <div id='section1'>
        <div className='card' id='word_card'>
          <div className='card-body'>
            <h1>
              A page to match <br /> your content
            </h1>
            <br />
            {/* <br /> */}
            <p>
              <b>Customize your way.</b> Add your content <br /> from
              Youtube,spotify,and more.
            </p>
            {/* <br /> */}
            <br />
            <p>
              <b>Get started for free.</b> All of the features <br /> you'd
              except-and more-with none of <br /> the cost.
            </p>
          </div>
        </div>
        <div className='card' id='img_card'>
          <img src='...' className='card-img-top' alt='...' />
        </div>
      </div>
      <div id='section1'>
        <div className='card' id='img_card'>
          <img src='...' className='card-img-top' alt='...' />
        </div>
        <div className='card' id='word_card'>
          <div className='card-body'>
            <h1>
              Build your business
            </h1>
            <br />
            {/* <br /> */}
            <p>
              <b >Let your fans support you.</b> Accept support from <br /> your followers right on your page.
            </p>
            {/* <br /> */}
            <br />
            <p>
              <b>Start selling in 5 minutes.</b> Sell ebooks,videos,and <br /> personalized shoutouts from your page just by <br />linking a bank account or debit card.
            </p>
          </div>
        </div>
      </div>
      <div id='section1'>
        <div className='card' id='word_card'>
          <div className='card-body'>
            <h1>
              A beautiful page in one minute
            </h1>
            <br />
            {/* <br /> */}
            <p>
              <b >Magic setup with AI.</b> Answer a few easy <br /> questions,and our AI will design a <br />personalized website just for you.
            </p>
            {/* <br /> */}
            <br />
            <p>
              <b>Fully customizable.</b> Customize from <br /> thousand of fonts,millions of colors,<br />and unlimited layouts.
            </p>
          </div>
        </div>
        <div className='card' id='img_card'>
          <img src='...' className='card-img-top' alt='...' />
        </div>
      </div>
      <br />
      <Footer/>
    </div>
  )
}

export default Beacons
