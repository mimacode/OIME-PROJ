import PropTypes from "prop-types";
import '../../styles/InputAreas.css'
import { useState } from 'react';

export const InputAreas = ({ placeholder, required, value, onChange , name}) => {
  const [valor, setValor] = useState(false); // Cambio aquí


  const onInputFocus = () => {
    setValor(true);
  }

  const onInputBlur = () => {
    setValor(false); // Cambio aquí
  }

  return (
    <div className={`Container ${valor ? 'active' : ''}`}>
      <input 
        type="number" 
        placeholder={placeholder}
        required={`${required} ? 'required' : ''}`}
        value={value}
        name={name}
        onChange={onChange}
        onFocus={onInputFocus} //Enfoque en el inpu
        onBlur={onInputBlur} // Enfoque en el inpu
      />
      <span><b>m2</b></span>
    </div>
  )
}

InputAreas.propTypes = {
  placeholder: PropTypes.string,
  required: PropTypes.bool,
}
