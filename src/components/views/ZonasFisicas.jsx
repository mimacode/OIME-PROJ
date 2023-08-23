import {CheckBox} from '../common/CheckBox'
import { Buttons } from '../common/Buttons'
import '../../styles/ViewsEstilos.css'
import { useEffect, useState } from 'react'

export function ZonasFisicas() {

  const initialStateFiltros = {tipo_ofertafisica: [], zonas: [] } /* declaracion del jason donde se guardaran los valores de acuerdo al onchange */
  const[filtros, setFiltros] = useState(initialStateFiltros) 


  const handleChangeCheck= (e) => {
    let checkvalues = filtros[e.target.name]  //e obtiene el arreglo actual de valores seleccionados del estado filtros utilizando el nombre del checkbox como clave
    console.log(e.target.name, checkvalues);
    if(checkvalues.includes(e.target.value)){ //verifica si el checkbox está marcado
        checkvalues = checkvalues.filter(value => value !== e.target.value) 
        /* quí, el método filter se utiliza para crear un nuevo arreglo que excluye el valor que deseas remover (el valor del checkbox que se desmarca). value => value !== e.target.value es una función de filtro que excluye cualquier elemento que sea igual al valor del checkbox.Entonces, cuando el checkbox está marcado y se ejecuta este bloque, se está removiendo el valor del arreglo checkvalues. En esencia, esto significa que se está desmarcando la opción que ya estaba seleccionada. */
    }else{
        checkvalues.push(e.target.value)
    }
    setFiltros({...filtros, [e.target.name]: checkvalues})  //se agrega los valores de los filtros a setFiltros
}

  useEffect(() => {
    console.log(filtros);
}, [filtros]) 


  return (
    <section className='ContainerGlobal'>
        <div className='containerOfferType'>
          <CheckBox title='Actual' value={1} name='tipo_ofertafisica' checked={filtros.tipo_ofertafisica.includes('1')} onChange={handleChangeCheck} ></CheckBox>
          <CheckBox title='Histórico' value={2} name='tipo_ofertafisica' checked={filtros.tipo_ofertafisica.includes('2')} onChange={handleChangeCheck}></CheckBox>
        </div>
        
        <div className='Zones'>
            <CheckBox title='Zonas Homogéneas Urbanas' value={1} name='zonas' checked={filtros.zonas.includes('1')} onChange={handleChangeCheck} ></CheckBox>
            <CheckBox title='Zonas Homogéneas rurales' value={2} name='zonas' checked={filtros.zonas.includes('2')} onChange={handleChangeCheck} ></CheckBox>
        </div>
        <div className='ContainerButtons'>
            <Buttons/>
        </div>
  </section>
  )
}
