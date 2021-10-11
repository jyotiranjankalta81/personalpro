// import React from 'react'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: "100%"
    // height:"10px"
    // fontSize:"10px"
  },
  root3: {
    width: '100%'
  },
  root4: {
    width: '60%'
  },
  root1: {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  sign1: {
    height: '48px',
    margin: '5px 5px',
    width: 'auto',
    // backgroundColor: 'black',
    backgroundColor: 'transparent',
    color: 'black',
    border: '1px solid black'
  },
  sign: {
    height: '48px',
    width: '100%',
    backgroundColor: 'black',
    color: 'white'
  }
})
function valuetext (value) {
  return `${value}°C`
}

const Stepfive = () => {
    const classes = useStyles()
  return (
    <div>
      {/* stepfour */}
      <div className='my-5 mx-5 py-5 px-5' style={{ width: '35%' }}>
        <Slider
          className={classes.root}
          defaultValue={0.00000005}
          getAriaValueText={valuetext}
          aria-labelledby='discrete-slider-small-steps'
          step={0.00000001}
          marks
          min={-0.00000005}
          max={0.0000001}
          valueLabelDisplay='auto'
        />
        <Typography variant='h6' id='discrete-slider-small-steps' gutterBottom>
          {/* We made some themes for you! */}
          {/* Do you want to feature links to other people's Beacons, Instagram, TikTok, or Twitter profiles? */}
          We've reserved a domain for you
        </Typography>
        <p className=''>
          {/* {' '} */}
          {/* use your existing content to instantly customize your <br /> page. */}
          {/* Tap a theme to see it in action. Everything is customizable later. */}
          {/* Direct your visitors to friends, brands you work with, products you believe in, and more. */}
          Instantly link it to your Beacons page by upgrading to the Entrepreneur plan for $10/month. Custom domains are billed annually.

        </p>
        <br />
        <div className={classes.root1}>
          <Button  className={classes.sign} variant='outlined'>
              <NavLink className="text-decoration-none" style={{color:"white"}} to="/stepsix">
            kaltabg.com
              </NavLink>
          </Button>
        </div>
        <br />
        <br />
        <div className={classes.root1}>
          <Button className={classes.sign} variant='outlined'>
          <NavLink className="text-decoration-none" style={{color:"white"}} to="/stepsix">
            Claim domain
          </NavLink>
          </Button>
        </div>
        <br />
        <div className={classes.root1}>
          <Button className={classes.sign} variant='outlined'>
          <NavLink className="text-decoration-none" style={{color:"white"}} to="/stepsix">
            Search for another domain
          </NavLink>
          </Button>
        </div>
        <br />
        <div className={classes.root1}>
          <Button className={classes.sign} variant='outlined'>
          <NavLink className="text-decoration-none" style={{color:"white"}} to="/stepsix">
            Skip
          </NavLink>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Stepfive
