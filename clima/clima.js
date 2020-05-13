const axios = require('axios');




const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=2e0857c6a13551f4237dcb2f30759837&units=metric`);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}