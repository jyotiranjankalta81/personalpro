import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import { red } from '@material-ui/core/colors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './Background.css'
import ImageIcon from '@material-ui/icons/Image'
import Switch from '@material-ui/core/Switch'
import ColorLensIcon from '@material-ui/icons/ColorLens'
import BackupIcon from '@material-ui/icons/Backup'
import Button from '@material-ui/core/Button'

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
    color: 'white',
    fontWeight: 'bold',
    marginTop: '15px',
    backgroundColor: 'black'
  },
  iconupload: {
    marginLeft: '10px',
    marginTop: '-5px',
    color: 'white'
    // font
  },
  icon: {
    color: 'white'
  },
  root3: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
  icon2: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}))

export default function Background () {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [state, setState] = React.useState({
    checkedA: true,

    checkedB: true
  });

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
        <h6 id='tagcomponent'>Background</h6>
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
          <div className='d-flex w-100' id='style'>
            <div className='mx-auto py-1 px-5' id='styles'>
              <div className='my-3 ' id='insidebox22'>
                <ImageIcon className={classes.icon} />
              </div>
            </div>
            <div className='mx-auto py-1 px-5' id='styles'>
              <div className='my-3' id='insidebox21'>
                <ColorLensIcon className={classes.icon} />
              </div>
            </div>
          </div>
          <div className='d-flex'>
            <h6 className='w-50 text-center py-2'>Image</h6>
            <h6 className='w-50 text-center py-2'>Color</h6>
          </div>
          <br />
          <h6 className='font-weight-bold'>Select image</h6>
          <Button
            className={classes.btnheader}
            variant='outlined'
            color='primary'
          >
            Upload{' '}
            <span>
              <BackupIcon className={classes.iconupload} />
            </span>
          </Button>
          <br />
          <br />
          <form className='d-flex'>
            <input
              className='form-control me-2'
              type='searchImages'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
          <p>
            Photos by <u>Unsplash.</u> Search the same term again for different
            results.
          </p>
          <div className='d-flex justify-content-between w-100'>
            <p id='largetest' className='font-weight-bold '>
              Full Screen Desktop Mode
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
          <h6 id='largetest' className='font-weight-bold '>
              Filter
            </h6>
          <div className='d-flex w-100' id='style'>
            <div className='mx-auto py-5 px-5' id='styles1'>
            </div>
            <div className='mx-auto py-5 px-5' id='styles2'>
            </div>
            <div className='mx-auto py-5 px-5' id='styles3'>
            </div>
          </div>
          <div className='d-flex'>
            <h6 className='w-25 mx-auto text-center py-2' id="head">Dark</h6>
            <h6 className='w-25 mx-auto text-center py-2' id="head">Light</h6>
            <h6 className='w-25 mx-auto text-center py-2' id="head">None</h6>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  )
}
