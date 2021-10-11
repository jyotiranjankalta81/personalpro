import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './Home.css'

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
  inputfill: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%'
    }
  },
  btnheader: {
    width: '100%',
    height: '50px',
    color: 'black',
    fontWeight: 'bold',
    marginTop: '15px'
  },
  text1: {
    marginTop: '7px',
    marginLeft: '10px'
  }
}))

export default function Text () {
  const classes = useStyles()
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  })
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked })
    // setSelectedValue(event.target.value)
  }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <DragIndicatorIcon />
        <h6 id='tagcomponent'>Text</h6>
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
          <div className='d-flex'>
            <Switch
              checked={state.checkedB}
              onChange={handleChange}
              color='primary'
              name='checkedB'
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <Typography className={classes.text1}>Text</Typography>
          </div>
          <Typography paragraph>
            General text block to write anything you want.You can format your
            text with Markdown.<u>Click here to see examples</u>.
          </Typography>
          <form className={classes.inputfill} noValidate autoComplete='off'>
            <TextField
              id='standard-basic'
              label='Write anything here!'
              defaultValue=' I am a fashion model I love to make people laugh and smile I always have a good time and live laugh, love! My goal is to connect with you and make you laugh with me. Being an influencer means I get to travel the world and meet amazing'
              variant='outlined'
            />
          </form>
          <Button
            className={classes.btnheader}
            variant='outlined'
            color='primary'
          >
            Save
          </Button>
          <div className='d-flex justify-content-between py-3 w-100'>
            <h6 id='largetest' className='font-weight-bold '>
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
