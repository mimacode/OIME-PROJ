import { useState } from 'react';
import '../../styles/ViewsEstilos.css';
import { RadioBoton } from '../common/RadioBoton';
import { SelectComponent } from '../common/SelectComponent';
import { Buttons } from '../common/Buttons';

export const InformacionCatastral = () => {
  const initialStateFiltros = {
    year: false,
    mapa: false,
    matricula: false,
    CBML: false,
    direccion: false
  };

  const [filtros, setFiltros] = useState(initialStateFiltros);
  const [showHola, setShowHola] = useState(false);

  const handleChangeCheck = (event) => {
    const { name } = event.target;

    // Crear un nuevo objeto de filtros con solo un valor true y los demás false
    const newFiltros = {
      year: false,
      mapa: false,
      matricula: false,
      CBML: false,
      direccion: false,
      ubicacion: false,
      mapaAeronautica: false,
      ubicacionOrtofoto: false,
      [name]: true,
    };
    console.log(`Opción seleccionada: ${name}`);
    setFiltros(newFiltros);
    setShowHola(true);
  };
  
  return (
    <section className='ContainerGlobalInfo'>
        {/* ... */}
        <div className='ContainerRadios'>
          <RadioBoton name="year" value={1} checked={filtros.year} onChange={handleChangeCheck} title='Año'/>
          <RadioBoton name="mapa" value={2} checked={filtros.mapa} onChange={handleChangeCheck} title='Mapa'/>
          <RadioBoton name="matricula" value={3} checked={filtros.matricula} onChange={handleChangeCheck} title='Matrícula'/>
          <RadioBoton name="CBML" value={4} checked={filtros.CBML} onChange={handleChangeCheck} title='CBML'/>
          <RadioBoton name="direccion" value={5} checked={filtros.direccion} onChange={handleChangeCheck} title='Dirección'/>
        </div>
        
        {showHola && (
          <div className='containerRadios'>
            {filtros.year && 
            <div className='selectAnio'>
              <SelectComponent></SelectComponent>
            </div>
            }

            {filtros.mapa &&
            <div className='mapaRB'> 
              <RadioBoton name="mapa" value={1} checked={filtros.mapa} onChange={handleChangeCheck} title='Ubicación'/>
              <RadioBoton name="mapa" value={2} checked={filtros.mapa} onChange={handleChangeCheck} title='Mapa de Aeronáutica'/>
              <RadioBoton name="mapa" value={3} checked={filtros.mapa} onChange={handleChangeCheck} title='Ubicación con ortofoto'/>
            </div>
            }

            {filtros.matricula && 
            <>
              <input type='text' placeholder='Matrícula' className='Container' />
            </>
            }

            {filtros.CBML && 
            <>
              <input type='text' placeholder='CBML' className='Container' />
            </>
            }

            {filtros.direccion && 
            <>
              <input type='text' placeholder='direccion' className='Container' />
            </>
            }

            <div className='contendeorBotones'>
              <Buttons clase = 'clear' title = 'Limpiar campos'></Buttons>
              <Buttons clase = 'consult' title = 'Consultar'></Buttons>
            </div>
          </div>
          
        )}
    </section> 
  )
}
