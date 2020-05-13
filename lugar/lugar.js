const axios = require('axios');



// Funcion
const getLugarLatLng = async(dir) => {

    // Vamos a codificar la direccion para el caso de espacios vacios a la direccion
    const encodedUlr = encodeURI(dir);
    // console.log(encodedUlr);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
        // timeout: 1000,
        headers: { 'x-rapidapi-key': '0fd6fccbdfmsh2139ef1a4bd8bdbp17e7aajsn8faa3215d516' }
    });

    const resp = await instance.get();

    if (resp.data.Results.lenght === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;



    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}