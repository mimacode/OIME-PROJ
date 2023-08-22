import '../../styles/GestionInformacion.css';
import Accordion from 'react-bootstrap/Accordion';
import { OfertaInmobiliaria } from './OfertaInmobiliaria';
import { ZonaGeoconomica } from './ZonaGeoeconomica'
import { ZonasFisicas } from './ZonasFisicas'
import { AvaluoCatastral } from './AvaluoCatastral'; 


export function GestionInformacion() {
  return (
    <section className='section-gestion-oime'>
      <p>Para realizar una consulta, <span>elige una de las opciones:</span></p>

      <Accordion defaultActiveKey=''>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Oferta inmobiliaria</Accordion.Header>
          <Accordion.Body>
            <OfertaInmobiliaria />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='1'>
          <Accordion.Header>Zonas geoconómicas catastrates</Accordion.Header>
          <Accordion.Body>
            <ZonaGeoconomica />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='2'>
          <Accordion.Header>Zonas geoconómicas POT</Accordion.Header>
          <Accordion.Body>
          <ZonaGeoconomica />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='3'>
          <Accordion.Header>Zonas físicas</Accordion.Header>
          <Accordion.Body>
            <ZonasFisicas/>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='4'>
          <Accordion.Header>Avalúo catastral</Accordion.Header>
          <Accordion.Body>
            <AvaluoCatastral/>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion> 
    
    </section> 
  );
}
