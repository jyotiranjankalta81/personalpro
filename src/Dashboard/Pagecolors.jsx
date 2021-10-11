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
  btnheaderpage: {
    width: '100%',
    height: '50px',
    color: 'white',
    fontWeight: 'bold',
    marginTop: '15px',
    backgroundColor: 'black'
  },
  btnheaderpage1: {
    width: '50%',
    height: '50px',
    color: 'black',
    fontWeight: 'bold',
    // marginTop: '15px',
    margin:"auto",
    marginRight:"10px",
    border:"1px solid black",
    backgroundColor: 'white'
  },
  btnheaderpage2: {
    width: '50%',
    height: '50px',
    color: 'white',
    fontWeight: 'bold',
    // marginTop: '15px',
    margin:"auto",
    backgroundColor: 'black'
  },
  btnheaderpage3: {
    width: '50%',
    height: '50px',
    color: 'black',
    fontWeight: 'bold',
    // marginTop: '15px',
    border:"1px solid black",
    margin:"auto",
    marginLeft:"10px",
    backgroundColor: 'wheat'
  },
}))

export default function Pagecolors () {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <h6 id='tagcomponent'>Page Colors</h6>
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
          <Button
            className={classes.btnheaderpage}
            variant='outlined'
            color='primary'
          >
            Blocks
          </Button>
          <div className="d-flex my-3">
          <Button
            className={classes.btnheaderpage1}
            variant='outlined'
            // color='primary'
          >
            Text
          </Button>
          <Button
            className={classes.btnheaderpage2}
            variant='outlined'
            // color='primary'
          >
            Button text
          </Button>

          </div>
          <div className="d-flex">
          <Button
            className={classes.btnheaderpage2}
            variant='outlined'
            // color='primary'
          >
            Links
          </Button>
          <Button
            className={classes.btnheaderpage3}
            variant='outlined'
            // color='primary'
          >
            Buttons
          </Button>

          </div>
        </CardContent>
      </Collapse>
    </Card>
  )
}
