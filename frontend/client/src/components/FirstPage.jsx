import React from 'react';
import styled from 'styled-components';
import Title from '../styled-components/Title.jsx';
import Wrapper from '../styled-components/Wrapper.jsx';
import FormInput from './FormInput.jsx'; 
import NextButton from '../styled-components/NextButton.jsx';

const PasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const ShowHideButton = styled.button`
  float: right;
  height: 10px;
  width: 20px;
  padding: 7px 14px;
  font-size: 14px;
  color: white;
  border-bottom-left-radius: 3.5px;
  border-bottom-right-radius: 3.5px;
  border-top-left-radius: 3.5px;
  border-top-right-radius: 3.5px;
`

export default class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requirementsFilled: false,
      firstName: props.firstName,
      lastName: props.lastName,
      password: props.password,
      emailAddress: props.email,
    };
    this.handleChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log('val: ', event.target.value);
    this.setState({
      [event.target.name]: event.target.value 
    }); 
  }

  render () {
    return (
      <div>
        <Title>Welcome!</Title>
        <h3>Please fill out the following information to join:</h3>
        <Wrapper>
          <form onSubmit={() => this.props.clickFunction(this.state,firstName, this.state.lastName, this.state.password,this.state.emailAddress)}>
          <FormInput
            name="firstName"
            label="First Name"
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            autocomplete="given-name"
            handleChange={this.handleChange}
          />
          <FormInput
            name="lastName"
            label="Last Name"
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            autocomplete="family-name"
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            label="Password (minimum 8 characters)"
            type="password"
            placeholder="Password"
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <FormInput
              name="emailAddress"
              label="Email"
              type="email"
              placeholder="Email"
              value={this.state.email}
              autocomplete="email"
              handleChange={this.handleChange}
            />
            <NextButton
              type="submit"
              id="next-page-button"
            >
              Next
            </NextButton>
          </form>
        </Wrapper>
      </div>
    )
  }
}