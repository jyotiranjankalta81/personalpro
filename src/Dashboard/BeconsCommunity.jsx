import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { red } from '@material-ui/core/colors'
import './Home.css'
import Button from '@material-ui/core/Button'
import Switch from '@material-ui/core/Switch'
import LoginPage from '../pages/LoginPage'
import Paper from '@material-ui/core/Paper'

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
    color: 'black',
    fontWeight: 'bold',
    marginBottom: '15px'
  }
}))

export default function BeconsCommunity () {
  const classes = useStyles()
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  })
  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked })
    // setSelectedValue(event.target.value)
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
                  {/* <DragIndicatorIcon /> */}
                  <h6 id='tagcomponent'>Community summary</h6>
                </CardContent>
                <div className={classes.root1}>
                  <Paper
                    elevation={3}
                    style={{ backgroundColor: "rgb(216,236,234)" }}
                    className={classes.paper}
                    children={
                      <>
                        <p>0</p>
                        <p>Members</p>
                      </>
                    }
                  />
                  {/* <Paper /> */}
                  <Paper
                    elevation={3}
                    style={{ backgroundColor: "rgb(247,224,218)" }}
                    className={classes.paper}
                    children={
                      <>
                        <p>0</p>
                        <p>Members</p>
                      </>
                    }
                  />
                </div>
                <CardContent>
                  {/* <Typography paragraph>
                    Drag and drop to rearrange.
                    <u>Click here to see examples.</u>
                  </Typography> */}
                  <Button
                    className={classes.btnheader}
                    variant='outlined'
                    color='primary'
                  >
                    + Add "Join Community" link
                  </Button>
                  <div className='d-flex justify-content-between py-3 w-100'>
                    <h6 id='tagcomponent' className=' '>
                      Your Community
                    </h6>
                    {/* <SettingsIcon className=' float-right' /> */}
                  </div>
                  <div className='d-flex justify-content-between  w-100'>
                    <p id='largetest' className=''>
                      Members of your community will show up here.
                    </p>
                    {/* <Switch
                      className=' float-right'
                      checked={state.checkedB}
                      onChange={handleChange}
                      color='primary'
                      name='checkedB'
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    /> */}
                  </div>
                  <div className='d-flex justify-content-between w-100'>
                    <p id='largetest' className=' '>
                      New member email notifications
                    </p>
                    <Switch
                      className=' float-right'
                      checked={state.checkedB}
                      onChange={handleChange}
                      color='primary'
                      name='checkedB'
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </div>
                  <br />
                  <h6 id='tagcomponent' className=' '>
                    Communities you are part of
                  </h6>
                  <p className=''>
                    Communities that you are a member of will show up here
                  </p>
                </CardContent>
                {/* </Collapse> */}
                
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
