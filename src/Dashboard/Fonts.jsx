import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import { red } from '@material-ui/core/colors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './Home.css'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%',
    borderRadius: '10px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  dropdownname: {
    marginTop:"10px",
    color: 'black',
    fontWeight: 'bold'
    
  }
}))

export default function Fonts () {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false);
  const [age, setAge] = React.useState('')

  const handleChange = event => {
    setAge(event.target.value)
  }

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <h6 id='tagcomponent'>Fonts</h6>
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
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel
              className={classes.dropdownname}
              id='demo-simple-select-helper-label'
            >
               Choose Fonts
            </InputLabel>
            <Select
              labelId='demo-simple-select-helper-label'
              id='demo-simple-select-helper'
              value={age}
              label='Choose fonts'
              displayEmpty
              onChange={handleChange}
              className={classes.selectEmpty}
            >
              <MenuItem value={10}>Poppins</MenuItem>
              <MenuItem value={20}>Saira</MenuItem>
              <MenuItem value={30}>Mulish</MenuItem>
              <MenuItem value={40}>Roboto</MenuItem>
              <MenuItem value={50}>Jost</MenuItem>
              <MenuItem value={60}>Helvetica</MenuItem>
              <MenuItem value={70}>Quicksand</MenuItem>
              <MenuItem value={80}>Merriweather</MenuItem>
              <MenuItem value={90}>Times New Roman</MenuItem>
              <MenuItem value={100}>Arvo</MenuItem>
              <MenuItem value={110}>Berkshire Swash</MenuItem>
              <MenuItem value={111}>Itim</MenuItem>
              <MenuItem value={112}>Bellota</MenuItem>
              <MenuItem value={113}>Aldrich</MenuItem>
              <MenuItem value={114}>Inconsolata</MenuItem>
            </Select>
          </FormControl>
          <div className="d-flex my-2">
            <div className="mx-auto py-3 text-center" id="fonts" style={{border:"2px solid black",width:"31%",borderRadius:"9px"}}>Poppins</div>
            <div className="mx-auto py-3 text-center" id="fonts" style={{border:"2px solid black",width:"31%",borderRadius:"9px"}}>Saira</div>
            <div className="mx-auto py-3 text-center" id="fonts" style={{border:"2px solid black",width:"31%",borderRadius:"9px"}}>Mulish</div>
          </div>
          <div className="d-flex my-2">
            <div className="mx-auto py-3 text-center" id="fonts" style={{border:"2px solid black",width:"31%",borderRadius:"9px"}}>Roboto</div>
            <div className="mx-auto py-3 text-center" id="fonts" style={{border:"2px solid black",width:"31%",borderRadius:"9px"}}>Jost</div>
            <div className="mx-auto py-3 text-center" id="fonts" style={{border:"2px solid black",width:"31%",borderRadius:"9px"}}>Helvetica</div>
          </div>
          <div className="d-flex my-2">
            <div className="mx-auto py-3 text-center" id="fonts" style={{border:"2px solid black",width:"31%",borderRadius:"9px"}}>Quicksand</div>
            <div className="mx-auto py-3 text-center" id="fonts" style={{border:"2px solid black",width:"31%",borderRadius:"9px"}}>Merriweather</div>
            <div className="mx-auto py-3 text-center" id="fonts" style={{border:"2px solid black",width:"31%",borderRadius:"9px"}}>Times New Room</div>
          </div>
          <div className="d-flex my-2">
            <div className="mx-auto py-3 text-center" id="fonts" style={{border:"2px solid black",width:"31%",borderRadius:"9px"}}>Arvo</div>
            <div className="mx-auto py-3 text-center" id="fonts" style={{border:"2px solid black",width:"31%",borderRadius:"9px"}}>Berkshire Swash</div>
            <div className="mx-auto py-3 text-center" id="fonts" style={{border:"2px solid black",width:"31%",borderRadius:"9px"}}>Itim</div>
          </div>
          <div className="d-flex my-2">
            <div className="mx-auto py-3 text-center" id="fonts" style={{border:"2px solid black",width:"31%",borderRadius:"9px"}}>Bellota</div>
            <div className="mx-auto py-3 text-center" id="fonts" style={{border:"2px solid black",width:"31%",borderRadius:"9px"}}>Aldrich</div>
            <div className="mx-auto py-3 text-center" id="fonts" style={{border:"2px solid black",width:"31%",borderRadius:"9px"}}>Inconsolata</div>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  )
}
