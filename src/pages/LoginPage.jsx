import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import {red } from '@material-ui/core/colors'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import './LoginPage.css'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    float: 'right',
    marginTop: '10px',
    height: '45px',
    marginBottom: '10px',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  media: {
    height: 0,
    paddingTop: '90.25%' // 16:9
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    fontWeight: 'bold',
    marginTop: '-15px'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  send_feedback: {
    fontSize: '15px',
    display: 'flex',
    marginLeft: '17%',
    fontWeight: 'bold',
    width: '60%'
  },
  firstheader: {
    display: 'flex',
    width: '100%',
    backgroundColor: 'black'
  },
  secondheader: {
    display: 'flex',
  },
  newbutton: {
    margin: '30px 30px',
    border: '2px solid black',
    backgroundColor: 'transparent'
  },
  line: {
    height: 10,
    border: '2px solid black'
  }
}))

const LoginPage = () => {
  const classes = useStyles()
  const [age, setAge] = React.useState('')

  const handleChange = event => {
    setAge(event.target.value)
  }
  return (
    <>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row gy-6' id='blogcontent_type'>
              <div className={classes.firstheader} id='firstheader'>
                <div className={classes.send_feedback}>
                  <h3 id='Beacons'>Beacons</h3>
                  <h6 id='headertop'>Send feedback</h6>
                </div>
                <Card className={classes.root}>
                  {/* <Typography id="headertop" variant="body1" color="textSecondary" component="p">Dashboards</Typography> */}
                  <CardHeader
                    avatar={
                      <Avatar aria-label='recipe' className={classes.avatar}>
                        R
                      </Avatar>
                    }
                    action={
                      <>
                        <FormControl className={classes.formControl}>
                          <InputLabel id='demo-simple-select-label'>
                            {/* More Tools */}
                            <h6 id='demo-simple-select-label'>More Tools</h6>
                          </InputLabel>
                          <Select
                            labelId='demo-simple-select-label'
                            id='demo-simple-select'
                            value={age}
                            onChange={handleChange}
                          >
                            <Typography
                              variant='body1'
                              color='textSecondary'
                              component='p'
                            >
                              Dashboards
                            </Typography>
                            <MenuItem value={10}>
                              <NavLink to="/analytics"  style={{textDecoration:"none",color:"black"}}>
                              Analytics
                              </NavLink>
                              </MenuItem>
                            <MenuItem value={20}>
                            <NavLink to="/audience"  style={{textDecoration:"none",color:"black"}}>
                              Audience
                            </NavLink>
                              </MenuItem>
                            <MenuItem value={30}>
                            <NavLink to="/communityinfo"  style={{textDecoration:"none",color:"black"}}>
                              Beacons Community
                            </NavLink>
                              </MenuItem>
                            <MenuItem value={10}>
                            <NavLink to="/earnings"  style={{textDecoration:"none",color:"black"}}>
                              Earnings
                            </NavLink>
                              </MenuItem>
                            <Typography
                              variant='body1'
                              color='textSecondary'
                              component='p'
                            >
                              Tools
                            </Typography>
                            <MenuItem value={10}>
                            <NavLink to="/emaillist"  style={{textDecoration:"none",color:"black"}}>
                              Emails and SMS
                            </NavLink>
                              </MenuItem>
                            <MenuItem value={10}>
                            <NavLink to="/qrcode"  style={{textDecoration:"none",color:"black"}}>
                              QR Code
                            </NavLink>
                              </MenuItem>
                            <MenuItem value={10}>
                            <NavLink to="/referrals"  style={{textDecoration:"none",color:"black"}}>
                              Refer friends
                            </NavLink>
                              <MonetizationOnIcon />
                            </MenuItem>
                            <MenuItem value={10}>
                            <NavLink to="/analytics"  style={{textDecoration:"none",color:"black"}}>
                              
                            </NavLink>
                              Send Feedback</MenuItem>
                            <Typography
                              variant='body1'
                              color='textSecondary'
                              component='p'
                            >
                              Seetings
                            </Typography>
                            <MenuItem value={10}>
                            <NavLink to="/analytics"  style={{textDecoration:"none",color:"black"}}>
                              
                            </NavLink>
                              Account</MenuItem>
                            <MenuItem value={10}>
                            <NavLink to="/analytics"  style={{textDecoration:"none",color:"black"}}>
                              
                            </NavLink>
                              User Managment</MenuItem>
                            <MenuItem value={10}>
                            <NavLink to="/analytics"  style={{textDecoration:"none",color:"black"}}>
                              
                            </NavLink>
                              Site Settings</MenuItem>
                            <MenuItem value={10}>
                            <NavLink to="/analytics"  style={{textDecoration:"none",color:"black"}}>
                              
                            </NavLink>
                              <b>Upgrade</b>
                            </MenuItem>
                            <button className={classes.newbutton}>
                            <NavLink to="/analytics"  style={{textDecoration:"none",color:"black"}}>
                              
                            </NavLink>
                              <b>Logout</b>
                            </button>
                          </Select>
                        </FormControl>
                      </>
                    }
                  />
                </Card>
              </div>
              <hr id='line' />
              <Card className={classes.secondheader}>
                <div id="headingdiv">
                  <NavLink
                    className='text-decoration-none'
                    to='/home'
                    exact
                  >
                    <h6 id='headingtwo'>My Page</h6>
                  </NavLink>
                </div>
                <div id="headingdiv">
                  <NavLink
                    className='text-decoration-none'
                    to='/appearance'
                    exact
                  >
                    <h6 id='headingtwo'>Apperance</h6>
                  </NavLink>
                </div>
                <div id="headingdiv">
                <NavLink
                    className='text-decoration-none'
                    to='/analytics'
                    exact
                  >
                  <h6 id='headingtwo'>Analytics</h6>
                  </NavLink>
                </div>
              </Card>
              <hr id='line' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
