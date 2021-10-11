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
import Switch from '@material-ui/core/Switch'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import './Home.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Slider from '@material-ui/core/Slider'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
import FacebookIcon from '@material-ui/icons/Facebook'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 700
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
  header: {
    height: 'auto'
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
    fontWeight: 'bold'
  },
  btnheader1: {
    width: '76%',
    marginLeft:"10px",
    height: '50px',
    color: 'black',
    fontWeight: 'bold'
  },
  text: {
    width: '60%',
    marginLeft:"13px"
  },
  icons:{
    marginLeft:"10px",
    fontSize:"25px",
  }
}))

const marks = [
  {
    value: 0,
    label: '0 px'
  },
  {
    value: 100,
    label: '100 px'
  }
]

function valuetext (value) {
  return `${value}px`
}

export default function Home () {
  const classes = useStyles()

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  })

  const [expanded, setExpanded] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState('b')

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked })
    setSelectedValue(event.target.value)
  }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <DragIndicatorIcon />
        <h6 id='tagcomponent'>Header</h6>
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
        <CardContent className={classes.header}>
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            color='primary'
            name='checkedB'
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <Typography paragraph>
            Customize your profile picture, add a short bio and location, and
            update your social icons.<u> Click here to see examples</u>
          </Typography>
          {/* https://mdbootstrap.com/snippets/jquery/mdbootstrap/920964#html-tab-view */}
          <div className='col-md-6 mb-4'>
            <form className='md-form'>
              <div className='file-field'>
                <div className='mb-4'>
                  <img
                    src='https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg'
                    className='rounded-circle z-depth-1-half avatar-pic'
                    alt='example placeholder avatar'
                  />
                </div>
                <div className='d-flex justify-content-center'>
                  <div className='btn btn-mdb-color btn-rounded float-left'>
                    <span>Add photo</span>
                    <input type='file' />
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* <hr /> */}
          <h6 className='font-weight-bold'>Picture shapa</h6>
          <div className='d-flex py-2' id='twodiv'>
            <div className='mx-auto py-5 ' id='box11'>
              <div id='squarebox'></div>
            </div>
            <div className='mx-auto py-5' id='box12'>
              <div id='circle'></div>
            </div>
          </div>
          <br />
          {/* <hr /> */}
          <h6 className='font-weight-bold'>Border Style</h6>
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
                label='None'
              />
              <FormControlLabel
                className='mx-auto'
                checked={selectedValue === 'c'}
                onChange={handleChange}
                name='radio-button-demo'
                value='c'
                control={<Radio color='primary' />}
                inputProps={{ 'aria-label': 'C' }}
                label='Solid'
              />
            </RadioGroup>
          </div>
          {/* <hr /> */}
          <h6 className='font-weight-bold'>Text</h6>
          <form className={classes.inputfill} noValidate autoComplete='off'>
            <TextField
              id='standard-basic'
              label='Display name(leave blank to reset)'
              defaultValue='@victoriastarikova'
              variant='outlined'
            />
            <TextField
              id='filled-basic'
              label='Bio'
              helperText='0/60'
              variant='outlined'
            />
            <TextField
              id='outlined-basic'
              label='Location'
              variant='outlined'
            />
          </form>
          <br />
          <Button
            className={classes.btnheader}
            variant='outlined'
            color='primary'
          >
            Header Text Color
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
          <h6 className='font-weight-bold'>Format</h6>
          {/* <div id="format"> */}
          {/* format section */}
          <div className='d-flex py-2' id='twodiv'>
            <div className='mx-auto py-5 ' id='box11'>
              <div id='circle'>{/* <div id="bar"></div> */}</div>
              <div className='d-flex' id='smallbox'>
                <div id='boxes'></div>
                <div id='boxes'></div>
                <div id='boxes'></div>
                <div id='boxes'></div>
              </div>
            </div>
            <div className='mx-auto py-5' id='box12'>
              <div id='circle'></div>
            </div>
            {/* </div> */}
          </div>
          <h6 className='font-weight-bold'>Picture Size</h6>
          <Box sx={{ width: '90%' }}>
            <Slider
              aria-label='Custom marks'
              defaultValue={20}
              getAriaValueText={valuetext}
              step={10}
              valueLabelDisplay='auto'
              marks={marks}
            />
          </Box>
          <div className='d-flex py-2' id='twodi'>
            <div className='mx-auto py-5'>
              <div id='circle'></div>
            </div>
          </div>
          <h6 className='font-weight-bold'>Social icons</h6>
          <p>
            Drang and drop using the icons to render.{' '}
            <u>Click here to see your social icon analytics</u>
          </p>
          <form className={classes.inputfill} noValidate autoComplete='off'>
            <div className='py-3' id='socialicons'>
              <DragIndicatorIcon  className={classes.icons}/>
              <MailOutlineIcon className={classes.icons} />
              <TextField
                className={classes.text}
                id='standard-basic'
                label='Email(Clicks: 0)'
                defaultValue='user@mail.com'
                variant='outlined'
              />
              <DeleteOutlineIcon className={classes.icons}/>
            </div>
            <div className='py-3' id='socialicons'>
              <DragIndicatorIcon  className={classes.icons}/>
              <InstagramIcon  className={classes.icons}/>
              <TextField
                className={classes.text}
                id='standard-basic'
                label='Instagram(Clicks: 0)'
                defaultValue='@'
                variant='outlined'
              />
              <DeleteOutlineIcon className={classes.icons}/>
            </div>
            <div className='py-3' id='socialicons'>
              <DragIndicatorIcon className={classes.icons} />
              <TwitterIcon  className={classes.icons}/>
              <TextField
                className={classes.text}
                id='standard-basic'
                label='Twitter(Clicks: 0)'
                defaultValue='@'
                variant='outlined'
              />
              <DeleteOutlineIcon className={classes.icons}/>
            </div>
            <div className='py-3' id='socialicons'>
              <DragIndicatorIcon className={classes.icons} />
              <YouTubeIcon  className={classes.icons}/>
              <TextField
                className={classes.text}
                id='standard-basic'
                label='Youtube(Clicks: 0)'
                defaultValue='@'
                variant='outlined'
              />
              <DeleteOutlineIcon className={classes.icons}/>
            </div>
            <div className='py-3' id='socialicons'>
              <DragIndicatorIcon className={classes.icons} />
              <FacebookIcon  className={classes.icons}/>
              <TextField
                className={classes.text}
                id='standard-basic'
                label='Facebook(Clicks: 0)'
                defaultValue='@'
                variant='outlined'
              />
              <DeleteOutlineIcon className={classes.icons}/>
            </div>
            <div className='py-3' id='socialicons'>
              <DragIndicatorIcon className={classes.icons} />
              <FacebookIcon  className={classes.icons}/>
              <TextField
                className={classes.text}
                id='standard-basic'
                label='Tiktok(Clicks: 0)'
                defaultValue='@'
                variant='outlined'
              />
              <DeleteOutlineIcon className={classes.icons}/>
            </div>
            <div className='py-3' id='socialicons'>
            <Button
            className={classes.btnheader1}
            variant='outlined'
            color='primary'
          >
            Header Text Color
          </Button>
          </div>
          </form>
          {/* </div> */}
        </CardContent>
      </Collapse>
    </Card>
  )
}
