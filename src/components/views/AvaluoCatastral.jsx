import { CheckBox } from '../common/CheckBox'
import { Buttons } from '../common/Buttons'
import '../../styles/ViewsEstilos.css'

export  function AvaluoCatastral() {
  return (
    <section className='ContainerGlobal'>
        <div className='containerOfferType'>
            <CheckBox name='Actual'/>
            <CheckBox name='Histórico'/>
        </div>  
        <div className='ContainerButtons'>
            <Buttons/>
        </div>
    </section>
  )
}
