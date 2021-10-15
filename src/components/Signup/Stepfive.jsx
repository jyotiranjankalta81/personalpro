// import React from 'react'
import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'
import DomainClaim from './DomainClaim'
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
    margin:"3px"
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
    // backgroundColor: 'black',
    color: 'black'
  }
})
function valuetext (value) {
  return `${value}°C`
}

const Stepfive = () => {
    const classes = useStyles();
    const [popup, setPopup] = useState(true);
  return (
    <div>
      {/* stepfour */}
      <div className='my-5 mx-5 py-5 px-5' style={{ width: '35%' }}>
        <Typography variant='h6' id='discrete-slider-small-steps' gutterBottom>
          {/* We made some themes for you! */}
          {/* Do you want to feature links to other people's Beacons, Instagram, TikTok, or Twitter profiles? */}
          We've reserved a domain for you
        </Typography>
        <p className=''>
          Instantly link it to your Beacons page by upgrading to the Entrepreneur plan for $10/month. Custom domains are billed annually.
        </p>
        <br />
        <div className={classes.root1}>
          <Button  className={classes.sign} style={{textTransform: 'none',fontWeight:'bold'}}  variant='outlined'>
            kaltabg.com
          </Button>
        </div>
        <br />
        <div className={classes.root1}>
          <Button className={classes.sign} onClick={ () => setPopup(true) } style={{textTransform: 'none',fontWeight:'bold',color:"white",backgroundColor:"black"}} variant='outlined'>
          <DomainClaim 
          trigger={popup} setTrigger={setPopup}
           />
          </Button>
        </div>
        <div className={classes.root1}>
          <Button className={classes.sign} style={{textTransform: 'none',fontWeight:'bold'}} variant='outlined'>
            Search for another domain
          </Button>
        </div>
        <div className={classes.root1}>
          <Button className={classes.sign} style={{textTransform: 'none',fontWeight:'bold'}} variant='outlined'>
            Skip
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Stepfive
