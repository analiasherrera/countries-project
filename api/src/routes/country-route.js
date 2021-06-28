const { Router }= require('express');
const router = Router();


const { getCountryByname,getCountry,getCountriesById } = require('../controllers/country.controllers');

//routes
router.get('/', getCountryByname);
router.get('/', getCountry);
router.get('/:id', getCountriesById);




module.exports = router;