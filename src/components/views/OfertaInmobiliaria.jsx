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
import { useEffect, useState } from 'react';


export function OfertaInmobiliaria() {
    const initialStateFiltros = {tipo_oferta: [], comuna: "-1", barrios: null, tipo_predio:[] , year: null, area_minima:'', area_maxima:''} /* declaracion del jason donde se guardaran los valores de acuerdo al onchange */
    const[filtros, setFiltros] = useState(initialStateFiltros) 
    const [showHola, setShowHola] = useState(false); // Estado para controlar la visibilidad de <h1>

const handleChange= (e) => {
/*     debugger; */
    setFiltros({...filtros, [e.target.name]: e.target.value})
}

const handleChangeSelect= (e,name) => {
/*     debugger; */
    let value = e ? e.value : null;
    setFiltros({...filtros, [name]: value})
}

useEffect(() => {
    console.log(filtros);
}, [filtros]) 


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

const onHandleClickButton = () => {
    console.log('holaa');
    setShowHola(true);
  };
  

  return (
     <section className='ContainerGlobal'>
        <div className="containerOfferType">
            <CheckBox name ='tipo_oferta' title='Venta' value={1} checked={filtros.tipo_oferta.includes("1")} onChange={handleChangeCheck}></CheckBox>
            <CheckBox name="tipo_oferta" title='Arriendo' value={2} checked={filtros.tipo_oferta.includes("2")} onChange={handleChangeCheck}></CheckBox>
        </div>
        <div className="containerSector">
            <div className='selector'>
                <label>Comuna</label>
               <SelectComponent name='comuna' options={comunas} value={filtros.comuna} onChange={handleChangeSelect} ></SelectComponent>
            </div>
            <div className='selector'>
                <label>Barrio</label>
                <SelectComponent name='barrios' options={barrios} value={filtros.barrios} onChange={handleChangeSelect}></SelectComponent>
            </div>
        </div>
        <div className="containerPredio">
            <label>Tipo de predio</label>
            <div className='containerCheckBoxPredio'>
                <CheckBox name='tipo_predio' title= 'Apartamento' value={1} checked={filtros.tipo_predio.includes("1")} onChange={handleChangeCheck} icon={IconApartment} checkedIcon={ModifiedIconApartment}></CheckBox> 
                <CheckBox name='tipo_predio' title= 'Casa' value={2} checked={filtros.tipo_predio.includes("2")} onChange={handleChangeCheck} icon={IconHouse} checkedIcon={ModifiedIconHouse}></CheckBox>
                <CheckBox name='tipo_predio' title= 'Bodega' value={3} checked={filtros.tipo_predio.includes("3")} onChange={handleChangeCheck} icon={IconBodega} checkedIcon={ModifiedIconBodega}></CheckBox>
            </div>
        </div>
        <div className="cointainerYear">
            <label>Año</label>
            <SelectComponent name='year' options={Year} value={filtros.year} onChange={handleChangeSelect}></SelectComponent>
        </div>
        <div className="ContainerAreas">
            <label>Áreas</label>
            <div>
                <InputAreas name="area_minima" value={filtros.area_minima} onChange={handleChange} placeholder= 'Mínimo' required={true}/>
                <InputAreas name="area_maxima" value={filtros.area_maxima} onChange={handleChange} placeholder= 'Máximo' required={true}/>
            </div>
        </div>
        <div className='contendeorBotones'>
            <Buttons clase = 'clear' title = 'Limpiar campos' onClick={onHandleClickButton}></Buttons>
            <Buttons clase = 'consult' title = 'Consultar' onClick={onHandleClickButton}></Buttons>
        </div>

        {showHola &&  //Mostrar <h1> si showHola es true
        <div className='ContainerResultados'>
            <div className='encabezado'>
                <h3>Rsultados de su consulta</h3>
                <div><span></span> <p>Descargar informe</p></div>
            </div>
            <div className='description'>
                <p>Numero de ofertas en general:</p>
                <div className='tipoOferta'>
                    <p>Venta:</p>
                    <span></span>
                </div>
                <div className='tipoOferta'>
                    <p>Arriendo:</p>
                    <span></span>
                </div>
           <div>
            
           </div>    
            </div>
            <h1>Hola</h1>
        </div>
        } 
    </section> 
  )
}

 