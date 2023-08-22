import PropTypes from "prop-types";
import '../../styles/CheckBox.css'
import { useState } from 'react'

export function CheckBox({ name, icon, checkedIcon }) { // Agrega el prop checkedIcon

  const [checked, setChecked] = useState(false);

  const handleCheckChange = () => {
    setChecked(!checked);
  }
  return (
    <div className={`ContainerCheck ${checked ? 'checked' : ''}`}>
      <input
        type='checkbox'
        checked={checked}
        onChange={handleCheckChange}
      />
      {icon ? (
        <img
          src={checked ? checkedIcon : icon} // Cambia el ícono basado en el estado del checkbox
          alt=''
          className={`HasIcon ${checked ? 'checked-icon' : ''}`}
        />
      ) : null}
      <p className={checked ? 'checked-text' : ''}>{name}</p> {/* Agrega la clase de texto */}
    </div>
  );
}

CheckBox.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
    checkedIcon: PropTypes.string.isRequired, // Agrega la prop checkedIcon
}

