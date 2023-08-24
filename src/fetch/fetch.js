export async function fetchData(filtros) {
  try {
    let queryParams = "?";

    for (const key in filtros) {
      if (filtros[key] && !Array.isArray(filtros[key])) {
        queryParams = queryParams + key + "=" + filtros[key] + "&";
      }
    }

    const response = await fetch(
      "http://127.0.0.1:3333/api-OIME/ComercialOffer" + queryParams,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const responseData = await response.json();
      console.log("Respuesta de la API:", responseData);
    } else {
      console.error("Error al realizar la solicitud a la API");
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}
