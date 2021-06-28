const { Router } = require('express');
const router = Router();

const {addActivity} = require('../controllers/activity.controllers');

//api/activity

router.post('/', addActivity);




module.exports = router