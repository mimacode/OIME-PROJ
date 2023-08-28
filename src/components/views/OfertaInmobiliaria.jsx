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
import {Year } from '../../data/inputSelects'; 
import { InputAreas } from '../common/InputAreas';
import { useEffect, useState } from 'react';
import file from '../../assets/file.svg';
import { fetchData } from '../../services/fetchData';
import { cargaDataLocalidad } from '../../services/cargaDataLocalidad';

export function OfertaInmobiliaria() {
    const initialStateFiltros = {tipoOferta: [], comuna: null, barrios: null, tipoPredio:[] , year: null, areaMinima:'', areaMaxima:''} /* declaracion del jason donde se guardaran los valores de acuerdo al onchange */
    const[filtros, setFiltros] = useState(initialStateFiltros) 
    const [showDesplegable, setShowDesplegable] = useState(false); // Estado para controlar la visibilidad de <h1>
    const [dataResult, setDataResult] = useState({meta: {}, data: []}); 
    const [dataCount, setDataCount] = useState({arriendos:0 , ventas:0}); 
    const [combosLocalidad, setCombosLocalidad] = useState([])
    const [barrios, setBarrios] = useState([])
    const [comunas, setComunas] = useState([])
    const[keyBarrio, setKeyBarrio] = useState(0)

    const handleChangeCheck= (e) => { //Evento para controlar el checkbox de tipo de oferta y tipo de predio
        let checkvalues = filtros[e.target.name]  //e obtiene el arreglo actual de valores seleccionados del estado filtros utilizando el nombre del checkbox como clave
        if(checkvalues.includes(e.target.value)){ //verifica si el checkbox está marcado
            checkvalues = checkvalues.filter(value => value !== e.target.value) 
            /* quí, el método filter se utiliza para crear un nuevo aregrlo que excluye el valor que deseas remover (el valor del checkbox que se desmarca). value => value !== e.target.value es una función de filtro que excluye cualquier elemento que sea igual al valor del checkbox.Entonces, cuando el checkbox está marcado y se ejecuta este bloque, se está removiendo el valor del arreglo checkvalues. En esencia, esto significa que se está desmarcando la opción que ya estaba seleccionada. */
        }else{
            checkvalues.push(e.target.value)
        }
        setFiltros({...filtros, [e.target.name]: checkvalues})  //se agrega los valores de los filtros a setFiltros
    }
    
    const handleChangeSelect= (e,name) => { //Evento para controlar el select de comuna, barrio, anio
        let value = e ? e.value : null;
        setFiltros({...filtros, [name]: value})
    }
    
    const handleChange= (e) => { //Evento para controlar el input de areas
        setFiltros({...filtros, [e.target.name]: e.target.value})
    }

    const onHandleClickButton = async() => { //Evento para controlar la vista desplegable de los resultados despues de dar click y llamar el fetch para consultar los datos
        let result = await fetchData(filtros);
        setDataResult(result.dataResult);
        setDataCount(result.dataCount)
        if(result){
            setShowDesplegable(true);
        }
    };

    useEffect(() => {    //Muestra los filtros solo una vez que cargue el componente, si vuelve a cargar no se vuelve a ejecutar.
        console.log(filtros);
    }, [filtros]) 
    
    useEffect(() => { //Para cargar los datos de las comunas y los barrios en el formulario, una vez que se renderiza el componente.
        if (filtros.comuna){
            let dataBarrios = combosLocalidad.filter(item => item.field === "barrio" && item.comuna === filtros.comuna)
            setBarrios([...dataBarrios]);
        }else{
            let dataBarrios = combosLocalidad.filter(item => item.field === "barrio")
            setBarrios([...dataBarrios]);
        }
        setFiltros({...filtros, ["barrios"]: null})
        setKeyBarrio(keyBarrio+1)
    }, [filtros.comuna])
    
    useEffect(() => {
        selectOptionsDataFetch();
    }, [])

    /* LLAMADO A LA BD para cargar las comunas y los barrios */

    const selectOptionsDataFetch = async() => {
        const filtroLocalidadStatus = {'comuna': Boolean(filtros.comuna), 'barrios': Boolean(filtros.barrios)}; 
        const resultDataLocalidad = await cargaDataLocalidad(filtroLocalidadStatus);
        setCombosLocalidad(resultDataLocalidad); 
        let dataBarrios = resultDataLocalidad.filter(item => item.field ==="barrio")
        setBarrios(dataBarrios);
        let dataComuna = resultDataLocalidad.filter(item => item.field ==="comuna")
        setComunas(dataComuna);
    } 
    

    return (
        <section className='ContainerGlobal'>
        <div className="containerOfferType">
            <CheckBox 
                name ='tipoOferta' 
                title='Venta' 
                value='SELL' 
                checked={filtros.tipoOferta.includes("SELL")} 
                onChange={handleChangeCheck}/>
            
            <CheckBox 
                name="tipoOferta" 
                title='Arriendo' 
                value='RENT' 
                checked={filtros.tipoOferta.includes("RENT")} 
                onChange={handleChangeCheck}/>
        </div>
        <div className="containerSector">
            <div className='selector'>
                <label>Comuna</label>
               <SelectComponent 
                    name='comuna' 
                    options={comunas} 
                    value={filtros.comuna} 
                    onChange={handleChangeSelect} />
            </div>
            <div className='selector'>
                <label>Barrio</label>
                <SelectComponent 
                    name='barrios' 
                    options={barrios} 
                    value={filtros.barrios} 
                    key={"comboBarrio"+keyBarrio} 
                    onChange={handleChangeSelect} />
            </div>
        </div>
        <div className="containerPredio">
            <label>Tipo de predio</label>
            <div className='containerCheckBoxPredio'>
                <CheckBox 
                name='tipoPredio' 
                title= 'Apartamento' 
                value='APPARTMENT' 
                checked={filtros.tipoPredio.includes("APPARTMENT")} 
                onChange={handleChangeCheck} 
                icon={IconApartment} 
                checkedIcon={ModifiedIconApartment}></CheckBox> 
                
                <CheckBox 
                    name='tipoPredio' 
                    title= 'Casa' 
                    value='HOUSE' 
                    checked={filtros.tipoPredio.includes("HOUSE")} 
                    onChange={handleChangeCheck} 
                    icon={IconHouse} checkedIcon={ModifiedIconHouse}/>
                <CheckBox 
                    name='tipoPredio' 
                    title= 'Bodega' 
                    value='WAREHOUSE' 
                    checked={filtros.tipoPredio.includes("WAREHOUSE")} 
                    onChange={handleChangeCheck} 
                    icon={IconBodega} 
                    checkedIcon={ModifiedIconBodega} />
            </div>
        </div>
        <div className="cointainerYear">
            <label>Año</label>
            <SelectComponent 
                name='year' 
                options={Year} 
                value={filtros.year} 
                onChange={handleChangeSelect}/>
        </div>
        <div className="ContainerAreas">
            <label>Áreas</label>
            <div>
                <InputAreas 
                    name="areaMinima" 
                    value={filtros.areaMinima} 
                    onChange={handleChange} 
                    placeholder= 'Mínimo' 
                    required={true}/>
                <InputAreas 
                    name="areaMaxima" 
                    value={filtros.areaMaxima} 
                    onChange={handleChange} 
                    placeholder= 'Máximo' 
                    required={true}/>
            </div>
        </div>
        <div className='contendeorBotones'>
            <Buttons 
                clase = 'clear' 
                title = 'Limpiar campos' 
                onClick={onHandleClickButton} />
            <Buttons 
                clase = 'consult' 
                title = 'Consultar' 
                onClick={onHandleClickButton} />
        </div>

        {showDesplegable &&  //Mostrar <h1> si showDesplegable es true
        <div className='ContainerResultados'>
            <div className='encabezado'>
                <h3>Resultados de su consulta</h3>
                <div>
                    <img src={file} id='file' alt='Informe'></img>
                    <a 
                        href='https://www.google.com' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        id='enlace'>Descargar informe</a>
                </div>
            </div>
            <div className='ContainerScroll'>
                <div className='description'>
                    <p>Número de ofertas en general:</p>
                    <div className='tipoOferta'>
                        <p>Venta:</p>
                        <span>155</span> {/* sujeto a calculos */}
                    </div>
                    <div className='tipoOferta'>
                        <p>Arriendo:</p>
                        <span>260</span> {/* sujeto a calculos */}
                    </div>
                </div>
                <div className='containerTable FirstTable'>
                    <table>
                        <thead>
                            <tr>
                                <th>Tipo de inmueble</th>
                                <th>Promedio venta m<sup>2</sup></th>
                                <th>Promedio arriendo m<sup>2</sup></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Apartamento</td>
                                <td>2300</td>
                                <td>104</td>
                            </tr>
                            <tr>
                                <td>Casa</td>
                                <td>2035</td>
                                <td>54654</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='descriptionTwo'>
                    <p>Otro ítem con información de valor</p>
                </div>
                <div className='containerTable'>
                    <table>
                        <thead>
                            <tr>
                                <th>Tipo de inmueble</th>
                                <th>Promedio venta m<sup>2</sup></th>
                                <th>Promedio arriendo m<sup>2</sup></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Apartamento</td>
                                <td>2300</td>
                                <td>104</td>
                            </tr>
                            <tr>
                                <td>Casa</td>
                                <td>2035</td>
                                <td>54654</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {JSON.stringify(dataResult)}
        </div>
        } 
    </section> 
  )
}

 