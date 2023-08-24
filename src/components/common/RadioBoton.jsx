import '../../styles/radioButton.css';

export const RadioBoton = ({name, value, checked, onChange, title}) => {
  return (
    <div>  
      <input 
          type="radio" 
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
      />
      <label>{title}</label>
    </div>
  );
};

