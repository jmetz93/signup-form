import React from 'react';
import styled from 'styled-components';
import Input from '../styled-components/Input.jsx';

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin: 10px 0;
  margin-left: 10px;
`;

const FormInput = ({ name, label, type, placeholder, value, handleChange }) => {
  return (
    <div>
      <Label htmlFor={name}>
          {label}
      </Label>
      <Input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        >
      </Input>
      
    </div>
  )
}

export default FormInput;
