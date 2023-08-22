import '../../styles/ViewsEstilos.css';
import { CheckBox } from '../common/CheckBox'
import { SelectComponent } from '../common/SelectComponent';
import { Buttons } from '../common/Buttons';
import { Year } from '../../data/inputSelects'

export  function ZonaGeoconomica() {
  return (
    <section className='ContainerGlobal'>
        <div className='containerOfferType'>
          <CheckBox name='Actual'></CheckBox>
          <CheckBox name='Historico'></CheckBox>
        </div>
        
        <div className='cointainerYear'>
          <label>
              <b>Año</b>
          </label>
        <SelectComponent options={Year}></SelectComponent>
        </div>
        <div className="containerButtons">
          <Buttons></Buttons>
        </div>

  </section>
  )
}