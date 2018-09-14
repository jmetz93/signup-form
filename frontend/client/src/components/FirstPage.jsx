import React from 'react';
import styled from 'styled-components';
import validator from 'validator';
import Title from '../styled-components/Title.jsx';
import Wrapper from '../styled-components/Wrapper.jsx';
import FormInput from './FormInput.jsx'; 
import NextButton from '../styled-components/NextButton.jsx';
import PopUpText from '../styled-components/PopUpText.jsx'

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
`

export default class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allValidInputs: this.props.valid,
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      password: this.props.password,
      emailAddress: this.props.email,
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    }, () => this.validateAllInputs(this.state));
  }

  //Check that all information is given
  validateAllInputs = (state) => {
    if (state.firstName.length > 0 && state.lastName.length > 0 && state.password.length >= 8 && validator.isEmail(state.emailAddress)) {
      this.setState({
        allValidInputs: true
      })
    }
  }

  //Send up to app component to render second page component
  nextStep = (event) => {
    event.preventDefault();
    this.props.clickFunction(this.state.firstName, this.state.lastName, this.state.password, this.state.emailAddress);
  }

  render () {
    return (
      <div>
        <Title>Welcome!</Title>
        <h3>Please fill out the following information to join:</h3>
        <Wrapper>
          <form onSubmit={this.nextStep}>
          <FormInput
            name="firstName"
            label="First Name"
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            autocomplete="given-name"
            handleChange={this.handleInputChange}
          />
          <FormInput
            name="lastName"
            label="Last Name"
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            autocomplete="family-name"
            handleChange={this.handleInputChange}
          />
          <FormInput
            name="password"
            label="Password (minimum 8 characters)"
            type="password"
            placeholder="Password"
            value={this.state.password}
            handleChange={this.handleInputChange}
          />
          <FormInput
              name="emailAddress"
              label="Email (example@gmail.com)"
              type="email"
              placeholder="Email"
              value={this.state.emailAddress}
              autocomplete="email"
              handleChange={this.handleInputChange}
            />
            <ButtonRow>
              <NextButton
                type="submit"
                id="next-page-button"
                disabled={!this.state.allValidInputs}
              >
                Next
              </NextButton>
              {this.state.allValidInputs && <PopUpText>Hit Next to Continue!</PopUpText>}
            </ButtonRow>
          </form>
        </Wrapper>
      </div>
    )
  }
}