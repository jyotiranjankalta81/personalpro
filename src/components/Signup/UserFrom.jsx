import React, { Component } from 'react'
import SignupFirst from './SignupFirst'
import Stepone from './Stepone'
import Steptwo from './Steptwo'
import Stepthree from './Stepthree'
import Stepfour from './Stepfour'
import Stepfive from './Stepfive'
import Stepsix from './Stepsix'

export class UserFrom extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }
  // Go back to prev step
  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }
 // Handle fields change
 handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };


  render () {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
        case 1:
        return (
          <SignupFirst
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 2:
        return (
          <Stepone
            nextStep={this.nextStep}
            // prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 3:
        return (
          <Steptwo
            nextStep={this.nextStep}
            // prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 4:
        return (
          <Stepthree
            nextStep={this.nextStep}
            // prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 5:
        return (
          <Stepfour
            nextStep={this.nextStep}
            // prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 6:
        return (
          <Stepfive
            nextStep={this.nextStep}
            // prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 7:
        return <Stepsix />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
    // return <div></div>
  }
}

export default UserFrom
