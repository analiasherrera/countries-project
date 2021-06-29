const { Router }= require('express');
const router = Router();


const { getCountryByname,getCountriesById } = require('../controllers/country.controllers');

//routes

router.get('/', getCountryByname);
router.get('/:id', getCountriesById);


module.exports = router;