/* import PropTypes from "prop-types"; */
import '../../styles/InputAreas.css'
import '../../styles/InputAreas.css';
import { useState } from 'react';

export const InputAreas = ({ placeholder, required, value, onChange, name }) => {
  const [valor, setValor] = useState(false);

  const onInputFocus = () => {
    setValor(true);
  };

  const onInputBlur = () => {
    setValor(false);
  };

  return (
    <div className={`Container ${valor ? 'active' : ''}`}>
      <input 
        type="number" 
        placeholder={placeholder}
        required={required ? 'required' : ''}
        value={value}
        name={name}
        onChange={onChange}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
      />
      <span><b>m<sup>2</sup></b></span>
    </div>
  );
};


/* InputAreas.propTypes = {
  value: PropTypes.number,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string
}
 */