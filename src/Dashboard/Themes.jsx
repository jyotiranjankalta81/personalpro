import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './Home.css'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 700,
    backgroundColor: 'white'
  },
  cadroot:{
    border:"1px solid black",
    width:"200px",
    height:"300px",
    textAlign:"center",
    margin:"0px 10px"
  },
  cadroot1:{
    margin:"auto",
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

export default function Themes () {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <h6 id='tagcomponent'>Themes</h6>
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
          <div className="d-flex">
          <Card className={classes.cadroot}>
            <br />
            <Avatar className={classes.cadroot1} alt='Remy Sharp'  />
            <Typography variant='body2' gutterBottom>
              @name
            </Typography>
            <Button my="10px" variant="outlined">Default</Button>
            <br />
            {/* <br /> */}
            <Button my="10px" variant="outlined">Default</Button>
            
          </Card>
          <Card className={classes.cadroot}>
            <br />
            <Avatar className={classes.cadroot1} alt='Remy Sharp'  />
            <Typography variant='body2' gutterBottom>
              @name
            </Typography>
            <Button my="10px" variant="outlined">Default</Button>
            <br />
            {/* <br /> */}
            <Button my="10px" variant="outlined">Default</Button>
            
          </Card>
          <Card className={classes.cadroot}>
            <br />
            <Avatar className={classes.cadroot1} alt='Remy Sharp'  />
            <Typography variant='body2' gutterBottom>
              @name
            </Typography>
            <Button my="10px" variant="outlined">Default</Button>
            <br />
            {/* <br /> */}
            <Button my="10px" variant="outlined">Default</Button>
            
          </Card>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  )
}
