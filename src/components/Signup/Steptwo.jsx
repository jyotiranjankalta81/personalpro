import React, {useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AppContext from '../../context/Context'
// import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  root3: {
    width: '100%'
  },
  root4: {
    width: '60%'
  },
  sign1: {
    height: '48px',
    margin:"5px 5px",
    padding:"10px 10px",
    width: '30%',
    backgroundColor:"transparent",
    color: 'black',
    borderRadius:"5px",
    // vertical-align:" middle",
    // display:"flex",
    // alignItems:"center",
    // textAlign:"center",
    // justifyContent:"center",
    cursor:"pointer",
    border:"1px solid black"
  },
  sign: {
    height: '48px',
    width: 'auto',
    backgroundColor: 'black',
    color: 'white'
  }
})

function valuetext (value) {
  return `${value}x`
}

const Steptwo = () => {
  const classes = useStyles();
  const myContext = useContext(AppContext);
  const updateContext = myContext.userDetails;

  const next = () => {
    if (updateContext.userEmail === "") {
      console.log('Please enter your Name')
    } else updateContext.setStep(updateContext.currentPage + 1)
  };
  return (
    <div>
      <div className='my-5 mx-5' style={{width:"35%"}}>
      
        <Typography variant='h6' id='discrete-slider-small-steps' gutterBottom>
          Tell us a bit about yourself
        </Typography>
        <h6 className='weight-bold'>
          Choose one category that best describes you,and we'll help level up your page.
        </h6>
        <br />
        <br />
        <div className={classes.root1}>
        <form
          noValidate
          autoComplete='off'
        >
          <Input type="btn" value="writing" InputProps={{readOnly: true,}} label="writing" onChange={e => updateContext.setWriting(e.target.value)} className={classes.sign1}  variant='outlined'/>
            {/* Writing */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="art" onChange={e => updateContext.setArt(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Art */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="dance" onChange={e => updateContext.setDance(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Dance */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="fashion" onChange={e => updateContext.setFashion(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Fashion */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="animals" onChange={e => updateContext.setAnimals(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Animals */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="beauty" onChange={e => updateContext.setBeauty(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Beauty */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="marketing" onChange={e => updateContext.setMarketing(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Marketing */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="adult" onChange={e => updateContext.setAdult(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Adult */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="music" onChange={e => updateContext.setMusic(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Music */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="student" onChange={e => updateContext.setStudent(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Student */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="sports" onChange={e => updateContext.setSports(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Sports */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="anime" onChange={e => updateContext.setAnime(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Anime */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="tech" onChange={e => updateContext.setTech(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Tech */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="photography" onChange={e => updateContext.setPhotography(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Photography */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="influencer" onChange={e => updateContext.setInfluencer(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Influencer */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="fitness" onChange={e => updateContext.setFitness(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Fitness */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="health" onChange={e => updateContext.setHealth(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Health */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="business" onChange={e => updateContext.setBusiness(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Business */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="podcast" onChange={e => updateContext.setPodcast(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Podcast */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="entertainment" onChange={e => updateContext.setEntertainment(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Entertainment */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="lifestyle" onChange={e => updateContext.setLifestyle(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Lifestyle */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="food" onChange={e => updateContext.setFood(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Food */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="Books" onChange={e => updateContext.setBooks(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Books */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="education" onChange={e => updateContext.setEducation(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Education */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="travel" onChange={e => updateContext.setTravel(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Travel */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="casplay" onChange={e => updateContext.setCasplay(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Casplay */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="gaming" onChange={e => updateContext.setGaming(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Gaming */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="personal" onChange={e => updateContext.setPersonal(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Personal */}
          
          <Input type="btn" InputProps={{readOnly:true}} value="other" onChange={e => updateContext.setOther(e.target.value)} className={classes.sign1} variant='outlined'/>
            {/* Other */}
            <br />
          
          <Button className={classes.sign} onClick={next} variant='outlined'>
            Continue
          </Button>

        </form>
        </div>
        <br />
        <div className={classes.root1}>
        </div>
      </div>
    </div>
  )
}

export default Steptwo;
