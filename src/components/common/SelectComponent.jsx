import PropTypes from "prop-types";
import  Select from 'react-select';

export function SelectComponent({options, name, onChange}) {
  return (
      <Select options={options} name = {name} placeholder="Seleccionar..." isClearable={true} onChange={(e) => onChange(e,name)}/>
  )
}

SelectComponent.propTypes = {
    name: PropTypes.string,
    options : PropTypes.array.isRequired,
    onChange : PropTypes.func,
}
