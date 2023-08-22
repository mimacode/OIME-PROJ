import {CheckBox} from '../common/CheckBox'
import { Buttons } from '../common/Buttons'
import '../../styles/ViewsEstilos.css'

export function ZonasFisicas() {
  return (
    <section className='ContainerGlobal'>
        <div className='containerOfferType'>
          <CheckBox title='Actual'></CheckBox>
          <CheckBox title='Historico'></CheckBox>
        </div>
        
        <div className='Zones'>
            <CheckBox title='Zonas Homogéneas Urbanas'/>
            <CheckBox title='Zonas Homogéneas rurales'/>
        </div>
        <div className='ContainerButtons'>
            <Buttons/>
        </div>
  </section>
  )
}
