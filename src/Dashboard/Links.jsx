import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator'
import './Home.css'
import Button from '@material-ui/core/Button'
import SettingsIcon from '@material-ui/icons/Settings'
import Switch from '@material-ui/core/Switch'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 700,
    backgroundColor: 'white'
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

export default function Links () {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  })
  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked })
    // setSelectedValue(event.target.value)
  }

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <DragIndicatorIcon />
        <h6 id='tagcomponent'>Links</h6>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardContent>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Drag and drop to rearrange.<u>Click here to see examples.</u>
          </Typography>
          <Button
            className={classes.btnheader}
            variant='outlined'
            color='primary'
          >
            + Add new link to top
          </Button>
          <div className='d-flex justify-content-between py-3 w-100'>
            <h6 id='largetest' className='font-weight-bold '>
              Large text
            </h6>
            <SettingsIcon className=' float-right' />
          </div>
          <Button
            className={classes.btnheader}
            variant='outlined'
            color='primary'
          >
            + Add new link to botton
          </Button>
          <Button
            className={classes.btnheader}
            variant='outlined'
            color='primary'
          >
            + See analytics
          </Button>
          <Button
            className={classes.btnheader}
            variant='outlined'
            color='primary'
          >
            + Add referral link
          </Button>
          {/* <Typography className="text-center" variant="caption"> */}
          <p className='text-center'>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </p>
          <h6 id='largetest' className='font-weight-bold '>
            Link layouts
          </h6>
          <Typography paragraph>
            <u>Go to the appearance tab</u> to modify link colors,transparency, and <i className="ri-shape-2-fill"></i>
          </Typography>
          {/* </Typography> */}
          <div className='d-flex justify-content-between  w-100'>
            <h6 id='largetest' className=''>
              Link shadow
            </h6>
            <Switch
              className=' float-right'
              checked={state.checkedB}
              onChange={handleChange}
              color='primary'
              name='checkedB'
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </div>
          <div className='d-flex justify-content-between w-100'>
            <h6 id='largetest' className=' '>
              Large text
            </h6>
            <Switch
              className=' float-right'
              checked={state.checkedB}
              onChange={handleChange}
              color='primary'
              name='checkedB'
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </div>
        </CardContent>
      </Collapse>
    </Card>
  )
}
