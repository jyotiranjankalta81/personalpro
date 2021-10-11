import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import Switch from '@material-ui/core/Switch'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator'
import './Home.css'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
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
}))

export default function EmailandSms () {
  const classes = useStyles()
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  })
  const [expanded, setExpanded] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('b');

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
        <h6 id='tagcomponent'>Email and Sms</h6>
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
          {/* <div className='d-flex'> */}
            <Switch
              checked={state.checkedB}
              onChange={handleChange}
              color='primary'
              name='checkedB'
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            {/* <Typography className={classes.text1}>Text</Typography> */}
          {/* </div> */}
          {/* <Typography paragraph>Method:</Typography> */}
          <Typography varient="subtitle2">
            Collect emails or SMS numbers from your visitors.
            <u>Click here to see examples.</u>
          </Typography>
          {/* <br /> */}
          <br />
          <h6 id='largetest' className='font-weight-bold '>
            Collecting
          </h6>
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
                label='Email'
              />
              <FormControlLabel
                className='mx-auto'
                checked={selectedValue === 'c'}
                onChange={handleChange}
                name='radio-button-demo'
                value='c'
                control={<Radio color='primary' />}
                inputProps={{ 'aria-label': 'C' }}
                label='SMS'
              />
            </RadioGroup>
          </div>
          <h6 id='largetest' className='font-weight-bold '>
            Style
          </h6>
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
                label='Compact'
              />
              <FormControlLabel
                className='mx-auto'
                checked={selectedValue === 'c'}
                onChange={handleChange}
                name='radio-button-demo'
                value='c'
                control={<Radio color='primary' />}
                inputProps={{ 'aria-label': 'C' }}
                label='Card'
              />
            </RadioGroup>
          </div>
          <form className={classes.inputfill} noValidate autoComplete='off'>
            <TextField
              id='standard-basic'
              label='Title'
              defaultValue='Stay up to date'
              variant='outlined'
            />
            <TextField
              id='filled-basic'
              label='Submit button'
              defaultValue='Submit'
              // helperText='0/60'
              variant='outlined'
            />
            <TextField
              id='outlined-basic'
              defaultValue='Description(card style only)'
              variant='outlined'
            />
            <TextField
              id='standard-basic'
              label='Sucess message(after submitting)'
              defaultValue='Submitted!'
              variant='outlined'
            />
          </form>
          <br />
          <div className='d-flex justify-content-between w-100'>
            <h6 id='largetest' className=' '>
              Name field &#40;card style only&#41;
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
              Custom field &#40;card style only&#41;
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
              Custom legal info
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
          <br />
          <br />
          <h6 id='largetest' className='font-weight-bold '>
            Information destination
          </h6>
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
                label='Beacons'
              />
              <FormControlLabel
                className='mx-auto'
                checked={selectedValue === 'c'}
                onChange={handleChange}
                name='radio-button-demo'
                value='c'
                control={<Radio color='primary' />}
                inputProps={{ 'aria-label': 'C' }}
                label='mailchimp'
              />
            </RadioGroup>
          </div>
          {/* <br /> */}
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
                label='Zaapier'
              />
              <FormControlLabel
                className='mx-auto'
                checked={selectedValue === 'c'}
                onChange={handleChange}
                name='radio-button-demo'
                value='c'
                control={<Radio color='primary' />}
                inputProps={{ 'aria-label': 'C' }}
                label='Substack'
              />
            </RadioGroup>
          </div>
          <br />
          <Button
            className={classes.btnheader}
            variant='outlined'
            color='primary'
          >
            View my subscribers
          </Button>
          <br />
          <br />
          <Typography passage>
            Display "join Beacons Community" promt after signup.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
