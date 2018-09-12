import React from 'react';
import styled from 'styled-components';
import Title from '../styled-components/Title.jsx';
import Wrapper from '../styled-components/Wrapper.jsx';
import FormInput from './FormInput.jsx'; 
import NextButton from '../styled-components/NextButton.jsx';

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
`

export default class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requirementsFilled: false,
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      password: this.props.password,
      emailAddress: this.props.email,
    };
  }

  handleInputChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value 
    }); 

  }

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
              label="Email"
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
              >
                Next
              </NextButton>
            </ButtonRow>
          </form>
        </Wrapper>
      </div>
    )
  }
}