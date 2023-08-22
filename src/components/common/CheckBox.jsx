import PropTypes from "prop-types";
import '../../styles/CheckBox.css'

export function CheckBox({ title, name, icon, checkedIcon, value, checked ,onChange}) { // Agrega el prop checkedIcon
 
  return (
    <div className={`ContainerCheck ${checked ? 'checked' : ''}`}>
      <input
        name={name}
        type='checkbox'
        checked={checked}
        value={value}
        onChange={onChange}
        className="custom"
      />
      {icon ? (
        <img
          src={checked ? checkedIcon : icon} // Cambia el ícono basado en el estado del checkbox
          alt=''
          className={`HasIcon  ${checked ? 'checked-icon' : ''}`}
        />
      ) : null}
      <p className={checked ? 'checked-text' : ''}>{title}</p> {/* Agrega la clase de texto */}
    </div>
  );
}

CheckBox.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
    checkedIcon: PropTypes.string, // Agrega la prop checkedIcon
    value: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
}

