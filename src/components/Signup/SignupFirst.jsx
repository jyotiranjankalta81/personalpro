import React, {useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AppContext from '../../context/Context'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '48ch',
      color: 'black'
    },
    marginTop: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  btncontinue: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  root1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px'
  },
  sign: {
    height: '48px',
    width: '33%',
    fontSize:"17px",
    backgroundColor: 'rgb(0,136,86)',
    color: 'white',
    textTransform: "none"
  }
}))

const SignupFirst = (props) => {
  const myContext = useContext(AppContext);
  const updateContext = myContext.userDetails;
  const classes = useStyles();

  const next = () => {

    if (updateContext.userName === "") {
        console.log('Please enter your Name')
    } else (updateContext.setStep(updateContext.currentPage + 1))
};

  return (
    <div>
      <h6 className='text-center weight-bold ' style={{ paddingTop: '7%' }}>
        Claim your username
      </h6>
      <form
        className={classes.root}
        noValidate
        autoComplete='off'
      >
        <TextField
          id='username'
          name='username'
          required
          label='Username'
          onChange={e => updateContext.setUsername(e.target.value)}
          variant='outlined'
        />
        <Button type='submit' className={classes.sign} onClick={next} variant='outlined'>
          Sign in with Email
        </Button>
      </form>
      <p className=' text-center weight-bold px-4 pt
      -1'>
        Already have an account

        <u> Sign in</u>
      </p>
      <p className=' text-center weight-bold px-4 '>
        By signing up, you agree to our
        <br />
        <u>Terms of Service</u>
        <u>Privacy Policy.</u>
      </p>
    </div>
  )
}

export default SignupFirst;

