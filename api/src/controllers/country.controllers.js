const {Country, Activity} = require('../db');


const getCountryByname = async (req,res) => {
    const nombre= req.query.name;
    if(nombre) {
        const countryname= await Country.findOne({
            where: {
                name: nombre
            }       
        });
        if(!countryname){
            res.status(404).json('No se encontro el pais')
        } else {
         res.json(countryname)
        }   
     } else {
        const countries= await Country.findAll({limit: 10});
    
        res.status(200).json(countries);

     }

    } 

////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getCountriesById = async (req,res) => {
    
    const countryId = await Country.findByPk(req.params.id, {
        include: Activity
    });
    res.json(countryId)
}


module.exports = {
    getCountryByname,    
    getCountriesById }