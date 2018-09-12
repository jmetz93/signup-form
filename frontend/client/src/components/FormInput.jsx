import React from 'react';
import styled from 'styled-components';
import Input from '../styled-components/Input.jsx';
import Label from '../styled-components/Label.jsx';

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
