import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import LoginPage from '../pages/LoginPage'
import Button from "@material-ui/core/Button"

// const useStyles = makeStyles(theme => ({
  
// }))

const Audience = () => {
  // const classes = useStyles()
  return (
    <div >
      <LoginPage />
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row gy-6 px-3 py-2' style={{backgroundColor:"white"}}>
              <Typography variant='h6'>
                {/* Audience summary */}
                <strong>Audience summary</strong>
              </Typography>
              <br />
              <Button variant='outlined' style={{fontWeight:"bold",height:"45px",marginBottom:"25px",fontSize:"15px"}}>
                Add email and SMS sign up to page
              </Button>
              <Button variant='contained' color='black' fullWidth style={{fontWeight:"bold",height:"45px",fontSize:"15px",backgroundColor:"black",color:"white"}}>
                Add "Join Community link"
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Audience
