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

export default function Integration () {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <DragIndicatorIcon />
        <h6 id='tagcomponent'>Integration</h6>
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
            Select an Integration :
          </Typography>
          <div className="d-flex">
            <div className='w-50 mx-auto py-2 px-2' style={{border:"1px solid black",borderRadius:"7px"}}>
              <p className='px-1'>Laylo</p>
              {/* <br /> */}
              <p className=''>
                Capture your fans's contact info and message them anytime
                you drop content, merch, or events.
              </p>
            </div>
            <div className='w-50 mx-auto ms-2 py-2 px-2' style={{border:"1px solid black",borderRadius:"7px"}}>
              <p className='px-1'>Ko-fi</p>
              {/* <br /> */}
              <p className=''>
                Feature your Ko-fi donation panel to have <br /> all donations
                go directly to your Ko-fi <br /> account
              </p>
            </div>
          </div>
          <div className="d-flex my-2">
            <div className='w-50 mx-auto py-2 px-2' style={{border:"1px solid black",borderRadius:"7px"}}>
              <p className='px-1'>QuickPlace</p>
              {/* <br /> */}
              <p className=''>
                Display your QuickPlace influencer profile, <br /> including
                your promotional offerings and price points.
              </p>
            </div>
            <div className='w-50 mx-auto ms-2 py-2 px-2' style={{border:"1px solid black",borderRadius:"7px"}}>
              <p className='px-1'>Split</p>
              {/* <br /> */}
              <p className=''>
                Showcase comionable products and <br />
                'split' the commission with your audience.
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className='w-50 py-2 px-2' style={{border:"1px solid black",borderRadius:"7px"}}>
              <p className='px-1'>OpenSea</p>
              {/* <br /> */}
              <p className=''>
                Showcase and promote your OpenSea <br /> NFT collections.
              </p>
            </div>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  )
}
