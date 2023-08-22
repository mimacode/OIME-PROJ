import '../../styles/ViewsEstilos.css'
import { CheckBox } from '../common/CheckBox';
import IconApartment from '../../assets/apartment-svgrepo-com.svg'
import IconHouse from '../../assets/house-chimney-blank-svgrepo-com.svg'
import IconBodega from '../../assets/bodega-svgrepo-com.svg'
import ModifiedIconApartment from '../../assets/ModifiedIconApartment.svg'
import ModifiedIconHouse from '../../assets/ModifiedIconHouse.svg'
import ModifiedIconBodega from '../../assets/ModifiedIconBodega.svg'
import {Buttons} from '../common/Buttons'
import { SelectComponent } from '../common/SelectComponent';
import { comunas, barrios, Year } from '../../data/inputSelects'; 
import { InputAreas } from '../common/InputAreas';


export function OfertaInmobiliaria() {
  return (
     <section className='ContainerGlobal'>
        <div className="containerOfferType">
            <CheckBox name='Venta'></CheckBox>
            <CheckBox name='Arriendo'></CheckBox>
        </div>
        <div className="containerSector">
            <div className='selector'>
                <label><b>Comunas</b></label>
               <SelectComponent options={comunas}></SelectComponent>
            </div>
            <div className='selector'>
                <label><b>Barrios</b></label>
                <SelectComponent options={barrios}></SelectComponent>
            </div>
        </div>
        <div className="containerPredio">
            <label><b>Tipo de predio</b></label>
            <div className='containerCheckBoxPredio'>
                <CheckBox name='Aparta' icon={IconApartment} checkedIcon={ModifiedIconApartment}></CheckBox> 
                <CheckBox name='Casa' icon={IconHouse} checkedIcon={ModifiedIconHouse}></CheckBox>
                <CheckBox name='Bodega' icon={IconBodega} checkedIcon={ModifiedIconBodega}></CheckBox>
            </div>
        </div>
        <div className="cointainerYear">
            <label><b>Año</b></label>
            <SelectComponent options={Year}></SelectComponent>
        </div>
        <div className="ContainerAreas">
            <label><b>Áreas</b></label>
            <div>
                <InputAreas placeholder= 'Mínimo'/>
                <InputAreas placeholder= 'Máximo'/>
            </div>
        </div>
        <Buttons></Buttons>
    </section> 
  )
}

 