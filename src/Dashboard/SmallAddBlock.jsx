import React from 'react'
// import React from 'react'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import PhonelinkIcon from '@material-ui/icons/Phonelink'
import AssignmentIcon from '@material-ui/icons/Assignment'
import EmailIcon from '@material-ui/icons/Email'
import PermMediaIcon from '@material-ui/icons/PermMedia'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import TwitterIcon from '@material-ui/icons/Twitter'
import ForumIcon from '@material-ui/icons/Forum'
import SettingsInputCompositeIcon from '@material-ui/icons/SettingsInputComposite'
import './SmallAddBlock.css'

const SmallAddBlock = props => {
  return (
    <>
      <div id='smallbox'>
        <div className='container-fluid mb-5'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row gy-4'>
                <div
                  className='col-md-4 col-10 mx-auto'
                  id='iconmenu'
                  to='/'
                  exact
                >
                  <div className='card align-items-center'>
                    <AccountBoxIcon />
                    <h6>Header</h6>
                  </div>
                </div>
                <div
                  className='col-md-4 col-10 mx-auto'
                  id='iconmenu'
                  to='/'
                  exact
                >
                  <div className='card align-items-center'>
                    <PhonelinkIcon />
                    <h6>Links</h6>
                  </div>
                </div>
                <div
                  className='col-md-4 col-10 mx-auto'
                  id='iconmenu'
                  to='/'
                  exact
                >
                  <div className='card align-items-center'>
                    <AssignmentIcon />
                    <h6>Text</h6>
                  </div>
                </div>
                <div
                  className='col-md-4 col-10 mx-auto'
                  id='iconmenu'
                  to='/'
                  exact
                >
                  <div className='card align-items-center'>
                    <EmailIcon />
                    <h6>Email and SMS</h6>
                  </div>
                </div>
                <div
                  className='col-md-4 col-10 mx-auto'
                  id='iconmenu'
                  to='/'
                  exact
                >
                  <div className='card align-items-center'>
                    <PermMediaIcon />
                    <h6>Image</h6>
                  </div>
                </div>
                <div
                  className='col-md-4 col-10 mx-auto'
                  id='iconmenu'
                  to='/'
                  exact
                >
                  <div className='card align-items-center'>
                    <PlayCircleFilledIcon />
                    <h6>Video</h6>
                  </div>
                </div>
                <div
                  className='col-md-4 col-10 mx-auto'
                  id='iconmenu'
                  to='/'
                  exact
                >
                  <div className='card align-items-center'>
                    <LibraryMusicIcon />
                    <h6>Music</h6>
                  </div>
                </div>
                <div
                  className='col-md-4 col-10 mx-auto'
                  id='iconmenu'
                  to='/'
                  exact
                >
                  <div className='card align-items-center'>
                    <PeopleAltIcon />
                    <h6>Friends</h6>
                  </div>
                </div>
                <div
                  className='col-md-4 col-10 mx-auto'
                  id='iconmenu'
                  to='/'
                  exact
                >
                  <div className='card align-items-center'>
                    <TwitterIcon />
                    <h6>Twitter</h6>
                  </div>
                </div>
                <div
                  className='col-md-4 col-10 mx-auto'
                  id='iconmenu'
                  to='/'
                  exact
                >
                  <div className='card align-items-center '>
                    <ForumIcon />
                    <h6>Community</h6>
                  </div>
                </div>
                <div
                  className='col-md-4 col-10 mx-auto'
                  id='iconmenu'
                  to='/'
                  exact
                >
                  <div className='card align-items-center '>
                    <SettingsInputCompositeIcon />
                    <h6>Integration</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container-fluid mb-5' id="moneydiv">
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row gy-4'>
                  <h5 className="text-center">Monetization</h5>
                <div
                  className='col-md-4 col-10 mx-auto'
                  id='iconmenu'
                  to='/'
                  exact
                >
                  <div className='card align-items-center '>
                    <AccountBoxIcon />
                    <h6>Header</h6>
                  </div>
                </div>
                <div
                  className='col-md-4 col-10 mx-auto'
                  id='iconmenu'
                  to='/'
                  exact
                >
                  <div className='card align-items-center'>
                    <PhonelinkIcon />
                    <h6>Links</h6>
                  </div>
                </div>
                <div
                  className='col-md-4 col-10 mx-auto'
                  id='iconmenu'
                  to='/'
                  exact
                >
                  <div className='card align-items-center'>
                    <AssignmentIcon />
                    <h6>Text</h6>
                  </div>
                </div>
                <div
                  className='col-md-4 col-10 mx-auto'
                  id='iconmenu'
                  to='/'
                  exact
                >
                  <div className='card align-items-center'>
                    <EmailIcon />
                    <h6>Email and SMS</h6>
                  </div>
                </div>
                <div
                  className='col-md-4 col-10 mx-auto'
                  id='iconmenu'
                  to='/'
                  exact
                >
                  <div className='card align-items-center'>
                    <PermMediaIcon />
                    <h6>Image</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SmallAddBlock
