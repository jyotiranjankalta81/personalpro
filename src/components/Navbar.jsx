import React from 'react'
import {makeStyles} from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

// so many ways to use css in material ui
const useStyle = makeStyles({
  header: {
    background: '#111111'
  },
  tabs: {
    color: '#ffffff',
    textDecoration: 'none',
    marginRight: '50px',
    FontSize: 20
  }
})

const Navbar = () => {
  const classes = useStyle()
  return (
    // https://beacons.ai/
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid' id="header">
        <NavLink className={classes.tabs} to='/' id="logo" exact>
          LOGO
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='navitem '>
              <NavLink className={classes.tabs} id="nav_item" to='/blog' exact>
                Blog
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={classes.tabs} id="nav_item" to='/gallery' exact>
                Gallery
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={classes.tabs} id="nav_item" to='/pricing' exact>
                Pricing
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={classes.tabs} id="nav_item" to='/' exact>
                We're Hiring
              </NavLink>
            </li>
          </ul>
          <form className='d-flex'>
            <button className='btn ' id="signin_button" type='submit'>
              Sign In
            </button>
            <button className='btn btn-outline-success' id="signup_button" type='submit'>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
