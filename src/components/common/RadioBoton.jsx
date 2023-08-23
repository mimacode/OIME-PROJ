import '../../styles/radioButton.css';

export const RadioBoton = ({name, value,title}) => {
  return (
    <div>  
      <input 
          type="radio" 
          name={name}
          value={value}
      />
      <label>{title}</label>
    </div>
  );
};

