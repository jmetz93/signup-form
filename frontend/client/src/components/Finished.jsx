import React from 'react';
import styled from 'styled-components';
import Title from '../styled-components/Title.jsx';
import Wrapper from '../styled-components/Wrapper.jsx';

const ListStyle = {
  listStyle: "disc",
  fontWeight: "bold" 
}

const Finished = (props) => {
  return (
    <div>
      <Title>Congratulations {props.firstName}!</Title>
      <h3>You have been added to the community!</h3>
      <Wrapper>
        <ul style={ListStyle}>
          <li>First Name: {props.firstName}</li>
          <li>Last Name: {props.lastName}</li>
          <li>Email: {props.email}</li>
          <li>Interest: {props.interest}</li>
          <li>Phone Number: {props.phone}</li>
        </ul>
      </Wrapper>
    </div>
  )
}

export default Finished;