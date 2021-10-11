import React from "react"
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import Beacons from './components/Beacons';
import Blogs from './components/Blogs';
import Pricing from './components/Pricing';
import WereHiring from './components/WereHiring';
import Gallery from './components/Gallery';
// import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import Appearence from './Dashboard/Appearence';
import MyPage from './Dashboard/MyPage';
import Analytics from './Dashboard/Analytics';
import Signin from './components/Signin';
import SignupFirst from './components/Signup/SignupFirst';
import SignupSecond from './components/Signup/SignupSecond';
import Stepone from './components/Signup/Stepone';
import Steptwo from './components/Signup/Steptwo';
import Stepthree from './components/Signup/Stepthree';
import Stepfour from './components/Signup/Stepfour';
import Stepfive from './components/Signup/Stepfive';
import Stepsix from './components/Signup/Stepsix';
import Audience from './Dashboard/Audience';
import BeconsCommunity from './Dashboard/BeconsCommunity';
import Earnings from './Dashboard/Earnings';
import Emaillist from './Dashboard/Emaillist';
import QRCode from './Dashboard/QRCode';
import Referrals from './Dashboard/Referrals';
import { SignupForm } from "./components/Signup/SignupForm";

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Navbar/> */}
    <Switch>
    <Route exact path="/" component={Beacons}/>
    <Route exact path="/blog" component={Blogs}/>
    <Route exact path="/pricing" component={Pricing}/>
    <Route exact path="/werehiring" component={WereHiring}/>
    <Route exact path="/gallery" component={Gallery}/>
    <Route exact path="/Login" component={LoginPage}/>
    <Route exact path="/home" component={MyPage}/>
    <Route exact path="/appearance" component={Appearence}/>
    <Route exact path="/analytics" component={Analytics}/>
    <Route exact path="/signin" component={Signin}/>
    <Route exact path="/signup" component={SignupForm}/>
    <Route exact path="/signup1"  component={SignupFirst}/>
    <Route exact path="/signup2"  component={SignupSecond}/>
    <Route exact path="/stepone" component={Stepone}/>
    <Route exact path="/steptwo" component={Steptwo}/>
    <Route exact path="/stepthree" component={Stepthree}/>
    <Route exact path="/stepfour" component={Stepfour}/>
    <Route exact path="/stepfive" component={Stepfive}/>
    <Route exact path="/stepsix" component={Stepsix}/>
    <Route exact path="/audience" component={Audience}/>
    <Route exact path="/communityinfo" component={BeconsCommunity}/>
    <Route exact path="/earnings" component={Earnings}/>
    <Route exact path="/emaillist" component={Emaillist}/>
    <Route exact path="/qrcode" component={QRCode}/>
    <Route exact path="/referrals" component={Referrals}/>
    <Route component={NotFound}/>
    <Redirect/>
    </Switch>
    {/* <Footer/> */}
    </BrowserRouter>
    </>
  );
}

export default App;
