import React from 'react';
import axios from 'axios';
import FirstPage from './FirstPage.jsx';
import SecondPage from './SecondPage.jsx';
import Finished from './Finished.jsx';

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
      formSection: 'first',
      firstPageValid: false, 
    };
  }

  //Move on to second part of form
  nextPage = (firstName, lastName, password, email) => {
    this.setState({
      formSection: 'second',
      firstName: firstName,
      lastName: lastName,
      password: password,
      email: email,
      firstPageValid: true
    });
  }

  //Move from second part of form back to first
  previousPage = () => {
    this.setState({
      formSection: 'first'
    });
  }

  //Move to final page of form 
  finish = (interest, phone) => {
    this.setState({
      interest: interest,
      phone: phone,
      formSection: 'finished'
    })
    this.enterPerson();
  }

  //Enter person into database
  enterPerson () {
    const person = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      email: this.state.email,
      interest: this.state.interest,
      phone: this.state.phone
    }
    axios.post('http://localhost:3000/graphiql', person)
      .then((res) => {
        console.log(this.state.firstName, ' has been successfully added: ', res);
      })
  }

  render () {
    return (
      <div>
        {/* Conditionally render each part of the form */}
        {this.state.formSection === 'first' && 
          <FirstPage firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    password={this.state.password}
                    email={this.state.email} 
                    clickFunction={this.nextPage}
                    valid={this.state.firstPageValid} />}
        {this.state.formSection === 'second' && 
          <SecondPage interest={this.state.interest}
                      phone={this.state.phone}
                      clickFunction={this.finish}
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