import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import YourOrder  from './YourOrder'

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
})

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          {/* <CloseIcon /> */}
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent)

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions)

export default function CustomizedDialogs (props) {
  const [open, setOpen] = React.useState(false)
  const [popup, setPopup] = useState(true)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return props.trigger ? (
    <div>
      {/* <h5>domain claim</h5> */}
      <Button
        style={{
          textTransform: 'none',
          fontWeight: 'bold',
          width: '100%',
          color: 'white'
        }}
        onClick={handleClickOpen}
      >
        Claim domain
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <DialogTitle id='customized-dialog-title' onClose={handleClickOpen}>
          <strong>Custom domain purchase confirmation</strong>
        </DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            To use your domain, you also need to upgrade to the $10/month
            entrepreneur plan. You are currently paying for the first year of
            your domain subscription. Auto renewal is on by default, but you can
            turn it off at any time in the site settings tab. Domain purchases
            are non-refundable.
          </Typography>
          <div className='d-flex mt-4 w-100' dividers>
            <Typography style={{ width: '50%' }} gutterBottom>
              Item Description
            </Typography>
            <Typography gutterBottom>Price</Typography>
          </div>
          <hr />
          <div className='d-flex w-100' dividers>
            <Typography style={{ width: '50%' }} gutterBottom>
              biswa.com
            </Typography>
            <Typography gutterBottom>
              $11 1st year
              <br />
              $16 per renewal
            </Typography>
          </div>
          {/* <hr /> */}
          <div
            className='d-flex py-2 p-lg-2 w-100'
            style={{ backgroundColor: 'grey', color: 'white' }}
          >
            <Typography style={{ width: '50%' }} gutterBottom>
              Entrepreneur Plan
            </Typography>
            <Typography gutterBottom>$10/month</Typography>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => setPopup(true)}
            // onClick={handleClose}
            variant='outlined'
            style={{
              textTransform: 'none',
              color: 'black',
              fontWeight: 'bolder'
            }}
          >
            <YourOrder trigger={popup} setTrigger={setPopup} />
            {/* Cancel */}
          </Button>
          <Button
            autoFocus
            onClick={handleClose}
            style={{
              textTransform: 'none',
              fontWeight: 'bold',
              backgroundColor: 'black',
              color: 'white'
            }}
          >
            Checkout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  ) : (
    ''
  )
}
