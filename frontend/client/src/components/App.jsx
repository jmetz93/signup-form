import React from 'react';
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
      formSection: 'first' 
    };

    this.next = this.nextPage.bind(this, 'newPerson');
    this.finish = this.enterPerson.bind(this, 'newPerson');
  }

  nextPage (event, firstName, lastName, password, email) {
    event.preventDefault();
    if (password.length >= 8) {
      this.setState({
        formSection: 'second',
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email
      });
      console.log('firstname: ',this.state.firstName)
    } 
  }

  previousPage () {
    this.setState({
      formSection: 'first'
    });
  }

  enterPerson () {}

  render () {
    return (
      <div>
        {this.state.formSection === 'first' && 
          <FirstPage firstName={this.state.firstName}
                      lastName={this.state.lastName}
                      password={this.state.password}
                      email={this.state.email} 
                      clickFunction={this.next} />}
        {this.state.formSection === 'second' && 
          <SecondPage person={this.state.newPerson} 
                      interest={this.state.interest}
                      phone={this.state.phone}
                      clickFuntion={this.finish} />}
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