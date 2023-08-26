import { encode64 } from '../encode64';

export async function cargaDataLocalidad(filtroLocalidadStatus) {
  try {
    const api = 'http://127.0.0.1:3333/api-OIME/ComunaBarrio';
    const encode = encode64(JSON.stringify(filtroLocalidadStatus));
    const apiURL = api + '?filters=' + encode;
    const response = await fetch(apiURL);
    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      console.error("Error al realizar la solicitud a la API");
    } 
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}
