// import React from 'react'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: {
    width: 300
  },
  root3: {
    width: '100%'
  },
  root4: {
    width: '60%'
  },
  sign1: {
    height: '48px',
    margin: '5px 5px',
    width: '100%',
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

const Stepfive = () => {
    const classes = useStyles()
  return (
    <div className="">
      <div className='my-5 mx-5 py-5 px-5 justify-content-center' style={{ width: '35%' }}>
        <Typography variant='h6' id='discrete-slider-small-steps' gutterBottom>
          Become an Entrepreneur
        </Typography>
        <p className=''>
        {/* No pressure, but here is some additional stuff you can do if you upgrade to our $10/mo plan. */}
        Link your custom domain (e.g. kaltabg.com)
        </p>
        <p className=''>
        {/* No pressure, but here is some additional stuff you can do if you upgrade to our $10/mo plan. */}
        Remove Beacons logo
        </p>
        <p className=''>
        {/* No pressure, but here is some additional stuff you can do if you upgrade to our $10/mo plan. */}
        Allow other users to manage your account
        </p>
        <p className=''>
        {/* No pressure, but here is some additional stuff you can do if you upgrade to our $10/mo plan. */}
        Automatically update your page with your latest video
        </p>
        <p className=''>
        {/* No pressure, but here is some additional stuff you can do if you upgrade to our $10/mo plan. */}
        {/* Facebook pixel, Google Analytics, UTM parameters, and custom meta SEO */}
        Lower transaction fees for requests and store
        </p>
        <p className=''>
        {/* No pressure, but here is some additional stuff you can do if you upgrade to our $10/mo plan. */}
        More blocks for more content on your page
        </p>
        <p className=''>
        {/* No pressure, but here is some additional stuff you can do if you upgrade to our $10/mo plan. */}
        5 pages for organizing your content
        </p>
        <p className=''>
        {/* No pressure, but here is some additional stuff you can do if you upgrade to our $10/mo plan. */}
        Facebook pixel, Google Analytics, UTM parameters, and custom meta SEO
        </p>
        <br />
        <div className={classes.root1}>
          <Button className={classes.sign} variant='outlined'>
            Upgrade
          </Button>
        </div>
        <br />
        <div className={classes.root1}>
          <Button className={classes.sign} variant='outlined'>
            Skip
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Stepfive
