import React from 'react';

const Dropdown = ({name, label, interst1, interest2, interest3}) => {
  return (
    <div>
      <Label htmlFor={name}>
        {label}
      </Label>

    </div>
  )
}

export default Dropdown;