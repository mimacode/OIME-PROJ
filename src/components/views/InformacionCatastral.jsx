import '../../styles/ViewsEstilos.css';
import { RadioBoton } from '../common/RadioBoton'

export const InformacionCatastral = () => {
  return (
    <section className='ContainerGlobalInfo'>
        <div className="containerInformacion">
            <h5>Consulta POT acuerdo 048</h5>
            <p>
            La información suministrada por este aplicativo es orientada y NO oficial. Los aspectos normativos generales del POT aplicables al predio de su interés deben consultarse en cualquiera de las Curadurias de la ciudad. NO utilizar esta información para tomar decisiones alrededor del mismo.
            </p>
        </div>
        <div className='ContainerRadios'>
          <RadioBoton name="Si" value="No" title='Año'/>
          <RadioBoton name="Si" value="No" title='Mapa'/>
          <RadioBoton name="Si" value="No" title='Matricula'/>
          <RadioBoton name="Si" value="No" title='CBML'/>
        </div>
  
    </section> 
  )
}
