import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
// import FunctionsIcon from '@material-ui/icons/Functions';
import MailIcon from '@material-ui/icons/Mail'
import FacebookIcon from '@material-ui/icons/Facebook'
import './Signin.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
const useStyles = makeStyles(theme => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: '100%',
    borderRadius: '10px',
    height: '40px'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  dropdownname: {
    color: 'black',
    fontWeight: 'bold'
  },
  typographyStyle: {
    // color: '#8b0e3a',
    // flexGrow: 1,
    // marginTop: '7%',
    marginBottom: '2%'
  },
  typographyStylegoogle: {
    padding: '10px',
    marginBottom: '2%',
    borderRadius: '14px',
    backgroundColor: 'rgb(162,50,28)',
    margin: ' 0 35%',
    fontWeight: 'bold',
    color: 'white'
  },
  typographyStylefacebook: {
    padding: '10px',
    marginBottom: '2%',
    backgroundColor: 'rgb(52,82,142)',
    borderRadius: '14px',
    margin: ' 0 35%',
    fontWeight: 'bold',
    color: 'white'
  },
  iconstye: {
    // marginTop:"-2px",
    fontSize: '35px',
    marginRight: '10px'
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '48ch'
      //   border:"2px solid black",
      //   borderRadius:"15px",
    },
    display: 'flex',
    flexDirection: 'column',
    // margin:"0 auto",
    justifyContent: 'center',
    alignItems: 'center'
  },
  textstyle: {
    alignItems: 'center'
  },
  root1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sign: {
    height: '48px',
    width: '30%',
    backgroundColor: 'rgb(0,136,86)',
    color: 'black'
  }
}))

const Signin = () => {
  const classes = useStyles()
  return (
    <div className='py-5'>
      <Typography
        variant='h5'
        className={classes.typographyStyle}
        align='center'
      >
        Sign in
      </Typography>
      <Typography
        variant='h6'
        className={classes.typographyStylegoogle}
        align='center'
      >
        <MailIcon className={classes.iconstye} />
        Signin with Gmail
      </Typography>
      <Typography
        variant='h6'
        className={classes.typographyStylefacebook}
        align='center'
      >
        <FacebookIcon className={classes.iconstye} />
        Sign in with Facebook
      </Typography>
      <div className='d-flex justify-content-center w-100'>
        <hr style={{ border: '3px solid black', width: '11%' }} />
        <br />
        <h6 className=' text-center weight-bold px-4 py-2'> or</h6>
        <br />
        <hr style={{ border: '3px solid black', width: '11%' }} />
      </div>
      <br />
      <form className={classes.root} noValidate autoComplete='off'>
        <TextField id='outlined-basic' label='Email' variant='outlined' />
        <TextField id='outlined-basic' label='Password' variant='outlined' />
      </form>
      <div className={classes.root1}>
        <Button className={classes.sign} variant='outlined'>
          Sign in with Email
        </Button>
      </div>
      <p className=' text-center weight-bold px-4 py-1'>
        <u> Forget Password</u>
      </p>
      <p className=' text-center weight-bold px-4 '>
        <u>
          Don't have an account?<u>Sign up.</u>
        </u>
      </p>
    </div>
  )
}

export default Signin
