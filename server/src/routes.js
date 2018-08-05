const express = require('express');
const dolevRoutes = require('./dolev/dolev.route');


const router = express.Router();

router.use('dolev', dolevRoutes);

module.exports = router;
