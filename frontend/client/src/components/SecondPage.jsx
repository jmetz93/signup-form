import React from 'react';

export default class SecondPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      interest: 'happy',
      phone: '',
    }
  }

  render () {
    return (
      <div>Hi</div>
    )
  }
}