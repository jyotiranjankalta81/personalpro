import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
    
  root: {
    width: 300,
  },
  root3: {
    width: '100%'
  },
  root4: {
    width: '60%'
  },
  sign1: {
    height: '48px',
    margin:"5px 5px",
    width: 'auto',
    backgroundColor:"transparent",
    color: 'black',
    border:"1px solid black"
  },
  sign: {
    height: '48px',
    width: 'auto',
    backgroundColor: 'black',
    color: 'white'
  }
})
function valuetext (value) {
  return `${value}°C`
}

const Stepthree = () => {
    const classes = useStyles()
  return (
    <div>
      <div className='my-5 mx-5 px-5' style={{ width: '35%' }}>
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
        We made some themes for you!
        </Typography>
        <h6 className='weight-bold'>
          {/* {' '} */}
          {/* use your existing content to instantly customize your <br /> page. */}
          Tap a theme to see it in action. Everything is customizable later.
        </h6>
        <br />
        <div className={classes.root1}>
          <Button className={classes.sign} variant='outlined'>
          <NavLink className="text-decoration-none" to="/stepfour">
            Continue
          </NavLink>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Stepthree
