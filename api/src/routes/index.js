const { Router } = require('express');
const countryRoute = require('./country-route');
const activityRoute = require('./activity-route');

const router = Router();

router.use('/countries', countryRoute);
router.use('/activities', activityRoute);

module.exports = router;
