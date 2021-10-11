// import React from 'react'
import React,{useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'
import AppContext from '../../context/Context'

const useStyles = makeStyles({
  root: {
    width: "100%",
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
    width: '100%',
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

const StepFourTwo = () => {
    const classes = useStyles();
  const myContext = useContext(AppContext);
  const updateContext = myContext.userDetails;
  const yes = () => {
    if (updateContext.userEmail === "") {
      console.log('Please enter your Name')
    } else updateContext.setStep(updateContext.currentPage + 1)
  };
  const no = () => {
    if (updateContext.userEmail === "") {
      console.log('Please enter your Name')
    } else updateContext.setStep(updateContext.currentPage - 1)
  };
  return (
    <div>
      {/* stepfour */}
      <div className='my-5 mx-5 px-5' style={{ width: '35%' }}>
        <Typography variant='body1' id='discrete-slider-small-steps' gutterBottom>
          {/* We made some themes for you! */}
          {/* Do you want to feature links to other people's Beacons, Instagram, TikTok, or Twitter profiles? */}
          {/* <strong>Do you want to sell items that you show in your TikTok videos?</strong> */}
          <strong>Do you want to build and engage a<br />community of fans?</strong>
        </Typography>
        <p className='justify-content-center' style={{fontSize:"13px"}}>
          {/* {' '} */}
          {/* use your existing content to instantly customize your <br /> page. */}
          {/* Tap a theme to see it in action. Everything is customizable later. */}
          {/* Direct your visitors to friends, brands you work with, products you believe in, and more. */}
          {/* Streamline the process of directing your TikTok audience to products. */}
          Start owning your audience outside of the platform.
        </p>
        <br />
        <div className={classes.root1}>
          <Button className={classes.sign} onClick={yes} variant='outlined'>
          {/* <NavLink className="text-decoration-none" to="/stepfive"> */}
            Yes
          {/* </NavLink> */}
          </Button>
        </div>
        <br />
        <div className={classes.root1}>
          <Button className={classes.sign} onClick={no} variant='outlined'>
          {/* <NavLink className="text-decoration-none" to="/stepfive"> */}
          {/* </NavLink> */}
            No
          </Button>
        </div>
      </div>
    </div>
  )
}

export default StepFourTwo
