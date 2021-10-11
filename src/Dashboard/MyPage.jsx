import React from 'react'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import Home from './Home'
import Text from './Text'
import Links from './Links'
import Email from './EmailandSms'
import AddBlock from './AddBlock'
import LoginPage from '../pages/LoginPage'
import './MyPage.css'
import Twitter from './Twitter'
import Spacer from './Spacer'
import Image from './Image'
import Friends from './Friends'
import Music from './Music'
import Video from './Video'
import Community from './Community'
import Integrations from './Integrations'

const useStyles = makeStyles(theme => ({
  secondheader: {
    display: 'flex',
    width: '100%',
    // height: '30px',
    marginTop: '-45px'
  },
  headingdiv: {

    width: '33%'
  },
  line: {
    height: 10,
    border: '2px solid black'
  }
}))

const MyPage = () => {
  const classes = useStyles()
  return (
    <>
    <LoginPage/>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row gy-6'>
              <Card className={classes.secondheader}>
                {/* <div className={classes.headingdiv}> */}
                  <h6 id='headingtwo'>Home</h6>
                {/* </div> */}
              </Card>
              <hr id='line' />
              <div id='contentcomponent'>
                <Home />
                <br />
                <Text />
                <br />
                <Links />
                <br />
                <Email />
                <br />
                <Twitter/>
                <br />
                {/* <Spacer/> */}
                <Spacer/>
                <br />
                <Image/>
                <br />
                <Friends/>
                <br />
                <Music/>
                <br />
                <Integrations/>
                <br />
                <Video/>
                <br />
                <Community/>
                <br/>
                <AddBlock />
                <br />
                <div id='lastbtn'>
                  <button id='referbtn'>Refer a friend</button>
                  <button id='upgradebtn'>Upgrade</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyPage
