import PropTypes from "prop-types";
import  Select from 'react-select';

export function SelectComponent({options}) {
  return (
      <Select options={options} placeholder="Seleccionar..."/>
  )
}

SelectComponent.propTypes = {
    options : PropTypes.array.isRequired,
}
