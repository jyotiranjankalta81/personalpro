import React from 'react'
import Typography from '@material-ui/core/Typography'
import LoginPage from '../pages/LoginPage'

export default function Emaillist () {
  return (
    <div>
      <LoginPage />
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row gy-6 py-2' style={{ backgroundColor: 'white' }}>
              <Typography variant='h6'>
                <strong>Email and SMS list</strong>
              </Typography>
              {/* <br /> */}
              <p className='mt-3'>
                Visitors who have left their emails or SMS numbers will appear
                here.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
