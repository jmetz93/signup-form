import React from 'react';
import axios from 'axios';
import FirstPage from './FirstPage.jsx';
import SecondPage from './SecondPage.jsx';
import Finished from './Finished.jsx';
import Title from '../styled-components/Title.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      interest: 'happy',
      phone: '',
      formSection: 'first' 
    };
  }

  nextPage = (firstName, lastName, password, email) => {
    this.setState({
      formSection: 'second',
      firstName: firstName,
      lastName: lastName,
      password: password,
      email: email
    });
  }

  previousPage () {
    this.setState({
      formSection: 'first'
    });
  }

  finish (interest, phone) {
    this.setState({
      interest: interest,
      phone: phone
    })
    this.enterPerson();
  }

  enterPerson () {

  }

  render () {
    console.log('state first: ', this.state.firstName)
    return (
      <div>
        {this.state.formSection === 'first' && 
          <FirstPage firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    password={this.state.password}
                    email={this.state.email} 
                    clickFunction={this.nextPage} />}
        {this.state.formSection === 'second' && 
          <SecondPage interest={this.state.interest}
                      phone={this.state.phone}
                      clickFuntion={this.finish}
                      previous={this.previousPage} />}
        {this.state.formSection === 'finished' && 
          <Finished firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    password={this.state.password}
                    email={this.state.email} 
                    interest={this.state.interest}
                    phone={this.state.phone} />}
      </div>
    )
  }
}