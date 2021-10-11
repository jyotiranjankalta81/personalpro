import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LoginPage from '../pages/LoginPage'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import './Analytics.css'

const useStyles = makeStyles(theme => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: '100%',
    borderRadius: '10px',
    height: '40px'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  dropdownname: {
    color: 'black',
    fontWeight: 'bold'
    
  }
}))

const Analytics = () => {
  const classes = useStyles()
  const [age, setAge] = React.useState('')

  const handleChange = event => {
    setAge(event.target.value)
  }
  return (
    <>
      <LoginPage />
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row gy-6'>
              <div id='analytics'>
                <h3 id='anaheading'>Analytics</h3>
                <FormControl variant='outlined' className={classes.formControl}>
                  <InputLabel
                    className={classes.dropdownname}
                    id='demo-simple-select-helper-label'
                  >
                    Date range
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-helper-label'
                    id='demo-simple-select-helper'
                    value={age}
                    label='Age'
                    onChange={handleChange}
                  >
                    <MenuItem value=''>{/* <em>Date range</em> */}</MenuItem>
                    <MenuItem value={10}>Last 7 days</MenuItem>
                    <MenuItem value={20}>Last 30 days</MenuItem>
                    <MenuItem value={30}>Lifetime</MenuItem>
                  </Select>
                  {/* <FormHelperText>With label + helper text</FormHelperText> */}
                </FormControl>
                <br />
                <br />
                <br />
                <div className='d-flex py-2' id='threediv'>
                    <div className="mx-auto py-2 " id="box1">
                        <h6 id="count">0</h6>
                        <h6 id="percent">-100.0%</h6>
                        <p id="views">Views</p>
                    </div>
                    <div className="mx-auto py-2" id="box2">
                        <h6 id="count">0</h6>
                        <p id="clicks">Clicks</p>
                    </div>
                    <div className="mx-auto py-2" id="box3">
                        <h6 id="percent">0</h6>
                        <p id="ctr">CTR</p>
                    </div>
                </div>
                <br />
                <br />
                <h6>Page Views</h6>
                <br />
                <br />

                <h6>Link clicks</h6>
                <div id="link">
                    <h6 > <i>Analytics may take up to 72 hours to collect enough data to begin display </i></h6>
                </div>
                <br />
                <h6 id="social">
                    Social icon clicks
                </h6>
                <p>you do not have any social icons with clicks yet Go to the<b>Header</b> block to make your first social icon! </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Analytics
