import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import LoginPage from '../pages/LoginPage'
import Button from '@material-ui/core/Button'

// const useStyles = makeStyles(theme => ({}))

export default function Earnings () {
  // const classes = useStyles()
  return (
    <div>
      <LoginPage />
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row gy-6 py-2' style={{ backgroundColor: 'white' }}>
              <Typography variant='h6'>
                <strong>Earnings</strong>
              </Typography>
              <p className=''>
                Set up <strong> PayPal </strong> to enable visitors to pay you
                using Paypal. These payments will be paid out via PayPal after
                the money settles, typically 10-14 days after the payment. Set
                up<strong> Stripe </strong>to enable visitors to pay you using
                credit card, Apple Pay, and Google Pay. These payments will be
                paid out via Stripe, according to your Stripe service agreement.{' '}
                <u>Click here to learn more.</u>
              </p>
              <br />
              <div className='px-2 mb-5'>
                <Button
                  variant='outlined'
                  fullWidth
                  style={{
                    fontWeight: 'bold',
                    height: '45px',
                    marginBottom: '25px',
                    fontSize: '15px',
                    backgroundColor: 'black',
                    color: 'white'
                  }}
                >
                  Set up Paypal payments
                </Button>
                <Button
                  variant='contained'
                  color='black'
                  fullWidth
                  style={{
                    fontWeight: 'bold',
                    height: '45px',
                    fontSize: '15px',
                    backgroundColor: 'black',
                    color: 'white'
                  }}
                >
                  set up stripe account
                </Button>
              </div>

              <br />
              <br />
              <Typography variant='h6'>
                {/* <strong>Earnings</strong> */}
                Highlights
              </Typography>
              <p className="mb-3">
                Transactions from Store, Support, and Request blocks. Payments
                from Stripe are paid out instantly. Payments from PayPal are
                paid out 10-14 days after the payment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
