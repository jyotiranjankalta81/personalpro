import React, {useContext} from 'react'
import AppContext from '../../context/Context'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import Swal from 'sweetalert2'

const useStyles = makeStyles({
  root: {
    width: 300
  },
  root3: {
    width: '100%'
  },
  root4: {
    width: '60%'
  },
  sign: {
    height: '48px',
    width: '60%',
    backgroundColor: 'black',
    color: 'white'
  }
})


const Stepone = () => {
  const classes = useStyles()
  const myContext = useContext(AppContext);
  const updateContext = myContext.userDetails;

  const username = updateContext.userName;
  const twitterusername = updateContext.twitterid;
  const instausername = updateContext.instaid;
  const tiktokusername = updateContext.tiktokid;
  const name = updateContext.Name;
  const email = updateContext.userEmail;
  const password = updateContext.userPassword;
  const writing = updateContext.Writing;
  const art = updateContext.Art;
  const dance = updateContext.Dance;
  const fashion = updateContext.Fashion;
  const animals = updateContext.Animals;
  const beauty = updateContext.Beauty;
  const marketing = updateContext.Marketing;
  const adult = updateContext.Adult;
  const music = updateContext.Music;
  const student = updateContext.student;
  const sports = updateContext.sports;
  const anime = updateContext.Anime;
  const tech = updateContext.Tech;
  const photography = updateContext.Photography;
  const influencer = updateContext.Influencer;
  const fitness = updateContext.Fitness;
  const health = updateContext.health;
  const business = updateContext.business;
  const podcast = updateContext.podcast;
  const entertainment = updateContext.entertainment;
  const lifestyle = updateContext.lifestyle;
  const food = updateContext.Food;
  const books = updateContext.Books;
  const education = updateContext.Education;
  const travel = updateContext.Travel;
  const casplay = updateContext.Casplay;
  const gaming = updateContext.Gaming;
  const personal = updateContext.Personal;
  const other = updateContext.Other;

  const next = () => {
    // try {
    //   await axios.post(`http://localhost:5000/api/register`, {
    //     username: username,
    //     name:name,
    //     email:email,
    //     passworrd:password,
    //     twitterusername: twitterusername,
    //     instausername: instausername,
    //     tiktokusername: tiktokusername,
    //     Writing:writing,
    //     Art:art,
    //     Dance:dance,
    //     Fashion:fashion,
    //     Animals:animals,
    //     Beauty:beauty,
    //     Marketing:marketing,
    //     Adult:adult,
    //     Music:music,
    //     Student:student,
    //     Sports:sports,
    //     Anime:anime,
    //     Tech:tech,
    //     Photography:photography,
    //     Influencer:influencer,
    //     Fitness:fitness,
    //     Health:health,
    //     Business:business,
    //     Podcast:podcast,
    //     Entertainment:entertainment,
    //     Lifestyle:lifestyle,
    //     Food:food,
    //     Books:books,
    //     Education:education,
    //     Travel:travel,
    //     Casplay:casplay,
    //     Gaming:gaming,
    //     Personal:personal,
    //     Other:other,
    //   })
    //   Swal.fire('Awesome!', "You're successfully registered!", 'success').then(
    //     result => {
    //       if (result.isConfirmed || result.isDismissed) {
    //         updateContext.setStep(updateContext.currentPage + 2 )
    //       }
    //     }
    //     )
    // } catch (error) {
      //   if (error.response) {
        //     Swal.fire({
          //       icon: 'error',
          //       title: 'Oops...',
          //       text: error.response.data
          //     })
          //     console.log('error', error.response.data)
          //   }
          // }
              console.log(updateContext);
  }
  return (
    <div>
      <div className='my-5 mx-5 w-50 '>
        {/* <Slider
          className={classes.root}
          defaultValue={0.00000005}
          getAriaValueText={valuetext}
          aria-labelledby='discrete-slider-small-steps'
          step={0.00000001}
          marks
          min={-0.00000005}
          max={0.0000001}
          valueLabelDisplay='auto'
        /> */}
        <Typography variant='h6' id='discrete-slider-small-steps' gutterBottom>
          Magic steps
        </Typography>
        <h6 className='weight-bold'>
          {' '}
          use your existing content to instantly customize your <br /> page.
        </h6>
        <br />
        <form
          className={classes.root3}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='outlined-basic'
            className={classes.root4}
            name='tiktokusername'
            label='@ Your Tiktok username'
            variant='outlined'
            onChange={e => updateContext.setTiktokusername(e.target.value)}
            // value={tiktokusername}
          />
          <br />
          <br />
          <TextField
            id='outlined-basic'
            className={classes.root4}
            name='instausername'
            label='@ Your instagram username'
            variant='outlined'
            onChange={e => updateContext.setInstausername(e.target.value)}
            // value={instausername}
          />
          <br />
          <br />

          <TextField
            id='outlined-basic'
            className={classes.root4}
            name='twitterusername'
            label='@ Your Twitter username'
            variant='outlined'
            onChange={e => updateContext.setTwitterusername(e.target.value)}
            // value={twitterusername}
          />
          <br />
          <br />
          <Button className={classes.sign} onClick={next} variant='outlined'>
            Continue
          </Button>
        </form>
        <br />
        <div className={classes.root1}>
          {/* <NavLink className='text-decoration-none' to='/steptwo'></NavLink> */}
        </div>
      </div>
    </div>
  )
}
export default Stepone
