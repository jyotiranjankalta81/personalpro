import React, { useState } from 'react'
import AppContext from '../../context/Context'
import SignupFirst from './SignupFirst'
import Stepone from './Stepone'
import Steptwo from './Steptwo'
import Stepthree from './Stepthree'
import Stepfour from './Stepfour'
import StepFourOne from './StepFourOne'
import StepFourTwo from './StepFourTwo'
import StepFourThree from './StepFourThree'
import Stepfive from './Stepfive'
import Stepsix from './Stepsix'
import { ProgressBar } from './ProgressBar'
import SignupSecond from './SignupSecond'
import StepFourFour from './StepFourFour'

export const SignupForm = () => {
  const [step, setStep] = useState(0)
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [twitterusername, setTwitterusername] = useState('')
  const [instausername, setInstausername] = useState('')
  const [tiktokusername, setTiktokusername] = useState('')
  const [writing, setWriting] = useState('')
  const [art, setArt] = useState('')
  const [dance, setDance] = useState('')
  const [fashion, setFashion] = useState('')
  const [animals, setAnimals] = useState('')
  const [beauty, setBeauty] = useState('')
  const [marketing, setMarketing] = useState('')
  const [adult, setAdult] = useState('')
  const [music, setMusic] = useState('')
  const [student, setStudent] = useState('')
  const [sports, setSports] = useState('')
  const [anime, setAnime] = useState('')
  const [tech, setTech] = useState('')
  const [photography, setPhotography] = useState('')
  const [influencer, setInfluencer] = useState('')
  const [fitness, setFitness] = useState('')
  const [health, setHealth] = useState('')
  const [business, setBusiness] = useState('')
  const [podcast, setPodcast] = useState('')
  const [entertainment, setEntertainment] = useState('')
  const [lifestyle, setLifestyle] = useState('')
  const [food, setFood] = useState('')
  const [books, setBooks] = useState('')
  const [education, setEducation] = useState('')
  const [travel, setTravel] = useState('')
  const [casplay, setCasplay] = useState('')
  const [gaming, setGaming] = useState('')
  const [personal, setPersonal] = useState('')
  const [other, setOther] = useState('')

  const userDetails = {
    currentPage: step,
    Name: name,
    userEmail: email,
    userPassword: password,
    userName: username,
    twitterid: twitterusername,
    instaid: instausername,
    tiktokid: tiktokusername,
    Writing: writing,
    Art: art,
    Dance: dance,
    Fashion: fashion,
    Animals: animals,
    Beauty: beauty,
    Marketing: marketing,
    Adult: adult,
    Music: music,
    Student: student,
    Sports: sports,
    Anime: anime,
    Tech: tech,
    Photography: photography,
    Influencer: influencer,
    Fitness: fitness,
    Health: health,
    Business: business,
    Podcast: podcast,
    Entertainment: entertainment,
    Lifestyle: lifestyle,
    Food: food,
    Books: books,
    Education: education,
    Travel: travel,
    Casplay: casplay,
    Gaming: gaming,
    Personal: personal,
    Other: other,
    setStep,
    setName,
    setEmail,
    setPassword,
    setInstausername,
    setTiktokusername,
    setUsername,
    setTwitterusername,
    setWriting,
    setArt,
    setDance,
    setFashion,
    setAnimals,
    setBeauty,
    setMarketing,
    setAdult,
    setMusic,
    setStudent,
    setSports,
    setAnime,
    setTech,
    setPhotography,
    setInfluencer,
    setFitness,
    setHealth,
    setBusiness,
    setPodcast,
    setEntertainment,
    setLifestyle,
    setFood,
    setBooks,
    setEducation,
    setTravel,
    setCasplay,
    setGaming,
    setPersonal,
    setOther
  }
  return (
    <AppContext.Provider value={{ userDetails }}>
      <div className='body py-5 px-5'>
        {/* <h3>Multi Step Form using ReactJS</h3> */}
        <div className='wrapper'>
          <ProgressBar />
          {step === 0 && <SignupFirst />}
          {step === 1 && <SignupSecond />}
          {step === 2 && <Steptwo />}
          {step === 3 && <Stepfour />}
          {step === 4 && <StepFourOne />}
          {step === 5 && <StepFourTwo />}
          {step === 6 && <StepFourThree />}
          {step === 7 && <Stepfive />}
          {step === 8 && <StepFourFour />}
          {step === 9 && <Stepone />}
          {step === 10 && <Stepthree />}
          {step === 11 && <Stepsix />}
        </div>
      </div>
    </AppContext.Provider>
  )
}
