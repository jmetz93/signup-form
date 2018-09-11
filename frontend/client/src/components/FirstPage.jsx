import React from 'react';
import Title from '../styled-components/Title.jsx';
import Wrapper from '../styled-components/Wrapper.jsx';
import FormInput from './FormInput.jsx'; 
import Button from '../styled-components/Button.jsx';


export default class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requirementsFilled: false
    };
  }

  render () {
    return (
      <div>
        <Title>Welcome!</Title>
        <h3>Please fill out the following information to sign up:</h3>
        <Wrapper>
          <form onSubmit={this.props.nextPage}>
          <FormInput
            name="firstName"
            label="First Name"
            type="text"
            placeholder="First Name"
            value={this.props.person.firstName}
            handleChange={this.handleFirstNameChange}
          />
          <FormInput
            name="lastName"
            label="Last Name"
            type="text"
            placeholder="Last Name"
            value={this.props.person.lastName}
            handleChange={this.handleFirstNameChange}
          />
          <Button
            type="submit"
            id="next-page-button"
          >
            Next
          </Button>
          </form>
        </Wrapper>
      </div>
    )
  }
}