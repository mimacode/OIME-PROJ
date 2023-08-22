import {CheckBox} from '../common/CheckBox'
import { Buttons } from '../common/Buttons'
import '../../styles/ViewsEstilos.css'

export function ZonasFisicas() {
  return (
    <section className='ContainerGlobal'>
        <div className='containerOfferType'>
          <CheckBox name='Actual'></CheckBox>
          <CheckBox name='Historico'></CheckBox>
        </div>
        
        <div className='Zones'>
            <CheckBox name='Zonas Homogéneas Urbanas'/>
            <CheckBox name='Zonas Homogéneas rurales'/>
        </div>
        <div className='ContainerButtons'>
            <Buttons/>
        </div>
  </section>
  )
}
