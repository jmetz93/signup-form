import React from 'react';
import styled from 'styled-components';
import Title from '../styled-components/Title.jsx';
import Wrapper from '../styled-components/Wrapper.jsx';
import FormInput from './FormInput.jsx';
import NextButton from '../styled-components/NextButton.jsx';
import PreviousButton from '../styled-components/NextButton.jsx';
import PopUpText from '../styled-components/PopUpText.jsx';

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
`

export default class SecondPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      interest: 'happy',
      phone: this.props.phone,
      validInput: false
    }
  }

  handleInputChange = (event) => {
    const re = /^[0-9\b]+$/; //so only numbers can be entered into phone number box
    if (event.target.value == '' || re.test(event.target.value)) {
      this.setState({
        [event.target.name]: event.target.value 
      });
    }
    this.validateInput(event.target.value);
  }

  validateInput(phoneNumber) {
    if (phoneNumber.toString().length === 10) {
      this.setState({
        validInput: true
      })
    }
  }
  
  backToFirstPage = () => {
    this.props.previous()
  } 

  finish = (event) => {
    event.preventDefault();
      this.props.clickFunction(this.state.interest, this.state.phone);
  }

  render () {
    return (
      <div>
        <Title>Almost Done!</Title>
        <h3>We just need a few more pieces of information:</h3>
        <Wrapper>
          <form onSubmit={this.finish}>
            <FormInput 
              name="phone"
              label="Phone Number(format: 1234567890)"
              type="tel"
              placeholder=""
              value={this.state.phone}
              autocomplete="tel"
              handleChange={this.handleInputChange}
              
            />
            <ButtonRow>
              <PreviousButton
                type="submit"
                id="previous-page-button"
                onClick={this.backToFirstPage}
                >
                Back
              </PreviousButton>
              <NextButton
                type="submit"
                id="finish-button"
                onClick={this.finish}
                disabled={!this.state.validInput}
                >
                Finish
              </NextButton>
              {this.state.validInput && <PopUpText>All Done! Just Hit Finish</PopUpText>}
            </ButtonRow>
          </form>
        </Wrapper>
      </div>
    )
  }
}