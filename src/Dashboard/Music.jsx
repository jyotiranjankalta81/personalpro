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
      width: '100%',
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

export default function Music () {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <DragIndicatorIcon />
        <h6 id='tagcomponent'>Music</h6>
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
            Embed Spotify.Apple Music,soundCloud,and Bandcamp<u>Click here to see examples</u>.
          </Typography>
          <form className={classes.inputfill} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Music url or embed code" variant="outlined" />
          </form>
            <Button
              className={classes.btnheader}
              variant='outlined'
              color='primary'
            >
              Save
            </Button>
        </CardContent>
      </Collapse>
    </Card>
  )
}
