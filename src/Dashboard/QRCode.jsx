import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { red } from '@material-ui/core/colors'
import './Home.css'
import Button from '@material-ui/core/Button'
import LoginPage from '../pages/LoginPage'
import QRimg from '../Assets/gallerycardimg/qrcodeimg'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 700,
    backgroundColor: 'white'
  },
  root1: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1.5),
      width: theme.spacing(4),
      height: theme.spacing(16)
    }
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 310
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  content: {
    display: 'flex',
    height: 50
  },
  btnheader: {
    width: '100%',
    height: '50px',
    fontWeight: 'bold',
    marginBottom: '15px',
    backgroundColor:"black",
    color:"white"
  }
}))

export default function QRCode () {
  const classes = useStyles()
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  })
  const [selectedValue, setSelectedValue] = React.useState('b')
  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked })
    setSelectedValue(event.target.value)
  }

  return (
    <>
      <LoginPage />
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row gy-6' id='blogcontent_type'>
              <Card className={classes.root}>
                <CardContent className={classes.content}>
                  <h6 id='tagcomponent'>
                    <strong>QR Code</strong>
                  </h6>
                </CardContent>
                <p className='px-3'>
                  Put your QR code on business cards and pamphlets to link your
                  offline and online presences.
                </p>
                <div>
                  <RadioGroup row>
                    <FormControlLabel
                      className='mx-auto'
                      checked={selectedValue === 'b'}
                      onChange={handleChange}
                      value='b'
                      control={<Radio color='primary' />}
                      name='radio-button-demo'
                      inputProps={{ 'aria-label': 'B' }}
                      label='Logo'
                    />
                    <FormControlLabel
                      className='mx-auto'
                      checked={selectedValue === 'c'}
                      onChange={handleChange}
                      name='radio-button-demo'
                      value='c'
                      control={<Radio color='primary' />}
                      inputProps={{ 'aria-label': 'C' }}
                      label='Profile picture'
                    />
                  </RadioGroup>
                </div>
                <p className="d-flex justify-content-center align-items-center">https://beacons.ai/kaltabg</p>
                <div className="d-flex justify-content-center align-items-center">
                    <img src={QRimg} alt="qrcode" />
                </div>
                <CardContent>
                  <Button
                    className={classes.btnheader}
                    variant='outlined'
                    color='primary'
                    style={{textTransform: 'none'}}
                  >
                    Download QR Code
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
