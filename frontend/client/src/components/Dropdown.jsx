import React from 'react';
import styled from 'styled-components';
import Label from '../styled-components/Label.jsx'

const DropDownStyle = styled.select`
  width: 70%;
  font-size: 14px;
  font-family: "Oswald", sans-serif;
  line-height: 21px;
  margin: 10px 0;
  margin-left: 10px;
`

const Dropdown = ({name, label, onChange}) => {
  return (
    <div>
      <Label htmlFor={name}>
        {label}
      </Label>
      <DropDownStyle
        name={name} 
        onChange={onChange}
      >
        <option>Happy</option>
        <option>Sad</option>
        <option>Chill</option>
      </DropDownStyle>
    </div>
  )
}

export default Dropdown;