import React from 'react';
import FirstPage from './FirstPage.jsx';
import SecondPage from './SecondPage.jsx';
import Finished from './Finished.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPerson: {
        firstName: '',
        lastName: '',
        password: '',
        email: '',
        interest: 'happy',
        phone: ''
      },
      formSection: 'first' 
    };

    this.next = this.nextPage.bind(this, 'newPerson');
    this.finish = this.enterPerson.bind(this, 'newPerson');
  }

  nextPage () {}

  enterPerson () {}

  render () {
    return (
      <div>
        {this.state.formSection === 'first' && <FirstPage person={this.state.newPerson} clickFunction={this.nextPage} />}
        {this.state.formSection === 'second' && <SecondPage person={this.state.newPerson} clickFuntion={this.finish} />}
        {this.state.formSection === 'finished' && <Finished person={this.state.newPerson} />}
      </div>
    )
  }
}