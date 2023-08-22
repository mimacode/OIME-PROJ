import PropTypes from "prop-types";
import '../../styles/InputAreas.css'
import { useState } from 'react';

export const InputAreas = ({ placeholder }) => {
  const [value, setValue] = useState('');

  const onInputChange = (event) => {
    const newValue = event.target.value;
    if (newValue === '' || newValue > 0) {
      setValue(newValue);
    }
  }

  return (
    <div className="Container">
      <input 
        type="number" 
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
      />
      <span><b>m2</b></span>
    </div>
  )
}

InputAreas.propTypes = {
  placeholder: PropTypes.number,
}
