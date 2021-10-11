import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import IconButton from '@material-ui/core/IconButton'
import { red } from '@material-ui/core/colors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import WarningIcon from '@material-ui/icons/Warning'
import './Pagestyle.css'

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
  }
}))

export default function Pagestyle () {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState('a')
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true
  })

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
        <h6 id='tagcomponent'>Page Style</h6>
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
            <div className='mx-auto py-4 px-3' id='styles'>
              <div className='my-3 ' id='insidebox11'></div>
            </div>
            <div className='mx-auto py-4 px-3' id='styles'>
              <div className='my-3' id='insidebox12'></div>
            </div>
            <div className='mx-auto py-4' id='styles'>
              <div className='my-3' id='insidebox13'></div>
            </div>
            <div className='mx-auto py-4 px-3' id='styles'>
              <div className='my-3' id='insidebox14'></div>
            </div>
          </div>
          <div className='d-flex'>
            <h6 className='w-25 text-center py-2'>Squre</h6>
            <h6 className='w-25 text-center py-2'>Round</h6>
            <h6 className='w-25 text-center py-2'>Full Width</h6>
            <h6 className='w-25 text-center py-2'>Custom</h6>
          </div>
          <h6 className='font-weight-bold'>Transparency level</h6>
          <div>
            <RadioGroup row>
              <FormControlLabel
                className='mx-auto'
                checked={selectedValue === 'a'}
                onChange={handleChange}
                value='a'
                control={<Radio color='primary' />}
                name='radio-button-demo'
                inputProps={{ 'aria-label': 'A' }}
                label='None'
              />
              <FormControlLabel
                className='mx-auto'
                checked={selectedValue === 'b'}
                onChange={handleChange}
                name='radio-button-demo'
                value='b'
                control={<Radio color='primary' />}
                inputProps={{ 'aria-label': 'B' }}
                label='Solid'
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
              <FormControlLabel
                className='mx-auto'
                checked={selectedValue === 'd'}
                onChange={handleChange}
                name='radio-button-demo'
                value='d'
                control={<Radio color='primary' />}
                inputProps={{ 'aria-label': 'D' }}
                label='Solid'
              />
            </RadioGroup>
          </div>
          <div className="" id='issue'>
            <div className='d-flex px-3 py-3'>
              <WarningIcon />
              <h6 className='font-weight-bold mx-3 my-1'>
                Accessibility issue
              </h6>
            </div>
            <p className='px-3 pb-4'>
              To maximize readability and accessibility on your page, we
              recommend using 0% transparency
            </p>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  )
}
