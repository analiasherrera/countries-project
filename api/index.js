//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios');
const {Country} = require('./src/db');
const { listen } = require('./src/app.js');


// Syncing all the models at once.
conn.sync({ force: true }).then( async () => {

  const countries = await Country.findAndCountAll();
  if( !countries.count) {
    let cont= 0;
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(result => {
      //recorro el array que me devuelve la BD y lo ingreso a mi BD countries

      result.data.map( country =>{
        cont++;
        Country.create({
          "id": country.alpha3Code,
          "name": country.name,
          "Imagen": country.flag,
          "continente": country.region,
          "capital": country.capital,
          "subregion": country.subregion,
          "area": country.area,
          "poblacion": country.population
        })
      })
    })
    .then(() =>{
      console.log(`Son ${cont} paises en total`)
      listen();
    })
    .catch(err => console.log('No se pudo importar los paises', err))
  } else {
    console.log(`${countries.count} paises existentes en la BD`)
  }  
 await server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
