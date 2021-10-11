import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Footer.css'

const Footer = () => {
  return (
    // <p>This is Blog Page</p>
    <>
      <div id="footer_section">
        <footer className='d-flex border
        ' id="footer_inside">
            {/* justify-content-between py-3 my-3 border */}
          <a
            href='/'
            className='col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none'
          >
            <svg className='bi me-2' width='40' height='32'>
              {/* <use xlink:href='#bootstrap'></use> */}
            </svg>
            <button id='getstarted_button' type='submit'>
              Get Started
            </button>
          </a>
          {/* <div> */}

          <ul className='nav col-md-4 justify-content-end' id="navitem_ul">
            <li className='nav-item' id='footer_item'>
              <NavLink to="/" className='nav-link px-2'>
                Privacy Policy |
              </NavLink>
            </li>
            <li className='nav-item' id='footer_item'>
              <NavLink to="/" className='nav-link px-2'>Terms of Service |
              </NavLink>
            </li>
            <li className='nav-item' id='footer_item'>
              <NavLink to="/" className='nav-link px-2 '>
                Contact
              </NavLink>
            </li>
          <p className=" text-muted" id="footer_para">Beacon's is a registered trademark of Beacons AI, Inc</p>
          </ul>
          {/* </div> */}
        </footer>
      </div>
    </>
  )
}

export default Footer
