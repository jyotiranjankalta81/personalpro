import React from 'react'
import Themes from './Themes'
import Pagestyle from './Pagestyle'
import LoginPage from '../pages/LoginPage'
import Background from './Background'
import Pagecolors from './Pagecolors'
import Fonts from './Fonts'
// import Add

const Appearence = () => {
  return (
    <>
    <LoginPage/>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row gy-6' id='blogcontent_type'>
            <div id='contentcomponent'>
              <Themes/>
              <br />
              <Pagestyle/>
              <br />
              <Background/>
              <br />
              <Pagecolors/>
              <br />
              <Fonts/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Appearence
